"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // تأثير تغيير الخلفية عند السكرول
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => pathname === path;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 flex items-center gap-2 hover:opacity-80 transition"
          >
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-500/30">
              M
            </div>
            {/* تم التعديل: النص دائمًا داكن لضمان الوضوح */}
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              MAWA
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { name: "Buy", path: "/Search?type=sale" },
              { name: "Rent", path: "/Search?type=rent" },
              { name: "Agencies", path: "/Agencies" },
              { name: "About", path: "/About" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.path}
                // تم التعديل: النص دائمًا داكن (text-slate-700) أو أزرق (text-indigo-600)
                className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                  isActive(link.path)
                    ? "text-indigo-600 font-bold"
                    : "text-slate-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/Auth"
              // تم التعديل: النص دائمًا داكن لضمان الوضوح
              className="text-sm font-medium transition-colors text-slate-700 hover:text-indigo-600"
            >
              Sign In
            </Link>

            {/* تم التعديل: تطبيق نمط btn-primary مع الحفاظ على التباعد والشكل المستدير */}
            <Link
              href="/Add-property"
              className="btn-primary px-5 py-2.5 rounded-full text-sm font-bold tracking-tight"
            >
              + List Property
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 origin-top ${
          isMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 h-0"
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          <Link
            href="/Search?type=sale"
            className="block text-lg font-medium text-slate-800 hover:text-indigo-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Buy Properties
          </Link>
          <Link
            href="/Search?type=rent"
            className="block text-lg font-medium text-slate-800 hover:text-indigo-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Rent Properties
          </Link>
          <Link
            href="/Agencies"
            className="block text-lg font-medium text-slate-800 hover:text-indigo-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Agencies
          </Link>
          <div className="border-t border-gray-100 pt-4 mt-4 flex flex-col gap-3">
            <Link
              href="/Auth"
              className="w-full py-3 text-center text-slate-700 font-semibold border-2 border-slate-300 rounded-xl hover:bg-slate-100 bg-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Log In
            </Link>
            <Link
              href="/Add-property"
              className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-600/50 text-center transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              List Your Property
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
