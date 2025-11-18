"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary-600">MAWA</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Buy
            </a>
            <a
              href="#"
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

            <button className="text-gray-700 hover:text-primary-600 transition-colors">
              Login
            </button>
            <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
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
      </div>
    </header>
  );
}
