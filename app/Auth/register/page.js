"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authApi } from "../../services/api";

export default function RegisterPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userType: "User",
    companyName: "",
    logo: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const registrationPayload = {
      email: formData.email,
      password: formData.password,
      firstName: formData.firstName,
      lastName: formData.lastName,
      userType: formData.userType,
      companyName: formData.userType === "Company" ? formData.companyName : "",
      logo: formData.userType === "Company" ? formData.logo : "",
    };

    try {
      const registrationResult = await authApi.register(registrationPayload);
      const userId = registrationResult?.user?.id || registrationResult?.userId || "";
      const code = registrationResult?.confirmationCode || registrationResult?.code || "";

      if (userId && code) {
        router.push(`/Auth/confirm-email?userId=${encodeURIComponent(userId)}&code=${encodeURIComponent(code)}`);
      } else if (formData.userType === "Company") {
        router.push("/Agency/Create-Page?from=registration");
      } else {
        router.push("/Auth/login");
      }
    } catch (err) {
      setError(err?.response?.data?.message || err?.response?.data?.title || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-11 flex items-center justify-center bg-slate-50 text-right">
      <div className="surface-card px-8 py-4 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">إنشاء حساب</h1>

        {error && <p className="text-red-500 mb-3 text-sm">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="firstName"
            placeholder="الاسم الأول"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border rounded-xl px-3 py-2 text-right"
            required
          />

          <input
            name="lastName"
            placeholder="اسم العائلة"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border rounded-xl px-3 py-2 text-right"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="البريد الإلكتروني"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-xl px-3 py-2 text-right"
            required
          />

          <select
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            className="w-full border rounded-xl px-3 py-2"
          >
            <option value="User">مستخدم</option>
            <option value="Company">شركة</option>
          </select>

          {formData.userType === "Company" && (
            <>
              <input
                name="companyName"
                placeholder="اسم الشركة"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full border rounded-xl px-3 py-2 text-right"
              />

              <input
                name="logo"
                placeholder="رابط شعار الشركة"
                value={formData.logo}
                onChange={handleChange}
                className="w-full border rounded-xl px-3 py-2 text-right"
              />
            </>
          )}

          <input
            type="password"
            name="password"
            placeholder="كلمة المرور"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded-xl px-3 py-2 text-right"
            required
          />

          <button type="submit" disabled={loading} className="btn-primary w-full">
            {loading ? "جارٍ التسجيل..." : "تسجيل"}
          </button>
        </form>

        <p className="mt-4 text-sm">
          لديك حساب بالفعل؟{" "}
          <a href="/Auth/login" className="text-indigo-600">
            تسجيل الدخول
          </a>
        </p>
      </div>
    </div>
  );
}
