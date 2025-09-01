'use client';

import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Star, Quote, TrendingUp, Users, Award, Search } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ahmet Yılmaz',
      role: 'Web Geliştirici',
      company: 'TechStart',
      content: 'SEO analiz sonuçları gerçekten doğru çıktı. Sitemdeki meta tag sorunlarını tespit etti ve PageSpeed skorunu doğru hesapladı. Çok faydalı bir araç!',
      rating: 5,
      improvement: '85%',
      metric: 'Analiz Doğruluğu'
    },
    {
      name: 'Ayşe Kaya',
      role: 'Dijital Pazarlama Uzmanı',
      company: 'EcoLife',
      content: 'RapidAPI entegrasyonu mükemmel çalışıyor. SEO analizi sonuçları Google Search Console ile uyumlu. Hızlı ve güvenilir sonuçlar alıyorum.',
      rating: 5,
      improvement: '92%',
      metric: 'Sonuç Tutarlılığı'
    },
    {
      name: 'Mehmet Demir',
      role: 'SEO Uzmanı',
      company: 'DigitalFlow',
      content: 'AI bot erişim analizi ve robots.txt kontrolü çok detaylı. Diğer SEO araçlarıyla karşılaştırdığımda sonuçlar tutarlı. Harika bir analiz aracı.',
      rating: 5,
      improvement: '88%',
      metric: 'Detay Seviyesi'
    },
    {
      name: 'Zeynep Özkan',
      role: 'İçerik Yöneticisi',
      company: 'HealthPlus',
      content: 'Anahtar kelime yoğunluğu analizi ve CTA kontrolü çok faydalı. Sitemdeki eksiklikleri net bir şekilde gösterdi. Kullanımı da çok kolay.',
      rating: 5,
      improvement: '90%',
      metric: 'Kullanıcı Deneyimi'
    },
    {
      name: 'Can Arslan',
      role: 'E-ticaret Müdürü',
      company: 'ShopSmart',
      content: 'PageSpeed analizi Google\'ın kendi aracıyla aynı sonuçları veriyor. Performans önerileri de çok pratik. Düzenli olarak kullanıyorum.',
      rating: 5,
      improvement: '87%',
      metric: 'Performans Analizi'
    },
    {
      name: 'Elif Yıldız',
      role: 'UX Tasarımcısı',
      company: 'InnovateLab',
      content: 'Görsel raporlar ve skor kartları çok anlaşılır. Teknik olmayan kişiler bile sonuçları kolayca anlayabiliyor. Mükemmel bir araç.',
      rating: 5,
      improvement: '94%',
      metric: 'Rapor Kalitesi'
    }
  ];

  const stats = [
    { icon: Users, value: '1000+', label: 'Analiz Edilen Site' },
    { icon: TrendingUp, value: '89%', label: 'Ortalama Doğruluk' },
    { icon: Award, value: '4.8/5', label: 'Kullanıcı Puanı' },
    { icon: Star, value: '95%', label: 'Memnuniyet Oranı' }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="secondary" className="mb-4">
            Kullanıcı Deneyimleri
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Kullanıcılarımızın{' '}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Gerçek Yorumları
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            SEO analiz aracımızın doğruluğu ve kullanışlılığı hakkında gerçek kullanıcı deneyimleri.
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
                  &ldquo;{testimonial.content}&rdquo;
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
                <span className="text-sm font-medium text-primary">4.8/5 Kullanıcı Puanı</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Sitenizi Analiz Edin</h3>
              <p className="text-muted-foreground mb-6">
                1000+ kullanıcı gibi siz de sitenizin SEO performansını anında öğrenin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Badge variant="outline" className="text-sm">
                  <Users className="h-3 w-3 mr-1" />
                  1000+ Analiz Edilen Site
                </Badge>
                <Badge variant="outline" className="text-sm">
                  <Award className="h-3 w-3 mr-1" />
                  %89 Ortalama Doğruluk
                </Badge>
              </div>
              <Button 
                onClick={() => {
                  document.getElementById('hero')?.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                  });
                }}
                className="w-full sm:w-auto"
                size="lg"
              >
                <Search className="h-5 w-5 mr-2" />
                Şimdi Ücretsiz Analiz Et
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
