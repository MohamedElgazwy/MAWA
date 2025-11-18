"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Mock data للمستخدم والعقارات
const userData = {
  name: "Ahmed Mohamed",
  email: "ahmed@example.com",
  phone: "+20 123 456 7890",
  joined: "January 2024",
  userType: "seller",
  verified: true,
};

const userProperties = [
  {
    id: 1,
    title: "Modern Apartment in New Cairo",
    type: "sale",
    price: 250000,
    status: "published",
    views: 1247,
    inquiries: 23,
    date: "2024-01-15",
    image: "/images/property1.jpg",
  },
  {
    id: 2,
    title: "Villa in Sheikh Zayed",
    type: "rent",
    price: 15000,
    status: "pending",
    views: 0,
    inquiries: 0,
    date: "2024-01-20",
    image: "/images/property2.jpg",
  },
  {
    id: 3,
    title: "Studio in Downtown",
    type: "sale",
    price: 120000,
    status: "draft",
    views: 0,
    inquiries: 0,
    date: "2024-01-18",
    image: "/images/property3.jpg",
  },
];

const statsData = {
  totalProperties: 3,
  published: 1,
  pending: 1,
  draft: 1,
  totalViews: 1247,
  totalInquiries: 23,
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [showAddProperty, setShowAddProperty] = useState(false);

  const getStatusBadge = (status) => {
    const statusStyles = {
      published: "bg-green-100 text-green-800",
      pending: "bg-yellow-100 text-yellow-800",
      draft: "bg-gray-100 text-gray-800",
      rejected: "bg-red-100 text-red-800",
    };

    return (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[status]}`}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-gray-50">
        {/* Dashboard Header */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600 mt-1">
                  Welcome back, {userData.name} 👋
                </p>
              </div>

              <button
                onClick={() => setShowAddProperty(true)}
                className="mt-4 md:mt-0 bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
              >
                + Add New Property
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-8">
                {/* User Profile */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary-600 font-semibold text-xl">
                      {userData.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900">
                    {userData.name}
                  </h3>
                  <p className="text-sm text-gray-600">{userData.email}</p>
                  {userData.verified && (
                    <div className="flex items-center gap-1 text-sm text-green-600 justify-center mt-1">
                      ✅ Verified
                    </div>
                  )}
                </div>

                {/* Navigation */}
                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      activeTab === "overview"
                        ? "bg-primary-100 text-primary-700 font-semibold"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    📊 Overview
                  </button>
                  <button
                    onClick={() => setActiveTab("properties")}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      activeTab === "properties"
                        ? "bg-primary-100 text-primary-700 font-semibold"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    🏠 My Properties
                  </button>
                  <button
                    onClick={() => setActiveTab("inquiries")}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      activeTab === "inquiries"
                        ? "bg-primary-100 text-primary-700 font-semibold"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    💬 Inquiries
                  </button>
                  <button
                    onClick={() => setActiveTab("profile")}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      activeTab === "profile"
                        ? "bg-primary-100 text-primary-700 font-semibold"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    👤 Profile Settings
                  </button>
                  <button
                    onClick={() => setActiveTab("verification")}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      activeTab === "verification"
                        ? "bg-primary-100 text-primary-700 font-semibold"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    ✅ Verification
                  </button>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Overview Tab */}
              {activeTab === "overview" && (
                <div className="space-y-6">
                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">
                            Total Properties
                          </p>
                          <p className="text-2xl font-bold text-gray-900">
                            {statsData.totalProperties}
                          </p>
                        </div>
                        <div className="text-2xl">🏠</div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Total Views</p>
                          <p className="text-2xl font-bold text-gray-900">
                            {statsData.totalViews}
                          </p>
                        </div>
                        <div className="text-2xl">👁️</div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Inquiries</p>
                          <p className="text-2xl font-bold text-gray-900">
                            {statsData.totalInquiries}
                          </p>
                        </div>
                        <div className="text-2xl">💬</div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Published</p>
                          <p className="text-2xl font-bold text-gray-900">
                            {statsData.published}
                          </p>
                        </div>
                        <div className="text-2xl">✅</div>
                      </div>
                    </div>
                  </div>

                  {/* Recent Properties */}
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="p-6 border-b border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Recent Properties
                      </h3>
                    </div>
                    <div className="p-6">
                      <div className="space-y-4">
                        {userProperties.slice(0, 3).map((property) => (
                          <div
                            key={property.id}
                            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                          >
                            <div className="flex items-center gap-4">
                              <img
                                src={property.image}
                                alt={property.title}
                                className="w-16 h-16 object-cover rounded"
                              />
                              <div>
                                <h4 className="font-semibold text-gray-900">
                                  {property.title}
                                </h4>
                                <div className="flex items-center gap-4 mt-1">
                                  <span className="text-sm text-gray-600">
                                    ${property.price.toLocaleString()}
                                  </span>
                                  {getStatusBadge(property.status)}
                                </div>
                              </div>
                            </div>
                            <button className="text-primary-600 hover:text-primary-700 text-sm font-semibold">
                              View
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* My Properties Tab */}
              {activeTab === "properties" && (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">
                        My Properties
                      </h3>
                      <div className="flex gap-2 mt-2 md:mt-0">
                        <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                          <option>All Status</option>
                          <option>Published</option>
                          <option>Pending</option>
                          <option>Draft</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-left py-3 text-sm font-semibold text-gray-600">
                              Property
                            </th>
                            <th className="text-left py-3 text-sm font-semibold text-gray-600">
                              Price
                            </th>
                            <th className="text-left py-3 text-sm font-semibold text-gray-600">
                              Status
                            </th>
                            <th className="text-left py-3 text-sm font-semibold text-gray-600">
                              Views
                            </th>
                            <th className="text-left py-3 text-sm font-semibold text-gray-600">
                              Inquiries
                            </th>
                            <th className="text-left py-3 text-sm font-semibold text-gray-600">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {userProperties.map((property) => (
                            <tr
                              key={property.id}
                              className="border-b border-gray-200"
                            >
                              <td className="py-4">
                                <div className="flex items-center gap-3">
                                  <img
                                    src={property.image}
                                    alt={property.title}
                                    className="w-12 h-12 object-cover rounded"
                                  />
                                  <div>
                                    <div className="font-medium text-gray-900">
                                      {property.title}
                                    </div>
                                    <div className="text-sm text-gray-600">
                                      {property.date}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="py-4">
                                <div className="font-semibold text-gray-900">
                                  ${property.price.toLocaleString()}
                                  {property.type === "rent" && (
                                    <span className="text-sm text-gray-600">
                                      /mo
                                    </span>
                                  )}
                                </div>
                              </td>
                              <td className="py-4">
                                {getStatusBadge(property.status)}
                              </td>
                              <td className="py-4 text-gray-600">
                                {property.views}
                              </td>
                              <td className="py-4 text-gray-600">
                                {property.inquiries}
                              </td>
                              <td className="py-4">
                                <div className="flex gap-2">
                                  <button className="text-primary-600 hover:text-primary-700 text-sm">
                                    Edit
                                  </button>
                                  <button className="text-red-600 hover:text-red-700 text-sm">
                                    Delete
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Profile Settings Tab */}
              {activeTab === "profile" && (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Profile Settings
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="max-w-2xl space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                          </label>
                          <input
                            type="text"
                            defaultValue={userData.name}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                          </label>
                          <input
                            type="email"
                            defaultValue={userData.email}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          defaultValue={userData.phone}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          User Type
                        </label>
                        <div className="flex gap-4">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="userType"
                              value="buyer"
                              className="mr-2"
                            />
                            <span>Buyer/Renter</span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="userType"
                              value="seller"
                              defaultChecked
                              className="mr-2"
                            />
                            <span>Seller/Landlord</span>
                          </label>
                        </div>
                      </div>

                      <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Add more tabs for inquiries, verification, etc. */}
              {(activeTab === "inquiries" || activeTab === "verification") && (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
                  <div className="text-4xl mb-4">🚧</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Under Development
                  </h3>
                  <p className="text-gray-600">This section is coming soon!</p>
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
