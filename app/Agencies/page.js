import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function AgenciesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Real Estate Agencies
            </h1>
            <p className="text-xl text-slate-600">
              Connect with verified real estate agencies in Egypt
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-center">
            <p className="text-slate-600 mb-6">
              Agencies directory is coming soon.
            </p>
            <Link
              href="/"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
