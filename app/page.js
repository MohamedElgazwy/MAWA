import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />

        {/* Featured Properties Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Featured Properties
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover our handpicked selection of premium properties
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Property Card 1 */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Luxury Villa in New Cairo
                  </h3>
                  <p className="text-2xl font-bold text-primary-600 mb-4">
                    $350,000
                  </p>
                  <p className="text-gray-600 text-sm mb-3">
                    A stunning modern villa in the heart of New Cairo with
                    premium finishes.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>🛏️ 4 beds</span>
                    <span>🛁 3 baths</span>
                    <span>📏 3000 sqft</span>
                  </div>
                </div>
              </div>

              {/* Property Card 2 */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Spacious Apartment in Maadi
                  </h3>
                  <p className="text-2xl font-bold text-primary-600 mb-4">
                    $1,500 /mo
                  </p>
                  <p className="text-gray-600 text-sm mb-3">
                    Bright and airy apartment, perfect for families, close to
                    amenities.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>🛏️ 3 beds</span>
                    <span>🛁 2 baths</span>
                    <span>📏 1800 sqft</span>
                  </div>
                </div>
              </div>

              {/* Property Card 3 */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Studio in Downtown
                  </h3>
                  <p className="text-2xl font-bold text-primary-600 mb-4">
                    $120,000
                  </p>
                  <p className="text-gray-600 text-sm mb-3">
                    A compact and modern studio, ideal for young professionals.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>🛏️ 1 bed</span>
                    <span>🛁 1 bath</span>
                    <span>📏 600 sqft</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <button className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors font-bold text-base">
                View All Properties
              </button>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How MAWA Works
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Simple steps to find or list your property, broker-free
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Smart Search
                </h3>
                <p className="text-gray-600">
                  Use our AI to find properties that truly match your criteria
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Direct Contact
                </h3>
                <p className="text-gray-600">
                  Communicate directly with verified owners, eliminating brokers
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Secure Transaction
                </h3>
                <p className="text-gray-600">
                  Complete your transaction with confidence and security
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Find Your Dream Property?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join thousands of satisfied users who found their perfect home
              through MAWA
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/Search?type=sale"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-center"
              >
                Browse Properties
              </Link>
              <Link
                href="/Add-property"
                className="bg-transparent border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition-colors font-semibold text-center"
              >
                List Your Property
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
