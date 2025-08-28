'use client';

import { useState } from 'react';

const Hero = () => {
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
    <section className="bg-gray-50 pb-16 min-h-screen flex items-center relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <div className="flex items-center justify-center">
              <div className="relative">
                <span className="text-purple-600">SEO</span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-purple-700 transform -skew-x-12"></div>
              </div>
              <span className="ml-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Marketing & Agency
              </span>
            </div>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
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
                    <span className="text-gray-700 font-medium">
                      Sektör
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
      
      {/* Wavy Bottom Edge */}
      <div className="absolute -bottom-1 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-24"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120L300,80C600,40,900,40,1200,80V120Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
