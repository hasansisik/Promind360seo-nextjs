const Stats = () => {
  const stats = [
    {
      number: '+150%',
      label: 'Yıllık Organik Trafik',
      description: 'SEO öncesi ve sonrası'
    },
    {
      number: '+200%',
      label: 'Sıralama Anahtar Kelimeleri',
      description: 'Google\'da üst sıralarda'
    },
    {
      number: '+300%',
      label: 'Yatırım Getirisi',
      description: 'Ortalama ROI oranı'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            SEO Ajansından Beklediğiniz Büyük Sonuçlar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            İnanın çünkü gördünüz. İşte başarılı bir Promind360SEO ortağından gerçek rakamlar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
                {stat.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-600">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
