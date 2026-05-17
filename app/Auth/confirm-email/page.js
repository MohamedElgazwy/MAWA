"use client";

import { Suspense, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { authApi } from "../../services/api";

function ConfirmEmailContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    userId: "",
    code: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    // Auto-fill parameters if they come from URL
    const userId = searchParams.get("userId");
    const code = searchParams.get("code");

    if (userId && code) {
      setFormData({ userId, code });
    }
  }, [searchParams]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await authApi.confirmEmail(formData);
      setSuccess("تم تأكيد البريد الإلكتروني بنجاح");
      setTimeout(() => {
        router.push("/Auth/login");
      }, 2000);
    } catch (err) {
      setError(err?.response?.data?.message || "فشل تأكيد البريد الإلكتروني");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">
          تأكيد البريد الإلكتروني
        </h1>

        {error && (
          <p className="text-red-500 mb-3 text-sm">{error}</p>
        )}

        {success && (
          <p className="text-green-500 mb-3 text-sm">{success}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">معرف المستخدم</label>
            <input
              type="text"
              name="userId"
              placeholder="أدخل معرّف المستخدم"
              value={formData.userId}
              onChange={handleChange}
              className="w-full border rounded-xl px-3 py-2"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">رمز التأكيد</label>
            <input
              type="text"
              name="code"
              placeholder="أدخل الرمز المرسل لبريدك الإلكتروني"
              value={formData.code}
              onChange={handleChange}
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
            {loading ? "جاري التأكيد..." : "تأكيد البريد الإلكتروني"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => router.push("/Auth/login")}
            className="px-4 py-2 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-50"
          >
            تسجيل الدخول
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ConfirmEmailPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ConfirmEmailContent />
    </Suspense>
  );
}
