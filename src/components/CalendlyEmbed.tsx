"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: {
          name?: string;
          email?: string;
          customAnswers?: Record<string, string>;
        };
      }) => void;
    };
  }
}

interface CalendlyEventPayload {
  event: {
    uri: string;
    start_time: string;
    location?: {
      join_url?: string;
    };
  };
  invitee: {
    uri: string;
    email: string;
    name: string;
  };
}

interface CalendlyEvent {
  event: "calendly.event_scheduled";
  payload: CalendlyEventPayload;
}

interface CalendlyEmbedProps {
  url?: string;
  prefill?: {
    name?: string;
    email?: string;
    phone?: string;
  };
  onEventScheduled?: (event: CalendlyEventPayload) => void;
  leadId?: string;
}

/**
 * Calendly inline widget embed component
 *
 * Loads the Calendly script dynamically and initializes the widget
 * with prefill data and custom styling to match AILO brand.
 */
export function CalendlyEmbed({
  url,
  prefill,
  onEventScheduled,
  leadId,
}: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  const calendlyUrl = url || process.env.NEXT_PUBLIC_CALENDLY_URL;

  useEffect(() => {
    if (!calendlyUrl) {
      console.error("Calendly URL not configured");
      setIsLoading(false);
      return;
    }

    // Build URL with theme colors and prefill
    const params = new URLSearchParams();

    // Prefill fields
    if (prefill?.name) params.set("name", prefill.name);
    if (prefill?.email) params.set("email", prefill.email);
    if (prefill?.phone) params.set("a1", prefill.phone); // Phone as custom field

    // CRM tracking
    if (leadId) params.set("utm_content", leadId);

    // Theme colors (match AILO brand)
    params.set("background_color", "2d3a40"); // Dark teal background
    params.set("text_color", "ebebeb"); // Light text
    params.set("primary_color", "e1b98f"); // Gold accent
    params.set("hide_gdpr_banner", "1");

    const fullUrl = `${calendlyUrl}?${params.toString()}`;

    // Load Calendly script if not already loaded
    const loadScript = () => {
      return new Promise<void>((resolve, reject) => {
        if (window.Calendly) {
          resolve();
          return;
        }

        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;

        script.onload = () => resolve();
        script.onerror = () => reject(new Error("Failed to load Calendly"));

        document.body.appendChild(script);
      });
    };

    // Initialize widget
    const initWidget = async () => {
      try {
        await loadScript();

        if (containerRef.current && window.Calendly) {
          window.Calendly.initInlineWidget({
            url: fullUrl,
            parentElement: containerRef.current,
            prefill: {
              name: prefill?.name,
              email: prefill?.email,
            },
          });

          setIsLoading(false);
        }
      } catch (error) {
        console.error("Failed to initialize Calendly:", error);
        setIsLoading(false);
      }
    };

    initWidget();

    // Listen for Calendly events
    const handleMessage = (e: MessageEvent) => {
      if (
        e.origin === "https://calendly.com" &&
        e.data.event === "calendly.event_scheduled"
      ) {
        const calendlyEvent = e.data as CalendlyEvent;
        onEventScheduled?.(calendlyEvent.payload);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [calendlyUrl, prefill, leadId, onEventScheduled]);

  if (!calendlyUrl) {
    return (
      <div className="aspect-[4/3] md:aspect-[3/2] bg-gray-50 rounded-lg flex items-center justify-center">
        <div className="text-center p-8">
          <p className="text-gray-500">Calendly not configured</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-lg">
          <div className="text-center">
            <svg
              className="animate-spin w-8 h-8 mx-auto text-[var(--color-primary)] mb-2"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <p className="text-gray-400 text-sm">Loading calendar...</p>
          </div>
        </div>
      )}

      <div
        ref={containerRef}
        className="calendly-inline-widget"
        style={{ minWidth: "320px", height: "700px" }}
      />
    </div>
  );
}
