'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  ArrowUp,
  Heart
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'SEO Optimizasyonu', href: '#services' },
    { name: 'Sosyal Medya Pazarlaması', href: '#services' },
    { name: 'İçerik Pazarlaması', href: '#services' },
    { name: 'E-posta Pazarlaması', href: '#services' },
    { name: 'Anahtar Kelime Araştırması', href: '#services' },
    { name: 'Teknik SEO', href: '#services' }
  ];

  const company = [
    { name: 'Hakkımızda', href: '#about' },
    { name: 'Ekibimiz', href: '#team' },
    { name: 'Kariyer', href: '#careers' },
    { name: 'Blog', href: '#blog' },
    { name: 'Basın', href: '#press' },
    { name: 'İletişim', href: '#contact' }
  ];

  const resources = [
    { name: 'SEO Rehberi', href: '#guide' },
    { name: 'Vaka Çalışmaları', href: '#case-studies' },
    { name: 'Webinar', href: '#webinars' },
    { name: 'E-kitap', href: '#ebook' },
    { name: 'Araçlar', href: '#tools' },
    { name: 'Destek', href: '#support' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const contactInfo = [
    { icon: Mail, value: 'info@promind360.com', label: 'E-posta' },
    { icon: Phone, value: '+90 (212) 555 0123', label: 'Telefon' },
    { icon: MapPin, value: 'İstanbul, Türkiye', label: 'Adres' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
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

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="p-2 rounded-lg bg-background hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Hizmetler</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Şirket</h3>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Kaynaklar</h3>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link 
                    href={resource.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {resource.name}
                  </Link>
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
              <Link href="#privacy" className="hover:text-primary transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="#terms" className="hover:text-primary transition-colors">
                Kullanım Şartları
              </Link>
              <Link href="#cookies" className="hover:text-primary transition-colors">
                Çerez Politikası
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="text-xs">
              <Heart className="h-3 w-3 mr-1" />
              Türkiye'de Üretildi
            </Badge>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-background hover:bg-primary/10 transition-colors"
              aria-label="Yukarı çık"
            >
              <ArrowUp className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
