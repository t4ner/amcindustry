import React from "react";
import logo from "/logo/logo.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer
      className=" shadow bg-gray-100 mt-10 md:mt-20"
      style={{ overflowY: "hidden", pointerEvents: "auto" }}
    >
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-20" alt="Leon Logo" />
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 ">
            <li>
              <Link to="/" className="hover:underline me-4 md:me-6">
                Home
              </Link>
            </li>
            <li>
              <Link to="/whoweare" className="hover:underline me-4 md:me-6">
                Who We Are
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:underline me-4 md:me-6">
                Services
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-center text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <Link to="/" className="hover:underline">
            AMC CONSULTING REPRESENTATIVE & MANAGEMENT™
          </Link>
          . All Rights Reserved.
        </span>
        <p className="block text-sm text-center text-gray-500 sm:text-center dark:text-gray-400">
          <a href="https://ttyazilim.com.tr/">
            Designed By TTYazılım
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
