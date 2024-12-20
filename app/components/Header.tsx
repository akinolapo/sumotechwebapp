'use client'

import { FaUserCircle, FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { FaBitcoin } from 'react-icons/fa6';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#0D1421] text-white">
      {/* Main Header */} 
      <div className="container mx-auto flex justify-between items-center py-4 px-4 lg:px-0">
        {/* Left Section */}
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold flex items-center gap-2"><FaBitcoin/> SumoTech</Link>
          <nav className="hidden lg:flex ml-8 space-x-6">
            <a href="#" className="hover:text-primary">Cryptocurrencies</a>
            <a href="#" className="hover:text-primary">Exchanges</a>
            <a href="#" className="hover:text-primary">Community</a>
          </nav>
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2 rounded-md bg-[#141b29] text-white border border-[#2a3b4f] focus:outline-none focus:border-primary"
          />
          <Link href="/signup">
          <button className="bg-primary px-4 py-2 rounded-md hover:bg-[#00b385] transition">
            Sign Up
          </button>
          </Link>
          <Link href="/account">
          <FaUserCircle size={28} className="cursor-pointer" />
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <FaBars size={24} onClick={toggleMenu} className="cursor-pointer" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#192231] text-white py-4 px-4">
          <nav className="flex flex-col space-y-2">
            <a href="#" className="hover:text-primary">Cryptocurrencies</a>
            <a href="#" className="hover:text-primary">Exchanges</a>
            <a href="#" className="hover:text-primary">Community</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
