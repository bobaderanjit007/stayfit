// components/Footer.js
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold text-white">StayFit</h2>
          <p className="mt-4 text-gray-400">
            StayFit is your ultimate fitness companion, helping you stay fit and
            reach your goals.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about">
                <span className="hover:text-white transition">About Us</span>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <span className="hover:text-white transition">Services</span>
              </Link>
            </li>
            <li>
              <Link href="/pricing">
                <span className="hover:text-white transition">Pricing</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="hover:text-white transition">Contact</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact and Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Connect with Us
          </h3>
          <ul className="space-y-2">
            <li>Email: support@gymfy.com</li>
            <li>Phone: +123 456 7890</li>
            <li>Address: 123 Fitness St, Gym City</li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
              className="hover:text-white transition"
            >
              <FaFacebook size={24} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              aria-label="Twitter"
              className="hover:text-white transition"
            >
              <FaTwitter size={24} />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
              className="hover:text-white transition"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
              className="hover:text-white transition"
            >
              <FaLinkedin size={24} />
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8">
        © {new Date().getFullYear()} StayFit. All rights reserved.
      </div>
    </footer>
  );
}
