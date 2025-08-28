'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Mail, 
  MapPin
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'SEO Optimizasyonu', href: '#services' },
    { name: 'Sosyal Medya Pazarlaması', href: '#services' },
    { name: 'Tek Sayfa SEO', href: '#services' },
    { name: 'İçerik Pazarlaması', href: '#services' },
    { name: 'E-posta Pazarlaması', href: '#services' },
    { name: 'Anahtar Kelime Araştırması', href: '#services' }
  ];

  const process = [
    { name: 'Analiz & Araştırma', href: '#process' },
    { name: 'Strateji Geliştirme', href: '#process' },
    { name: 'Teknik Optimizasyon', href: '#process' },
    { name: 'İçerik Optimizasyonu', href: '#process' },
    { name: 'İzleme & Raporlama', href: '#process' }
  ];

  const contactInfo = [
    { icon: Mail, value: 'info@promind360.com', label: 'E-posta' },
    { icon: MapPin, value: 'İstanbul, Türkiye', label: 'Adres' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Promind360
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Modern SEO çözümleri ile işletmenizi dijital dünyada öne çıkarıyoruz. 
              Veri odaklı stratejiler ve ölçülebilir sonuçlar için güvenilir partneriniz.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <info.icon className="h-4 w-4 text-primary" />
                  <span>{info.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Hizmetler</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(service.href.replace('#', ''))}
                    className="text-left text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Process */}
          <div>
            <h3 className="font-semibold mb-4">Süreç</h3>
            <ul className="space-y-2">
              {process.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(item.href.replace('#', ''))}
                    className="text-left text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-muted-foreground">
            <span>© {currentYear} Promind360. Tüm hakları saklıdır.</span>
            <div className="flex items-center space-x-4">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Kullanım Şartları
              </Link>
              <Link href="/cookies" className="hover:text-primary transition-colors">
                Çerez Politikası
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link 
              href="https://birimajans.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-primary transition-colors"
            >
              <Badge variant="outline" className="text-xs">
                <span className="font-bold text-primary">B</span>
                <span className="ml-1">Birimajans</span>
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
