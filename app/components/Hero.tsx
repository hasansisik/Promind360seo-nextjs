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
    if (websiteUrl && selectedSector && selectedSector !== 'Sektör Seçin') {
      console.log('Analyzing:', { websiteUrl, selectedSector });
      // Handle analysis here
    }
  };

  return (
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

          {/* Special Dropdown Menu */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 flex items-center justify-between"
              >
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="text-lg font-medium text-gray-700">
                    {selectedSector !== 'Sektör Seçin' ? selectedSector : 'Sektörünüzü Seçin ve Analiz Başlatın'}
                  </span>
                </div>
                <svg 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Content */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Sektörünüzü Seçin</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                      {sectors.slice(1).map((sector) => (
                        <button
                          key={sector}
                          onClick={() => {
                            setSelectedSector(sector);
                            setIsDropdownOpen(false);
                          }}
                          className="p-3 text-left rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 border border-gray-100 hover:border-blue-200"
                        >
                          <div className="font-medium">{sector}</div>
                          <div className="text-sm text-gray-500">SEO analizi için optimize edilmiş</div>
                        </button>
                      ))}
                    </div>
                    
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-3">Özel Sektör Analizi</h4>
                      <div className="flex gap-3">
                        <input
                          type="text"
                          placeholder="Özel sektör adı"
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                          Ekle
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

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
              
              {/* Email Input */}
              <div className="flex-1 flex items-center bg-gray-50 rounded-lg px-4 py-3">
                <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <input
                  type="email"
                  placeholder="youremail@domain.com"
                  className="flex-1 bg-transparent border-none outline-none text-gray-700"
                />
              </div>
              
              {/* Analyze Button */}
              <button
                onClick={handleAnalyze}
                disabled={!websiteUrl || !selectedSector || selectedSector === 'Sektör Seçin'}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Analyze Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
