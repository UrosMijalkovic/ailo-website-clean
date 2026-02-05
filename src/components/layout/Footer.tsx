import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  product: [
    { href: "/", label: "Home" },
    { href: "/duo", label: "AILO Duo" },
    { href: "/events", label: "AILO Events" },
  ],
  company: [
    { href: "/the-science", label: "The Science" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
  ],
  legal: [
    { href: "/terms", label: "Terms of Service" },
    { href: "/privacy", label: "Privacy Policy" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#000000]">
      <div className="container-custom pt-16 sm:pt-28 md:pt-36 pb-12 sm:pb-20 md:pb-28">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 sm:gap-12 md:gap-16 mt-5">
          {/* Logo & Tagline */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/app/Logo.png"
                alt="AILO"
                width={80}
                height={32}
                className="h-6 w-auto"
              />
            </Link>
            <p className="text-white/40 text-sm max-w-xs leading-relaxed">
              Science-based matchmaking for people who value their time.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-6">
              Product
            </h4>
            <ul className="space-y-4">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-6">
              Legal
            </h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 sm:mt-20 md:mt-32 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs sm:text-sm">
            © {new Date().getFullYear()} AILO. All rights reserved.
          </p>
          <p className="text-white/30 text-xs sm:text-sm">
            Currently matching in South Florida
          </p>
        </div>
      </div>
    </footer>
  );
}
