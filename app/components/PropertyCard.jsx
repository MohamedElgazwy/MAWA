"use client";

import Link from "next/link";
import Image from "next/image";

export default function PropertyCard({ property }) {
  return (
    <Link href={`/Properties/${property.id}`}>
      <div className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        {/* قسم الصورة */}
        <div className="relative h-64 overflow-hidden">
          <div className="absolute inset-0 bg-slate-200 animate-pulse" />
          <img
            src={property.image || "/images/placeholder.jpg"}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow-md ${
                property.type === "sale" ? "bg-emerald-500" : "bg-indigo-500"
              }`}
            >
              {property.type === "sale" ? "For Sale" : "For Rent"}
            </span>
            {property.verified && (
              <span className="bg-white/90 backdrop-blur-sm text-indigo-600 px-2 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1">
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                </svg>
                Verified
              </span>
            )}
          </div>
          <button className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white backdrop-blur-md rounded-full text-white hover:text-red-500 transition-all shadow-md">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>

        {/* المحتوى */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-slate-800 line-clamp-1 group-hover:text-indigo-600 transition-colors mb-2">
            {property.title}
          </h3>

          <p className="text-slate-500 text-sm mb-4 flex items-center gap-1">
            <svg
              className="w-4 h-4 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
            </svg>
            {property.location}
          </p>

          <div className="flex items-center justify-between py-3 border-t border-slate-100 text-slate-600 text-sm">
            <div className="flex items-center gap-1">
              <span>🛏️</span> {property.bedrooms} Beds
            </div>
            <div className="flex items-center gap-1">
              <span>🚿</span> {property.bathrooms} Baths
            </div>
            <div className="flex items-center gap-1">
              <span>📏</span> {property.area} m²
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <div>
              <span className="text-2xl font-extrabold text-indigo-600">
                ${property.price.toLocaleString()}
              </span>
              {property.type === "rent" && (
                <span className="text-slate-400 text-sm font-medium">/mo</span>
              )}
            </div>
            <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-2 py-1 rounded">
              {property.status || "Active"}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
