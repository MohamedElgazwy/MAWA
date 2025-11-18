"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const router = useRouter();

  const handleAuth = (type) => {
    router.push("/Auth");
    setIsMenuOpen(false); // إغلاق القائمة بعد النقر
  };

  const handleNavigation = (path) => {
    router.push(path);
    setIsMenuOpen(false); // إغلاق القائمة بعد النقر
  };

  return (
    <header className="bg-white shadow-sm border-b relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => router.push("/")}
          >
            <h1 className="text-2xl font-bold text-primary-600">MAWA</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => handleNavigation("/Search")}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Buy
            </button>
            <button
              onClick={() => handleNavigation("/Search?type=rent")}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Rent
            </button>
            <button
              onClick={() => handleNavigation("#")}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Agencies
            </button>
            <button
              onClick={() => handleNavigation("#")}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              About
            </button>
          </nav>

          {/* Desktop Language & Auth */}
          <div className="hidden md:flex items-center space-x-4">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="border rounded px-2 py-1 text-sm focus:outline-none focus:border-primary-500"
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
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
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
                className="w-6 h-6"
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

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            {/* Navigation Links */}
            <button
              onClick={() => handleNavigation("/Search")}
              className="block w-full text-left px-3 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Buy Properties
            </button>
            <button
              onClick={() => handleNavigation("/Search?type=rent")}
              className="block w-full text-left px-3 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Rent Properties
            </button>
            <button
              onClick={() => handleNavigation("#")}
              className="block w-full text-left px-3 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Real Estate Agencies
            </button>
            <button
              onClick={() => handleNavigation("#")}
              className="block w-full text-left px-3 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              About MAWA
            </button>

            {/* Divider */}
            <div className="border-t border-gray-200 my-2"></div>

            {/* Language Selector - Mobile */}
            <div className="px-3 py-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Language
              </label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary-500"
              >
                <option value="en">English</option>
                <option value="ar">العربية</option>
              </select>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-2"></div>

            {/* Auth Buttons - Mobile */}
            <div className="px-3 py-2 space-y-3">
              <button
                onClick={() => handleAuth("login")}
                className="block w-full text-left px-3 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Login to Account
              </button>
              <button
                onClick={() => handleAuth("signup")}
                className="block w-full text-center px-3 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
              >
                Create Account
              </button>
            </div>

            {/* Additional Mobile Links */}
            <div className="border-t border-gray-200 my-2"></div>
            <button
              onClick={() => handleNavigation("/Add-property")}
              className="block w-full text-left px-3 py-3 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors font-semibold"
            >
              + List Your Property
            </button>
            <button
              onClick={() => handleNavigation("/Dashboard")}
              className="block w-full text-left px-3 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              My Dashboard
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
}
