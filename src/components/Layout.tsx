import { Link, Outlet, useLocation } from "react-router-dom";
import { Users, Menu, X } from "lucide-react";

import { useState } from "react";
import { useEffect } from "react";

function Layout() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        location.pathname === "/about" ||
        location.pathname === "/resources"
      ) {
        setIsScrolled(window.scrollY > 50);
      } else {
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  console.log(isScrolled)

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Navigation */}
      <nav className="bg-transparent fixed w-full z-50">
        <div
          className={`max-w-7xl sm:px-6 lg:px-8 py-6 bg-transparent mx-auto items-center  px-4  transition-all duration-300 ${
            isScrolled
              ? "bg-white backdrop-blur-md shadow-md"
              : ""
          }`}
        >
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Users className="h-8 w-8 text-purple-600" />
              <span className="text-xl font-bold text-gray-900">
                TechTransit
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              <Link
                to="/"
                className={`${
                  location.pathname === "/"
                    ? "text-purple-600"
                    : "text-gray-600 hover:text-purple-600"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`${
                  location.pathname === "/about"
                    ? "text-purple-600"
                    : "text-gray-600 hover:text-purple-600"
                }`}
              >
                About
              </Link>
              <Link
                to="/resources"
                className={`${
                  location.pathname === "/resources"
                    ? "text-purple-600"
                    : "text-gray-600 hover:text-purple-600"
                }`}
              >
                Resources
              </Link>
              <Link
                to="/community"
                className={`${
                  location.pathname === "/community"
                    ? "text-purple-600"
                    : "text-gray-600 hover:text-purple-600"
                }`}
              >
                Community
              </Link>
            </div>

            <button className="hidden md:flex bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
              Join Us
            </button>

            {/* Hamburger button */}
            <button className="flex items-center md:hidden" onClick={toggleNav}>
              {isNavOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/*Mobile Menu dropdown */}
        {isNavOpen && (
          <div
            className={`md:hidden absolute w-full top-[calc(100%+1rem)] left-0 bg-white shadow-md z-50 p-6 rounded-b-lg `}
          >
            <nav className="flex flex-col space-y-4 text-center">
              <Link
                to="/"
                className={`${
                  location.pathname === "/"
                    ? "text-purple-600"
                    : "text-gray-600 hover:text-purple-600"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`${
                  location.pathname === "/about"
                    ? "text-purple-600"
                    : "text-gray-600 hover:text-purple-600"
                }`}
              >
                About
              </Link>
              <Link
                to="/resources"
                className={`${
                  location.pathname === "/resources"
                    ? "text-purple-600"
                    : "text-gray-600 hover:text-purple-600"
                }`}
              >
                Resources
              </Link>
              <Link
                to="/community"
                className={`${
                  location.pathname === "/community"
                    ? "text-purple-600"
                    : "text-gray-600 hover:text-purple-600"
                }`}
              >
                Community
              </Link>

              <button className=" bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
                Join Us
              </button>
            </nav>
          </div>
        )}
      </nav>

      <Outlet />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Users className="h-6 w-6" />
                <span className="text-lg font-bold">TechTransit</span>
              </div>
              <p className="text-gray-400">
                Empowering minorities in tech through community and support.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/resources" className="hover:text-white">
                    Learning Paths
                  </Link>
                </li>
                <li>
                  <Link to="/mentorship" className="hover:text-white">
                    Mentorship
                  </Link>
                </li>
                <li>
                  <Link to="/workshops" className="hover:text-white">
                    Workshops
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/forums" className="hover:text-white">
                    Forums
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="hover:text-white">
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="/success-stories" className="hover:text-white">
                    Success Stories
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/newsletter" className="hover:text-white">
                    Newsletter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TechTransit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
