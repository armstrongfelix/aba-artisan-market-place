import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md px-4 sm:px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-lg sm:text-xl font-bold text-blue-600 whitespace-nowrap"
        >
          Aba Artisan Portfolio
        </Link>

        <button
          className="sm:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>

        <ul
          className={`sm:flex gap-4 lg:gap-6 ${menuOpen ? "flex flex-col absolute top-16 left-0 w-full bg-white shadow-md p-4 z-50" : "hidden"}`}
        >
          <li>
            <Link
              to="/"
              className="block py-1 sm:py-0 hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/marketplace"
              className="block py-1 sm:py-0 hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Marketplace
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className="block py-1 sm:py-0 hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
