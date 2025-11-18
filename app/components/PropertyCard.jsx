"use client";

import { useRouter } from "next/navigation";

export default function PropertyCard({ property }) {
  const router = useRouter();

  const handleViewDetails = () => {
    router.push(`/properties/${property.id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
      {/* Property Image */}
      <div className="relative h-48 bg-gray-200">
        <img
          src={property.image || "/images/property-placeholder.jpg"}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3">
          <span
            className={`px-2 py-1 rounded-full text-xs font-semibold ${
              property.type === "sale"
                ? "bg-green-500 text-white"
                : "bg-blue-500 text-white"
            }`}
          >
            {property.type === "sale" ? "For Sale" : "For Rent"}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
            ♡
          </button>
        </div>
      </div>

      {/* Property Details */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
            {property.title}
          </h3>
          <span className="text-xl font-bold text-primary-600">
            ${property.price.toLocaleString()}
            {property.type === "rent" && (
              <span className="text-sm text-gray-600">/mo</span>
            )}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {property.description}
        </p>

        {/* Property Features */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            🛏️ {property.bedrooms} beds
          </span>
          <span className="flex items-center gap-1">
            🛁 {property.bathrooms} baths
          </span>
          <span className="flex items-center gap-1">
            📏 {property.area} sqft
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
          📍 {property.location}
        </div>

        {/* Verified Badge */}
        {property.verified && (
          <div className="flex items-center gap-1 text-sm text-green-600 mb-3">
            ✅ Verified Owner
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleViewDetails}
            className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors text-sm"
          >
            View Details
          </button>
          <button className="px-4 py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors text-sm">
            💬
          </button>
        </div>
      </div>
    </div>
  );
}
