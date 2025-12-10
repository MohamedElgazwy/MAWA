"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import api from "../services/api"; // استدعاء ملف الاتصال الجديد

export default function AuthPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [step, setStep] = useState(1); // 1: Form, 2: OTP
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "", // أو الهاتف حسب الـ Use Case
    phone: "",
    password: "",
    confirmPassword: "",
    role: "Seeker", // القيم الافتراضية: Seeker, Owner, Agency
    otp: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(""); // مسح الأخطاء عند الكتابة
  };

  // 1. معالجة إرسال النموذج الأساسي
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      if (isLogin) {
        // --- منطق تسجيل الدخول [cite: 291] ---
        const response = await api.post("/auth/login", {
          email: formData.email,
          password: formData.password,
        });

        // تخزين التوكن وبيانات المستخدم
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        // التوجيه حسب الدور (يمكن تعديل المسارات لاحقاً)
        if (response.data.user.role === "Admin")
          router.push("/admin/dashboard");
        else router.push("/dashboard");
      } else {
        // --- منطق التسجيل (طلب OTP)  ---
        // في هذه الخطوة، النظام يتحقق من البيانات ويرسل الـ OTP
        await api.post("/auth/register-init", {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
          role: formData.role,
        });

        // الانتقال لخطوة التحقق
        setStep(2);
      }
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  // 2. معالجة التحقق من الـ OTP
  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // إرسال الـ OTP لإتمام إنشاء الحساب
      const response = await api.post("/auth/verify-otp", {
        email: formData.email,
        otp: formData.otp,
      });

      // تسجيل الدخول تلقائياً بعد نجاح التحقق
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      router.push("/dashboard");
    } catch (err) {
      setError("Invalid OTP. Please check code and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-gray-50 py-12">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
            {/* Tabs (Login vs Sign Up) - Only visible in Step 1 */}
            {step === 1 && (
              <div className="flex border-b border-gray-200 mb-6">
                <button
                  onClick={() => {
                    setIsLogin(true);
                    setError("");
                  }}
                  className={`flex-1 py-3 text-center font-medium ${
                    isLogin
                      ? "text-primary-600 border-b-2 border-primary-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    setIsLogin(false);
                    setError("");
                  }}
                  className={`flex-1 py-3 text-center font-medium ${
                    !isLogin
                      ? "text-primary-600 border-b-2 border-primary-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Sign Up
                </button>
              </div>
            )}

            {/* Error Message Display */}
            {error && (
              <div className="mb-4 p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-200">
                {error}
              </div>
            )}

            {/* STEP 1: Main Form */}
            {step === 1 ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Sign Up Fields */}
                {!isLogin && (
                  <>
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
                        placeholder="Enter full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Account Type [cite: 206]
                      </label>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary-500 bg-white"
                      >
                        <option value="Seeker">Seeker (Buyer/Tenant)</option>
                        <option value="Owner">Property Owner</option>
                        <option value="Agency">Real Estate Agency</option>
                      </select>
                    </div>

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
                        placeholder="+20 1xx xxx xxxx"
                      />
                    </div>
                  </>
                )}

                {/* Common Fields */}
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
                    placeholder="name@example.com"
                  />
                </div>

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
                    placeholder="••••••••"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors font-bold text-base disabled:bg-primary-400 shadow-lg shadow-primary-600/30"
                >
                  {isLoading
                    ? "Processing..."
                    : isLogin
                    ? "Sign In"
                    : "Register & Verify"}
                </button>
              </form>
            ) : (
              /* STEP 2: OTP Verification Form  */
              <form onSubmit={handleVerifyOTP} className="space-y-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Verify Your Email
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    We sent a verification code to{" "}
                    <strong>{formData.email}</strong>
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Verification Code (OTP)
                  </label>
                  <input
                    type="text"
                    name="otp"
                    value={formData.otp}
                    onChange={handleInputChange}
                    required
                    className="w-full text-center tracking-widest text-2xl border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary-500"
                    placeholder="123456"
                    maxLength={6}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors font-bold text-base disabled:bg-primary-400 shadow-lg shadow-primary-600/30"
                >
                  {isLoading ? "Verifying..." : "Confirm & Login"}
                </button>

                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-full text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 py-2 rounded transition-colors"
                >
                  Back to Registration
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
