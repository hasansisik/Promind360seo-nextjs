const Services = () => {
  const services = [
    {
      icon: '📊',
      title: 'Sosyal Medya Pazarlaması',
      description: 'Anında hesap aktivasyonu ile anında erişim.'
    },
    {
      icon: '🎯',
      title: 'SEO Optimizasyonu',
      description: 'Hizmet aktivasyonu ile ihtiyaç duyduğunuzda erişim.'
    },
    {
      icon: '📄',
      title: 'Tek Sayfa SEO',
      description: 'Hesap aktivasyonu ile anında erişim.'
    },
    {
      icon: '✍️',
      title: 'İçerik Pazarlaması',
      description: 'SEO hesap aktivasyonu ile anında erişim.'
    },
    {
      icon: '📧',
      title: 'E-posta Pazarlaması',
      description: 'E-posta Pazarlaması aktivasyonu ile anında erişim.'
    },
    {
      icon: '🔍',
      title: 'Anahtar Kelime Araştırması',
      description: 'Anahtar Kelime Araştırması aktivasyonu ile anında erişim.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            SEO Ajansınızdan Hizmetler
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stratejimiz sürekli gelişmeyi içerir, işletmeler için olağanüstü SEO ürettiğimizden emin olmak için.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
