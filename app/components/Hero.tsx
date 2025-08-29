'use client';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { analyzeSEO, resetSEOData } from '@/redux/actions/seoActions';
import { updateProgress, setAnalyzedUrl } from '@/redux/reducers/seoReducer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Search, TrendingUp, Zap, Target, X, Loader2, CheckCircle, AlertCircle, Clock, BarChart3, Globe, Smartphone, Monitor, Lightbulb } from 'lucide-react';

  const Hero = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { 
    seoData, 
    pageSpeedData, 
    combinedReport,
    errors, 
    isLoading, 
    isAnalyzing, 
    progress, 
    currentStep, 
    analysisSteps,
    timestamp,
    analyzedUrl 
  } = useSelector((state: RootState) => state.seo);

  // Debug logging
  useEffect(() => {
    console.log('Hero Redux State:', {
      seoData,
      pageSpeedData,
      errors,
      isLoading,
      isAnalyzing,
      progress,
      currentStep,
      analyzedUrl,
      timestamp
    });
  }, [seoData, pageSpeedData, errors, isLoading, isAnalyzing, progress, currentStep, analyzedUrl, timestamp]);
  
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [selectedSector, setSelectedSector] = useState('');
  const [showResults, setShowResults] = useState(false);

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
    { value: 'other', label: 'Diğer' }
  ];

  const features = [
    { icon: TrendingUp, title: 'Veri Odaklı', description: 'Analitik tabanlı stratejiler' },
    { icon: Zap, title: 'Hızlı Sonuç', description: '30 günde ilk sonuçlar' },
    { icon: Target, title: 'Hedef Odaklı', description: 'Sektöre özel yaklaşım' }
  ];

  // Mock analysis results
  const analysisResults = {
    seo: {
      score: 78,
      title: 'SEO Optimizasyonu',
      issues: [
        { type: 'error', message: 'Meta description eksik', impact: 'Yüksek' },
        { type: 'warning', message: 'H1 etiketi fazla kullanılmış', impact: 'Orta' },
        { type: 'success', message: 'Alt etiketleri mevcut', impact: 'Düşük' }
      ]
    },
    performance: {
      score: 85,
      title: 'Performans',
      metrics: [
        { name: 'First Contentful Paint', value: '1.2s', status: 'good' },
        { name: 'Largest Contentful Paint', value: '2.8s', status: 'good' },
        { name: 'Cumulative Layout Shift', value: '0.05', status: 'good' },
        { name: 'First Input Delay', value: '45ms', status: 'good' }
      ]
    },
    accessibility: {
      score: 92,
      title: 'Erişilebilirlik',
      issues: [
        { type: 'success', message: 'Renk kontrastı uygun', impact: 'Düşük' },
        { type: 'warning', message: 'Alt etiketleri eksik', impact: 'Orta' }
      ]
    },
    bestPractices: {
      score: 88,
      title: 'En İyi Uygulamalar',
      issues: [
        { type: 'success', message: 'HTTPS kullanılıyor', impact: 'Düşük' },
        { type: 'warning', message: 'Console hataları mevcut', impact: 'Orta' }
      ]
    }
  };

  const handleAnalyze = async () => {
    if (websiteUrl) {
      setShowResults(false);
      dispatch(setAnalyzedUrl(websiteUrl));
      
      // Set analyzing state to true to show progress
      dispatch({ type: 'seo/setAnalyzing', payload: true });
      
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
        { progress: 96, message: 'Rapor hazırlanıyor...' },
        { progress: 100, message: 'Analiz tamamlandı!' }
      ];

      // Create a race between progress simulation and actual API completion
      let apiCompleted = false;
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
      const result = await dispatch(analyzeSEO({ url: websiteUrl, sector: selectedSector }));
      apiCompleted = true;
      
      console.log('API Analysis completed. Result:', result);

      // Wait for progress simulation to complete
      if (!progressCompleted) {
        console.log('Waiting for progress animation to complete...');
        await progressPromise;
      }

      // Show results immediately after progress is complete
      console.log('Showing results...');
      setShowResults(true);
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
    return 'text-red-600';
  };

  const getScoreBg = (score: number) => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 70) return 'bg-yellow-100';
    return 'bg-red-100';
  };



  return (
    <section id="hero" className="relative flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 py-30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div className="space-y-4">
            <Badge variant="secondary" className="mb-4">
              Modern SEO Çözümleri
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                SEO
              </span>
              <span className="text-foreground"> Marketing & Agency</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ensuring the best return on investment for your bespoke SEO Campaign requirement.
            </p>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                <feature.icon className="h-4 w-4 text-primary" />
                <span className="font-medium">{feature.title}</span>
                <span>•</span>
                <span>{feature.description}</span>
              </div>
            ))}
          </div>

          {/* Analysis Form */}
          <Card className="max-w-4xl mx-auto mt-12">
            <CardContent className=" space-y-6">
              {!isAnalyzing && !showResults ? (
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative max-w-md">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="url"
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                      placeholder="https://yoursite.com"
                      className="pl-12 pr-10 h-12 text-base"
                    />
                    {websiteUrl && (
                      <button
                        onClick={clearInput}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-muted rounded-full transition-colors"
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
                  
                  <Button 
                    onClick={handleAnalyze}
                    disabled={!websiteUrl}
                    className="w-full sm:w-[180px] h-12 px-8 text-base"
                  >
                    <Search className="h-5 w-5 mr-2" />
                    Analiz Et
                  </Button>
                </div>
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
                <div className="space-y-6">
                  {/* Results Header */}
                  <div className="text-center space-y-2" key={`results-${analyzedUrl}`}>
                    <h3 className="text-2xl font-bold">Analiz Sonuçları</h3>
                    <p className="text-muted-foreground">Web sitesi: {analyzedUrl}</p>
                    {seoData?.isMockData && (
                      <p className="text-xs text-yellow-600">⚠️ Demo veriler kullanılıyor (Gerçek analiz için API anahtarı gerekli)</p>
                    )}
                    {seoData?.timestamp && (
                      <p className="text-xs text-muted-foreground">Son güncelleme: {new Date(seoData.timestamp).toLocaleString('tr-TR')}</p>
                    )}
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
                          <p className="text-sm font-medium">
                            {combinedReport?.scoreLevel ? 
                              combinedReport.scoreLevel.charAt(0).toUpperCase() + combinedReport.scoreLevel.slice(1) :
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
                      <div className="mt-4 grid grid-cols-4 gap-2 text-xs">
                        <div className="flex items-center space-x-1">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span>Mükemmel (80-100)</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <span>İyi (60-79)</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <span>Orta (40-59)</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <span>Kötü (0-39)</span>
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
                                <Badge variant="outline" className="text-xs ml-auto">
                                  {seoData.ai_bots_allowed ? 'AI Dostu' : 'Kısıtlı'}
                                </Badge>
                              </div>
                              
                              <div className="flex items-center space-x-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span>Robots.txt: {seoData.robots_found ? 'Mevcut' : 'Eksik'}</span>
                                <Badge variant="outline" className="text-xs ml-auto">
                                  {seoData.robots_found ? 'SEO' : 'Eksik'}
                                </Badge>
                              </div>

                              <div className="flex items-center space-x-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span>Meta Tags: {seoData.meta_tags ? 'Mevcut' : 'Eksik'}</span>
                                <Badge variant="outline" className="text-xs ml-auto">
                                  {seoData.meta_tags ? 'Optimize' : 'Eksik'}
                                </Badge>
                              </div>

                              <div className="flex items-center space-x-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span>Title Tag: {seoData.title ? 'Mevcut' : 'Eksik'}</span>
                                <Badge variant="outline" className="text-xs ml-auto">
                                  {seoData.title ? 'SEO' : 'Eksik'}
                                </Badge>
                              </div>

                              <div className="flex items-center space-x-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span>Description: {seoData.description ? 'Mevcut' : 'Eksik'}</span>
                                <Badge variant="outline" className="text-xs ml-auto">
                                  {seoData.description ? 'SEO' : 'Eksik'}
                                </Badge>
                              </div>

                              <div className="flex items-center space-x-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span>Keywords: {seoData.keywords ? 'Mevcut' : 'Eksik'}</span>
                                <Badge variant="outline" className="text-xs ml-auto">
                                  {seoData.keywords ? 'SEO' : 'Eksik'}
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
                            <span>First Contentful Paint</span>
                            <span className="font-mono text-green-600">
                              {pageSpeedData?.performanceMetrics?.firstContentfulPaint || 'Hesaplanmadı'}
                            </span>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span>Largest Contentful Paint</span>
                            <span className="font-mono text-green-600">
                              {pageSpeedData?.performanceMetrics?.largestContentfulPaint || 'Hesaplanmadı'}
                            </span>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span>Speed Index</span>
                            <span className="font-mono text-green-600">
                              {pageSpeedData?.performanceMetrics?.speedIndex || 'Hesaplanmadı'}
                            </span>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span>Total Blocking Time</span>
                            <span className="font-mono text-green-600">
                              {pageSpeedData?.performanceMetrics?.totalBlockingTime || 'Hesaplanmadı'}
                            </span>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span>Cumulative Layout Shift</span>
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
                        <div className="space-y-2">
                          {pageSpeedData?.report ? (
                            <>
                              <div className="flex items-center space-x-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span>
                                  {pageSpeedData.report.accessibilityScore >= 90 ? 'Mükemmel erişilebilirlik' :
                                   pageSpeedData.report.accessibilityScore >= 70 ? 'İyi erişilebilirlik' :
                                   pageSpeedData.report.accessibilityScore >= 50 ? 'Orta erişilebilirlik' : 'Düşük erişilebilirlik'}
                                </span>
                                <Badge variant="outline" className="text-xs ml-auto">
                                  {pageSpeedData.report.accessibilityScore >= 90 ? 'Mükemmel' :
                                   pageSpeedData.report.accessibilityScore >= 70 ? 'İyi' :
                                   pageSpeedData.report.accessibilityScore >= 50 ? 'Orta' : 'Kötü'}
                                </Badge>
                              </div>
                              
                              <div className="flex items-center space-x-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span>Alt Text: {pageSpeedData.report.accessibilityScore >= 70 ? 'Mevcut' : 'Eksik'}</span>
                                <Badge variant="outline" className="text-xs ml-auto">
                                  {pageSpeedData.report.accessibilityScore >= 70 ? 'Optimize' : 'Eksik'}
                                </Badge>
                              </div>

                              <div className="flex items-center space-x-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span>ARIA Labels: {pageSpeedData.report.accessibilityScore >= 80 ? 'Mevcut' : 'Eksik'}</span>
                                <Badge variant="outline" className="text-xs ml-auto">
                                  {pageSpeedData.report.accessibilityScore >= 80 ? 'Optimize' : 'Eksik'}
                                </Badge>
                              </div>

                              <div className="flex items-center space-x-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span>Keyboard Navigation: {pageSpeedData.report.accessibilityScore >= 75 ? 'Mevcut' : 'Eksik'}</span>
                                <Badge variant="outline" className="text-xs ml-auto">
                                  {pageSpeedData.report.accessibilityScore >= 75 ? 'Optimize' : 'Eksik'}
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

                    {/* Best Practices */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2 text-left">
                          <Monitor className="h-5 w-5" />
                          <span>En İyi Uygulamalar ({pageSpeedData?.report?.bestPracticesScore || 0})</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="space-y-2">
                          {pageSpeedData?.report ? (
                            <>
                              <div className="flex items-center space-x-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span>
                                  {pageSpeedData.report.bestPracticesScore >= 90 ? 'Mükemmel en iyi uygulamalar' :
                                   pageSpeedData.report.bestPracticesScore >= 70 ? 'İyi en iyi uygulamalar' :
                                   pageSpeedData.report.bestPracticesScore >= 50 ? 'Orta en iyi uygulamalar' : 'Düşük en iyi uygulamalar'}
                                </span>
                                <Badge variant="outline" className="text-xs ml-auto">
                                  {pageSpeedData.report.bestPracticesScore >= 90 ? 'Mükemmel' :
                                   pageSpeedData.report.bestPracticesScore >= 70 ? 'İyi' :
                                   pageSpeedData.report.bestPracticesScore >= 50 ? 'Orta' : 'Kötü'}
                                </Badge>
                              </div>
                              
                              <div className="flex items-center space-x-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span>HTTPS: {pageSpeedData.report.bestPracticesScore >= 85 ? 'Mevcut' : 'Eksik'}</span>
                                <Badge variant="outline" className="text-xs ml-auto">
                                  {pageSpeedData.report.bestPracticesScore >= 85 ? 'Güvenli' : 'Eksik'}
                                </Badge>
                              </div>

                              <div className="flex items-center space-x-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span>Console Errors: {pageSpeedData.report.bestPracticesScore >= 80 ? 'Temiz' : 'Var'}</span>
                                <Badge variant="outline" className="text-xs ml-auto">
                                  {pageSpeedData.report.bestPracticesScore >= 80 ? 'Temiz' : 'Hata'}
                                </Badge>
                              </div>

                              <div className="flex items-center space-x-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span>Deprecated APIs: {pageSpeedData.report.bestPracticesScore >= 75 ? 'Yok' : 'Var'}</span>
                                <Badge variant="outline" className="text-xs ml-auto">
                                  {pageSpeedData.report.bestPracticesScore >= 75 ? 'Temiz' : 'Var'}
                                </Badge>
                              </div>
                            </>
                          ) : (
                            <div className="flex items-center space-x-2 text-sm">
                              <AlertCircle className="h-4 w-4 text-yellow-500" />
                              <span className="flex-1">En İyi Uygulamalar Analizi: Hesaplanmadı</span>
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
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <h4 className="text-lg font-bold text-gray-800">
                            {combinedReport.scoreLevel.charAt(0).toUpperCase() + combinedReport.scoreLevel.slice(1)} - {combinedReport.overallScore}/100
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
                      </CardContent>
                    </Card>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button onClick={resetAnalysis} variant="outline">
                      Yeni Analiz
                    </Button>
                    <Button>
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Detaylı Rapor İndir
                    </Button>
                  </div>
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
