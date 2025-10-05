// components/layout/Header.tsx

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const accommodationTypes = ['Rooms', 'Mansion', 'Countryside', 'Beach', 'Cabins', 'Tiny Homes'];

const Header: React.FC = () => {
  return (
    <header className="w-full px-6 py-4 shadow-md flex flex-col md:flex-row items-center justify-between bg-white sticky top-0 z-50">
      
      {/* Logo */}
      <div className="flex items-center mb-4 md:mb-0">
        <Link href="/" passHref>
          <div className="flex items-center cursor-pointer">
            <Image src="/assets/images/logo.png" alt="Logo" width={40} height={40} />
            <span className="ml-2 font-bold text-lg">StayNest</span>
          </div>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="flex flex-1 max-w-md w-full mb-4 md:mb-0 md:mx-6">
        <input
          type="text"
          placeholder="Search by location or property..."
          className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Auth Buttons */}
      <div className="flex gap-4 items-center">
        <Link href="/signin" className="text-gray-600 hover:text-black font-medium">
          Sign In
        </Link>
        <Link
          href="/signup"
          className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Sign Up
        </Link>
      </div>

      {/* Accommodation Types (Nav) */}
      <nav className="w-full mt-4 md:mt-0 md:w-auto md:ml-6 overflow-x-auto scrollbar-hide">
        <ul className="flex gap-4 text-sm font-medium whitespace-nowrap">
          {accommodationTypes.map((type) => (
            <li key={type}>
              <Link
                href={`/accommodation/${type.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                {type}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
