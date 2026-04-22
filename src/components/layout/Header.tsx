"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { X, Menu, Search, Heart, ShoppingCart, User } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Impact", href: "/impact" },
  { label: "Initiatives", href: "/initiatives" },
  { label: "Media", href: "/media" },
  { label: "Book", href: "/book" },
  { label: "Partner", href: "/partner" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[80px] flex items-center transition-all duration-300 ease-in-out bg-white ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* LEFT — Logo */}
          <Link href="/" className="shrink-0 mt-1">
            <span className="font-display text-[22px] font-bold text-brand-black tracking-[0.1em] uppercase">JOKATE MWEGELO.</span>
          </Link>

          {/* RIGHT — Nav + Icons */}
          <div className="flex items-center justify-end flex-grow gap-12 lg:gap-16">
            <nav className="hidden xl:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-body text-[13px] text-brand-black font-medium hover:text-brand-accent transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-5">
              <button aria-label="Search" className="hidden sm:block text-brand-black hover:text-brand-accent transition-colors duration-300"><Search size={18} strokeWidth={1.5} /></button>
              <button aria-label="Favorites" className="hidden sm:block text-brand-black hover:text-brand-accent transition-colors duration-300"><Heart size={18} strokeWidth={1.5} /></button>
              <button aria-label="Cart" className="hidden sm:block text-brand-black hover:text-brand-accent transition-colors duration-300"><ShoppingCart size={18} strokeWidth={1.5} /></button>
              <button aria-label="Account" className="hidden sm:block text-brand-black hover:text-brand-accent transition-colors duration-300"><User size={18} strokeWidth={1.5} /></button>
              
              <button
                onClick={() => setIsOpen(true)}
                className="xl:hidden text-brand-black"
                aria-label="Open menu"
              >
                <Menu size={22} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] xl:hidden">
          <div className="absolute inset-0 bg-white/95 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <nav className="relative ml-auto w-full max-w-sm h-full bg-white shadow-2xl flex flex-col justify-center px-12 text-brand-black">
            <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-brand-black hover:text-brand-accent transition-colors" aria-label="Close">
              <X size={24} strokeWidth={1.5} />
            </button>
            <ul className="space-y-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} onClick={() => setIsOpen(false)} className="block text-2xl font-display uppercase tracking-wide hover:text-brand-accent transition-colors duration-300">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-12 pt-8 border-t border-brand-black/10">
              <Link href="/partner#sponsor" onClick={() => setIsOpen(false)} className="text-brand-accent text-sm font-sans font-medium uppercase tracking-[0.1em]">Support a Student →</Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
