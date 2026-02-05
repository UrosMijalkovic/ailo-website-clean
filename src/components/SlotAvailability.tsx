"use client";

import { useEffect, useState } from "react";

/**
 * Displays available Calendly slots for the current week
 *
 * Fetches from /api/calendly-availability and shows a pulsing
 * indicator with the slot count.
 */
export function SlotAvailability() {
  const [slots, setSlots] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSlots() {
      try {
        const response = await fetch("/api/calendly-availability");
        const data = await response.json();

        if (data.slots !== null && data.slots !== undefined) {
          setSlots(data.slots);
        }
      } catch (error) {
        console.error("Failed to fetch slot availability:", error);
        // Keep slots as null on error
      } finally {
        setLoading(false);
      }
    }

    fetchSlots();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 bg-white/30 rounded-full animate-pulse" />
        <span className="text-xs text-white/50">Checking availability...</span>
      </div>
    );
  }

  // Error/null state - hide component
  if (slots === null) {
    return null;
  }

  // No slots available
  if (slots === 0) {
    return (
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 bg-yellow-400 rounded-full" />
        <span className="text-xs text-white/70">Limited availability</span>
      </div>
    );
  }

  // Show slot count
  return (
    <div className="flex items-center gap-2">
      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
      <span className="text-xs text-white/70">
        {slots} {slots === 1 ? "slot" : "slots"} this week
      </span>
    </div>
  );
}
