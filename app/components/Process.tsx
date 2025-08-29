import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
      title: 'URL Girişi & Doğrulama',
      description: 'Analiz edilecek web sitesinin URL\'sini giriyor ve geçerliliğini kontrol ediyoruz.',
      duration: 'Anında',
      features: ['URL format kontrolü', 'Site erişim testi', 'Protokol doğrulama'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BarChart3,
      title: 'SEO API Analizi',
      description: 'RapidAPI üzerinden kapsamlı SEO denetimi gerçekleştiriyoruz.',
      duration: '30-60 Saniye',
      features: ['Meta tag analizi', 'İçerik değerlendirmesi', 'Teknik SEO kontrolü'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Settings,
      title: 'PageSpeed Testi',
      description: 'Google PageSpeed Insights ile site performansını ölçüyoruz.',
      duration: '1-2 Dakika',
      features: ['Hız analizi', 'Performans skoru', 'Optimizasyon önerileri'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FileText,
      title: 'Veri İşleme & Analiz',
      description: 'Toplanan verileri işleyerek detaylı SEO raporu oluşturuyoruz.',
      duration: 'Anında',
      features: ['Veri birleştirme', 'Skor hesaplama', 'Rapor oluşturma'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: TrendingUp,
      title: 'Sonuç Gösterimi',
      description: 'Kapsamlı SEO analiz sonuçlarını görsel olarak sunuyoruz.',
      duration: 'Anında',
      features: ['Görsel raporlar', 'Skor kartları', 'İyileştirme önerileri'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const benefits = [
    { icon: CheckCircle2, text: 'Anında sonuç' },
    { icon: Target, text: 'Gerçek zamanlı analiz' },
    { icon: Zap, text: 'Hızlı işlem' },
    { icon: Clock, text: '7/24 erişim' }
  ];

  return (
    <section id="process" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="secondary" className="mb-4">
            SEO Analiz Süreci
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            SEO{' '}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Analiz Süreci
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sitenizin SEO performansını analiz etmek için izlediğimiz adımlar.
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

      </div>
    </section>
  );
};

export default Process;
