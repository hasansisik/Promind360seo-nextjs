'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, TrendingUp, Zap, Target, X, Loader2 } from 'lucide-react';

const Hero = () => {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [selectedSector, setSelectedSector] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState('');

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

  const handleAnalyze = async () => {
    if (websiteUrl) {
      setIsAnalyzing(true);
      setProgress(0);
      setCurrentStep('');

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
        console.log('Analysis completed for:', { websiteUrl, selectedSector });
      }, 1000);
    }
  };

  const clearInput = () => {
    setWebsiteUrl('');
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
              {!isAnalyzing ? (
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
              ) : (
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
              )}
            </CardContent>
          </Card>
        </div>
      </div>

    </section>
  );
};

export default Hero;
