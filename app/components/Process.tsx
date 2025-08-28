const Process = () => {
  const steps = [
    {
      number: '1',
      title: 'Beyin Fırtınası ve Yaratıcı Fikirler & Araştırma',
      description: 'Projeniz için en iyi stratejileri geliştiriyoruz.'
    },
    {
      number: '2',
      title: 'Tam Otomatik Anahtar Kelime Gruplandırma',
      description: 'Gelişmiş araçlarla anahtar kelimelerinizi organize ediyoruz.'
    },
    {
      number: '3',
      title: 'Satışlarınızı Artırmak İçin Strateji Oluşturma',
      description: 'Hedeflerinize ulaşmanız için strateji geliştiriyoruz.'
    },
    {
      number: '4',
      title: 'Daha Fazla İnsana Ulaşmanıza Yardım Etme',
      description: 'Markanızı daha geniş kitlelere tanıtıyoruz.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nasıl Yapıyoruz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Başkalarının Başarısına Yardım Ediyoruz
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
