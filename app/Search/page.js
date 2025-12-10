"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PropertyCard from "../components/PropertyCard";
import SearchFilters from "../components/SearchFilters";

const mockProperties = [
  {
    id: 1,
    title: "Modern Apartment in New Cairo",
    price: 2500000,
    type: "sale",
    bedrooms: 3,
    bathrooms: 2,
    area: 150,
    location: "New Cairo",
    verified: true,
    image: "/images/property1.jpg",
  },
  {
    id: 2,
    title: "Luxury Villa in Sheikh Zayed",
    price: 15000000,
    type: "sale",
    bedrooms: 5,
    bathrooms: 4,
    area: 450,
    location: "Sheikh Zayed",
    verified: true,
    image: "/images/property4.jpg",
  },
  {
    id: 3,
    title: "Cozy Studio in Maadi",
    price: 12000,
    type: "rent",
    bedrooms: 1,
    bathrooms: 1,
    area: 75,
    location: "Maadi",
    verified: false,
    image: "/images/property3.jpg",
  },
];

function SearchContent() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type");

  const [properties, setProperties] = useState(mockProperties);
  const [activeType, setActiveType] = useState(typeParam || "sale");

  useEffect(() => {
    if (typeParam) {
      setActiveType(typeParam);
    }
  }, [typeParam]);

  const handleFilterChange = (filters) => {
    console.log("Filters applied:", filters);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Header />

      <main className="grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-slate-200 pb-6">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900">
                {activeType === "sale"
                  ? "Properties for Sale"
                  : "Properties for Rent"}
              </h1>
              <p className="text-slate-500 mt-2">
                Find your dream home from our verified listings.
              </p>
            </div>
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <span className="text-sm text-slate-500">
                {properties.length} results
              </span>
              <select className="bg-white border border-slate-300 text-slate-700 text-sm rounded-lg px-3 py-2 outline-none focus:border-indigo-500">
                <option>Newest First</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-1/4">
              <SearchFilters onFilterChange={handleFilterChange} />
            </aside>

            <div className="lg:w-3/4">
              {properties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {properties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-dashed border-slate-200">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-bold text-slate-900">
                    No properties found
                  </h3>
                  <p className="text-slate-500">
                    Try adjusting your filters or search criteria.
                  </p>
                </div>
              )}

              <div className="mt-12 flex justify-center gap-2">
                <button className="px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50">
                  Previous
                </button>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md">
                  1
                </button>
                <button className="px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50">
                  2
                </button>
                <button className="px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
}
