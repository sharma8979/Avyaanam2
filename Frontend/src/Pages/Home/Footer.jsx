import React from "react";
import { Link } from "react-router-dom"; // Import the Link component

const Footer = () => {
  return (
    <footer className="bg-cream  py-8 mt-16">
      <div className="container mx-auto text-center">
        {/* Logo and Brand Name */}
        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">Avyaanam</h2>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-6 mb-6">
          {/* Internal navigation links */}
          <Link
            to="/about" // Internal link to About page
            className="text-gray-800 hover:text-blue-500"
          >
            About
          </Link>
          <Link
            to="/services" // Internal link to Services page
            className="text-gray-800 hover:text-blue-600"
          >
            Services
          </Link>
          <Link
            to="/blog" // Internal link to Blog page
            className="text-gray-800 hover:text-blue-400"
          >
            Blog
          </Link>
          <Link
            to="/contact" // Internal link to Contact page
            className="text-gray-800 hover:text-red-600"
          >
            Contact
          </Link>
        </div>

        {/* External Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-500"
          >
            <i className="fab fa-instagram fa-x"></i>
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-600"
          >
            <i className="fab fa-facebook fa-x"></i>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-400"
          >
            <i className="fab fa-twitter fa-x"></i>
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-red-600"
          >
            <i className="fab fa-youtube fa-x"></i>
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-600">
          Copyright © 2020 Avyaanam - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
