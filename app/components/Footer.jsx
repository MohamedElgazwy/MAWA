export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
                M
              </div>
              <span className="text-2xl font-bold text-white">MAWA</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              The first AI-powered, broker-free real estate platform in Egypt.
              We connect owners and buyers directly for a transparent
              experience.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              {["FB", "TW", "IN", "LI"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors"
                >
                  {/* Replace with SVGs */}
                  <span className="text-xs font-bold">{social}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Discover</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/Search?type=sale"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Buy a Home
                </a>
              </li>
              <li>
                <a
                  href="/Search?type=rent"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Rent a Home
                </a>
              </li>
              <li>
                <a
                  href="/Agencies"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Reliable Agencies
                </a>
              </li>
              <li>
                <a
                  href="/new-projects"
                  className="hover:text-indigo-400 transition-colors"
                >
                  New Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold mb-6">Support</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/help"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-6">Stay Updated</h3>
            <p className="text-slate-400 text-sm mb-4">
              Latest listings delivered directly to your inbox.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <button className="bg-emerald-500 text-white font-bold py-3 rounded-lg hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-900/20">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2025 MAWA Platform. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
