import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  TrendingUp, 
  FileText, 
  PenTool, 
  Mail, 
  Target,
  BarChart3,
  Globe,
  Users,
  Zap,
  Shield,
  Lightbulb
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Website SEO Analizi',
      description: 'Kapsamlı SEO denetimi ile sitenizin arama motoru performansını analiz ediyoruz.',
      features: ['Teknik SEO kontrolü', 'İçerik analizi', 'Anahtar kelime değerlendirmesi'],
      badge: 'Popüler'
    },
    {
      icon: BarChart3,
      title: 'PageSpeed Optimizasyonu',
      description: 'Site hızınızı analiz ederek performans sorunlarını tespit ediyoruz.',
      features: ['Hız analizi', 'Performans önerileri', 'Optimizasyon raporu'],
      badge: 'Yeni'
    },
    {
      icon: Target,
      title: 'AI Bot Erişim Analizi',
      description: 'Yapay zeka botlarının sitenize erişim durumunu kontrol ediyoruz.',
      features: ['Bot erişim kontrolü', 'Robots.txt analizi', 'AI dostu optimizasyon'],
      badge: null
    },
    {
      icon: FileText,
      title: 'Meta Tag Optimizasyonu',
      description: 'Title, description ve meta tag\'larınızın SEO uyumluluğunu değerlendiriyoruz.',
      features: ['Title analizi', 'Description kontrolü', 'Meta tag düzenleme'],
      badge: null
    },
    {
      icon: TrendingUp,
      title: 'CTA ve Dönüşüm Analizi',
      description: 'Call-to-action butonlarınızın varlığını ve etkinliğini analiz ediyoruz.',
      features: ['CTA varlık kontrolü', 'Dönüşüm analizi', 'Kullanıcı deneyimi'],
      badge: null
    },
    {
      icon: Lightbulb,
      title: 'Anahtar Kelime Yoğunluğu',
      description: 'İçeriğinizdeki anahtar kelime yoğunluğunu ve dağılımını analiz ediyoruz.',
      features: ['Yoğunluk analizi', 'Dağılım kontrolü', 'SEO önerileri'],
      badge: 'Temel'
    }
  ];

  const stats = [
    { icon: BarChart3, value: '100%', label: 'Gerçek Zamanlı Analiz' },
    { icon: Globe, value: 'Sınırsız', label: 'Site Analizi' },
    { icon: Users, value: 'Anında', label: 'Sonuç' },
    { icon: Zap, value: 'Detaylı', label: 'Rapor' }
  ];

  return (
    <section id="services" className="py-10 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="secondary" className="mb-4">
            SEO Analiz Hizmetlerimiz
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Kapsamlı{' '}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              SEO Analizi
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Gerçek zamanlı SEO analizi ile sitenizin performansını anında değerlendirin ve iyileştirme önerileri alın.
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
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-background/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  {service.badge && (
                    <Badge variant="outline" className="text-xs">
                      {service.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl mt-4">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
