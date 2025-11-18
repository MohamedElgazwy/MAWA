"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const router = useRouter();

  const handleAuth = (type) => {
    router.push("/auth");
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => router.push("/")}
          >
            <h1 className="text-2xl font-bold text-primary-600">MAWA</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="/search"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Buy
            </a>
            <a
              href="/search?type=rent"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Rent
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Agencies
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              About
            </a>
          </nav>

          {/* Language & Auth */}
          <div className="flex items-center space-x-4">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="border rounded px-2 py-1 text-sm"
            >
              <option value="en">English</option>
              <option value="ar">العربية</option>
            </select>

            <button
              onClick={() => handleAuth("login")}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Login
            </button>
            <button
              onClick={() => handleAuth("signup")}
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a
                href="/search"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600"
              >
                Buy
              </a>
              <a
                href="/search?type=rent"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600"
              >
                Rent
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600"
              >
                Agencies
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600"
              >
                About
              </a>
              <div className="border-t pt-2">
                <button className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary-600">
                  Login
                </button>
                <button className="block w-full text-left px-3 py-2 text-primary-600 font-semibold">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
