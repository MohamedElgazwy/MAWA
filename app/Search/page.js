"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PropertyCard from "../components/PropertyCard";
import SearchFilters from "../components/SearchFilters";
import Pagination from "../components/Pagination";

// Mock data - سيتم استبدالها بالبيانات الحقيقية من API
const mockProperties = [
  {
    id: 1,
    title: "Modern Apartment in New Cairo",
    description:
      "Beautiful modern apartment with stunning views, located in the heart of New Cairo. Perfect for families and professionals.",
    price: 250000,
    type: "sale",
    bedrooms: 3,
    bathrooms: 2,
    area: 1500,
    location: "New Cairo, Cairo",
    verified: true,
    image: "/images/property1.jpg",
  },
  {
    id: 2,
    title: "Villa for Rent in Sheikh Zayed",
    description:
      "Spacious villa with garden and private pool. Quiet neighborhood with excellent amenities.",
    price: 15000,
    type: "rent",
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    location: "Sheikh Zayed, Giza",
    verified: true,
    image: "/images/property2.jpg",
  },
  {
    id: 3,
    title: "Studio Apartment in Downtown",
    description:
      "Cozy studio apartment in downtown Cairo. Great for students and young professionals.",
    price: 120000,
    type: "sale",
    bedrooms: 1,
    bathrooms: 1,
    area: 600,
    location: "Downtown, Cairo",
    verified: false,
    image: "/images/property3.jpg",
  },
  {
    id: 4,
    title: "Luxury Penthouse in Nasr City",
    description:
      "Luxurious penthouse with panoramic city views. High-end finishes and premium amenities.",
    price: 500000,
    type: "sale",
    bedrooms: 4,
    bathrooms: 3,
    area: 2200,
    location: "Nasr City, Cairo",
    verified: true,
    image: "/images/property4.jpg",
  },
  {
    id: 5,
    title: "Family Apartment in Maadi",
    description:
      "Comfortable family apartment in quiet Maadi neighborhood. Close to schools and shopping centers.",
    price: 8000,
    type: "rent",
    bedrooms: 3,
    bathrooms: 2,
    area: 1400,
    location: "Maadi, Cairo",
    verified: true,
    image: "/images/property5.jpg",
  },
  {
    id: 6,
    title: "Commercial Space in Heliopolis",
    description:
      "Prime commercial space suitable for retail or office use. High foot traffic area.",
    price: 300000,
    type: "sale",
    bedrooms: 0,
    bathrooms: 2,
    area: 1200,
    location: "Heliopolis, Cairo",
    verified: false,
    image: "/images/property6.jpg",
  },
];

export default function SearchPage() {
  const [properties, setProperties] = useState(mockProperties);
  const [filteredProperties, setFilteredProperties] = useState(mockProperties);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const propertiesPerPage = 6;

  // Filter properties based on search and filters
  const applyFilters = (filters = {}, query = "") => {
    let filtered = [...properties];

    // Search query filter
    if (query) {
      filtered = filtered.filter(
        (property) =>
          property.title.toLowerCase().includes(query.toLowerCase()) ||
          property.description.toLowerCase().includes(query.toLowerCase()) ||
          property.location.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Property type filter
    if (filters.type) {
      filtered = filtered.filter((property) => property.type === filters.type);
    }

    // Price range filter
    if (filters.priceMin) {
      filtered = filtered.filter(
        (property) => property.price >= parseInt(filters.priceMin)
      );
    }
    if (filters.priceMax) {
      filtered = filtered.filter(
        (property) => property.price <= parseInt(filters.priceMax)
      );
    }

    // Bedrooms filter
    if (filters.bedrooms) {
      filtered = filtered.filter(
        (property) => property.bedrooms >= parseInt(filters.bedrooms)
      );
    }

    // Bathrooms filter
    if (filters.bathrooms) {
      filtered = filtered.filter(
        (property) => property.bathrooms >= parseInt(filters.bathrooms)
      );
    }

    // Area filter
    if (filters.areaMin) {
      filtered = filtered.filter(
        (property) => property.area >= parseInt(filters.areaMin)
      );
    }
    if (filters.areaMax) {
      filtered = filtered.filter(
        (property) => property.area <= parseInt(filters.areaMax)
      );
    }

    // Verified filter
    if (filters.verified) {
      filtered = filtered.filter((property) => property.verified);
    }

    setFilteredProperties(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  };

  // Handle filter changes
  const handleFilterChange = (filters) => {
    applyFilters(filters, searchQuery);
  };

  // Handle search
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    applyFilters({}, query);
  };

  // Pagination
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = filteredProperties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );
  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-gray-50">
        {/* Search Header */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Find Your Perfect Property
                </h1>
                <p className="text-gray-600 mt-1">
                  {filteredProperties.length} properties found
                </p>
              </div>

              {/* Search Bar */}
              <div className="flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search by location, property type, or features..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <SearchFilters onFilterChange={handleFilterChange} />
            </div>

            {/* Properties Grid */}
            <div className="lg:w-3/4">
              {currentProperties.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {currentProperties.map((property) => (
                      <PropertyCard key={property.id} property={property} />
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      onPageChange={setCurrentPage}
                    />
                  )}
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="text-gray-400 text-6xl mb-4">🏠</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    No properties found
                  </h3>
                  <p className="text-gray-600">
                    Try adjusting your search criteria or filters
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
