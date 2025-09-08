'use client';

import Link from 'next/link';
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

  const shareUrl = 'https://promind360.com';
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
            
            {/* Social Media Links */}
            <div className="mt-4">
              <div className="flex items-center space-x-3">
                <a
                  href="https://www.facebook.com/share/19RZxQpGbw/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  aria-label="Facebook sayfamızı ziyaret edin"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://www.instagram.com/fikirmax?igsh=MW84c3ZrMGFoZGh5Mg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition-colors"
                  aria-label="Instagram sayfamızı ziyaret edin"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/mila-organic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors"
                  aria-label="LinkedIn sayfamızı ziyaret edin"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
            
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
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
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
              <Link href="/gizlilik" className="hover:text-primary transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/kosullar" className="hover:text-primary transition-colors">
                Kullanım Şartları
              </Link>
              <Link href="/cerezler" className="hover:text-primary transition-colors">
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
                className="inline-flex items-center px-2 py-1 bg-blue-900 hover:bg-blue-800 text-white text-xs font-medium rounded-md transition-colors"
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
