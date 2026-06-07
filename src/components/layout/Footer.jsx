import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <h3 className="text-lg font-bold mb-3">Aba Artisan Portfolio</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Connecting you with verified master craftsmen and artisans from Aba, Nigeria.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/marketplace" className="text-gray-400 hover:text-white transition-colors">Marketplace</Link></li>
              <li><Link to="/dashboard" className="text-gray-400 hover:text-white transition-colors">Dashboard</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-gray-400">Interior Decorators</span></li>
              <li><span className="text-gray-400">Welders</span></li>
              <li><span className="text-gray-400">Fashion Designers</span></li>
              <li><span className="text-gray-400">Fabricators</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Aba, Abia State, Nigeria</li>
              <li>info@abaartisan.com</li>
              <li>+234 800 123 4567</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-4 sm:pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Aba Artisan Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
