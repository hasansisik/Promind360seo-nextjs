'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Search, TrendingUp, Zap, Target, X, Loader2, CheckCircle, AlertCircle, Clock, BarChart3, Globe, Smartphone, Monitor } from 'lucide-react';

const Hero = () => {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [selectedSector, setSelectedSector] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState('');
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

  const analysisSteps = [
    { progress: 10, message: 'Web sitesi bağlantısı kontrol ediliyor...' },
    { progress: 25, message: 'Sayfa yükleme hızı analiz ediliyor...' },
    { progress: 40, message: 'SEO meta etiketleri inceleniyor...' },
    { progress: 55, message: 'Anahtar kelime yoğunluğu hesaplanıyor...' },
    { progress: 70, message: 'Backlink profili analiz ediliyor...' },
    { progress: 85, message: 'Rakip analizi yapılıyor...' },
    { progress: 100, message: 'Rapor hazırlanıyor...' }
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
      setIsAnalyzing(true);
      setProgress(0);
      setCurrentStep('');
      setShowResults(false);

      // Simulate analysis progress
      for (let i = 0; i < analysisSteps.length; i++) {
        const step = analysisSteps[i];
        setProgress(step.progress);
        setCurrentStep(step.message);
        
        // Random delay between 800ms and 1500ms for each step
        await new Promise(resolve => setTimeout(resolve, Math.random() * 700 + 800));
      }

      // Analysis complete
      setTimeout(() => {
        setIsAnalyzing(false);
        setProgress(0);
        setCurrentStep('');
        setShowResults(true);
        console.log('Analysis completed for:', { websiteUrl, selectedSector });
      }, 1000);
    }
  };

  const clearInput = () => {
    setWebsiteUrl('');
  };

  const resetAnalysis = () => {
    setShowResults(false);
    setWebsiteUrl('');
    setSelectedSector('');
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

                  {/* Cancel Button */}
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setIsAnalyzing(false);
                      setProgress(0);
                      setCurrentStep('');
                    }}
                    className="mt-4"
                  >
                    İptal Et
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Results Header */}
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold">Analiz Sonuçları</h3>
                    <p className="text-muted-foreground">Web sitesi: {websiteUrl}</p>
                  </div>

                  {/* Overall Score */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <BarChart3 className="h-5 w-5" />
                        <span>Genel Performans Skoru</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-center space-x-4">
                        <div className={`w-24 h-24 rounded-full ${getScoreBg(85)} flex items-center justify-center`}>
                          <span className={`text-2xl font-bold ${getScoreColor(85)}`}>85</span>
                        </div>
                        <div className="text-left">
                          <p className="text-sm text-muted-foreground">Mükemmel performans</p>
                          <p className="text-xs text-muted-foreground">Son güncelleme: {new Date().toLocaleString('tr-TR')}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Detailed Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* SEO */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Globe className="h-5 w-5" />
                          <span>SEO ({analysisResults.seo.score})</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <Progress value={analysisResults.seo.score} className="h-2" />
                        <div className="space-y-2">
                          {analysisResults.seo.issues.map((issue, index) => (
                            <div key={index} className="flex items-center space-x-2 text-sm">
                              {issue.type === 'error' ? (
                                <AlertCircle className="h-4 w-4 text-red-500" />
                              ) : issue.type === 'warning' ? (
                                <AlertCircle className="h-4 w-4 text-yellow-500" />
                              ) : (
                                <CheckCircle className="h-4 w-4 text-green-500" />
                              )}
                              <span className="flex-1">{issue.message}</span>
                              <Badge variant="outline" className="text-xs">{issue.impact}</Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Performance */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Zap className="h-5 w-5" />
                          <span>Performans ({analysisResults.performance.score})</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <Progress value={analysisResults.performance.score} className="h-2" />
                        <div className="space-y-2">
                          {analysisResults.performance.metrics.map((metric, index) => (
                            <div key={index} className="flex justify-between items-center text-sm">
                              <span>{metric.name}</span>
                              <span className={`font-mono ${metric.status === 'good' ? 'text-green-600' : 'text-red-600'}`}>
                                {metric.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Accessibility */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Smartphone className="h-5 w-5" />
                          <span>Erişilebilirlik ({analysisResults.accessibility.score})</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <Progress value={analysisResults.accessibility.score} className="h-2" />
                        <div className="space-y-2">
                          {analysisResults.accessibility.issues.map((issue, index) => (
                            <div key={index} className="flex items-center space-x-2 text-sm">
                              {issue.type === 'success' ? (
                                <CheckCircle className="h-4 w-4 text-green-500" />
                              ) : (
                                <AlertCircle className="h-4 w-4 text-yellow-500" />
                              )}
                              <span className="flex-1">{issue.message}</span>
                              <Badge variant="outline" className="text-xs">{issue.impact}</Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Best Practices */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Monitor className="h-5 w-5" />
                          <span>En İyi Uygulamalar ({analysisResults.bestPractices.score})</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <Progress value={analysisResults.bestPractices.score} className="h-2" />
                        <div className="space-y-2">
                          {analysisResults.bestPractices.issues.map((issue, index) => (
                            <div key={index} className="flex items-center space-x-2 text-sm">
                              {issue.type === 'success' ? (
                                <CheckCircle className="h-4 w-4 text-green-500" />
                              ) : (
                                <AlertCircle className="h-4 w-4 text-yellow-500" />
                              )}
                              <span className="flex-1">{issue.message}</span>
                              <Badge variant="outline" className="text-xs">{issue.impact}</Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

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
