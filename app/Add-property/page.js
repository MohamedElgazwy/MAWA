"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import api from "../services/api"; // سنقوم بتفعيله عند الربط

export default function AddProperty() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // حالة البيانات (State)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    propertyType: "Apartment",
    status: "Draft",
    design: "standard", // الحقل الجديد لاختيار تصميم الإعلان
    bedrooms: "",
    bathrooms: "",
    area: "",
    location: { city: "", street: "" },
    images: [],
    features: [],
  });

  // تعريف الخطوات
  const steps = [
    { id: 1, title: "Basic Info", icon: "📝" },
    { id: 2, title: "Details & Layout", icon: "🎨" }, // تم التعديل
    { id: 3, title: "Location", icon: "📍" },
    { id: 4, title: "Photos", icon: "📸" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...newImages],
    }));
  };

  const handleRemoveImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (actionType) => {
    setLoading(true);
    // هنا سيتم استدعاء API (Create Announcement)
    // const status = actionType === 'draft' ? 'Draft' : 'Pending';

    setTimeout(() => {
      setLoading(false);
      setShowSuccess(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      <Header />

      <main className="flex-grow py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* العنوان */}
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900">
              List Your Property
            </h1>
            <p className="mt-2 text-gray-500">
              Reach verified buyers instantly.
            </p>
          </div>

          {/* شريط التقدم (Progress Bar) */}
          <div className="mb-10">
            <div className="flex justify-between items-center relative">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 rounded-full"></div>
              <div
                className="absolute top-1/2 left-0 h-1 bg-primary-600 -z-10 rounded-full transition-all duration-500 ease-in-out"
                style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
              ></div>

              {steps.map((s) => (
                <div
                  key={s.id}
                  className="flex flex-col items-center bg-gray-50 px-2"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 border-2 ${
                      step >= s.id
                        ? "bg-primary-600 border-primary-600 text-white shadow-lg scale-110"
                        : "bg-white border-gray-300 text-gray-400"
                    }`}
                  >
                    {step > s.id ? "✓" : s.id}
                  </div>
                  <span
                    className={`mt-2 text-xs font-medium uppercase tracking-wide ${
                      step >= s.id ? "text-primary-700" : "text-gray-400"
                    }`}
                  >
                    {s.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* كارت النموذج */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden relative min-h-[500px]">
            {loading && (
              <div className="absolute inset-0 bg-white/80 z-50 flex items-center justify-center backdrop-blur-sm">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
              </div>
            )}

            <div className="p-8 md:p-12">
              {/* Step 1: Basic Info */}
              {step === 1 && (
                <div className="space-y-6 animate-fadeIn">
                  <h2 className="text-2xl font-semibold text-gray-800 border-b pb-4 mb-6">
                    Basic Information
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Property Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="e.g. Modern Apartment in New Cairo"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Price (EGP)
                      </label>
                      <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Property Type
                      </label>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 bg-white outline-none"
                      >
                        <option value="Apartment">Apartment</option>
                        <option value="Villa">Villa</option>
                        <option value="Office">Office</option>
                        <option value="Land">Land</option>
                      </select>
                    </div>

                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                      </label>
                      <textarea
                        name="description"
                        rows="4"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
                        placeholder="Describe features, nearby landmarks..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Details & Layout Design */}
              {step === 2 && (
                <div className="space-y-8 animate-fadeIn">
                  {/* قسم التفاصيل الرقمية */}
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-800 border-b pb-4 mb-6">
                      Property Details
                    </h2>
                    <div className="grid grid-cols-3 gap-6">
                      {["Bedrooms", "Bathrooms"].map((field) => (
                        <div key={field}>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {field}
                          </label>
                          <input
                            type="number"
                            name={field.toLowerCase()}
                            value={formData[field.toLowerCase()]}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 text-center font-bold text-lg outline-none"
                          />
                        </div>
                      ))}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Area (sqm)
                        </label>
                        <input
                          type="number"
                          name="area"
                          value={formData.area}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* قسم اختيار تصميم الإعلان (الميزة المطلوبة) */}
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <span>🎨</span> Select Announcement Design
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* الخيار الأول: Standard */}
                      <label
                        className={`relative border-2 rounded-xl p-4 cursor-pointer transition-all hover:shadow-md flex items-start gap-4 ${
                          formData.design === "standard"
                            ? "border-primary-600 bg-white ring-2 ring-primary-100"
                            : "border-gray-200 bg-white/50"
                        }`}
                      >
                        <div className="mt-1">
                          <input
                            type="radio"
                            name="design"
                            value="standard"
                            checked={formData.design === "standard"}
                            onChange={handleInputChange}
                            className="w-5 h-5 text-primary-600 focus:ring-primary-500"
                          />
                        </div>
                        <div>
                          <span className="font-bold text-gray-900 block mb-1">
                            Standard Layout
                          </span>
                          <span className="text-sm text-gray-500 block">
                            Classic view with sidebar details. Best for standard
                            listings.
                          </span>
                          {/* Mini Visual Representation */}
                          <div className="mt-3 flex gap-1 opacity-60">
                            <div className="w-8 h-8 bg-gray-300 rounded"></div>
                            <div className="flex-1 space-y-1">
                              <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                              <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                            </div>
                          </div>
                        </div>
                      </label>

                      {/* الخيار الثاني: Premium/Featured */}
                      <label
                        className={`relative border-2 rounded-xl p-4 cursor-pointer transition-all hover:shadow-md flex items-start gap-4 ${
                          formData.design === "featured"
                            ? "border-primary-600 bg-white ring-2 ring-primary-100"
                            : "border-gray-200 bg-white/50"
                        }`}
                      >
                        <div className="mt-1">
                          <input
                            type="radio"
                            name="design"
                            value="featured"
                            checked={formData.design === "featured"}
                            onChange={handleInputChange}
                            className="w-5 h-5 text-primary-600 focus:ring-primary-500"
                          />
                        </div>
                        <div>
                          <span className="font-bold text-gray-900 block mb-1">
                            Immersive Layout
                          </span>
                          <span className="text-sm text-gray-500 block">
                            Full-width hero image. Best for luxury properties.
                          </span>
                          {/* Mini Visual Representation */}
                          <div className="mt-3 opacity-60">
                            <div className="w-full h-4 bg-gray-300 rounded mb-1"></div>
                            <div className="flex gap-1">
                              <div className="h-2 bg-gray-200 rounded w-1/3"></div>
                              <div className="h-2 bg-gray-200 rounded w-1/3"></div>
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Location */}
              {step === 3 && (
                <div className="space-y-6 animate-fadeIn">
                  <h2 className="text-2xl font-semibold text-gray-800 border-b pb-4 mb-6">
                    Location
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <input
                      type="text"
                      placeholder="City"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Street Address"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"
                    />
                  </div>

                  <div className="w-full h-64 bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-500 hover:border-primary-400 hover:text-primary-600 transition-colors cursor-pointer">
                    <span className="text-4xl mb-2">🗺️</span>
                    <p className="font-medium">Pin Location on Map</p>
                  </div>
                </div>
              )}

              {/* Step 4: Photos */}
              {step === 4 && (
                <div className="space-y-6 animate-fadeIn">
                  <h2 className="text-2xl font-semibold text-gray-800 border-b pb-4 mb-6">
                    Photos
                  </h2>

                  <label className="w-full h-40 bg-blue-50 rounded-xl border-2 border-dashed border-blue-200 flex flex-col items-center justify-center text-blue-600 hover:bg-blue-100 hover:border-blue-400 transition-all cursor-pointer">
                    <input
                      type="file"
                      multiple
                      className="hidden"
                      onChange={handleImageUpload}
                      accept="image/*"
                    />
                    <span className="text-4xl mb-2">☁️</span>
                    <p className="font-bold">Click to Upload</p>
                    <p className="text-sm">Max 10 images</p>
                  </label>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    {formData.images.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative group rounded-lg overflow-hidden shadow-sm aspect-square"
                      >
                        <img
                          src={img.preview}
                          alt="preview"
                          className="w-full h-full object-cover"
                        />
                        <button
                          onClick={() => handleRemoveImage(idx)}
                          className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* أزرار التنقل */}
              <div className="flex justify-between items-center mt-10 pt-6 border-t border-gray-100">
                <button
                  onClick={() => setStep((prev) => Math.max(prev - 1, 1))}
                  disabled={step === 1}
                  className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                    step === 1
                      ? "text-gray-400 cursor-not-allowed bg-gray-50"
                      : "text-gray-700 hover:bg-gray-100 border border-gray-300"
                  }`}
                >
                  ← Back
                </button>

                <div className="flex gap-3">
                  {step === 4 ? (
                    <>
                      <button
                        onClick={() => handleSubmit("draft")}
                        className="px-6 py-3 rounded-lg font-bold text-gray-800 bg-gray-200 hover:bg-gray-300 border border-gray-400 transition-colors"
                      >
                        Save Draft
                      </button>
                      <button
                        onClick={() => handleSubmit("publish")}
                        className="px-8 py-3 rounded-lg font-bold text-white bg-primary-600 shadow-lg shadow-primary-600/40 hover:bg-primary-700 hover:-translate-y-0.5 transition-all"
                      >
                        Submit Review
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => setStep((prev) => Math.min(prev + 1, 4))}
                      className="px-8 py-3 rounded-lg font-bold text-white bg-primary-600 shadow-lg shadow-primary-600/40 hover:bg-primary-700 transition-all"
                    >
                      Next Step →
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* مودال النجاح */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl scale-100 transform transition-transform">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">🎉</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Submitted!
            </h3>
            <p className="text-gray-500 mb-6">
              Your property is pending approval. You can track its status in
              your dashboard.
            </p>
            <button
              onClick={() => router.push("/dashboard")}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700"
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
