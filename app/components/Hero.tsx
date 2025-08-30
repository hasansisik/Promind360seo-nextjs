'use client';

import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { analyzeSEO, resetSEOData } from '@/redux/actions/seoActions';
import { createSearch } from '@/redux/actions/searchActions';
import { updateProgress, setAnalyzedUrl } from '@/redux/reducers/seoReducer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Search, TrendingUp, Zap, Target, X, Loader2, CheckCircle, AlertCircle, BarChart3, Globe, Smartphone, Lightbulb, Play } from 'lucide-react';

const Hero = () => {
  const dispatch = useDispatch<AppDispatch>();
  const resultsRef = useRef<HTMLDivElement>(null);
  const {
    seoData,
    onPageData,
    pageSpeedData,
    combinedReport,
    errors,
    isAnalyzing,
    progress,
    currentStep,
    analysisSteps,
    timestamp,
    analyzedUrl
  } = useSelector((state: RootState) => state.seo);

  const { isAuthenticated, user } = useSelector((state: RootState) => state.user);



  const [websiteUrl, setWebsiteUrl] = useState('');
  const [selectedSector, setSelectedSector] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [showDemoDialog, setShowDemoDialog] = useState(false);
  const [searchCreated, setSearchCreated] = useState(false);

  // Auto-scroll to results when analysis is completed
  useEffect(() => {
    if (showResults && resultsRef.current) {
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }, 100); // Small delay to ensure DOM is updated
    }
  }, [showResults]);

  const sectors = [
    { value: 'ecommerce', label: 'E-ticaret' },
    { value: 'health', label: 'Sağlık' },
    { value: 'education', label: 'Eğitim' },
    { value: 'finance', label: 'Finans' },
    { value: 'technology', label: 'Teknoloji' },
    { value: 'tourism', label: 'Turizm' },
    { value: 'food', label: 'Gıda' },
    { value: 'fashion', label: 'Moda' },
    { value: 'real-estate', label: 'Emlak' },
    { value: 'law', label: 'Hukuk' },
    { value: 'sports', label: 'Spor' },
    { value: 'media', label: 'Medya' },
  ];

  // Sektör bazlı özel yorumlar
  const sectorInsights = {
    ecommerce: {
      title: 'E-ticaret Sektörü Özel Analizi',
      insights: [
        'E-ticaret siteleri için sayfa yükleme hızı kritik öneme sahiptir. Müşteriler 3 saniyeden fazla beklemek istemez.',
        'Ürün sayfalarında detaylı meta açıklamaları ve optimize edilmiş görseller satış oranlarını artırır.',
        'Mobil uyumluluk e-ticaret başarısının %60\'ını oluşturur.',
        'Güvenlik sertifikaları (SSL, PCI DSS) müşteri güvenini artırır.',
        'Arama motoru optimizasyonu ile organik trafik %40 artabilir.'
      ],
      recommendations: [
        'Ürün sayfalarında schema markup kullanın',
        'Hızlı ödeme süreçleri için optimize edin',
        'Mobil-first tasarım yaklaşımı benimseyin',
        'Ürün görsellerini WebP formatında optimize edin',
        'Müşteri yorumları için yapılandırılmış veri ekleyin'
      ]
    },
    health: {
      title: 'Sağlık Sektörü Özel Analizi',
      insights: [
        'Sağlık siteleri için güvenilirlik ve uzmanlık göstergeleri kritiktir.',
        'HIPAA uyumluluğu ve veri güvenliği hasta gizliliği için şarttır.',
        'Doktor profilleri ve randevu sistemleri SEO performansını artırır.',
        'Tıbbi içerikler için E-A-T (Expertise, Authoritativeness, Trustworthiness) faktörleri önemlidir.',
        'Mobil erişilebilirlik yaşlı hastalar için kritik öneme sahiptir.'
      ],
      recommendations: [
        'Doktor ve uzman profillerini optimize edin',
        'Tıbbi içerikler için schema markup kullanın',
        'Randevu alma sürecini basitleştirin',
        'Güvenlik sertifikalarını görünür şekilde gösterin',
        'Hasta eğitim materyalleri ekleyin'
      ]
    },
    education: {
      title: 'Eğitim Sektörü Özel Analizi',
      insights: [
        'Eğitim kurumları için yerel SEO ve organik arama kritik öneme sahiptir.',
        'Öğrenci ve veli odaklı içerik stratejisi başarıyı artırır.',
        'Program ve kurs sayfaları için detaylı meta açıklamaları gerekli.',
        'Mobil uyumluluk öğrenci erişimi için şarttır.',
        'Sosyal kanıtlar (mezun başarıları, referanslar) güven oluşturur.'
      ],
      recommendations: [
        'Program sayfalarını detaylandırın',
        'Öğrenci başarı hikayeleri ekleyin',
        'Yerel SEO optimizasyonu yapın',
        'Online başvuru sürecini optimize edin',
        'Eğitim içerikleri için blog bölümü oluşturun'
      ]
    },
    finance: {
      title: 'Finans Sektörü Özel Analizi',
      insights: [
        'Finansal hizmetler için güvenlik ve şeffaflık en önemli faktörlerdir.',
        'SSL sertifikası ve güvenlik göstergeleri zorunludur.',
        'Hesaplama araçları ve finansal içerikler organik trafiği artırır.',
        'Mobil bankacılık uygulamaları için optimize edilmiş web siteleri gerekli.',
        'Regülasyon uyumluluğu ve lisans bilgileri görünür olmalıdır.'
      ],
      recommendations: [
        'Güvenlik sertifikalarını öne çıkarın',
        'Finansal hesaplama araçları ekleyin',
        'Mobil ödeme süreçlerini optimize edin',
        'Regülasyon uyumluluğu bilgilerini gösterin',
        'Müşteri hizmetleri erişimini kolaylaştırın'
      ]
    },
    technology: {
      title: 'Teknoloji Sektörü Özel Analizi',
      insights: [
        'Teknoloji şirketleri için yenilikçilik ve teknik uzmanlık öne çıkmalıdır.',
        'API dokümantasyonu ve teknik içerikler organik trafiği artırır.',
        'Hızlı sayfa yükleme süreleri teknik kullanıcılar için kritiktir.',
        'GitHub entegrasyonu ve açık kaynak projeler güven oluşturur.',
        'Teknik blog ve case study\'ler uzmanlık gösterir.'
      ],
      recommendations: [
        'API dokümantasyonunu optimize edin',
        'Teknik blog içerikleri oluşturun',
        'Açık kaynak projeleri öne çıkarın',
        'Case study\'ler ekleyin',
        'Teknik webinar ve eğitim içerikleri sunun'
      ]
    },
    tourism: {
      title: 'Turizm Sektörü Özel Analizi',
      insights: [
        'Turizm siteleri için görsel içerik ve yerel SEO kritik öneme sahiptir.',
        'Rezervasyon sistemleri ve fiyat karşılaştırmaları dönüşüm oranlarını artırır.',
        'Mobil uyumluluk seyahat planlaması için şarttır.',
        'Müşteri yorumları ve fotoğraflar güven oluşturur.',
        'Yerel arama optimizasyonu turizm işletmeleri için kritiktir.'
      ],
      recommendations: [
        'Yüksek kaliteli görseller ekleyin',
        'Rezervasyon sürecini basitleştirin',
        'Müşteri yorumlarını öne çıkarın',
        'Yerel SEO optimizasyonu yapın',
        'Seyahat rehberleri ve blog içerikleri oluşturun'
      ]
    },
    food: {
      title: 'Gıda Sektörü Özel Analizi',
      insights: [
        'Gıda işletmeleri için yerel arama ve menü optimizasyonu kritiktir.',
        'Görsel içerik ve yemek fotoğrafları dönüşüm oranlarını artırır.',
        'Online sipariş sistemleri ve teslimat bilgileri önemlidir.',
        'Müşteri yorumları ve sosyal medya entegrasyonu güven oluşturur.',
        'Mobil uyumluluk anlık siparişler için şarttır.'
      ],
      recommendations: [
        'Menü sayfalarını optimize edin',
        'Yüksek kaliteli yemek fotoğrafları ekleyin',
        'Online sipariş sürecini basitleştirin',
        'Yerel SEO optimizasyonu yapın',
        'Müşteri yorumlarını öne çıkarın'
      ]
    },
    fashion: {
      title: 'Moda Sektörü Özel Analizi',
      insights: [
        'Moda siteleri için görsel içerik ve ürün kategorileri kritik öneme sahiptir.',
        'Mobil uyumluluk ve hızlı sayfa yükleme alışveriş deneyimini artırır.',
        'Sosyal medya entegrasyonu ve influencer işbirlikleri organik trafiği artırır.',
        'Ürün filtreleme ve arama özellikleri kullanıcı deneyimini iyileştirir.',
        'Sezonsal içerik ve trend analizleri SEO performansını artırır.'
      ],
      recommendations: [
        'Ürün görsellerini optimize edin',
        'Gelişmiş filtreleme özellikleri ekleyin',
        'Sosyal medya entegrasyonu yapın',
        'Sezonsal içerik stratejisi oluşturun',
        'Mobil alışveriş deneyimini iyileştirin'
      ]
    },
    'real-estate': {
      title: 'Emlak Sektörü Özel Analizi',
      insights: [
        'Emlak siteleri için görsel içerik ve detaylı mülk bilgileri kritiktir.',
        'Arama filtreleri ve harita entegrasyonu kullanıcı deneyimini artırır.',
        'Mobil uyumluluk anlık mülk aramaları için şarttır.',
        'Müşteri yorumları ve referanslar güven oluşturur.',
        'Yerel SEO ve organik arama emlak işletmeleri için kritiktir.'
      ],
      recommendations: [
        'Mülk fotoğraflarını optimize edin',
        'Gelişmiş arama filtreleri ekleyin',
        'Harita entegrasyonu yapın',
        'Müşteri referanslarını öne çıkarın',
        'Yerel SEO optimizasyonu yapın'
      ]
    },
    law: {
      title: 'Hukuk Sektörü Özel Analizi',
      insights: [
        'Hukuk firmaları için uzmanlık alanları ve başarı hikayeleri kritiktir.',
        'Güvenilirlik ve profesyonellik göstergeleri müşteri güvenini artırır.',
        'Blog içerikleri ve yasal rehberler organik trafiği artırır.',
        'İletişim bilgileri ve randevu sistemleri erişilebilirliği artırır.',
        'Yerel SEO ve organik arama hukuk hizmetleri için kritiktir.'
      ],
      recommendations: [
        'Uzmanlık alanlarını detaylandırın',
        'Başarı hikayeleri ve case study\'ler ekleyin',
        'Yasal blog içerikleri oluşturun',
        'İletişim süreçlerini basitleştirin',
        'Yerel SEO optimizasyonu yapın'
      ]
    },
    sports: {
      title: 'Spor Sektörü Özel Analizi',
      insights: [
        'Spor siteleri için canlı skorlar ve maç sonuçları kritik öneme sahiptir.',
        'Mobil uyumluluk anlık spor bilgileri için şarttır.',
        'Sosyal medya entegrasyonu ve fan etkileşimi organik trafiği artırır.',
        'Spor ekipmanları ve giyim satışı için e-ticaret optimizasyonu gerekli.',
        'Spor haberleri ve analiz içerikleri SEO performansını artırır.'
      ],
      recommendations: [
        'Canlı skor sistemleri ekleyin',
        'Sosyal medya entegrasyonu yapın',
        'Spor ekipmanları satışını optimize edin',
        'Spor haberleri ve analiz içerikleri oluşturun',
        'Fan etkileşimini artıracak özellikler ekleyin'
      ]
    },
    media: {
      title: 'Medya Sektörü Özel Analizi',
      insights: [
        'Medya siteleri için hızlı içerik yayını ve güncel haberler kritiktir.',
        'Mobil uyumluluk anlık haber erişimi için şarttır.',
        'Video içerikleri ve multimedya özellikler kullanıcı etkileşimini artırır.',
        'Sosyal medya entegrasyonu ve paylaşım özellikleri organik trafiği artırır.',
        'SEO optimizasyonu ve içerik stratejisi medya başarısının temelidir.'
      ],
      recommendations: [
        'Hızlı içerik yayın sistemleri kurun',
        'Video içerikleri optimize edin',
        'Sosyal medya entegrasyonu yapın',
        'İçerik paylaşım özellikleri ekleyin',
        'SEO optimizasyonu ve içerik stratejisi geliştirin'
      ]
    }
  };

  const features = [
    { icon: TrendingUp, title: 'Detaylı Analiz', description: 'Kapsamlı SEO raporu' },
    { icon: Zap, title: 'Anında Sonuç', description: 'Gerçek zamanlı analiz' },
    { icon: Target, title: 'Sektör Odaklı', description: 'Özel SEO önerileri' }
  ];

  // Demo data for Fikirmax.com
  const demoData = {
    url: 'https://fikirmax.com/',
    sector: 'technology',
    seoData: {
      ai_bots_allowed: true,
      robots_found: true,
      meta_tags: true,
      title: 'Fikirmax - Stratejik Pazarlama Danışmanlığı',
      description: 'Küçük ve orta ölçekli işletmelere özel, stratejik pazarlama danışmanlığı sunan butik ajans.',
      keywords: 'pazarlama, dijital pazarlama, stratejik danışmanlık, marka yönetimi',
      cta_buttons: true,
      keyword_density: true,
      report: {
        overallScore: 92,
        scoreLevel: 'mükemmel'
      }
    },
    onPageData: {
      webtitle: { title: 'Fikirmax - Stratejik Pazarlama Danışmanlığı', length: 45 },
      metadescription: { description: 'Küçük ve orta ölçekli işletmelere özel, stratejik pazarlama danışmanlığı sunan butik ajans.', length: 120 },
      headings: { h1: { count: 1 }, h2: { count: 3 }, h3: { count: 5 } },
      images: { count: 8 },
      links: { count: 25 },
      sitemap_robots: ['Sitemap', 'Robots.txt'],
      iframe: { count: 0 },
      report: {
        overallScore: 89,
        scoreLevel: 'iyi'
      }
    },
    pageSpeedData: {
      performanceMetrics: {
        performanceScore: 94,
        firstContentfulPaint: '1.2s',
        largestContentfulPaint: '2.1s',
        speedIndex: '1.8s',
        totalBlockingTime: '45ms',
        cumulativeLayoutShift: '0.05'
      },
      report: {
        accessibilityScore: 96
      }
    },
    combinedReport: {
      overallScore: 92,
      scoreLevel: 'mükemmel',
      strengths: [
        'Mükemmel sayfa yükleme hızı ve performans',
        'Güçlü SEO optimizasyonu ve meta etiketler',
        'Yüksek erişilebilirlik skoru',
        'Profesyonel içerik yapısı ve heading hiyerarşisi'
      ],
      weaknesses: [
        'Daha fazla içerik çeşitliliği eklenebilir',
        'Sosyal medya entegrasyonu geliştirilebilir'
      ]
    }
  };



  const handleAnalyze = async () => {
    if (websiteUrl) {
      setShowResults(false);
      dispatch(setAnalyzedUrl(websiteUrl));

      // Set analyzing state to true to show progress
      dispatch({ type: 'seo/setAnalyzing', payload: true });

      // Create search record (now public - no authentication required)
      let searchId = null;
      try {
        const searchResult = await dispatch(createSearch({ url: websiteUrl, sector: selectedSector }));
        searchId = searchResult.payload?.data?._id;
        setSearchCreated(true);
        // Clear the notification after 3 seconds
        setTimeout(() => setSearchCreated(false), 3000);
      } catch (error) {
        console.warn('Failed to create search record:', error);
        // Continue with SEO analysis even if search record creation fails
      }

      // Start progress simulation immediately
      const progressSteps = [
        { progress: 8, message: 'Web sitesi bağlantısı kontrol ediliyor...' },
        { progress: 16, message: 'DNS çözümlemesi yapılıyor...' },
        { progress: 24, message: 'Sunucu yanıt süresi ölçülüyor...' },
        { progress: 32, message: 'SEO meta etiketleri inceleniyor...' },
        { progress: 40, message: 'Robots.txt dosyası kontrol ediliyor...' },
        { progress: 48, message: 'AI bot erişimi analiz ediliyor...' },
        { progress: 56, message: 'Sayfa yükleme hızı analiz ediliyor...' },
        { progress: 64, message: 'Core Web Vitals hesaplanıyor...' },
        { progress: 72, message: 'Performans metrikleri ölçülüyor...' },
        { progress: 80, message: 'Erişilebilirlik kontrol ediliyor...' },
        { progress: 88, message: 'En İyi Uygulamalar analiz ediliyor...' },
        { progress: 96, message: 'Analiz tamamlandı!' },
        { progress: 100, message: 'Rapor hazırlanıyor... ' }
      ];

      // Create a race between progress simulation and actual API completion
      let progressCompleted = false;

      // Start progress simulation in background
      const progressPromise = (async () => {
        for (let i = 0; i < progressSteps.length; i++) {
          const step = progressSteps[i];
          dispatch(updateProgress({ progress: step.progress, step: step.message }));

          // Consistent delays for smooth progression
          let delay;
          if (i < 5) {
            delay = 1500; // 1.5 seconds for early steps
          } else if (i < 10) {
            delay = 2000; // 2 seconds for middle steps
          } else if (i < 14) {
            delay = 2500; // 2.5 seconds for later steps
          } else {
            delay = 1000; // 1 second for final steps
          }

          await new Promise(resolve => setTimeout(resolve, delay));
        }
        progressCompleted = true;
      })();

      // Start the actual API analysis and wait for it to complete
      try {
        await dispatch(analyzeSEO({ url: websiteUrl, sector: selectedSector }));

        // Wait for progress simulation to complete
        if (!progressCompleted) {
          await progressPromise;
        }

        // Show results immediately after progress is complete
        setShowResults(true);
      } catch (error) {

        // Wait for progress simulation to complete
        if (!progressCompleted) {
          await progressPromise;
        }

        // Show error message
        alert('API analizi başarısız oldu. Lütfen API anahtarınızı kontrol edin veya daha sonra tekrar deneyin.');
        dispatch({ type: 'seo/setAnalyzing', payload: false });
      }
    }
  };

  const clearInput = () => {
    setWebsiteUrl('');
  };

  const resetAnalysis = () => {
    setShowResults(false);
    setWebsiteUrl('');
    setSelectedSector('');
    dispatch(resetSEOData());
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    if (score >= 50) return 'text-orange-600';
    return 'text-red-600';
  };

  const getScoreBg = (score: number) => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 70) return 'bg-yellow-100';
    if (score >= 50) return 'bg-orange-100';
    return 'bg-red-100';
  };

  const getScoreText = (score: number) => {
    if (score >= 90) return 'Mükemmel';
    if (score >= 70) return 'İyi';
    if (score >= 50) return 'Orta';
    return 'Kötü';
  };

  const getScoreTextColor = (score: number) => {
    if (score >= 90) return 'text-green-700';
    if (score >= 70) return 'text-yellow-700';
    if (score >= 50) return 'text-orange-700';
    return 'text-red-700';
  };

  // Badge renk fonksiyonları
  const getStatusBadgeVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case 'mevcut':
      case 'izin veriliyor':
      case 'uygun':
      case 'optimal':
      case 'iyi':
      case 'mükemmel':
      case 'ai dostu':
      case 'seo':
      case 'optimize':
      case 'uyumlu':
        return 'default';
      case 'eksik':
      case 'kısıtlı':
      case 'düşük':
      case 'kötü':
      case 'var':
      case 'fazla':
      case 'uzun':
      case 'iyileştirilmeli':
      case 'kısıtlı':
        return 'destructive';
      case 'orta':
      case 'kabul edilebilir':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'mevcut':
      case 'izin veriliyor':
      case 'uygun':
      case 'optimal':
      case 'iyi':
      case 'mükemmel':
      case 'ai dostu':
      case 'seo':
      case 'optimize':
      case 'uyumlu':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'eksik':
      case 'kısıtlı':
      case 'düşük':
      case 'kötü':
      case 'var':
      case 'fazla':
      case 'uzun':
      case 'iyileştirilmeli':
      case 'kısıtlı':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'orta':
      case 'kabul edilebilir':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };



  return (
    <section id="hero" className="relative flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 py-30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div className="space-y-4">
            <Badge variant="secondary" className="mb-4">
              Kapsamlı SEO Analizi
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                SEO
              </span>
              <span className="text-foreground"> Analiz & Optimizasyon</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Web sitenizin SEO performansını detaylı analiz edin ve arama motoru sıralamalarınızı iyileştirin.
            </p>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 mb-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                <feature.icon className="h-4 w-4 text-primary" />
                <span className="font-medium">{feature.title}</span>
                <span>•</span>
                <span>{feature.description}</span>
              </div>
            ))}
          </div>

          <Dialog open={showDemoDialog} onOpenChange={setShowDemoDialog}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="text-xs">
                <Play className="h-3 w-3 mr-1" />
                Demo Raporu Görüntüle
              </Button>
            </DialogTrigger>
            <DialogContent className="!w-[95vw] sm:!w-[80vw] !max-w-[95vw] sm:!max-w-[65vw] max-h-[95vh] overflow-y-auto overscroll-contain">
              <DialogHeader>

              </DialogHeader>
              <div className="space-y-6 overflow-y-auto max-h-[calc(85vh-120px)] pr-2">
                {/* Results Header */}
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold">Analiz Sonuçları</h3>
                  <p className="text-muted-foreground">Web sitesi: {demoData.url}</p>
                  <p className="text-xs text-green-600">✅ Demo raporu - Gerçek veriler</p>
                  <p className="text-xs text-muted-foreground">Son güncelleme: {new Date().toLocaleString('tr-TR')}</p>
                </div>

                {/* Overall Score */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BarChart3 className="h-5 w-5" />
                      <span>Genel Site Skoru</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center space-y-4">
                      <div className={`w-24 h-24 rounded-full ${getScoreBg(demoData.combinedReport.overallScore)} flex items-center justify-center`}>
                        <span className={`text-2xl font-bold ${getScoreColor(demoData.combinedReport.overallScore)}`}>
                          {demoData.combinedReport.overallScore}
                        </span>
                      </div>
                      <div className="text-center">
                        <p className={`text-sm font-medium ${getScoreTextColor(demoData.combinedReport.overallScore)}`}>
                          {getScoreText(demoData.combinedReport.overallScore)}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Son güncelleme: {new Date().toLocaleString('tr-TR')}
                        </p>
                      </div>
                    </div>

                    {/* Score Guide */}
                    <div className="mt-4 flex justify-between items-center text-xs">
                      <div className="flex items-center space-x-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span className="text-red-700">Kötü (0-49)</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <span className="text-orange-700">Orta (50-69)</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span className="text-yellow-700">İyi (70-89)</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-green-700">Mükemmel (90-100)</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Detailed Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* SEO */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-left">
                        <Globe className="h-5 w-5" />
                        <span>SEO Analizi ({demoData.seoData.report.overallScore})</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Progress value={demoData.seoData.report.overallScore} className="h-2" />
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>AI Bot Erişimi: İzin Veriliyor</span>
                          <Badge className={`text-xs ml-auto ${getStatusBadgeColor('AI Dostu')}`}>AI Dostu</Badge>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>Robots.txt: Mevcut</span>
                          <Badge className={`text-xs ml-auto ${getStatusBadgeColor('SEO')}`}>SEO</Badge>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>Meta Etiketleri: Mevcut</span>
                          <Badge className={`text-xs ml-auto ${getStatusBadgeColor('Optimize')}`}>Optimize</Badge>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>Başlık Etiketi: Mevcut</span>
                          <Badge className={`text-xs ml-auto ${getStatusBadgeColor('SEO')}`}>SEO</Badge>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>Başlık Uzunluğu: Uygun</span>
                          <Badge className={`text-xs ml-auto ${getStatusBadgeColor('Optimal')}`}>Optimal</Badge>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>Açıklama: Mevcut</span>
                          <Badge className={`text-xs ml-auto ${getStatusBadgeColor('SEO')}`}>SEO</Badge>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>Anahtar Kelimeler: Mevcut</span>
                          <Badge className={`text-xs ml-auto ${getStatusBadgeColor('SEO')}`}>SEO</Badge>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>CTA Varlığı: Mevcut</span>
                          <Badge className={`text-xs ml-auto ${getStatusBadgeColor('Optimize')}`}>Optimize</Badge>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>Anahtar Kelime Yoğunluğu: Uygun</span>
                          <Badge className={`text-xs ml-auto ${getStatusBadgeColor('Optimal')}`}>Optimal</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* On-Page SEO */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-left">
                        <Lightbulb className="h-5 w-5" />
                        <span>On-Page SEO Analizi ({demoData.onPageData.report.overallScore})</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Progress value={demoData.onPageData.report.overallScore} className="h-2" />
                      <div className="space-y-2">
                                                <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>Title: {demoData.onPageData.webtitle.title}</span>
                          <Badge className={`text-xs ml-auto ${getStatusBadgeColor('Optimal')}`}>
                            {demoData.onPageData.webtitle.length} karakter
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>Meta Açıklama: {demoData.onPageData.metadescription.description}</span>
                          <Badge className={`text-xs ml-auto ${getStatusBadgeColor('Optimal')}`}>
                            {demoData.onPageData.metadescription.length} karakter
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>Heading Yapısı: H1({demoData.onPageData.headings.h1.count}) H2({demoData.onPageData.headings.h2.count}) H3({demoData.onPageData.headings.h3.count})</span>
                          <Badge className={`text-xs ml-auto ${getStatusBadgeColor('İyi')}`}>İyi</Badge>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>Resim Sayısı: {demoData.onPageData.images.count} adet</span>
                          <Badge className={`text-xs ml-auto ${getStatusBadgeColor('Optimal')}`}>Optimal</Badge>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>Link Sayısı: {demoData.onPageData.links.count} adet</span>
                          <Badge className={`text-xs ml-auto ${getStatusBadgeColor('Optimal')}`}>Optimal</Badge>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>Sitemap & Robots: {demoData.onPageData.sitemap_robots.join(', ')}</span>
                          <Badge className={`text-xs ml-auto ${getStatusBadgeColor('Mevcut')}`}>Mevcut</Badge>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>Iframe Kullanımı: {demoData.onPageData.iframe.count} adet</span>
                          <Badge className={`text-xs ml-auto ${getStatusBadgeColor('Yok (İyi)')}`}>Yok (İyi)</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Performance */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-left">
                        <Zap className="h-5 w-5" />
                        <span>Performans ({demoData.pageSpeedData.performanceMetrics.performanceScore})</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Progress value={demoData.pageSpeedData.performanceMetrics.performanceScore} className="h-2" />
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span>İlk İçerik Boyama</span>
                          <span className="font-mono text-green-600">
                            {demoData.pageSpeedData.performanceMetrics.firstContentfulPaint}
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span>En Büyük İçerik Boyama</span>
                          <span className="font-mono text-green-600">
                            {demoData.pageSpeedData.performanceMetrics.largestContentfulPaint}
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span>Hız Endeksi</span>
                          <span className="font-mono text-green-600">
                            {demoData.pageSpeedData.performanceMetrics.speedIndex}
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span>Toplam Engelleme Süresi</span>
                          <span className="font-mono text-green-600">
                            {demoData.pageSpeedData.performanceMetrics.totalBlockingTime}
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span>Kümülatif Düzen Kayması</span>
                          <span className="font-mono text-green-600">
                            {demoData.pageSpeedData.performanceMetrics.cumulativeLayoutShift}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Accessibility */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-left">
                        <Smartphone className="h-5 w-5" />
                        <span>Erişilebilirlik ({demoData.pageSpeedData.report.accessibilityScore})</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Progress value={demoData.pageSpeedData.report.accessibilityScore} className="h-2" />
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className={getScoreTextColor(demoData.pageSpeedData.report.accessibilityScore)}>
                            {getScoreText(demoData.pageSpeedData.report.accessibilityScore)} erişilebilirlik
                          </span>
                          <Badge variant="outline" className={`text-xs ml-auto ${getScoreTextColor(demoData.pageSpeedData.report.accessibilityScore)}`}>
                            {getScoreText(demoData.pageSpeedData.report.accessibilityScore)}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>Alt Metni: Mevcut</span>
                          <Badge className={`text-xs ml-auto ${getStatusBadgeColor('Optimize')}`}>Optimize</Badge>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>ARIA Etiketleri: Mevcut</span>
                          <Badge className={`text-xs ml-auto ${getStatusBadgeColor('Optimize')}`}>Optimize</Badge>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>Klavye Navigasyonu: Mevcut</span>
                          <Badge className={`text-xs ml-auto ${getStatusBadgeColor('Optimize')}`}>Optimize</Badge>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>Renk Kontrastı: Uygun</span>
                          <Badge className={`text-xs ml-auto ${getStatusBadgeColor('Uygun')}`}>Uygun</Badge>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>Ekran Okuyucu: Uyumlu</span>
                          <Badge className={`text-xs ml-auto ${getStatusBadgeColor('Uyumlu')}`}>Uyumlu</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Combined Report Summary */}
                <Card className="border border-gray-200">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BarChart3 className="h-5 w-5" />
                      <span>Rapor Özeti</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {/* Overall Assessment */}
                    <div className={`p-3 rounded-lg ${getScoreBg(demoData.combinedReport.overallScore)}`}>
                      <h4 className={`text-lg font-bold ${getScoreTextColor(demoData.combinedReport.overallScore)}`}>
                        {getScoreText(demoData.combinedReport.overallScore)} - {demoData.combinedReport.overallScore}/100
                      </h4>
                    </div>

                    {/* Key Points */}
                    <div className="space-y-3">
                      <div>
                        <h5 className="text-sm font-medium text-green-700 mb-2 text-left">Güçlü Yönler:</h5>
                        <div className="space-y-1">
                          {demoData.combinedReport.strengths.map((strength: string, index: number) => (
                            <div key={index} className="flex items-center space-x-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-gray-700 text-left">{strength}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-red-700 mb-2 text-left">Zayıf Yönler:</h5>
                        <div className="space-y-1">
                          {demoData.combinedReport.weaknesses.map((weakness: string, index: number) => (
                            <div key={index} className="flex items-center space-x-2 text-sm">
                              <AlertCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                              <span className="text-gray-700 text-left">{weakness}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Detailed Scores */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                      <div className={`text-center p-3 rounded-lg ${getScoreBg(demoData.seoData.report.overallScore)}`}>
                        <div className={`text-2xl font-bold ${getScoreColor(demoData.seoData.report.overallScore)}`}>{demoData.seoData.report.overallScore}</div>
                        <div className={`text-sm ${getScoreTextColor(demoData.seoData.report.overallScore)}`}>AI SEO Skoru</div>
                        <div className={`text-xs ${getScoreTextColor(demoData.seoData.report.overallScore)}`}>{getScoreText(demoData.seoData.report.overallScore)}</div>
                      </div>
                      <div className={`text-center p-3 rounded-lg ${getScoreBg(demoData.onPageData.report.overallScore)}`}>
                        <div className={`text-2xl font-bold ${getScoreColor(demoData.onPageData.report.overallScore)}`}>{demoData.onPageData.report.overallScore}</div>
                        <div className={`text-sm ${getScoreTextColor(demoData.onPageData.report.overallScore)}`}>On-Page SEO</div>
                        <div className={`text-xs ${getScoreTextColor(demoData.onPageData.report.overallScore)}`}>{getScoreText(demoData.onPageData.report.overallScore)}</div>
                      </div>
                      <div className={`text-center p-3 rounded-lg ${getScoreBg(demoData.pageSpeedData.performanceMetrics.performanceScore)}`}>
                        <div className={`text-2xl font-bold ${getScoreColor(demoData.pageSpeedData.performanceMetrics.performanceScore)}`}>{demoData.pageSpeedData.performanceMetrics.performanceScore}</div>
                        <div className={`text-sm ${getScoreTextColor(demoData.pageSpeedData.performanceMetrics.performanceScore)}`}>Performans</div>
                        <div className={`text-xs ${getScoreTextColor(demoData.pageSpeedData.performanceMetrics.performanceScore)}`}>
                          {getScoreText(demoData.pageSpeedData.performanceMetrics.performanceScore)}
                        </div>
                      </div>
                      <div className={`text-center p-3 rounded-lg ${getScoreBg(demoData.pageSpeedData.report.accessibilityScore)}`}>
                        <div className={`text-2xl font-bold ${getScoreColor(demoData.pageSpeedData.report.accessibilityScore)}`}>{demoData.pageSpeedData.report.accessibilityScore}</div>
                        <div className={`text-sm ${getScoreTextColor(demoData.pageSpeedData.report.accessibilityScore)}`}>Erişilebilirlik</div>
                        <div className={`text-xs ${getScoreTextColor(demoData.pageSpeedData.report.accessibilityScore)}`}>
                          {getScoreText(demoData.pageSpeedData.report.accessibilityScore)}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Sektör Bazlı Özel Yorum */}
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-green-800">
                      <Target className="h-5 w-5" />
                      <span>{sectorInsights[demoData.sector as keyof typeof sectorInsights].title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Sektör İçgörüleri */}
                    <div>
                      <h4 className="text-sm font-semibold text-green-700 mb-2">Sektör İçgörüleri:</h4>
                      <div className="space-y-2">
                        {sectorInsights[demoData.sector as keyof typeof sectorInsights].insights.map((insight: string, index: number) => (
                          <div key={index} className="flex items-start space-x-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-green-800 leading-relaxed">{insight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Sektör Önerileri */}
                    <div>
                      <h4 className="text-sm font-semibold text-green-700 mb-2">Sektör Özel Önerileri:</h4>
                      <div className="space-y-2">
                        {sectorInsights[demoData.sector as keyof typeof sectorInsights].recommendations.map((recommendation: string, index: number) => (
                          <div key={index} className="flex items-start space-x-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-green-800 leading-relaxed">{recommendation}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Sektör Skor Değerlendirmesi */}
                    <div className="mt-4 p-3 bg-white rounded-lg border border-green-200">
                      <h4 className="text-sm font-semibold text-green-700 mb-2">Sektör Bazlı Değerlendirme:</h4>
                      <div className="text-sm text-green-800 space-y-1">
                        <p>Teknoloji sektöründe <strong>hızlı sayfa yükleme</strong> ve <strong>teknik içerik</strong> kritik öneme sahiptir. Performans skorunuz {demoData.pageSpeedData.performanceMetrics.performanceScore}/100, bu sektör için <strong>mükemmel</strong> bir seviyededir.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </DialogContent>
          </Dialog>

          {/* Analysis Form */}
          <Card className="max-w-4xl mx-auto mt-12">
            <CardContent className=" space-y-6">
              {!isAnalyzing && !showResults ? (
                <>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground z-10" />
                      <Input
                        type="url"
                        value={websiteUrl}
                        onChange={(e) => setWebsiteUrl(e.target.value)}
                        placeholder="https://orneksite.com"
                        className="pl-10 pr-12 h-12 text-base"
                      />
                      {websiteUrl && (
                        <button
                          onClick={clearInput}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 hover:bg-muted rounded-full transition-colors z-10"
                          aria-label="Temizle"
                        >
                          <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                        </button>
                      )}
                    </div>

                    <Select value={selectedSector} onValueChange={setSelectedSector}>
                      <SelectTrigger className="w-full sm:w-[200px] h-12 text-base min-h-[48px]">
                        <SelectValue placeholder="Sektör" />
                      </SelectTrigger>
                      <SelectContent>
                        {sectors.map((sector) => (
                          <SelectItem key={sector.value} value={sector.value}>
                            {sector.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <div className="flex flex-col items-center justify-center min-w-[220px]">
                      <Button
                        onClick={handleAnalyze}
                        disabled={!websiteUrl}
                        className="w-full h-12 px-6 text-base whitespace-nowrap"
                      >
                        <Search className="h-5 w-5 mr-2" />
                        Ücretsiz SEO Analizi Yap
                      </Button>
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <p className="text-xs text-muted-foreground ">
                      Sitenizin SEO puanını saniyeler içinde öğrenin.
                    </p>

                  </div>

                </>
              ) : isAnalyzing ? (
                <div className="space-y-6">
                  {/* Progress Bar */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-muted-foreground">Analiz İlerlemesi</span>
                      <span className="text-sm font-bold text-primary">{progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-primary to-primary/60 h-3 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Current Step */}
                  <div className="flex items-center justify-center space-x-3">
                    <Loader2 className="h-5 w-5 text-primary animate-spin" />
                    <span className="text-base font-medium text-foreground">{currentStep}</span>
                  </div>

                  {/* Detailed Progress Steps */}
                  <div className="space-y-2">
                    {analysisSteps.map((step, index) => (
                      <div key={index} className="flex items-center space-x-3 text-sm">
                        <div className="flex-shrink-0">
                          {step.status === 'completed' ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          ) : step.status === 'active' ? (
                            <Loader2 className="h-4 w-4 text-primary animate-spin" />
                          ) : (
                            <div className="h-4 w-4 rounded-full border-2 border-muted-foreground/30" />
                          )}
                        </div>
                        <span className={`flex-1 text-left ${step.status === 'completed' ? 'text-green-600' : step.status === 'active' ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                          {step.message}
                        </span>
                        {step.status === 'completed' && (
                          <Badge variant="outline" className="text-xs">Tamamlandı</Badge>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Cancel Button */}
                  <Button
                    variant="outline"
                    onClick={() => {
                      dispatch(resetSEOData());
                    }}
                    className="mt-4"
                  >
                    İptal Et
                  </Button>
                </div>
              ) : (
                <div ref={resultsRef} className="space-y-6">
                  {/* Results Header */}
                  <div className="text-center space-y-2" key={`results-${analyzedUrl}`}>
                    <h3 className="text-2xl font-bold">Analiz Sonuçları</h3>
                    <p className="text-muted-foreground">Web sitesi: {analyzedUrl}</p>
                    {searchCreated && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-sm text-green-700">
                          ✅ Arama kaydı başarıyla oluşturuldu. Dashboard'da görüntüleyebilirsiniz.
                        </p>
                      </div>
                    )}
                    {seoData?.isMockData && (
                      <p className="text-xs text-yellow-600">⚠️ Demo veriler kullanılıyor (Gerçek analiz için API anahtarı gerekli)</p>
                    )}
                    {seoData?.timestamp && (
                      <p className="text-xs text-muted-foreground">Son güncelleme: {new Date(seoData.timestamp).toLocaleString('tr-TR')}</p>
                    )}

                    {/* Top New Analysis Button */}
                    <div className="pt-4">
                      <Button onClick={resetAnalysis} variant="outline" size="sm">
                        <Search className="h-4 w-4 mr-2" />
                        Yeni Analiz
                      </Button>
                    </div>
                  </div>

                  {/* API Error Display */}
                  {(errors.seo || errors.pageSpeed) && (
                    <Card className="border-yellow-200 bg-yellow-50">
                      <CardContent className="pt-6">
                        <div className="flex items-center space-x-2 text-yellow-600">
                          <AlertCircle className="h-5 w-5" />
                          <span className="font-medium">Analiz Durumu</span>
                        </div>
                        <p className="text-sm text-yellow-600 mt-2">
                          Bazı analizler hesaplanamadı. Demo veriler kullanılıyor.
                        </p>
                        {errors.seo && (
                          <p className="text-xs text-yellow-500 mt-1">SEO: {errors.seo}</p>
                        )}
                        {errors.pageSpeed && (
                          <p className="text-xs text-yellow-500 mt-1">PageSpeed: {errors.pageSpeed}</p>
                        )}
                      </CardContent>
                    </Card>
                  )}

                  {/* Overall Score */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <BarChart3 className="h-5 w-5" />
                        <span>Genel Site Skoru</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col items-center space-y-4">
                        <div className={`w-24 h-24 rounded-full ${getScoreBg(combinedReport?.overallScore || 0)} flex items-center justify-center`}>
                          <span className={`text-2xl font-bold ${getScoreColor(combinedReport?.overallScore || 0)}`}>
                            {combinedReport?.overallScore || 0}
                          </span>
                        </div>
                        <div className="text-center">
                          <p className={`text-sm font-medium ${combinedReport?.overallScore ? getScoreTextColor(combinedReport.overallScore) : 'text-muted-foreground'}`}>
                            {combinedReport?.overallScore ?
                              getScoreText(combinedReport.overallScore) :
                              'Hesaplanmadı'
                            }
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {timestamp ?
                              `Son güncelleme: ${new Date(timestamp).toLocaleString('tr-TR')}` :
                              'Hesaplanmadı'
                            }
                          </p>
                        </div>
                      </div>

                      {/* Score Guide */}
                      <div className="mt-4 flex justify-between items-center text-xs">
                        <div className="flex items-center space-x-1">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <span className="text-red-700">Kötü (0-49)</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                          <span className="text-orange-700">Orta (50-69)</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <span className="text-yellow-700">İyi (70-89)</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-green-700">Mükemmel (90-100)</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Detailed Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* SEO */}
                    <Card key={`seo-${analyzedUrl}`}>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2 text-left">
                          <Globe className="h-5 w-5" />
                          <span>SEO Analizi ({seoData?.report?.overallScore || 0})</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <Progress value={seoData?.report?.overallScore || 0} className="h-2" />
                        <div className="space-y-2">
                          {seoData ? (
                            <>
                              <div className="flex items-center space-x-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span>AI Bot Erişimi: {seoData.ai_bots_allowed ? 'İzin Veriliyor' : 'Kısıtlı'}</span>
                                <Badge className={`text-xs ml-auto ${getStatusBadgeColor(seoData.ai_bots_allowed ? 'AI Dostu' : 'Kısıtlı')}`}>
                                  {seoData.ai_bots_allowed ? 'AI Dostu' : 'Kısıtlı'}
                                </Badge>
                              </div>

                              <div className="flex items-center space-x-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span>Robots.txt: {seoData.robots_found ? 'Mevcut' : 'Eksik'}</span>
                                <Badge className={`text-xs ml-auto ${getStatusBadgeColor(seoData.robots_found ? 'SEO' : 'Eksik')}`}>
                                  {seoData.robots_found ? 'SEO' : 'Eksik'}
                                </Badge>
                              </div>

                              <div className="flex items-center space-x-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span>Meta Etiketleri: {seoData.meta_tags ? 'Mevcut' : 'Eksik'}</span>
                                <Badge className={`text-xs ml-auto ${getStatusBadgeColor(seoData.meta_tags ? 'Optimize' : 'Eksik')}`}>
                                  {seoData.meta_tags ? 'Optimize' : 'Eksik'}
                                </Badge>
                              </div>

                              <div className="flex items-center space-x-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span>Başlık Etiketi: {seoData.title ? 'Mevcut' : 'Eksik'}</span>
                                <Badge className={`text-xs ml-auto ${getStatusBadgeColor(seoData.title ? 'SEO' : 'Eksik')}`}>
                                  {seoData.title ? 'SEO' : 'Eksik'}
                                </Badge>
                              </div>

                              <div className="flex items-center space-x-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span>Başlık Uzunluğu: {seoData.title ? (seoData.title.length <= 60 ? 'Uygun' : 'Uzun') : 'Eksik'}</span>
                                <Badge className={`text-xs ml-auto ${getStatusBadgeColor(seoData.title ? (seoData.title.length <= 60 ? 'Optimal' : 'Uzun') : 'Eksik')}`}>
                                  {seoData.title ? (seoData.title.length <= 60 ? 'Optimal' : 'Uzun') : 'Eksik'}
                                </Badge>
                              </div>

                              <div className="flex items-center space-x-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span>Açıklama: {seoData.description ? 'Mevcut' : 'Eksik'}</span>
                                <Badge className={`text-xs ml-auto ${getStatusBadgeColor(seoData.description ? 'SEO' : 'Eksik')}`}>
                                  {seoData.description ? 'SEO' : 'Eksik'}
                                </Badge>
                              </div>

                              <div className="flex items-center space-x-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span>Anahtar Kelimeler: {seoData.keywords ? 'Mevcut' : 'Eksik'}</span>
                                <Badge className={`text-xs ml-auto ${getStatusBadgeColor(seoData.keywords ? 'SEO' : 'Eksik')}`}>
                                  {seoData.keywords ? 'SEO' : 'Eksik'}
                                </Badge>
                              </div>

                              <div className="flex items-center space-x-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span>CTA Varlığı: {seoData.cta_buttons ? 'Mevcut' : 'Eksik'}</span>
                                <Badge className={`text-xs ml-auto ${getStatusBadgeColor(seoData.cta_buttons ? 'Optimize' : 'Eksik')}`}>
                                  {seoData.cta_buttons ? 'Optimize' : 'Eksik'}
                                </Badge>
                              </div>

                              <div className="flex items-center space-x-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span>Anahtar Kelime Yoğunluğu: {seoData.keyword_density ? 'Uygun' : 'Düşük'}</span>
                                <Badge className={`text-xs ml-auto ${getStatusBadgeColor(seoData.keyword_density ? 'Optimal' : 'Düşük')}`}>
                                  {seoData.keyword_density ? 'Optimal' : 'Düşük'}
                                </Badge>
                              </div>
                            </>
                          ) : (
                            <div className="flex items-center space-x-2 text-sm">
                              <AlertCircle className="h-4 w-4 text-yellow-500" />
                              <span className="flex-1">SEO Analizi: Hesaplanmadı</span>
                              <Badge variant="outline" className="text-xs">Hata</Badge>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>

                    {/* On-Page SEO */}
                    <Card key={`on-page-${analyzedUrl}`}>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2 text-left">
                          <Lightbulb className="h-5 w-5" />
                          <span>On-Page SEO Analizi ({onPageData?.report?.overallScore || 0})</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <Progress value={onPageData?.report?.overallScore || 0} className="h-2" />
                        <div className="space-y-2">
                          {onPageData ? (
                            <>
                              {/* Title Analysis */}
                              {onPageData.webtitle && (
                                <div className="flex items-center space-x-2 text-sm">
                                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                  <span>Title: {onPageData.webtitle.title}</span>
                                  <Badge className={`text-xs ml-auto ${getStatusBadgeColor(onPageData.webtitle.length <= 60 ? 'Optimal' : 'Uzun')}`}>
                                    {onPageData.webtitle.length} karakter
                                  </Badge>
                                </div>
                              )}

                              {/* Meta Description */}
                              {onPageData.metadescription && (
                                                              <div className="flex items-center space-x-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span>Meta Açıklama: {onPageData.metadescription.description}</span>
                                <Badge className={`text-xs ml-auto ${getStatusBadgeColor(onPageData.metadescription.length <= 160 ? 'Optimal' : 'Uzun')}`}>
                                  {onPageData.metadescription.length} karakter
                                </Badge>
                              </div>
                              )}

                              {/* Headings Structure */}
                              {onPageData.headings && (
                                <div className="flex items-center space-x-2 text-sm">
                                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                  <span>Heading Yapısı: H1({onPageData.headings.h1?.count || 0}) H2({onPageData.headings.h2?.count || 0}) H3({onPageData.headings.h3?.count || 0})</span>
                                  <Badge className={`text-xs ml-auto ${getStatusBadgeColor(onPageData.headings.h1?.count === 1 ? 'İyi' : 'İyileştirilmeli')}`}>
                                    {onPageData.headings.h1?.count === 1 ? 'İyi' : 'İyileştirilmeli'}
                                  </Badge>
                                </div>
                              )}

                              {/* Images */}
                              {onPageData.images && (
                                <div className="flex items-center space-x-2 text-sm">
                                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                  <span>Resim Sayısı: {onPageData.images.count} adet</span>
                                  <Badge className={`text-xs ml-auto ${getStatusBadgeColor(onPageData.images.count <= 20 ? 'Optimal' : 'Fazla')}`}>
                                    {onPageData.images.count <= 20 ? 'Optimal' : 'Fazla'}
                                  </Badge>
                                </div>
                              )}

                              {/* Links */}
                              {onPageData.links && (
                                <div className="flex items-center space-x-2 text-sm">
                                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                  <span>Link Sayısı: {onPageData.links.count} adet</span>
                                  <Badge className={`text-xs ml-auto ${getStatusBadgeColor(onPageData.links.count >= 10 && onPageData.links.count <= 50 ? 'Optimal' : 'İyileştirilmeli')}`}>
                                    {onPageData.links.count >= 10 && onPageData.links.count <= 50 ? 'Optimal' : 'İyileştirilmeli'}
                                  </Badge>
                                </div>
                              )}

                              {/* Sitemap & Robots */}
                              {onPageData.sitemap_robots && (
                                <div className="flex items-center space-x-2 text-sm">
                                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                  <span>Sitemap & Robots: {onPageData.sitemap_robots.join(', ')}</span>
                                  <Badge className={`text-xs ml-auto ${getStatusBadgeColor(onPageData.sitemap_robots.length === 2 ? 'Mevcut' : 'Eksik')}`}>
                                    {onPageData.sitemap_robots.length === 2 ? 'Mevcut' : 'Eksik'}
                                  </Badge>
                                </div>
                              )}

                              {/* Iframe */}
                              {onPageData.iframe && (
                                <div className="flex items-center space-x-2 text-sm">
                                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                  <span>Iframe Kullanımı: {onPageData.iframe.count} adet</span>
                                  <Badge className={`text-xs ml-auto ${getStatusBadgeColor(onPageData.iframe.count === 0 ? 'Yok (İyi)' : 'Var')}`}>
                                    {onPageData.iframe.count === 0 ? 'Yok (İyi)' : 'Var'}
                                  </Badge>
                                </div>
                              )}
                            </>
                          ) : (
                            <div className="flex items-center space-x-2 text-sm">
                              <AlertCircle className="h-4 w-4 text-yellow-500" />
                              <span className="flex-1">On-Page SEO Analizi: Hesaplanmadı</span>
                              <Badge variant="outline" className="text-xs">Beklemede</Badge>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Performance */}
                    <Card key={`performance-${analyzedUrl}`}>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2 text-left">
                          <Zap className="h-5 w-5" />
                          <span>Performans ({pageSpeedData?.performanceMetrics?.performanceScore || 0})</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <Progress value={pageSpeedData?.performanceMetrics?.performanceScore || 0} className="h-2" />
                        <div className="space-y-2">
                                                  <div className="flex justify-between items-center text-sm">
                          <span>İlk İçerik Boyama</span>
                          <span className="font-mono text-green-600">
                            {pageSpeedData?.performanceMetrics?.firstContentfulPaint || 'Hesaplanmadı'}
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span>En Büyük İçerik Boyama</span>
                          <span className="font-mono text-green-600">
                            {pageSpeedData?.performanceMetrics?.largestContentfulPaint || 'Hesaplanmadı'}
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span>Hız Endeksi</span>
                          <span className="font-mono text-green-600">
                            {pageSpeedData?.performanceMetrics?.speedIndex || 'Hesaplanmadı'}
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span>Toplam Engelleme Süresi</span>
                          <span className="font-mono text-green-600">
                            {pageSpeedData?.performanceMetrics?.totalBlockingTime || 'Hesaplanmadı'}
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span>Kümülatif Düzen Kayması</span>
                          <span className="font-mono text-green-600">
                            {pageSpeedData?.performanceMetrics?.cumulativeLayoutShift || 'Hesaplanmadı'}
                          </span>
                        </div>
                        </div>

                        {/* Performance Score Details */}



                      </CardContent>
                    </Card>

                    {/* Accessibility */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2 text-left">
                          <Smartphone className="h-5 w-5" />
                          <span>Erişilebilirlik ({pageSpeedData?.report?.accessibilityScore || 0})</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <Progress value={pageSpeedData?.report?.accessibilityScore || 0} className="h-2" />
                        <div className="space-y-2">
                          {pageSpeedData?.report ? (
                            <>
                              {/* Accessibility Score Level */}
                              <div className="flex items-center space-x-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span className={getScoreTextColor(pageSpeedData.report.accessibilityScore)}>
                                  {getScoreText(pageSpeedData.report.accessibilityScore)} erişilebilirlik
                                </span>
                                <Badge variant="outline" className={`text-xs ml-auto ${getScoreTextColor(pageSpeedData.report.accessibilityScore)}`}>
                                  {getScoreText(pageSpeedData.report.accessibilityScore)}
                                </Badge>
                              </div>

                              {/* Alt Text Analysis */}
                              <div className="flex items-center space-x-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span>Alt Metni: {pageSpeedData.report.accessibilityScore >= 70 ? 'Mevcut' : 'Eksik'}</span>
                                <Badge className={`text-xs ml-auto ${getStatusBadgeColor(pageSpeedData.report.accessibilityScore >= 70 ? 'Optimize' : 'Eksik')}`}>
                                  {pageSpeedData.report.accessibilityScore >= 70 ? 'Optimize' : 'Eksik'}
                                </Badge>
                              </div>

                              {/* ARIA Labels Analysis */}
                              <div className="flex items-center space-x-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span>ARIA Etiketleri: {pageSpeedData.report.accessibilityScore >= 80 ? 'Mevcut' : 'Eksik'}</span>
                                <Badge className={`text-xs ml-auto ${getStatusBadgeColor(pageSpeedData.report.accessibilityScore >= 80 ? 'Optimize' : 'Eksik')}`}>
                                  {pageSpeedData.report.accessibilityScore >= 80 ? 'Optimize' : 'Eksik'}
                                </Badge>
                              </div>

                              {/* Keyboard Navigation Analysis */}
                              <div className="flex items-center space-x-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span>Klavye Navigasyonu: {pageSpeedData.report.accessibilityScore >= 75 ? 'Mevcut' : 'Eksik'}</span>
                                <Badge className={`text-xs ml-auto ${getStatusBadgeColor(pageSpeedData.report.accessibilityScore >= 75 ? 'Optimize' : 'Eksik')}`}>
                                  {pageSpeedData.report.accessibilityScore >= 75 ? 'Optimize' : 'Eksik'}
                                </Badge>
                              </div>

                              {/* Color Contrast Analysis */}
                              <div className="flex items-center space-x-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span>Renk Kontrastı: {pageSpeedData.report.accessibilityScore >= 85 ? 'Uygun' : 'İyileştirilmeli'}</span>
                                <Badge className={`text-xs ml-auto ${getStatusBadgeColor(pageSpeedData.report.accessibilityScore >= 85 ? 'Uygun' : 'Düşük')}`}>
                                  {pageSpeedData.report.accessibilityScore >= 85 ? 'Uygun' : 'Düşük'}
                                </Badge>
                              </div>

                              {/* Screen Reader Compatibility */}
                              <div className="flex items-center space-x-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span>Ekran Okuyucu: {pageSpeedData.report.accessibilityScore >= 80 ? 'Uyumlu' : 'İyileştirilmeli'}</span>
                                <Badge className={`text-xs ml-auto ${getStatusBadgeColor(pageSpeedData.report.accessibilityScore >= 80 ? 'Uyumlu' : 'Kısıtlı')}`}>
                                  {pageSpeedData.report.accessibilityScore >= 80 ? 'Uyumlu' : 'Kısıtlı'}
                                </Badge>
                              </div>
                            </>
                          ) : (
                            <div className="flex items-center space-x-2 text-sm">
                              <AlertCircle className="h-4 w-4 text-yellow-500" />
                              <span className="flex-1">Erişilebilirlik Analizi: Hesaplanmadı</span>
                              <Badge variant="outline" className="text-xs">Beklemede</Badge>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>

                  </div>

                  {/* Combined Report Summary */}
                  {combinedReport && (
                    <Card className="border border-gray-200">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <BarChart3 className="h-5 w-5" />
                          <span>Rapor Özeti</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {/* Overall Assessment */}
                        <div className={`p-3 rounded-lg ${getScoreBg(combinedReport.overallScore)}`}>
                          <h4 className={`text-lg font-bold ${getScoreTextColor(combinedReport.overallScore)}`}>
                            {getScoreText(combinedReport.overallScore)} - {combinedReport.overallScore}/100
                          </h4>
                        </div>

                        {/* Key Points */}
                        <div className="space-y-3">
                          {combinedReport.strengths.length > 0 && (
                            <div>
                              <h5 className="text-sm font-medium text-green-700 mb-2 text-left">Güçlü Yönler:</h5>
                              <div className="space-y-1">
                                {combinedReport.strengths.slice(0, 3).map((strength: string, index: number) => (
                                  <div key={index} className="flex items-center space-x-2 text-sm">
                                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                    <span className="text-gray-700 text-left">{strength}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          {combinedReport.weaknesses.length > 0 && (
                            <div>
                              <h5 className="text-sm font-medium text-red-700 mb-2 text-left">Zayıf Yönler:</h5>
                              <div className="space-y-1">
                                {combinedReport.weaknesses.slice(0, 3).map((weakness: string, index: number) => (
                                  <div key={index} className="flex items-center space-x-2 text-sm">
                                    <AlertCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                                    <span className="text-gray-700 text-left">{weakness}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Detailed Scores */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                          {seoData?.report?.overallScore !== undefined && (
                            <div className={`text-center p-3 rounded-lg ${getScoreBg(seoData.report.overallScore)}`}>
                              <div className={`text-2xl font-bold ${getScoreColor(seoData.report.overallScore)}`}>{seoData.report.overallScore}</div>
                              <div className={`text-sm ${getScoreTextColor(seoData.report.overallScore)}`}>AI SEO Skoru</div>
                              <div className={`text-xs ${getScoreTextColor(seoData.report.overallScore)}`}>{getScoreText(seoData.report.overallScore)}</div>
                            </div>
                          )}
                          {onPageData?.report?.overallScore !== undefined && (
                            <div className={`text-center p-3 rounded-lg ${getScoreBg(onPageData.report.overallScore)}`}>
                              <div className={`text-2xl font-bold ${getScoreColor(onPageData.report.overallScore)}`}>{onPageData.report.overallScore}</div>
                              <div className={`text-sm ${getScoreTextColor(onPageData.report.overallScore)}`}>On-Page SEO</div>
                              <div className={`text-xs ${getScoreTextColor(onPageData.report.overallScore)}`}>{getScoreText(onPageData.report.overallScore)}</div>
                            </div>
                          )}
                          {pageSpeedData?.performanceMetrics?.performanceScore !== undefined && (
                            <div className={`text-center p-3 rounded-lg ${getScoreBg(pageSpeedData.performanceMetrics.performanceScore)}`}>
                              <div className={`text-2xl font-bold ${getScoreColor(pageSpeedData.performanceMetrics.performanceScore)}`}>{pageSpeedData.performanceMetrics.performanceScore}</div>
                              <div className={`text-sm ${getScoreTextColor(pageSpeedData.performanceMetrics.performanceScore)}`}>Performans</div>
                              <div className={`text-xs ${getScoreTextColor(pageSpeedData.performanceMetrics.performanceScore)}`}>
                                {getScoreText(pageSpeedData.performanceMetrics.performanceScore)}
                              </div>
                            </div>
                          )}
                          {pageSpeedData?.report?.accessibilityScore !== undefined && (
                            <div className={`text-center p-3 rounded-lg ${getScoreBg(pageSpeedData.report.accessibilityScore)}`}>
                              <div className={`text-2xl font-bold ${getScoreColor(pageSpeedData.report.accessibilityScore)}`}>{pageSpeedData.report.accessibilityScore}</div>
                              <div className={`text-sm ${getScoreTextColor(pageSpeedData.report.accessibilityScore)}`}>Erişilebilirlik</div>
                              <div className={`text-xs ${getScoreTextColor(pageSpeedData.report.accessibilityScore)}`}>
                                {getScoreText(pageSpeedData.report.accessibilityScore)}
                              </div>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button onClick={resetAnalysis} variant="outline">
                      Yeni Analiz
                    </Button>

                  </div>

                  {/* Sektör Bazlı Özel Yorum */}
                  {selectedSector && selectedSector !== 'other' && sectorInsights[selectedSector as keyof typeof sectorInsights] && (
                    <Card className="border-green-200 bg-green-50">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2 text-green-800">
                          <Target className="h-5 w-5" />
                          <span>{sectorInsights[selectedSector as keyof typeof sectorInsights].title}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {/* Sektör İçgörüleri */}
                        <div>
                          <h4 className="text-sm font-semibold text-green-700 mb-2">Sektör İçgörüleri:</h4>
                          <div className="space-y-2">
                            {sectorInsights[selectedSector as keyof typeof sectorInsights].insights.map((insight, index) => (
                              <div key={index} className="flex items-start space-x-2 text-sm">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-green-800 leading-relaxed">{insight}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Sektör Önerileri */}
                        <div>
                          <h4 className="text-sm font-semibold text-green-700 mb-2">Sektör Özel Önerileri:</h4>
                          <div className="space-y-2">
                            {sectorInsights[selectedSector as keyof typeof sectorInsights].recommendations.map((recommendation, index) => (
                              <div key={index} className="flex items-start space-x-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                <span className="text-green-800 leading-relaxed">{recommendation}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Sektör Skor Değerlendirmesi */}
                        <div className="mt-4 p-3 bg-white rounded-lg border border-green-200">
                          <h4 className="text-sm font-semibold text-green-700 mb-2">Sektör Bazlı Değerlendirme:</h4>
                          <div className="text-sm text-green-800 space-y-1">
                            {selectedSector === 'ecommerce' && (
                              <p>E-ticaret siteniz için özellikle <strong>sayfa yükleme hızı</strong> ve <strong>mobil uyumluluk</strong> kritik öneme sahiptir. Mevcut performans skorunuz {pageSpeedData?.performanceMetrics?.performanceScore || 0}/100, bu sektör için {pageSpeedData?.performanceMetrics?.performanceScore >= 70 ? 'kabul edilebilir' : 'iyileştirilmesi gereken'} bir seviyededir.</p>
                            )}
                            {selectedSector === 'health' && (
                              <p>Sağlık sektöründe <strong>güvenilirlik</strong> ve <strong>erişilebilirlik</strong> en önemli faktörlerdir. Erişilebilirlik skorunuz {pageSpeedData?.report?.accessibilityScore || 0}/100, bu sektör için {pageSpeedData?.report?.accessibilityScore >= 80 ? 'uygun' : 'iyileştirilmesi gereken'} bir seviyededir.</p>
                            )}
                            {selectedSector === 'education' && (
                              <p>Eğitim sektöründe <strong>yerel SEO</strong> ve <strong>organik arama</strong> kritik öneme sahiptir. SEO skorunuz {seoData?.report?.overallScore || 0}/100, bu sektör için {seoData?.report?.overallScore >= 75 ? 'iyi' : 'iyileştirilmesi gereken'} bir seviyededir.</p>
                            )}
                            {selectedSector === 'finance' && (
                              <p>Finans sektöründe <strong>güvenlik</strong> ve <strong>şeffaflık</strong> en önemli faktörlerdir. Genel skorunuz {combinedReport?.overallScore || 0}/100, bu sektör için {combinedReport?.overallScore >= 80 ? 'güvenilir' : 'iyileştirilmesi gereken'} bir seviyededir.</p>
                            )}
                            {selectedSector === 'technology' && (
                              <p>Teknoloji sektöründe <strong>hızlı sayfa yükleme</strong> ve <strong>teknik içerik</strong> kritik öneme sahiptir. Performans skorunuz {pageSpeedData?.performanceMetrics?.performanceScore || 0}/100, bu sektör için {pageSpeedData?.performanceMetrics?.performanceScore >= 85 ? 'mükemmel' : 'iyileştirilmesi gereken'} bir seviyededir.</p>
                            )}
                            {selectedSector === 'tourism' && (
                              <p>Turizm sektöründe <strong>görsel içerik</strong> ve <strong>yerel SEO</strong> kritik öneme sahiptir. On-page SEO skorunuz {onPageData?.report?.overallScore || 0}/100, bu sektör için {onPageData?.report?.overallScore >= 70 ? 'iyi' : 'iyileştirilmesi gereken'} bir seviyededir.</p>
                            )}
                            {selectedSector === 'food' && (
                              <p>Gıda sektöründe <strong>yerel arama</strong> ve <strong>mobil uyumluluk</strong> kritik öneme sahiptir. Erişilebilirlik skorunuz {pageSpeedData?.report?.accessibilityScore || 0}/100, bu sektör için {pageSpeedData?.report?.accessibilityScore >= 75 ? 'uygun' : 'iyileştirilmesi gereken'} bir seviyededir.</p>
                            )}
                            {selectedSector === 'fashion' && (
                              <p>Moda sektöründe <strong>görsel içerik</strong> ve <strong>mobil alışveriş deneyimi</strong> kritik öneme sahiptir. Performans skorunuz {pageSpeedData?.performanceMetrics?.performanceScore || 0}/100, bu sektör için {pageSpeedData?.performanceMetrics?.performanceScore >= 75 ? 'iyi' : 'iyileştirilmesi gereken'} bir seviyededir.</p>
                            )}
                            {selectedSector === 'real-estate' && (
                              <p>Emlak sektöründe <strong>görsel içerik</strong> ve <strong>mobil uyumluluk</strong> kritik öneme sahiptir. On-page SEO skorunuz {onPageData?.report?.overallScore || 0}/100, bu sektör için {onPageData?.report?.overallScore >= 70 ? 'iyi' : 'iyileştirilmesi gereken'} bir seviyededir.</p>
                            )}
                            {selectedSector === 'law' && (
                              <p>Hukuk sektöründe <strong>güvenilirlik</strong> ve <strong>organik arama</strong> kritik öneme sahiptir. SEO skorunuz {seoData?.report?.overallScore || 0}/100, bu sektör için {seoData?.report?.overallScore >= 80 ? 'güvenilir' : 'iyileştirilmesi gereken'} bir seviyededir.</p>
                            )}
                            {selectedSector === 'sports' && (
                              <p>Spor sektöründe <strong>mobil uyumluluk</strong> ve <strong>anlık içerik</strong> kritik öneme sahiptir. Performans skorunuz {pageSpeedData?.performanceMetrics?.performanceScore || 0}/100, bu sektör için {pageSpeedData?.performanceMetrics?.performanceScore >= 80 ? 'iyi' : 'iyileştirilmesi gereken'} bir seviyededir.</p>
                            )}
                            {selectedSector === 'media' && (
                              <p>Medya sektöründe <strong>hızlı içerik yayını</strong> ve <strong>mobil uyumluluk</strong> kritik öneme sahiptir. Performans skorunuz {pageSpeedData?.performanceMetrics?.performanceScore || 0}/100, bu sektör için {pageSpeedData?.performanceMetrics?.performanceScore >= 85 ? 'mükemmel' : 'iyileştirilmesi gereken'} bir seviyededir.</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

    </section>
  );
};

export default Hero;
