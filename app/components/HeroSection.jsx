export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-primary-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Your Dream
            <span className="text-primary-600"> Home</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover verified properties directly from owners. No brokers, no
            hidden fees. AI-powered search for the perfect match.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-2">
            <div className="flex flex-col md:flex-row gap-2">
              <input
                type="text"
                placeholder="Search by location, property type, or features..."
                className="flex-grow px-4 py-3 border-none focus:outline-none rounded-lg"
              />
              <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap">
                Search Properties
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">10,000+</div>
              <div className="text-gray-600">Properties Listed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">5,000+</div>
              <div className="text-gray-600">Verified Owners</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">95%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
