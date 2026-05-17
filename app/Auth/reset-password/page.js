"use client";

import { Suspense, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { authApi } from "../../services/api";

function ResetPasswordContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    email: "",
    code: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showConfirmError, setShowConfirmError] = useState(false);

  useEffect(() => {
    // Auto-fill email from URL
    const email = searchParams.get("email");
    if (email) {
      setFormData(prev => ({ ...prev, email }));
    }
  }, [searchParams]);

  const handleChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value,
    }));

    if (field === "confirmPassword") {
      if (formData.newPassword !== e.target.value) {
        setShowConfirmError(true);
      } else {
        setShowConfirmError(false);
      }
    } else if (field === "newPassword") {
      if (formData.confirmPassword && formData.confirmPassword !== e.target.value) {
        setShowConfirmError(true);
      } else {
        setShowConfirmError(false);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    setShowConfirmError(false);

    // Validate password fields
    if (formData.newPassword !== formData.confirmPassword) {
      setShowConfirmError(true);
      setError("تأكيد كلمة المرور لا يتطابق");
      setLoading(false);
      return;
    }

    try {
      await authApi.resetPassword({
        email: formData.email,
        code: formData.code,
        newPassword: formData.newPassword,
      });
      setSuccess("تم إعادة تعيين كلمة المرور بنجاح");
      setTimeout(() => {
        router.push("/Auth/login");
      }, 2000);
    } catch (err) {
      setError(err?.response?.data?.message || "فشل إعادة تعيين كلمة المرور");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">
          إعادة تعيين كلمة المرور
        </h1>

        {error && (
          <p className="text-red-500 mb-3 text-sm">{error}</p>
        )}

        {success && (
          <p className="text-green-500 mb-3 text-sm">{success}</p>
        )}

        {showConfirmError && (
          <p className="text-red-500 mb-3 text-sm">تأكد من تطابق كلمة المرور</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">البريد الإلكتروني</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange("email")}
              className="w-full border rounded-xl px-3 py-2"
              required
              readOnly={!!searchParams.get("email")}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">رمز التأكيد</label>
            <input
              type="text"
              name="code"
              placeholder="أدخل الرمز المرسل لبريدك"
              value={formData.code}
              onChange={handleChange("code")}
              className="w-full border rounded-xl px-3 py-2"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">كلمة المرور الجديدة</label>
            <input
              type="password"
              name="newPassword"
              placeholder="حدد كلمة مرور جديدة"
              value={formData.newPassword}
              onChange={handleChange("newPassword")}
              className="w-full border rounded-xl px-3 py-2"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">تأكيد كلمة المرور الجديدة</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="أعد إدخال كلمة المرور الجديدة"
              value={formData.confirmPassword}
              onChange={handleChange("confirmPassword")}
              className="w-full border rounded-xl px-3 py-2"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-xl text-white transition ${
              loading
                ? "bg-gray-400"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {loading ? "جاري إعادة التعيين..." : "إعادة تعيين كلمة المرور"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => router.push("/Auth/forget-password")}
            className="px-4 py-2 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-50"
          >
            العودة
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordContent />
    </Suspense>
  );
}
