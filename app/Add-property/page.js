"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AddProperty() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Information
    title: "",
    description: "",
    type: "sale",
    category: "apartment",
    price: "",

    // Property Details
    bedrooms: "",
    bathrooms: "",
    area: "",
    floor: "",
    totalFloors: "",
    yearBuilt: "",

    // Location
    address: "",
    city: "",
    district: "",
    latitude: "",
    longitude: "",

    // Features & Amenities
    features: [],
    furnished: "no",

    // Media
    images: [],

    // Contact
    contactName: "",
    contactPhone: "",
    contactEmail: "",

    // Terms
    agreeTerms: false,
  });

  const featuresList = [
    "Swimming Pool",
    "Gym",
    "Parking",
    "Security",
    "Garden",
    "Balcony",
    "Air Conditioning",
    "Heating",
    "Elevator",
    "Pet Friendly",
    "Furnished",
    "Internet",
    "Cable TV",
    "Water View",
    "Mountain View",
    "City View",
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFeatureToggle = (feature) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature],
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    // في التطبيق الحقيقي، هنا سيتم رفع الصور إلى السيرفر
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...files.slice(0, 10 - prev.images.length)], // حد أقصى 10 صور
    }));
  };

  const removeImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا سيتم إرسال البيانات إلى API
    console.log("Property data:", formData);
    alert("Property submitted successfully!");
  };

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              List Your Property
            </h1>
            <p className="text-gray-600">
              Reach thousands of potential buyers and renters
            </p>
          </div>

          {/* Progress Bar */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3, 4, 5].map((stepNum) => (
                <div key={stepNum} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step >= stepNum
                        ? "bg-primary-600 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {stepNum}
                  </div>
                  {stepNum < 5 && (
                    <div
                      className={`w-12 h-1 mx-2 ${
                        step > stepNum ? "bg-primary-600" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-between text-sm text-gray-600">
              <span>Basic Info</span>
              <span>Details</span>
              <span>Location</span>
              <span>Features</span>
              <span>Media & Contact</span>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            {/* Step 1: Basic Information */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Basic Information
                </h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Property Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary-500"
                    placeholder="e.g., Modern Apartment in New Cairo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary-500"
                    placeholder="Describe your property in detail..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Type *
                    </label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary-500"
                    >
                      <option value="sale">For Sale</option>
                      <option value="rent">For Rent</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Category *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary-500"
                    >
                      <option value="apartment">Apartment</option>
                      <option value="villa">Villa</option>
                      <option value="townhouse">Townhouse</option>
                      <option value="duplex">Duplex</option>
                      <option value="studio">Studio</option>
                      <option value="commercial">Commercial</option>
                      <option value="land">Land</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Price *
                    </label>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary-500"
                      placeholder="Enter price"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Property Details */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Property Details
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Bedrooms *
                    </label>
                    <input
                      type="number"
                      name="bedrooms"
                      value={formData.bedrooms}
                      onChange={handleInputChange}
                      required
                      min="0"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Bathrooms *
                    </label>
                    <input
                      type="number"
                      name="bathrooms"
                      value={formData.bathrooms}
                      onChange={handleInputChange}
                      required
                      min="0"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Area (sqft) *
                    </label>
                    <input
                      type="number"
                      name="area"
                      value={formData.area}
                      onChange={handleInputChange}
                      required
                      min="0"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Floor
                    </label>
                    <input
                      type="number"
                      name="floor"
                      value={formData.floor}
                      onChange={handleInputChange}
                      min="0"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Total Floors
                    </label>
                    <input
                      type="number"
                      name="totalFloors"
                      value={formData.totalFloors}
                      onChange={handleInputChange}
                      min="0"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Year Built
                    </label>
                    <input
                      type="number"
                      name="yearBuilt"
                      value={formData.yearBuilt}
                      onChange={handleInputChange}
                      min="1900"
                      max={new Date().getFullYear()}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Location */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Location Details
                </h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary-500"
                    placeholder="Enter full address"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City *
                    </label>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary-500"
                    >
                      <option value="">Select City</option>
                      <option value="cairo">Cairo</option>
                      <option value="giza">Giza</option>
                      <option value="alexandria">Alexandria</option>
                      <option value="sharqia">Sharqia</option>
                      <option value="dakahlia">Dakahlia</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      District
                    </label>
                    <input
                      type="text"
                      name="district"
                      value={formData.district}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary-500"
                      placeholder="e.g., New Cairo, Maadi"
                    />
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-center text-gray-600">
                    <div className="text-4xl mb-2">🗺️</div>
                    <p>Interactive Map</p>
                    <p className="text-sm">(Map integration coming soon)</p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Features & Amenities */}
            {step === 4 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Features & Amenities
                </h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select Features
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {featuresList.map((feature) => (
                      <label
                        key={feature}
                        className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
                      >
                        <input
                          type="checkbox"
                          checked={formData.features.includes(feature)}
                          onChange={() => handleFeatureToggle(feature)}
                          className="mr-2"
                        />
                        <span>{feature}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Furnishing
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="furnished"
                        value="no"
                        checked={formData.furnished === "no"}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      <span>Unfurnished</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="furnished"
                        value="yes"
                        checked={formData.furnished === "yes"}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      <span>Furnished</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="furnished"
                        value="semi"
                        checked={formData.furnished === "semi"}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      <span>Semi-Furnished</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Media & Contact */}
            {step === 5 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Media & Contact Information
                </h2>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Property Images *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label htmlFor="image-upload" className="cursor-pointer">
                      <div className="text-4xl mb-2">📷</div>
                      <p className="text-gray-600">Click to upload images</p>
                      <p className="text-sm text-gray-500">Maximum 10 images</p>
                    </label>
                  </div>

                  {/* Image Preview */}
                  {formData.images.length > 0 && (
                    <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-2">
                      {formData.images.map((image, index) => (
                        <div key={index} className="relative">
                          <img
                            src={URL.createObjectURL(image)}
                            alt={`Preview ${index + 1}`}
                            className="w-full h-20 object-cover rounded"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Phone *
                    </label>
                    <input
                      type="tel"
                      name="contactPhone"
                      value={formData.contactPhone}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary-500"
                  />
                </div>

                {/* Terms */}
                <div className="border-t pt-6">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleInputChange}
                      required
                      className="mr-2 mt-1"
                    />
                    <span className="text-sm text-gray-700">
                      I confirm that I own this property or have the right to
                      list it. I agree to the{" "}
                      <a
                        href="#"
                        className="text-primary-600 hover:text-primary-700"
                      >
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a
                        href="#"
                        className="text-primary-600 hover:text-primary-700"
                      >
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={prevStep}
                disabled={step === 1}
                className={`px-6 py-2 rounded-lg ${
                  step === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Previous
              </button>

              {step < 5 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Submit Property
                </button>
              )}
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
