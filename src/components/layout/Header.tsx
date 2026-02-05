"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/duo", label: "AILO Duo" },
  { href: "/events", label: "AILO Events" },
  { href: "/the-science", label: "The Science" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className="fixed left-0 right-0 z-50 top-5 px-4 md:px-6"
      style={{ willChange: "transform" }}
    >
      {/* Floating Glass Pill */}
      <div
        className="mx-auto transition-[max-width] duration-100 ease-out"
        style={{ maxWidth: isScrolled ? "56rem" : "72rem" }}
      >
        <nav
          className={`
            relative flex items-center justify-between
            px-5 md:px-8
            bg-white/10 backdrop-blur-xl
            border border-white/20
            shadow-[0_8px_32px_rgba(0,0,0,0.3)]
            overflow-hidden
            transition-all duration-100 ease-out
            ${isScrolled ? "h-14" : "h-16"} rounded-full
          `}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center relative z-10">
            <Image
              src="/images/app/Logo.png"
              alt="AILO"
              width={80}
              height={32}
              className={`w-auto transition-all duration-100 ease-out ${isScrolled ? "h-6" : "h-7"}`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center relative z-10 transition-all duration-100 ease-out ${isScrolled ? "gap-6" : "gap-8"}`}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-all text-sm font-medium ${
                  isActive(link.href)
                    ? "text-[var(--color-accent)]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block relative z-10">
            <Link
              href="/apply"
              className="
                inline-flex items-center px-5 py-2 text-sm font-medium
                bg-[var(--color-accent)] text-[var(--color-primary-dark)]
                rounded-full
                hover:bg-[var(--color-accent)]/90
                transition-colors
              "
            >
              Request Access
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white/80 hover:text-white relative z-10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div
            className="
              md:hidden mt-2 py-4 px-6
              bg-white/10 backdrop-blur-xl
              border border-white/20
              rounded-2xl
              shadow-[0_8px_32px_rgba(0,0,0,0.3)]
            "
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors py-2 text-center ${
                    isActive(link.href)
                      ? "text-[var(--color-accent)]"
                      : "text-white/80 hover:text-white"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/apply"
                className="
                  mt-2 py-3 text-center text-sm font-medium
                  bg-[var(--color-accent)] text-[var(--color-primary-dark)]
                  rounded-full
                "
                onClick={() => setMobileMenuOpen(false)}
              >
                Request Access
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
