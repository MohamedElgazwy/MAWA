"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authApi } from "../../services/api";

export default function ForgetPasswordPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await authApi.forgetPassword({ email });
      setSuccess("تم إرسال رمز إعادة تعيين كلمة المرور إلى بريدك الإلكتروني");
      setTimeout(() => {
        router.push(`/Auth/reset-password?email=${encodeURIComponent(email)}`);
      }, 2000);
    } catch (err) {
      setError(err?.response?.data?.message || "فشل إرسال رمز إعادة التعيين");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">
          نسيت كلمة المرور
        </h1>

        {error && (
          <p className="text-red-500 mb-3 text-sm">{error}</p>
        )}

        {success && (
          <p className="text-green-500 mb-3 text-sm">{success}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">البريد الإلكتروني</label>
            <input
              type="email"
              name="email"
              placeholder="أدخل بريدك الإلكتروني"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(""); setSuccess(""); }}
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
            {loading ? "جارٍ الإرسال..." : "إرسال رمز إعادة التعيين"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => router.push("/Auth/login")}
            className="px-4 py-2 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-50"
          >
            العودة لتسجيل الدخول
          </button>
        </div>
      </div>
    </div>
  );
}
