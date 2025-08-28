'use client';

import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote, TrendingUp, Users, Award } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ahmet Yılmaz',
      role: 'CEO',
      company: 'TechStart',
      image: '/avatars/ahmet.jpg',
      content: 'Promind360 ile çalışmaya başladıktan sonra organik trafiğimiz %300 arttı. Mükemmel sonuçlar alıyoruz!',
      rating: 5,
      improvement: '+300%',
      metric: 'Organik Trafik'
    },
    {
      name: 'Ayşe Kaya',
      role: 'Pazarlama Müdürü',
      company: 'EcoLife',
      image: '/avatars/ayse.jpg',
      content: 'SEO stratejileri gerçekten işe yarıyor. 6 ayda Google\'da ilk sayfaya çıktık ve satışlarımız %150 arttı.',
      rating: 5,
      improvement: '+150%',
      metric: 'Satış Artışı'
    },
    {
      name: 'Mehmet Demir',
      role: 'Kurucu',
      company: 'DigitalFlow',
      image: '/avatars/mehmet.jpg',
      content: 'Profesyonel ekip ve şeffaf raporlama. ROI\'miz %400 arttı. Kesinlikle tavsiye ederim.',
      rating: 5,
      improvement: '+400%',
      metric: 'ROI Artışı'
    },
    {
      name: 'Zeynep Özkan',
      role: 'Genel Müdür',
      company: 'HealthPlus',
      image: '/avatars/zeynep.jpg',
      content: 'Sağlık sektöründe SEO çok zor ama Promind360 mükemmel sonuçlar elde etti. Çok memnunuz.',
      rating: 5,
      improvement: '+250%',
      metric: 'Organik Trafik'
    },
    {
      name: 'Can Arslan',
      role: 'E-ticaret Müdürü',
      company: 'ShopSmart',
      image: '/avatars/can.jpg',
      content: 'E-ticaret sitemizde dönüşüm oranları %200 arttı. SEO yatırımımızın karşılığını fazlasıyla aldık.',
      rating: 5,
      improvement: '+200%',
      metric: 'Dönüşüm Oranı'
    },
    {
      name: 'Elif Yıldız',
      role: 'Pazarlama Direktörü',
      company: 'InnovateLab',
      image: '/avatars/elif.jpg',
      content: 'Teknoloji sektöründe rekabet çok sert ama Promind360 ile rakiplerimizi geride bıraktık.',
      rating: 5,
      improvement: '+180%',
      metric: 'Anahtar Kelime Sıralaması'
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Mutlu Müşteri' },
    { icon: TrendingUp, value: '95%', label: 'Başarı Oranı' },
    { icon: Award, value: '50+', label: 'Ödül' },
    { icon: Star, value: '4.9/5', label: 'Müşteri Puanı' }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="secondary" className="mb-4">
            Müşteri Yorumları
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Müşterilerimizin{' '}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Başarı Hikayeleri
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Gerçek sonuçlar, gerçek müşteriler. SEO stratejilerimizin işe yaradığını kanıtlayan başarı hikayeleri.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="flex justify-center">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-background/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role} • {testimonial.company}</div>
                    </div>
                  </div>
                  <Quote className="h-5 w-5 text-primary/30 group-hover:text-primary/50 transition-colors" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Improvement Badge */}
                <Badge variant="outline" className="w-fit bg-green-50 text-green-700 border-green-200">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {testimonial.improvement} {testimonial.metric}
                </Badge>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="text-sm leading-relaxed">
                  "{testimonial.content}"
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/1 to-primary/2 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Star className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">4.9/5 Müşteri Puanı</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Başarı Hikayenizi Yazalım</h3>
              <p className="text-muted-foreground mb-6">
                500+ mutlu müşteri gibi siz de SEO başarınızı yaşayın.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Badge variant="outline" className="text-sm">
                  <Users className="h-3 w-3 mr-1" />
                  500+ Başarılı Proje
                </Badge>
                <Badge variant="outline" className="text-sm">
                  <Award className="h-3 w-3 mr-1" />
                  %95 Başarı Oranı
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
