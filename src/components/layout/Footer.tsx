"use client";

import Link from "next/link";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Leadership", href: "/leadership" },
  { name: "Impact", href: "/impact" },
  { name: "Initiatives", href: "/initiatives" },
  { name: "Media", href: "/media" },
  { name: "Book", href: "/book" },
  { name: "Partner", href: "/partner" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-plum pt-20 pb-8 text-blush">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* LEFT — Logo + Manifesto */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <span className="font-display text-2xl font-semibold text-rose">JM</span>
              <span className="font-accent text-[13px] text-blush tracking-[0.15em]">Jokate Mwegelo</span>
            </Link>
            <p className="font-display italic text-[18px] text-blush/70 leading-relaxed">
              Building leaders. One girl at a time.
            </p>
          </div>

          {/* CENTER — Nav links */}
          <div>
            <ul className="space-y-3">
              {NAV_LINKS.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="font-body font-light text-[13px] text-blush/60 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — Social + Email */}
          <div className="space-y-4">
            <a href="https://www.instagram.com/jokatemwegelo" target="_blank" rel="noopener noreferrer" className="font-body text-[13px] text-rose hover:text-white transition-colors block">
              @jokatemwegelo
            </a>
            <a href="mailto:info@jokatemwegelo.co.tz" className="font-body text-[13px] text-rose hover:text-white transition-colors block">
              info@jokatemwegelo.co.tz
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gold/30 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body font-light text-[11px] text-blush/40">
            © {new Date().getFullYear()} Jokate Mwegelo. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[11px] font-body font-light text-blush/40">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
