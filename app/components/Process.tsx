import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Search, 
  BarChart3, 
  Settings, 
  FileText, 
  TrendingUp, 
  CheckCircle2,
  ArrowRight,
  Clock,
  Target,
  Zap
} from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: 'Analiz & Araştırma',
      description: 'Web sitenizi ve rakiplerinizi detaylı analiz ediyoruz.',
      duration: '1-2 Hafta',
      features: ['Site audit', 'Rakip analizi', 'Anahtar kelime araştırması'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BarChart3,
      title: 'Strateji Geliştirme',
      description: 'Veri odaklı SEO stratejinizi oluşturuyoruz.',
      duration: '1 Hafta',
      features: ['Hedef belirleme', 'Strateji planlaması', 'Timeline oluşturma'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Settings,
      title: 'Teknik Optimizasyon',
      description: 'Site hızı ve teknik SEO sorunlarını çözüyoruz.',
      duration: '2-3 Hafta',
      features: ['Hız optimizasyonu', 'Meta tag düzenleme', 'Schema markup'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FileText,
      title: 'İçerik Optimizasyonu',
      description: 'SEO dostu içerikler oluşturuyoruz.',
      duration: 'Sürekli',
      features: ['Blog yazıları', 'Sayfa optimizasyonu', 'İçerik stratejisi'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: TrendingUp,
      title: 'İzleme & Raporlama',
      description: 'Performansınızı sürekli izliyor ve raporluyoruz.',
      duration: 'Aylık',
      features: ['Google Analytics', 'Search Console', 'Detaylı raporlar'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const benefits = [
    { icon: CheckCircle2, text: '30 günde ilk sonuçlar' },
    { icon: Target, text: 'Hedef odaklı stratejiler' },
    { icon: Zap, text: 'Hızlı optimizasyon' },
    { icon: Clock, text: '7/24 destek' }
  ];

  return (
    <section id="process" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="secondary" className="mb-4">
            Çalışma Sürecimiz
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            SEO{' '}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Sürecimiz
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sistematik yaklaşımımızla SEO başarınızı garanti altına alıyoruz.
          </p>
        </div>

        {/* Benefits */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
              <benefit.icon className="h-4 w-4 text-primary" />
              <span className="font-medium">{benefit.text}</span>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 transform -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full group hover:shadow-lg transition-all duration-300 border-0 bg-background/50 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${step.color} group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {step.duration}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {step.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2">
                      {step.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-muted-foreground">
                          <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                    <div className="w-6 h-6 bg-background rounded-full border-2 border-primary/20 flex items-center justify-center">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Timeline for mobile */}
        <div className="lg:hidden mt-12">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${step.color} flex-shrink-0`}>
                  <step.icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{step.title}</h3>
                    <Badge variant="outline" className="text-xs">
                      {step.duration}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                  <ul className="space-y-1">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">Hızlı Başlangıç</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">SEO Sürecinizi Başlatalım</h3>
              <p className="text-muted-foreground mb-6">
                İlk analiz raporunuzu 48 saat içinde alın ve SEO stratejinizi belirleyin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Badge variant="outline" className="text-sm">
                  <CheckCircle2 className="h-3 w-3 mr-1" />
                  Ücretsiz Site Analizi
                </Badge>
                <Badge variant="outline" className="text-sm">
                  <Target className="h-3 w-3 mr-1" />
                  Özel Strateji
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Process;
