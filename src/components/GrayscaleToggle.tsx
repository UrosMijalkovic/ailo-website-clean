"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

function GrayscaleToggleInner() {
  const searchParams = useSearchParams();
  const isGrayscale = searchParams.get("grayscale") === "true";

  useEffect(() => {
    if (isGrayscale) {
      // Add grayscale styles dynamically
      const style = document.createElement("style");
      style.id = "grayscale-mode";
      style.textContent = `
        :root {
          --color-primary: #333333;
          --color-primary-dark: #1a1a1a;
          --color-accent: #666666;
          --color-background: #ffffff;
          --color-surface: #f5f5f5;
          --color-text-primary: #1a1a1a;
          --color-text-secondary: #666666;
          --color-text-inverse: #ffffff;
          --color-muted: #999999;
        }
        html {
          filter: grayscale(100%);
          -webkit-filter: grayscale(100%);
        }
        .bg-gradient-hero,
        .bg-gradient-to-b,
        .bg-gradient-to-br {
          background: #2a2a2a !important;
        }
        .card-teal,
        .card-gold,
        .card-muted,
        .card-teal-horizontal {
          background: #f0f0f0 !important;
          border: 2px solid #333 !important;
        }
        .btn-primary {
          background: #333 !important;
          color: #fff !important;
          border: 2px solid #333 !important;
        }
        .btn-secondary {
          background: transparent !important;
          color: #333 !important;
          border: 2px solid #333 !important;
        }
        .tag-gold,
        .tag-dark {
          background: #e0e0e0 !important;
          color: #333 !important;
          border: 1px solid #333 !important;
        }
        .gold-circle {
          background: #666 !important;
        }
        .animate-pulse {
          animation: none !important;
        }
        * {
          box-shadow: none !important;
        }
        .progress-bar-fill {
          background: #666 !important;
        }
        img {
          border: 1px solid #ddd !important;
        }
      `;
      document.head.appendChild(style);

      return () => {
        const existingStyle = document.getElementById("grayscale-mode");
        if (existingStyle) {
          existingStyle.remove();
        }
      };
    }
  }, [isGrayscale]);

  // Show a small indicator when in grayscale mode
  if (isGrayscale) {
    return (
      <div className="fixed bottom-4 right-4 z-50 bg-black text-white text-xs px-3 py-2 rounded-full">
        Review Mode (Grayscale)
      </div>
    );
  }

  return null;
}

export function GrayscaleToggle() {
  return (
    <Suspense fallback={null}>
      <GrayscaleToggleInner />
    </Suspense>
  );
}
