'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, TrendingUp, Zap, Target } from 'lucide-react';

const Hero = () => {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [selectedSector, setSelectedSector] = useState('');

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

  const handleAnalyze = () => {
    if (websiteUrl) {
      console.log('Analyzing:', { websiteUrl, selectedSector });
      // Handle analysis here
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
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
          <Card className="max-w-2xl mx-auto mt-12">
            <CardContent className="p-6 space-y-4">
              <div className="text-center space-y-2">
                <h3 className="text-lg font-semibold">Ücretsiz SEO Analizi</h3>
                <p className="text-sm text-muted-foreground">
                  Web sitenizi analiz edelim ve SEO stratejinizi optimize edelim
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="url"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    placeholder="https://yoursite.com"
                    className="pl-10"
                  />
                </div>
                
                <Select value={selectedSector} onValueChange={setSelectedSector}>
                  <SelectTrigger className="w-full sm:w-[180px]">
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
                  className="w-full sm:w-auto"
                >
                  Analiz Et
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[50%] top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
