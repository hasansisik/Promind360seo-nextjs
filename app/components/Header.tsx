'use client';

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [selectedSector, setSelectedSector] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const sectors = [
    'Sektör Seçin',
    'E-ticaret',
    'Sağlık',
    'Eğitim',
    'Finans',
    'Teknoloji',
    'Turizm',
    'Gıda',
    'Moda',
    'Emlak',
    'Hukuk',
    'Spor',
    'Medya',
    'Diğer'
  ];

  const handleAnalyze = () => {
    if (websiteUrl) {
      console.log('Analyzing:', { websiteUrl, selectedSector });
      // Handle analysis here
    }
  };

  return (
    <>
      {/* Sticky Navigation Header */}
      <header className="bg-white/95  sticky top-0 z-50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center">
                <span className="mr-3">SEOMY</span>
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-all duration-300 flex items-center group">
                <span className="relative">
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </span>
                <svg className="ml-1 w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-all duration-300 flex items-center group">
                <span className="relative">
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </span>
                <svg className="ml-1 w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-all duration-300 flex items-center group">
                <span className="relative">
                  Services
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </span>
                <svg className="ml-1 w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <Link href="/pages" className="text-gray-700 hover:text-blue-600 transition-all duration-300 flex items-center group">
                <span className="relative">
                  Pages
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </span>
                <svg className="ml-1 w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-all duration-300 flex items-center group">
                <span className="relative">
                  Blog
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </span>
                <svg className="ml-1 w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-all duration-300 flex items-center group">
                <span className="relative">
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </span>
                <svg className="ml-1 w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </nav>

            {/* Action Items */}
            <div className="hidden md:flex items-center space-x-6">
              <button className="text-gray-700 hover:text-blue-600 transition-all duration-300 p-2 rounded-lg hover:bg-gray-100">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get a Quote
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-6 space-y-2 bg-white/95 backdrop-blur-md rounded-b-2xl shadow-lg">
                <Link href="/" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-300">
                  Home
                </Link>
                <Link href="/about" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-300">
                  About
                </Link>
                <Link href="/services" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-300">
                  Services
                </Link>
                <Link href="/pages" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-300">
                  Pages
                </Link>
                <Link href="/blog" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-300">
                  Blog
                </Link>
                <Link href="/contact" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-300">
                  Contact
                </Link>
                <div className="pt-4">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                    Get a Quote
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white pt-24 pb-16 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                SEO Marketing
              </span>
              <br />
              <span className="text-purple-600">& Agency.</span>
            </h1>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Ensuring the best return on investment for your bespoke SEO Campaign requirement.
            </p>

            {/* Analysis Form */}
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Website URL Input */}
                <div className="flex-1 flex items-center bg-gray-50 rounded-lg px-4 py-3">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <input
                    type="url"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    placeholder="https://yoursite.com"
                    className="flex-1 bg-transparent border-none outline-none text-gray-700"
                  />
                </div>
                
                {/* Sector Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full bg-gray-50 rounded-lg px-4 py-3 hover:bg-gray-100 transition-all duration-300 flex items-center justify-between min-w-[200px]"
                  >
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      <span className="text-gray-700">
                        {selectedSector !== 'Sektör Seçin' ? selectedSector : 'Sektör (Opsiyonel)'}
                      </span>
                    </div>
                    <svg 
                      className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown Content */}
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-200 z-50">
                      <div className="p-4">
                        <h3 className="text-sm font-medium text-gray-700 mb-3">Sektörünüzü Seçin</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
                          {sectors.slice(1).map((sector) => (
                            <button
                              key={sector}
                              onClick={() => {
                                setSelectedSector(sector);
                                setIsDropdownOpen(false);
                              }}
                              className="p-2 text-left rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 border border-gray-100 hover:border-blue-200 text-sm"
                            >
                              <div className="font-medium">{sector}</div>
                            </button>
                          ))}
                        </div>
                        
                        <div className="border-t border-gray-200 pt-3">
                          <h4 className="text-xs font-medium text-gray-600 mb-2">Özel Sektör</h4>
                          <div className="flex gap-2">
                            <input
                              type="text"
                              placeholder="Özel sektör adı"
                              className="flex-1 px-3 py-1 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <button className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                              Ekle
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Analyze Button */}
                <button
                  onClick={handleAnalyze}
                  disabled={!websiteUrl}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Analyze Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
