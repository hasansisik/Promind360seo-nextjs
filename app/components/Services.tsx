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
      title: 'SEO Optimizasyonu',
      description: 'Arama motoru sıralamalarınızı yükseltmek için kapsamlı SEO stratejileri geliştiriyoruz.',
      features: ['Anahtar kelime analizi', 'Teknik SEO', 'İçerik optimizasyonu'],
      badge: 'Popüler'
    },
    {
      icon: TrendingUp,
      title: 'Sosyal Medya Pazarlaması',
      description: 'Markanızı sosyal medyada güçlendirin ve hedef kitlenizle etkileşimi artırın.',
      features: ['Platform stratejisi', 'İçerik planlaması', 'Performans analizi'],
      badge: 'Yeni'
    },
    {
      icon: FileText,
      title: 'Tek Sayfa SEO',
      description: 'Landing page\'lerinizi optimize ederek dönüşüm oranlarınızı artırın.',
      features: ['Sayfa hızı optimizasyonu', 'CTA optimizasyonu', 'A/B testleri'],
      badge: null
    },
    {
      icon: PenTool,
      title: 'İçerik Pazarlaması',
      description: 'Hedef kitlenizi çeken ve SEO dostu içerikler oluşturuyoruz.',
      features: ['Blog yazıları', 'İnfografikler', 'Video içerik'],
      badge: null
    },
    {
      icon: Mail,
      title: 'E-posta Pazarlaması',
      description: 'Müşteri sadakatini artıran ve satışları destekleyen e-posta kampanyaları.',
      features: ['Otomasyon', 'Kişiselleştirme', 'A/B testleri'],
      badge: null
    },
    {
      icon: Target,
      title: 'Anahtar Kelime Araştırması',
      description: 'Rakip analizi ve veri odaklı anahtar kelime stratejileri geliştiriyoruz.',
      features: ['Rakip analizi', 'Hacim analizi', 'Zorluk değerlendirmesi'],
      badge: 'Temel'
    }
  ];

  const stats = [
    { icon: BarChart3, value: '95%', label: 'Başarı Oranı' },
    { icon: Globe, value: '500+', label: 'Optimize Edilen Site' },
    { icon: Users, value: '10K+', label: 'Mutlu Müşteri' },
    { icon: Zap, value: '30 Gün', label: 'İlk Sonuç' }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="secondary" className="mb-4">
            Hizmetlerimiz
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            SEO Ajansınızdan{' '}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Kapsamlı Hizmetler
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stratejimiz sürekli gelişmeyi içerir, işletmeler için olağanüstü SEO ürettiğimizden emin olmak için.
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
