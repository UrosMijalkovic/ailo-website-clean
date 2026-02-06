"use client";

import { useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface ContactFormProps {
  onSubmit: (data: {
    name: string;
    phone: string;
    email: string;
    recaptchaToken?: string | null;
  }) => void;
  isLoading?: boolean;
  isWaitlist?: boolean;
  executeRecaptcha?: (action: string) => Promise<string | null>;
}

export function ContactForm({
  onSubmit,
  isLoading,
  isWaitlist,
  executeRecaptcha,
}: ContactFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState<string | undefined>("");
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    email?: string;
    agreed?: string;
  }>({});

  const validateForm = () => {
    const newErrors: typeof errors = {};

    // Name validation
    if (!name.trim()) {
      newErrors.name = "Name is required";
    } else if (name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (!/^[a-zA-Z\s'-]+$/.test(name.trim())) {
      newErrors.name = "Name contains invalid characters";
    }

    // Phone validation using react-phone-number-input
    if (!phone) {
      newErrors.phone = "Phone number is required";
    } else if (!isValidPhoneNumber(phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Agreement validation
    if (!agreed) {
      newErrors.agreed = "You must agree to receive communications";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Get reCAPTCHA token if available
    let recaptchaToken: string | null = null;
    if (executeRecaptcha) {
      try {
        recaptchaToken = await executeRecaptcha("quiz_submit");
      } catch (error) {
        console.error("reCAPTCHA error:", error);
      }
    }

    onSubmit({
      name: name.trim(),
      phone: phone || "",
      email: email.trim().toLowerCase(),
      recaptchaToken,
    });
  };

  // Dynamic heading based on outcome
  const heading = isWaitlist ? "Join the Waitlist" : "Almost There!";
  const subtext = isWaitlist
    ? "We'll notify you when AILO expands to your area."
    : "We'll text you a confirmation and call details. Your info stays private — we never spam or sell data.";
  const buttonText = isWaitlist ? "Join Waitlist" : "See My Results →";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-bold text-white mb-2">
          {heading}
        </h2>
        <p className="text-white/70 text-sm">{subtext}</p>
      </div>

      <div className="space-y-4">
        {/* Name Field */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-white">
            Full Name *
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Jane Smith"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`bg-white/[0.06] backdrop-blur-xl border-white/[0.10] text-white placeholder:text-white/40 focus:border-[var(--color-accent)] transition-colors duration-300 ${
              errors.name ? "border-red-400" : ""
            }`}
          />
          {errors.name && (
            <p className="text-red-400 text-sm">{errors.name}</p>
          )}
        </div>

        {/* Phone Field - react-phone-number-input */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-white">
            Phone Number *
          </Label>
          <PhoneInput
            id="phone"
            international={false}
            defaultCountry="US"
            countries={["US"]}
            addInternationalOption={false}
            countryCallingCodeEditable={false}
            placeholder="(555) 123-4567"
            value={phone}
            onChange={setPhone}
            className={`phone-input-dark ${errors.phone ? "phone-input-error" : ""}`}
          />
          {errors.phone && (
            <p className="text-red-400 text-sm">{errors.phone}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">
            Email *
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`bg-white/[0.06] backdrop-blur-xl border-white/[0.10] text-white placeholder:text-white/40 focus:border-[var(--color-accent)] transition-colors duration-300 ${
              errors.email ? "border-red-400" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-400 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Agreement Checkbox */}
        <div className="flex items-start gap-3 pt-2">
          <input
            type="checkbox"
            id="agree"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-1 w-4 h-4 rounded border-white/20 bg-white/10 text-[var(--color-accent)] focus:ring-[var(--color-accent)]"
          />
          <Label
            htmlFor="agree"
            className={`text-sm cursor-pointer ${
              errors.agreed ? "text-red-400" : "text-white/80"
            }`}
          >
            I agree to receive communications from AILO
          </Label>
        </div>
        {errors.agreed && (
          <p className="text-red-400 text-sm">{errors.agreed}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full btn-primary text-lg h-14"
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
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
            Processing...
          </span>
        ) : (
          buttonText
        )}
      </Button>

      <p className="text-xs text-white/50 text-center flex items-center justify-center gap-2">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
        Your information is secure and never shared
      </p>
    </form>
  );
}
