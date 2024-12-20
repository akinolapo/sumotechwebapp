'use client';

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* About Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">About Us</h2>
            <p className="text-sm">
              Your trusted platform for cryptocurrency tracking and insights. Stay updated with real-time market data and trends.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Markets
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <ul className="space-y-2 text-sm">
              <li>Email: support@cryptoapp.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: 123 Crypto Lane, Blockchain City</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-lg font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-600" />

        {/* Footer Bottom */}
        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} CryptoApp. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
