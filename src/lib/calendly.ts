/**
 * Calendly API utilities with OAuth token refresh
 */

const CALENDLY_API_BASE = "https://api.calendly.com";
const CALENDLY_AUTH_URL = "https://auth.calendly.com/oauth/token";

// Token cache
let accessToken: string | null = null;
let tokenExpiresAt: number = 0;

/**
 * Refresh the Calendly access token using the refresh token
 */
async function refreshAccessToken(): Promise<string> {
  const clientId = process.env.CALENDLY_CLIENT_ID;
  const clientSecret = process.env.CALENDLY_CLIENT_SECRET;
  const refreshToken = process.env.CALENDLY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Calendly OAuth credentials not configured");
  }

  const response = await fetch(CALENDLY_AUTH_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to refresh Calendly token: ${error}`);
  }

  const data = await response.json();
  const token: string = data.access_token;
  accessToken = token;
  // Set expiry with 1 minute buffer
  tokenExpiresAt = Date.now() + data.expires_in * 1000 - 60000;

  return token;
}

/**
 * Make an authenticated request to the Calendly API
 */
export async function calendlyFetch(
  endpoint: string,
  options?: RequestInit
): Promise<Response> {
  // Refresh token if expired or not set
  if (!accessToken || Date.now() >= tokenExpiresAt) {
    await refreshAccessToken();
  }

  return fetch(`${CALENDLY_API_BASE}${endpoint}`, {
    ...options,
    headers: {
      ...options?.headers,
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });
}

/**
 * Get the current user's organization URI
 */
export async function getCurrentUser(): Promise<{ uri: string; organization: string }> {
  const response = await calendlyFetch("/users/me");

  if (!response.ok) {
    throw new Error(`Failed to get current user: ${response.status}`);
  }

  const data = await response.json();
  return {
    uri: data.resource.uri,
    organization: data.resource.current_organization,
  };
}

/**
 * Get event types for the organization
 */
export async function getEventTypes(organizationUri: string): Promise<{
  uri: string;
  name: string;
  slug: string;
}[]> {
  const params = new URLSearchParams({
    organization: organizationUri,
    active: "true",
  });

  const response = await calendlyFetch(`/event_types?${params}`);

  if (!response.ok) {
    throw new Error(`Failed to get event types: ${response.status}`);
  }

  const data = await response.json();
  return data.collection.map((et: { uri: string; name: string; slug: string }) => ({
    uri: et.uri,
    name: et.name,
    slug: et.slug,
  }));
}

/**
 * Get available time slots for an event type within the next 7 days
 */
export async function getAvailableSlots(eventTypeUri?: string): Promise<number> {
  try {
    // Get current user's organization if no event type specified
    const user = await getCurrentUser();

    // If no specific event type, get the first active one
    let targetEventTypeUri = eventTypeUri;
    if (!targetEventTypeUri) {
      const eventTypes = await getEventTypes(user.organization);
      if (eventTypes.length === 0) {
        return 0;
      }
      targetEventTypeUri = eventTypes[0].uri;
    }

    // Get available times for the next 7 days
    const startTime = new Date().toISOString();
    const endTime = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();

    const params = new URLSearchParams({
      event_type: targetEventTypeUri,
      start_time: startTime,
      end_time: endTime,
    });

    const response = await calendlyFetch(`/event_type_available_times?${params}`);

    if (!response.ok) {
      console.error(`Calendly availability API returned ${response.status}`);
      return 0;
    }

    const data = await response.json();
    return data.collection?.length || 0;
  } catch (error) {
    console.error("Error fetching Calendly availability:", error);
    return 0;
  }
}

/**
 * Check if Calendly credentials are configured
 */
export function isCalendlyConfigured(): boolean {
  return !!(
    process.env.CALENDLY_CLIENT_ID &&
    process.env.CALENDLY_CLIENT_SECRET &&
    process.env.CALENDLY_REFRESH_TOKEN
  );
}
