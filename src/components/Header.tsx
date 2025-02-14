import { NavLink } from "react-router-dom";
import { PlaneTakeoff } from "lucide-react";
import Logo from "@/assets/google-logo.png";
import { useState } from "react";

export const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <nav className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Google Logo" className="h-10 w-auto" />
          </div>

          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? "text-blue-600 underline underline-offset-8 decoration-2"
                    : "text-gray-600 hover:text-blue-600"
                }`
              }
            >
              Search flights
            </NavLink>
            <NavLink
              to="/saved"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? "text-blue-600 underline underline-offset-8 decoration-2"
                    : "text-gray-600 hover:text-blue-600"
                }`
              }
            >
              Saved trips
            </NavLink>
          </div>

          <button className="flex items-center space-x-2 border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-50 transition-colors">
            <PlaneTakeoff className="h-5 w-5 text-gray-600" />
            <span className="text-gray-600 text-sm">Sign in</span>
          </button>

          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="px-2 pt-2 space-y-1">
              <NavLink
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100"
              >
                Search flights
              </NavLink>
              <NavLink
                to="/saved"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100"
              >
                Saved trips
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
