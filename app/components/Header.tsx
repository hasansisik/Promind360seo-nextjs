'use client';

import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-50/95 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Promind360
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
