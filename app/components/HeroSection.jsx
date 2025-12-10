"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("buy"); // buy, rent, commercial

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/Search?type=${activeTab === "buy" ? "sale" : activeTab}`);
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 opacity-90"></div>
        <img
          src="/images/hero-bg.jpg" // تأكد من وضع صورة خلفية عالية الجودة هنا
          alt="Modern Architecture"
          className="w-full h-full object-cover mix-blend-overlay opacity-40"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
          Find Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            Perfect Home
          </span>
          <br /> Without The Broker.
        </h1>

        <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light">
          Connect directly with verified owners. Use AI to find the best deals
          in Egypt with zero commission fees.
        </p>

        {/* Professional Search Box */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl shadow-indigo-900/50 p-2 md:p-3 transform transition-all hover:scale-[1.01]">
          {/* Tabs */}
          <div className="flex gap-2 mb-2 px-2">
            {[
              { id: "buy", label: "Buy" },
              { id: "rent", label: "Rent" },
              { id: "commercial", label: "Commercial" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeTab === tab.id
                    ? "bg-indigo-600 text-white shadow-md"
                    : "text-slate-500 hover:bg-slate-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Input & Action */}
          <form
            onSubmit={handleSearch}
            className="flex flex-col md:flex-row gap-2"
          >
            <div className="flex-grow relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="City, Neighborhood, or Address..."
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border-transparent focus:bg-white focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200 rounded-2xl text-slate-900 placeholder-slate-400 transition-all outline-none font-medium"
              />
            </div>
            <button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-emerald-600/50 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              Search
            </button>
          </form>
        </div>

        {/* Floating Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
          {[
            { value: "15k+", label: "Active Listings" },
            { value: "5k+", label: "Verified Owners" },
            { value: "0%", label: "Commission Fee" },
            { value: "24/7", label: "AI Support" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10"
            >
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-indigo-200 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
