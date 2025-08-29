import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Eye, Lock, Database, Search, BarChart3 } from 'lucide-react';
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
            Promind360 SEO analiz platformu olarak kişisel verilerinizin güvenliği bizim için çok önemlidir. 
            Bu politika, SEO hizmetlerimiz kapsamında verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklar.
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
                <CardTitle>SEO Analiz Veri Toplama</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                SEO analiz platformumuzu kullandığınızda aşağıdaki bilgileri toplayabiliriz:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>SEO analiz formları aracılığıyla sağladığınız web sitesi URL&apos;leri</li>
                <li>Platform kullanım verileri (IP adresi, tarayıcı türü, analiz sayfası ziyaretleri)</li>
                <li>Çerezler aracılığıyla toplanan SEO analitik veriler</li>
                <li>SEO analizi için sağladığınız anahtar kelime ve hedef bilgiler</li>
                <li>İletişim formları aracılığıyla sağladığınız kişisel bilgiler (ad, e-posta, telefon)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Veri Kullanımı */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Eye className="h-5 w-5 text-primary" />
                <CardTitle>SEO Veri Kullanımı</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Topladığımız verileri aşağıdaki SEO amaçlarla kullanırız:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>SEO analiz hizmetlerimizi sağlamak ve iyileştirmek</li>
                <li>Web sitesi performans analizi ve raporlama</li>
                <li>SEO platform performansını analiz etmek</li>
                <li>Müşteri desteği ve SEO danışmanlığı</li>
                <li>Yasal yükümlülükleri yerine getirmek</li>
                <li>Güvenlik ve dolandırıcılık önleme</li>
              </ul>
            </CardContent>
          </Card>

          {/* SEO Veri İşleme */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Search className="h-5 w-5 text-primary" />
                <CardTitle>SEO Veri İşleme Süreçleri</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                SEO analiz platformumuzda verileriniz şu şekilde işlenir:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Web Sitesi Analizi</h4>
                  <p className="text-sm text-muted-foreground">
                    Sağladığınız URL&apos;ler üzerinden SEO analizi yapılır ve sonuçlar size sunulur.
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Performans Takibi</h4>
                  <p className="text-sm text-muted-foreground">
                    Analiz sonuçları geçici olarak saklanır ve karşılaştırma için kullanılır.
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Rapor Oluşturma</h4>
                  <p className="text-sm text-muted-foreground">
                    SEO analiz sonuçları detaylı raporlar halinde hazırlanır.
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Platform İyileştirme</h4>
                  <p className="text-sm text-muted-foreground">
                    Anonim veriler platform geliştirme için kullanılır.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Veri Güvenliği */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Lock className="h-5 w-5 text-primary" />
                <CardTitle>SEO Veri Güvenliği</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                SEO analiz verilerinizi korumak için aşağıdaki güvenlik önlemlerini alırız:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>SSL şifreleme ile güvenli veri aktarımı</li>
                <li>SEO analiz sunucularında düzenli güvenlik güncellemeleri</li>
                <li>Erişim kontrolü ve kimlik doğrulama sistemleri</li>
                <li>SEO veri yedekleme ve felaket kurtarma planları</li>
                <li>Çalışanlarımıza veri güvenliği ve SEO etiği eğitimi</li>
                <li>Üçüncü taraf SEO araçları ile güvenli entegrasyon</li>
              </ul>
            </CardContent>
          </Card>

          {/* SEO Çerezler */}
          <Card>
            <CardHeader>
              <CardTitle>SEO Analiz Çerezleri</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                SEO analiz platformumuzda aşağıdaki çerez türlerini kullanırız:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Gerekli Çerezler</h4>
                  <p className="text-sm text-muted-foreground">
                    SEO analiz platformunun temel işlevlerini sağlamak için gereklidir.
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">SEO Analitik Çerezler</h4>
                  <p className="text-sm text-muted-foreground">
                    Platform kullanımını ve SEO analiz performansını analiz etmek için kullanılır.
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Fonksiyonel Çerezler</h4>
                  <p className="text-sm text-muted-foreground">
                    SEO analiz tercihlerinizi ve geçmişinizi hatırlamak için kullanılır.
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Performans Çerezleri</h4>
                  <p className="text-sm text-muted-foreground">
                    SEO analiz hızını ve platform performansını iyileştirmek için kullanılır.
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Detaylı çerez bilgileri için <Link href="/cookies" className="text-primary hover:text-primary/80">Çerez Politikamızı</Link> inceleyebilirsiniz.
              </p>
            </CardContent>
          </Card>

          {/* Üçüncü Taraf SEO Hizmetler */}
          <Card>
            <CardHeader>
              <CardTitle>Üçüncü Taraf SEO Hizmetleri</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                SEO analiz hizmetlerimizi sağlamak için aşağıdaki üçüncü taraf hizmetleri kullanabiliriz:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 border rounded-lg">
                  <h5 className="font-semibold mb-1">Google Analytics</h5>
                  <p className="text-xs text-muted-foreground">Platform kullanım analizi</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h5 className="font-semibold mb-1">Google Search Console</h5>
                  <p className="text-xs text-muted-foreground">SEO performans takibi</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h5 className="font-semibold mb-1">PageSpeed Insights</h5>
                  <p className="text-xs text-muted-foreground">Web sitesi hız analizi</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h5 className="font-semibold mb-1">E-posta Hizmetleri</h5>
                  <p className="text-xs text-muted-foreground">SEO rapor gönderimi</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Veri Saklama */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                <CardTitle>SEO Veri Saklama Süreleri</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                SEO analiz verileriniz aşağıdaki süreler boyunca saklanır:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Analiz Sonuçları</h4>
                  <p className="text-sm text-muted-foreground">6 ay süreyle saklanır</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Kullanıcı Hesap Bilgileri</h4>
                  <p className="text-sm text-muted-foreground">Hesap aktif olduğu sürece</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">İletişim Form Verileri</h4>
                  <p className="text-sm text-muted-foreground">2 yıl süreyle saklanır</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Analitik Veriler</h4>
                  <p className="text-sm text-muted-foreground">Anonim olarak 3 yıl</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Haklarınız */}
          <Card>
            <CardHeader>
              <CardTitle>SEO Veri Sahibi Olarak Haklarınız</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                KVKK kapsamında SEO analiz verileriniz için aşağıdaki haklara sahipsiniz:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>SEO analiz verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>SEO analiz verilerinizin işlenme amacını ve sonuçlarını öğrenme</li>
                <li>SEO verilerinizin aktarıldığı üçüncü kişileri bilme</li>
                <li>SEO analiz verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
                <li>SEO analiz verilerinizin silinmesini veya yok edilmesini isteme</li>
                <li>SEO analiz verilerinizin işlenmesine itiraz etme</li>
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
                SEO analiz platformumuzun gizlilik politikası hakkında sorularınız için bizimle iletişime geçebilirsiniz:
              </p>
              <div className="space-y-2">
                <p className="text-sm">
                  <strong>Gizlilik E-posta:</strong> privacy@promind360.com
                </p>
                <p className="text-sm">
                  <strong>SEO Destek:</strong> support@promind360.com
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
