"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const cities = [
  { value: "", label: "Select your city..." },
  { value: "miami", label: "Miami" },
  { value: "fort-lauderdale", label: "Fort Lauderdale" },
  { value: "west-palm-beach", label: "West Palm Beach" },
  { value: "orlando", label: "Orlando" },
  { value: "tampa", label: "Tampa" },
  { value: "jacksonville", label: "Jacksonville" },
  { value: "other-florida", label: "Other Florida" },
  { value: "other-us", label: "Other US" },
  { value: "international", label: "International" },
];

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-4">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-accent)] mb-4">
          <svg
            className="w-6 h-6 text-[var(--color-primary-dark)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-semibold text-white mb-2">You&apos;re on the list!</h3>
        <p className="text-white/70 text-sm">
          We&apos;ll notify you when AILO launches in your area.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* City Selector */}
      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[var(--color-accent)] appearance-none cursor-pointer"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px' }}
      >
        {cities.map((c) => (
          <option key={c.value} value={c.value} className="bg-[var(--color-primary-dark)] text-white">
            {c.label}
          </option>
        ))}
      </select>

      {/* Email + Submit */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[var(--color-accent)] ${
            error ? "border-red-400" : ""
          }`}
        />
        <Button
          type="submit"
          disabled={isLoading}
          className="btn-primary whitespace-nowrap"
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Joining...
            </span>
          ) : (
            "Join Waitlist"
          )}
        </Button>
      </div>
      {error && <p className="text-red-400 text-sm text-left">{error}</p>}
    </form>
  );
}
