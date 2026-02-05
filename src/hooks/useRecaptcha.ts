"use client";

import { useCallback, useEffect, useState } from "react";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
    };
  }
}

interface UseRecaptchaReturn {
  isReady: boolean;
  executeRecaptcha: (action: string) => Promise<string | null>;
}

/**
 * Hook for reCAPTCHA v3 integration
 *
 * Usage:
 * ```tsx
 * const { isReady, executeRecaptcha } = useRecaptcha();
 *
 * const handleSubmit = async () => {
 *   const token = await executeRecaptcha('quiz_submit');
 *   // Send token to server for verification
 * };
 * ```
 */
export function useRecaptcha(): UseRecaptchaReturn {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Skip if no site key configured
    if (!RECAPTCHA_SITE_KEY) {
      console.warn("reCAPTCHA site key not configured");
      setIsReady(true); // Allow form to work without reCAPTCHA
      return;
    }

    // Check if script already loaded
    if (window.grecaptcha) {
      window.grecaptcha.ready(() => setIsReady(true));
      return;
    }

    // Load reCAPTCHA script dynamically
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      window.grecaptcha.ready(() => setIsReady(true));
    };

    script.onerror = () => {
      console.error("Failed to load reCAPTCHA script");
      setIsReady(true); // Allow form to work without reCAPTCHA
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup (script stays loaded, but we reset state)
    };
  }, []);

  const executeRecaptcha = useCallback(
    async (action: string): Promise<string | null> => {
      // Return null if not configured (server will skip verification)
      if (!RECAPTCHA_SITE_KEY) {
        return null;
      }

      if (!isReady || !window.grecaptcha) {
        console.warn("reCAPTCHA not ready");
        return null;
      }

      try {
        const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {
          action,
        });
        return token;
      } catch (error) {
        console.error("reCAPTCHA execution failed:", error);
        return null;
      }
    },
    [isReady]
  );

  return { isReady, executeRecaptcha };
}
