import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              About MAWA
            </h1>
            <p className="text-xl text-slate-600">
              Broker-free real estate platform connecting buyers and sellers
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                Our Mission
              </h2>
              <p className="text-slate-600">
                MAWA aims to revolutionize real estate by eliminating brokers
                and enabling direct connections between property owners and
                buyers, making real estate transactions transparent, efficient,
                and cost-effective.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                Why MAWA?
              </h2>
              <ul className="text-slate-600 space-y-2">
                <li>✓ Zero Commission Fees</li>
                <li>✓ Direct Contact with Verified Owners</li>
                <li>✓ AI-Powered Search</li>
                <li>✓ Secure Transactions</li>
              </ul>
            </section>

            <section className="flex justify-center gap-4 pt-6">
              <Link
                href="/"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
              >
                Back to Home
              </Link>
              <Link
                href="/Search"
                className="bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition-colors font-semibold"
              >
                Browse Properties
              </Link>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
