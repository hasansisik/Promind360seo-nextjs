'use client';

import { useState } from 'react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Başlangıç Paketi',
      monthlyPrice: 199.99,
      yearlyPrice: 1999.99,
      features: [
        '999 E-posta',
        '3GB Hosting',
        'E-posta & Canlı Sohbet',
        '1 Domain',
        'Temel SEO Analizi',
        'Anahtar Kelime Araştırması'
      ],
      popular: false
    },
    {
      name: 'Profesyonel Plan',
      monthlyPrice: 120.99,
      yearlyPrice: 1209.99,
      features: [
        'Sınırsız E-posta',
        '5GB Hosting',
        'E-posta & Canlı Sohbet',
        '3 Domain',
        'Gelişmiş SEO Analizi',
        'Rakip Analizi',
        'İçerik Optimizasyonu'
      ],
      popular: true
    },
    {
      name: 'Premium Paketi',
      monthlyPrice: 209.99,
      yearlyPrice: 2099.99,
      features: [
        '999 E-posta',
        '3GB Hosting',
        'E-posta & Canlı Sohbet',
        '1 Domain',
        'Tam SEO Denetimi',
        'Sosyal Medya Yönetimi',
        'Aylık Raporlama'
      ],
      popular: false
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ürününüzü Seçin
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Aylık veya yıllık ödeme seçenekleri ile size en uygun planı bulun.
          </p>
          
          {/* Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Aylık Ödeme
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isYearly ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Yıllık Ödeme
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-lg p-8 ${
                plan.popular
                  ? 'bg-blue-600 text-white shadow-xl scale-105'
                  : 'bg-gray-50 text-gray-900 hover:shadow-lg transition-shadow'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                    En Popüler
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ₺{isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-lg">/{isYearly ? 'yıl' : 'ay'}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg
                        className={`w-5 h-5 mr-3 ${
                          plan.popular ? 'text-white' : 'text-green-500'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-white text-blue-600 hover:bg-gray-100'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Başla
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
