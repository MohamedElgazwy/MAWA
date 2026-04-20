"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const tabs = [
  { id: "buy", label: "Buy", value: "sale" },
  { id: "rent", label: "Rent", value: "rent" },
  { id: "commercial", label: "Commercial", value: "commercial" },
];

export default function HeroSection() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("buy");

  const handleSearch = (e) => {
    e.preventDefault();
    const target = tabs.find((tab) => tab.id === activeTab);
    router.push(`/Search?type=${target?.value || "sale"}`);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden text-white">

      {/* 🖼️ Background Image */}
      <div className="absolute inset-0">
        <Image
  src="/images/home.jpg"
  alt="Hero"
  fill
  priority
  className="object-cover"
/>
      </div>

      {/* 🌑 Overlay (مهم جدًا للـ readability) */}
      <div className="absolute inset-0 bg-black/50" />

      {/* 🎨 Gradient cinematic effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* 🔷 Content */}
      <div className="relative z-10 container-shell flex h-full items-center justify-center">
        <div className="max-w-4xl text-center">

          <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.16em] backdrop-blur">
            AI-powered real estate
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Find your next property with confidence.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base text-white/80 sm:text-lg">
            Browse verified homes, connect directly with owners, and skip broker commissions.
          </p>

          {/* 🔥 Glass Search Box */}
          <form
            onSubmit={handleSearch}
            className="mt-10 rounded-2xl border border-white/20 bg-white/10 p-3 backdrop-blur-xl shadow-2xl"
          >
            {/* Tabs */}
            <div className="mb-3 flex flex-wrap gap-2 px-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    activeTab === tab.id
                      ? "bg-indigo-600 text-white"
                      : "text-white/70 hover:bg-white/10"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                type="text"
                placeholder="Enter city, area, or compound"
                className="h-12 flex-1 rounded-xl border border-white/20 bg-white/80 px-4 text-slate-900 outline-none focus:border-indigo-500"
              />
              <button type="submit" className="btn-primary h-12 px-8">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}