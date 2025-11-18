export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">MAWA</h3>
            <p className="text-gray-300">
              Smart Real Estate Platform without Brokers. Transforming the
              Egyptian real estate market.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Buy Property
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Rent Property
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  List Property
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  For Agencies
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="text-gray-300 space-y-2">
              <p>Email: info@mawa.com</p>
              <p>Phone: +20 123 456 7890</p>
              <p>Cairo, Egypt</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 MAWA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
