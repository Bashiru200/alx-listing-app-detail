// components/layout/Footer.tsx

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 px-6 mt-10 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo and Description */}
        <div>
          <div className="flex items-center mb-2">
            <Image src="/assets/images/logo.png" alt="Logo" width={30} height={30} />
            <span className="ml-2 font-bold text-lg">StayNest</span>
          </div>
          <p className="text-sm text-gray-600">
            Discover and book amazing places to stay all around the world.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-blue-600">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
            <li><Link href="/terms" className="hover:text-blue-600">Terms & Conditions</Link></li>
            <li><Link href="/privacy" className="hover:text-blue-600">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Social Media (Placeholder icons) */}
        <div>
          <h3 className="font-semibold mb-3">Connect</h3>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-blue-600">Facebook</Link>
            <Link href="#" className="hover:text-blue-600">Instagram</Link>
            <Link href="#" className="hover:text-blue-600">Twitter</Link>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-sm text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} StayNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
