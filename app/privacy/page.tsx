import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Eye, Lock, Database } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold">Gizlilik Politikası</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Promind360 olarak kişisel verilerinizin güvenliği bizim için çok önemlidir. 
            Bu politika, verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklar.
          </p>
          <Badge variant="secondary" className="mt-4">
            Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
          </Badge>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Veri Toplama */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Database className="h-5 w-5 text-primary" />
                <CardTitle>Veri Toplama</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Web sitemizi ziyaret ettiğinizde aşağıdaki bilgileri toplayabiliriz:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>İletişim formları aracılığıyla sağladığınız kişisel bilgiler (ad, e-posta, telefon)</li>
                <li>Web sitesi kullanım verileri (IP adresi, tarayıcı türü, sayfa ziyaretleri)</li>
                <li>Çerezler aracılığıyla toplanan analitik veriler</li>
                <li>SEO analizi için sağladığınız web sitesi bilgileri</li>
              </ul>
            </CardContent>
          </Card>

          {/* Veri Kullanımı */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Eye className="h-5 w-5 text-primary" />
                <CardTitle>Veri Kullanımı</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Topladığımız verileri aşağıdaki amaçlarla kullanırız:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>SEO hizmetlerimizi sağlamak ve iyileştirmek</li>
                <li>Müşteri desteği ve iletişim</li>
                <li>Web sitesi performansını analiz etmek</li>
                <li>Yasal yükümlülükleri yerine getirmek</li>
                <li>Güvenlik ve dolandırıcılık önleme</li>
              </ul>
            </CardContent>
          </Card>

          {/* Veri Güvenliği */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Lock className="h-5 w-5 text-primary" />
                <CardTitle>Veri Güvenliği</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Kişisel verilerinizi korumak için aşağıdaki güvenlik önlemlerini alırız:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>SSL şifreleme ile güvenli veri aktarımı</li>
                <li>Düzenli güvenlik güncellemeleri ve yamaları</li>
                <li>Erişim kontrolü ve kimlik doğrulama</li>
                <li>Veri yedekleme ve felaket kurtarma planları</li>
                <li>Çalışanlarımıza veri güvenliği eğitimi</li>
              </ul>
            </CardContent>
          </Card>

          {/* Çerezler */}
          <Card>
            <CardHeader>
              <CardTitle>Çerez Politikası</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Web sitemizde aşağıdaki çerez türlerini kullanırız:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Gerekli Çerezler</h4>
                  <p className="text-sm text-muted-foreground">
                    Web sitesinin temel işlevlerini sağlamak için gereklidir.
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Analitik Çerezler</h4>
                  <p className="text-sm text-muted-foreground">
                    Web sitesi kullanımını analiz etmek için kullanılır.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Üçüncü Taraf Hizmetler */}
          <Card>
            <CardHeader>
              <CardTitle>Üçüncü Taraf Hizmetler</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Hizmetlerimizi sağlamak için aşağıdaki üçüncü taraf hizmetleri kullanabiliriz:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Google Analytics - Web sitesi analizi</li>
                <li>Google Search Console - SEO performans takibi</li>
                <li>E-posta hizmet sağlayıcıları - İletişim</li>
                <li>Bulut depolama hizmetleri - Veri yedekleme</li>
              </ul>
            </CardContent>
          </Card>

          {/* Haklarınız */}
          <Card>
            <CardHeader>
              <CardTitle>Veri Sahibi Olarak Haklarınız</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                KVKK kapsamında aşağıdaki haklara sahipsiniz:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>Kişisel verilerinizin işlenme amacını ve sonuçlarını öğrenme</li>
                <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
                <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
                <li>Kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
              </ul>
            </CardContent>
          </Card>

          {/* İletişim */}
          <Card>
            <CardHeader>
              <CardTitle>İletişim</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:
              </p>
              <div className="space-y-2">
                <p className="text-sm">
                  <strong>E-posta:</strong> privacy@promind360.com
                </p>
                <p className="text-sm">
                  <strong>Adres:</strong> İstanbul, Türkiye
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Back to Home */}
          <div className="text-center pt-8">
            <Link 
              href="/"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span>← Ana Sayfaya Dön</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
