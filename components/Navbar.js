"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Mountain } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // If we are not on the home page, force the dark navigation style
  const isHome = pathname === "/";
  const forceDarkNav = !isHome || scrolled;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#strategy", label: "Strategy" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        forceDarkNav
          ? "bg-[#0f172a]/95 backdrop-blur-md shadow-2xl shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* CO-BRANDED LOGO SECTION */}
        <div className="flex items-center gap-4">
          {/* 1. Your Brand */}
          <Link href="/" className="flex items-center gap-2 group">
            <Mountain
              size={28}
              className="text-[#c9a84c] transition-transform duration-300 group-hover:scale-110"
              strokeWidth={1.5}
            />
            <div className="flex flex-col leading-none">
              <span
                className={`text-lg font-semibold tracking-wide transition-colors duration-300 ${
                  forceDarkNav ? "text-white" : "text-[#0f172a]"
                }`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                Solomon
              </span>
              <span className="text-[#c9a84c] text-[10px] tracking-[0.2em] uppercase font-medium">
                Home Services
              </span>
            </div>
          </Link>

          {/* 2. Co-Branding Divider Line */}
          <div
            className={`w-px h-8 transition-colors duration-300 ${
              forceDarkNav ? "bg-white/20" : "bg-stone-300"
            }`}
          ></div>

          {/* 3. Real Broker Logo (Swaps based on forced dark nav or scroll) */}
          <img
            src={forceDarkNav ? "/real-broker-logo-light.png" : "/real-broker-logo-dark.png"}
            alt="Real Broker, LLC"
            className="h-6 w-auto object-contain transition-opacity duration-300"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-widest uppercase transition-colors duration-200 relative group ${
                forceDarkNav ? "text-stone-200 hover:text-[#c9a84c]" : "text-slate-600 hover:text-[#0f172a]"
              }`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c9a84c] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="/#contact"
            className="ml-4 px-5 py-2.5 bg-[#c9a84c] hover:bg-[#b8965e] text-[#0f172a] text-sm font-semibold tracking-wider uppercase rounded transition-all duration-200 hover:shadow-lg hover:shadow-[#c9a84c]/25 hover:-translate-y-px"
          >
            Get Your House Value
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden transition-colors ${
            forceDarkNav ? "text-white hover:text-[#c9a84c]" : "text-[#0f172a] hover:text-[#c9a84c]"
          }`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0f172a]/98 backdrop-blur-md border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-stone-200 hover:text-[#c9a84c] text-sm font-medium tracking-widest uppercase transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 px-5 py-3 bg-[#c9a84c] text-[#0f172a] text-sm font-semibold tracking-wider uppercase rounded text-center"
          >
            Get Your House Value
          </Link>
        </div>
      </div>
    </header>
  );
}
