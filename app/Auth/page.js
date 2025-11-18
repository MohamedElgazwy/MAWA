"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    userType: "buyer",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا سيتم إضافة منطق التسجيل/الدخول
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-gray-50 py-12">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          {/* Auth Card */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-6">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-3 text-center font-medium ${
                  isLogin
                    ? "text-primary-600 border-b-2 border-primary-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-3 text-center font-medium ${
                  !isLogin
                    ? "text-primary-600 border-b-2 border-primary-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field (Sign Up Only) */}
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required={!isLogin}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary-500"
                    placeholder="Enter your full name"
                  />
                </div>
              )}

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary-500"
                  placeholder="Enter your email"
                />
              </div>

              {/* Phone Field (Sign Up Only) */}
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required={!isLogin}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary-500"
                    placeholder="+20 123 456 7890"
                  />
                </div>
              )}

              {/* User Type (Sign Up Only) */}
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    I want to
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="userType"
                        value="buyer"
                        checked={formData.userType === "buyer"}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      <span>Buy/Rent</span>
                    </label>
                    <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="userType"
                        value="seller"
                        checked={formData.userType === "seller"}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      <span>Sell/List</span>
                    </label>
                  </div>
                </div>
              )}

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary-500"
                  placeholder="Enter your password"
                />
              </div>

              {/* Confirm Password (Sign Up Only) */}
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required={!isLogin}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary-500"
                    placeholder="Confirm your password"
                  />
                </div>
              )}

              {/* Remember Me & Forgot Password (Login Only) */}
              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm text-gray-700">Remember me</span>
                  </label>
                  <a
                    href="#"
                    className="text-sm text-primary-600 hover:text-primary-700"
                  >
                    Forgot password?
                  </a>
                </div>
              )}

              {/* Terms Agreement (Sign Up Only) */}
              {!isLogin && (
                <label className="flex items-start">
                  <input type="checkbox" className="mr-2 mt-1" required />
                  <span className="text-sm text-gray-700">
                    I agree to the{" "}
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
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
              >
                {isLogin ? "Sign In" : "Create Account"}
              </button>
            </form>

            {/* Social Login */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="mr-2">📱</span>
                  <span className="text-sm">Google</span>
                </button>
                <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="mr-2">📘</span>
                  <span className="text-sm">Facebook</span>
                </button>
              </div>
            </div>

            {/* Additional Links */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                {isLogin
                  ? "Don't have an account? "
                  : "Already have an account? "}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  {isLogin ? "Sign up" : "Sign in"}
                </button>
              </p>
            </div>
          </div>

          {/* Benefits Section (Sign Up Only) */}
          {!isLogin && (
            <div className="mt-8 bg-white rounded-lg shadow-md border border-gray-200 p-6">
              <h3 className="text-lg font-semibold mb-4 text-center">
                Why Join MAWA?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4">
                  <div className="text-2xl mb-2">🔒</div>
                  <h4 className="font-semibold mb-1">Secure</h4>
                  <p className="text-sm text-gray-600">
                    Verified properties and owners
                  </p>
                </div>
                <div className="p-4">
                  <div className="text-2xl mb-2">💬</div>
                  <h4 className="font-semibold mb-1">Direct Contact</h4>
                  <p className="text-sm text-gray-600">
                    Connect directly with owners
                  </p>
                </div>
                <div className="p-4">
                  <div className="text-2xl mb-2">🤖</div>
                  <h4 className="font-semibold mb-1">AI Powered</h4>
                  <p className="text-sm text-gray-600">Smart recommendations</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
