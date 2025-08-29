'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Mail, 
  MapPin,
  Share2,
  MessageCircle,
  Twitter,
  Facebook,
  Linkedin
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Website SEO Analizi', href: '#services' },
    { name: 'PageSpeed Optimizasyonu', href: '#services' },
    { name: 'AI Bot Erişim Analizi', href: '#services' },
    { name: 'Meta Tag Optimizasyonu', href: '#services' },
    { name: 'CTA ve Dönüşüm Analizi', href: '#services' },
    { name: 'Anahtar Kelime Yoğunluğu', href: '#services' }
  ];

  const process = [
    { name: 'URL Girişi & Doğrulama', href: '#process' },
    { name: 'SEO API Analizi', href: '#process' },
    { name: 'PageSpeed Testi', href: '#process' },
    { name: 'Veri İşleme & Analiz', href: '#process' },
    { name: 'Sonuç Gösterimi', href: '#process' }
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

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = 'Promind360 ile web sitenizin SEO performansını analiz edin!';
  
  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
  };

  const handleShare = (platform: keyof typeof shareLinks) => {
    window.open(shareLinks[platform], '_blank', 'width=600,height=400');
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
              Fikirmax olarak, dijital dünyada işletmelerin başarısı için yenilikçi çözümler geliştiriyoruz. 
              SEO analiz platformumuz ile web sitelerinizin arama motoru performansını optimize ederek, 
              organik trafiğinizi artırmanıza ve online varlığınızı güçlendirmenize yardımcı oluyoruz.
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

            {/* Share Section */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 flex items-center">
                <Share2 className="h-4 w-4 mr-2 text-primary" />
                Siteyi Paylaş
              </h4>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleShare('whatsapp')}
                  className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
                  aria-label="WhatsApp'ta paylaş"
                >
                  <MessageCircle className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="p-2 bg-blue-400 hover:bg-blue-500 text-white rounded-lg transition-colors"
                  aria-label="Twitter'da paylaş"
                >
                  <Twitter className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleShare('facebook')}
                  className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  aria-label="Facebook'ta paylaş"
                >
                  <Facebook className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="p-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors"
                  aria-label="LinkedIn'de paylaş"
                >
                  <Linkedin className="h-4 w-4" />
                </button>
              </div>
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

          <div className="flex items-center space-x-4 md-pr-10">
            <span className="text-xs text-muted-foreground">
              Powered by{' '}
              <Link 
                href="https://fikirmax.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline transition-colors"
              >
                Fikirmax
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
