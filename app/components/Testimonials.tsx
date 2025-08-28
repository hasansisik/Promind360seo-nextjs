const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ahmet Yılmaz',
      position: 'Advisor Fuel CEO',
      content: 'Müşterilerimizin başarılı olmasına yardım ediyoruz. Marka kimlikleri, dijital deneyimler, net iletişim kuran materyaller oluşturarak pazarlama hedeflerine ulaşıyoruz!'
    },
    {
      name: 'Ayşe Demir',
      position: 'TechStart CEO',
      content: 'Promind360SEO ile çalışmak harika bir deneyimdi. Organik trafiğimiz %200 arttı ve satışlarımızda önemli bir artış gördük.'
    },
    {
      name: 'Mehmet Kaya',
      position: 'Digital Solutions CEO',
      content: 'Profesyonel yaklaşımları ve sonuç odaklı stratejileri ile beklentilerimizi aştılar. Kesinlikle tavsiye ederim.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Müşteriler Bizi Seviyor & Biz Onları Seviyoruz
          </h2>
          <p className="text-xl text-gray-600">
            Dünya çapında 4,000'den fazla müşteri tarafından güvenilir
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-2xl">★★★★★</div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-gray-500">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
