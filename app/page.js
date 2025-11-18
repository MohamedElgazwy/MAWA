import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

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
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span>🛏️ 4 beds</span>
                    <span>🛁 3 baths</span>
                    <span>📏 2,800 sqft</span>
                  </div>
                  <button className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>

              {/* Property Card 2 */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Modern Apartment in Sheikh Zayed
                  </h3>
                  <p className="text-2xl font-bold text-primary-600 mb-4">
                    $12,000/mo
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span>🛏️ 3 beds</span>
                    <span>🛁 2 baths</span>
                    <span>📏 1,500 sqft</span>
                  </div>
                  <button className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors">
                    View Details
                  </button>
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
                    $85,000
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span>🛏️ 1 bed</span>
                    <span>🛁 1 bath</span>
                    <span>📏 600 sqft</span>
                  </div>
                  <button className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="bg-white border border-primary-600 text-primary-600 px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors font-semibold">
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
                Simple, transparent, and broker-free real estate experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Search & Discover
                </h3>
                <p className="text-gray-600">
                  Use our AI-powered search to find properties that match your
                  preferences
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Direct Contact
                </h3>
                <p className="text-gray-600">
                  Connect directly with verified property owners without
                  intermediaries
                </p>
              </div>

              <div className="text-center p-6">
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
              <button className="bg-white text-primary-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Browse Properties
              </button>
              <button className="bg-transparent border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-primary-600 transition-colors font-semibold">
                List Your Property
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
