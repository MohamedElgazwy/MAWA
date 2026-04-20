"use client";

import { useState, useEffect, useMemo } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { name: "Buy", path: "/Search", query: { type: "sale" } },
  { name: "Rent", path: "/Search", query: { type: "rent" } },
  { name: "Agencies", path: "/Agencies" },
  { name: "About", path: "/About" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  // ✅ Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Active link logic (supports query params)
  const isActive = (link) => {
    if (link.path !== pathname) return false;

    if (link.query) {
      return Object.entries(link.query).every(
        ([key, value]) => searchParams.get(key) === value
      );
    }

    return true;
  };

  // ✅ Build href with query
  const buildHref = (link) => {
    if (!link.query) return link.path;

    const params = new URLSearchParams(link.query).toString();
    return `${link.path}?${params}`;
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm"
          : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="container-shell">
        <div className="flex h-20 items-center justify-between">

          {/* 🔷 Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-600/30 group-hover:scale-105 transition">
              🏠
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">
              Darak
            </span>
          </Link>

          {/* 🔷 Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={buildHref(link)}
                className={`relative text-sm font-medium transition ${
                  isActive(link)
                    ? "text-indigo-600"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.name}

                {/* 🔥 underline animation */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full bg-indigo-600 transition-all duration-300 ${
                    isActive(link) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  } origin-left`}
                />
              </Link>
            ))}
          </nav>

          {/* 🔷 Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/Auth"
              className="btn-secondary px-4 py-2.5 text-sm hover:scale-[1.03] transition"
            >
              Sign In
            </Link>
            <Link
              href="/Add-property"
              className="btn-primary px-4 py-2.5 text-sm shadow-md hover:shadow-lg hover:scale-[1.03] transition"
            >
              List Property
            </Link>
          </div>

          {/* 🔷 Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-lg text-slate-700"
          >
            <div className="space-y-1">
              <span className={`block h-[2px] w-6 bg-black transition ${isMenuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
              <span className={`block h-[2px] w-6 bg-black transition ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-[2px] w-6 bg-black transition ${isMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* 🔷 Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-[400px] border-t border-slate-200" : "max-h-0"
        }`}
      >
        <div className="container-shell py-4 space-y-2 bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={buildHref(link)}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 rounded-lg text-sm transition ${
                isActive(link)
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="grid grid-cols-2 gap-2 pt-3">
            <Link href="/Auth" className="btn-secondary text-center py-2">
              Sign In
            </Link>
            <Link href="/Add-property" className="btn-primary text-center py-2">
              List
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}