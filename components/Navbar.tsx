"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Nos produits", href: "/produits" },
  { label: "Click & Collect", href: "/click-collect" },
  { label: "Notre histoire", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 text-white transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-secondary/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="font-heading text-2xl md:text-3xl font-bold text-white tracking-tight">
          La Mie Dorée
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/85 hover:text-accent transition-colors text-sm font-medium uppercase tracking-wider"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/click-collect"
            className="bg-primary text-dark px-6 py-2.5 rounded-full text-sm font-bold hover:bg-primary/90 transition-colors"
          >
            Commander
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white p-2"
          aria-label="Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden bg-secondary/98 backdrop-blur-md border-t border-white/10 px-4 py-6 space-y-4">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-white/90 hover:text-accent text-lg font-medium"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/click-collect"
            onClick={() => setOpen(false)}
            className="block bg-primary text-dark px-6 py-3 rounded-full text-center font-bold mt-4"
          >
            Commander
          </Link>
        </nav>
      )}
    </header>
  );
}
