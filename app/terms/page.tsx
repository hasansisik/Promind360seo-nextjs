import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Scale, Users, Shield, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <FileText className="h-8 w-8 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold">Kullanım Şartları</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Promind360 web sitesini kullanarak aşağıdaki şartları kabul etmiş sayılırsınız. 
            Bu şartlar hizmetlerimizin kullanımını düzenler.
          </p>
          <Badge variant="secondary" className="mt-4">
            Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
          </Badge>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Genel Şartlar */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Scale className="h-5 w-5 text-primary" />
                <CardTitle>Genel Şartlar</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Bu web sitesini kullanarak aşağıdaki şartları kabul etmiş sayılırsınız:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Web sitesini yasal amaçlar için kullanacağınızı</li>
                <li>Başkalarının haklarını ihlal etmeyeceğinizi</li>
                <li>Web sitesinin güvenliğini tehlikeye atmayacağınızı</li>
                <li>Doğru ve güncel bilgiler sağlayacağınızı</li>
                <li>Fikri mülkiyet haklarına saygı göstereceğinizi</li>
              </ul>
            </CardContent>
          </Card>

          {/* Hizmet Kapsamı */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <CardTitle>Hizmet Kapsamı</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Promind360 aşağıdaki SEO ve dijital pazarlama hizmetlerini sunar:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>SEO optimizasyonu ve analizi</li>
                <li>Sosyal medya pazarlaması</li>
                <li>İçerik pazarlaması</li>
                <li>E-posta pazarlaması</li>
                <li>Anahtar kelime araştırması</li>
                <li>Web sitesi performans analizi</li>
              </ul>
            </CardContent>
          </Card>

          {/* Sorumluluk Reddi */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                <CardTitle>Sorumluluk Reddi</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Promind360 aşağıdaki durumlarda sorumluluk kabul etmez:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Hizmetlerimizin kullanımından kaynaklanan dolaylı zararlar</li>
                <li>Üçüncü taraf hizmetlerin kesintisi veya hataları</li>
                <li>Müşterinin sağladığı yanlış bilgilerden kaynaklanan sorunlar</li>
                <li>Doğal afetler, savaş veya diğer mücbir sebepler</li>
                <li>Teknik sorunlar veya sistem kesintileri</li>
              </ul>
            </CardContent>
          </Card>

          {/* Fikri Mülkiyet */}
          <Card>
            <CardHeader>
              <CardTitle>Fikri Mülkiyet Hakları</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Web sitemizdeki tüm içerik Promind360'ın fikri mülkiyeti altındadır:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Metin, görsel ve video içerikler</li>
                <li>Logo, marka ve tasarım öğeleri</li>
                <li>Yazılım kodları ve teknolojiler</li>
                <li>Raporlar ve analiz sonuçları</li>
                <li>Eğitim materyalleri ve rehberler</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Bu içeriklerin izinsiz kullanımı, kopyalanması veya dağıtılması yasaktır.
              </p>
            </CardContent>
          </Card>

          {/* Gizlilik */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <CardTitle>Gizlilik</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Kişisel verilerinizin işlenmesi hakkında detaylı bilgi için 
                <Link href="/privacy" className="text-primary hover:text-primary/80 ml-1">
                  Gizlilik Politikamızı
                </Link> inceleyebilirsiniz.
              </p>
            </CardContent>
          </Card>

          {/* Ödeme ve İptal */}
          <Card>
            <CardHeader>
              <CardTitle>Ödeme ve İptal Şartları</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Ödeme</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                    <li>Hizmet bedelleri önceden belirlenen fiyatlardan alınır</li>
                    <li>Ödemeler güvenli ödeme sistemleri ile yapılır</li>
                    <li>KDV dahil fiyatlar geçerlidir</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">İptal ve İade</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                    <li>Hizmet başlamadan önce %100 iade</li>
                    <li>Hizmet başladıktan sonra kullanılan kısım için iade yapılmaz</li>
                    <li>İptal talepleri yazılı olarak yapılmalıdır</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Değişiklikler */}
          <Card>
            <CardHeader>
              <CardTitle>Şartlarda Değişiklik</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Promind360, bu kullanım şartlarını önceden haber vermeksizin değiştirme hakkını saklı tutar. 
                Değişiklikler web sitemizde yayınlandığı tarihten itibaren geçerli olur.
              </p>
            </CardContent>
          </Card>

          {/* İletişim */}
          <Card>
            <CardHeader>
              <CardTitle>İletişim</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Kullanım şartlarımız hakkında sorularınız için bizimle iletişime geçebilirsiniz:
              </p>
              <div className="space-y-2">
                <p className="text-sm">
                  <strong>E-posta:</strong> legal@promind360.com
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
