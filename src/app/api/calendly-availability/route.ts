import { NextResponse } from "next/server";
import { getAvailableSlots, isCalendlyConfigured } from "@/lib/calendly";

export async function GET() {
  // Check if Calendly is configured
  if (!isCalendlyConfigured()) {
    // Return mock data for development
    return NextResponse.json({ slots: 8 });
  }

  try {
    const slots = await getAvailableSlots();
    return NextResponse.json({ slots });
  } catch (error) {
    console.error("Error fetching Calendly availability:", error);
    // Return null to indicate error (component handles gracefully)
    return NextResponse.json({ slots: null });
  }
}

// Cache for 5 minutes
export const revalidate = 300;
