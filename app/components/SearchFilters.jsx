"use client";

import { useState } from "react";

export default function SearchFilters({ onFilterChange }) {
  const [filters, setFilters] = useState({
    priceMin: "",
    priceMax: "",
    bedrooms: "",
    bathrooms: "",
  });

  const handleChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 sticky top-24">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-slate-900 text-lg">Filters</h3>
        <button
          onClick={() => {
            const reset = {
              priceMin: "",
              priceMax: "",
              bedrooms: "",
              bathrooms: "",
            };
            setFilters(reset);
            onFilterChange(reset);
          }}
          className="text-xs text-indigo-600 font-semibold hover:text-indigo-800"
        >
          Reset All
        </button>
      </div>

      <div className="space-y-6">
        {/* Price Range */}
        <div>
          <label className="text-sm font-bold text-slate-700 mb-3 block">
            Price Range (EGP)
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              placeholder="Min"
              value={filters.priceMin}
              onChange={(e) => handleChange("priceMin", e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <span className="text-slate-400">-</span>
            <input
              type="number"
              placeholder="Max"
              value={filters.priceMax}
              onChange={(e) => handleChange("priceMax", e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
        </div>

        {/* Bedrooms */}
        <div>
          <label className="text-sm font-bold text-slate-700 mb-3 block">
            Bedrooms
          </label>
          <div className="flex gap-2">
            {["Any", "1", "2", "3", "4+"].map((opt) => (
              <button
                key={opt}
                onClick={() =>
                  handleChange("bedrooms", opt === "Any" ? "" : opt)
                }
                className={`flex-1 py-2 rounded-lg text-sm font-bold border-2 transition-all ${
                  filters.bedrooms === opt ||
                  (opt === "Any" && !filters.bedrooms)
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-lg"
                    : "bg-white text-slate-700 border-slate-300 hover:border-slate-400"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Bathrooms */}
        <div>
          <label className="text-sm font-bold text-slate-700 mb-3 block">
            Bathrooms
          </label>
          <div className="flex gap-2">
            {["Any", "1", "2", "3+"].map((opt) => (
              <button
                key={opt}
                onClick={() =>
                  handleChange("bathrooms", opt === "Any" ? "" : opt)
                }
                className={`flex-1 py-2 rounded-lg text-sm font-bold border-2 transition-all ${
                  filters.bathrooms === opt ||
                  (opt === "Any" && !filters.bathrooms)
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-lg"
                    : "bg-white text-slate-700 border-slate-300 hover:border-slate-400"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Search Button */}
        <button className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/40">
          Apply Filters
        </button>
      </div>
    </div>
  );
}
