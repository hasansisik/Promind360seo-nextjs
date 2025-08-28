import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cookie, Settings, Shield, Eye, Clock } from 'lucide-react';
import Link from 'next/link';

export default function CookiesPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Cookie className="h-8 w-8 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold">Çerez Politikası</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Web sitemizde çerezlerin nasıl kullanıldığını ve bu çerezleri nasıl kontrol edebileceğinizi öğrenin. 
            Bu politika, çerez kullanımımızı şeffaf bir şekilde açıklar.
          </p>
          <Badge variant="secondary" className="mt-4">
            Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
          </Badge>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Çerez Nedir */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Cookie className="h-5 w-5 text-primary" />
                <CardTitle>Çerez Nedir?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Çerezler, web sitemizi ziyaret ettiğinizde tarayıcınıza gönderilen küçük metin dosyalarıdır. 
                Bu dosyalar bilgisayarınızda saklanır ve web sitesinin sizi tanımasına yardımcı olur.
              </p>
              <p className="text-muted-foreground">
                Çerezler şu amaçlarla kullanılır:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Web sitesi performansını iyileştirmek</li>
                <li>Kullanıcı deneyimini kişiselleştirmek</li>
                <li>Analitik veriler toplamak</li>
                <li>Güvenliği artırmak</li>
                <li>Reklamları hedeflemek</li>
              </ul>
            </CardContent>
          </Card>

          {/* Çerez Türleri */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Settings className="h-5 w-5 text-primary" />
                <CardTitle>Çerez Türleri</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Gerekli Çerezler */}
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center space-x-2 mb-3">
                    <Shield className="h-4 w-4 text-green-600" />
                    <h4 className="font-semibold text-green-600">Gerekli Çerezler</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Web sitesinin temel işlevlerini sağlamak için gereklidir.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Oturum yönetimi</li>
                    <li>• Güvenlik önlemleri</li>
                    <li>• Form işlemleri</li>
                    <li>• Dil tercihleri</li>
                  </ul>
                </div>

                {/* Analitik Çerezler */}
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center space-x-2 mb-3">
                    <Eye className="h-4 w-4 text-blue-600" />
                    <h4 className="font-semibold text-blue-600">Analitik Çerezler</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Web sitesi kullanımını analiz etmek için kullanılır.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Sayfa ziyaretleri</li>
                    <li>• Kullanıcı davranışları</li>
                    <li>• Performans metrikleri</li>
                    <li>• Hata raporları</li>
                  </ul>
                </div>

                {/* Fonksiyonel Çerezler */}
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center space-x-2 mb-3">
                    <Settings className="h-4 w-4 text-purple-600" />
                    <h4 className="font-semibold text-purple-600">Fonksiyonel Çerezler</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Gelişmiş özellikler ve kişiselleştirme için kullanılır.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Tercih hatırlama</li>
                    <li>• Sosyal medya entegrasyonu</li>
                    <li>• İçerik kişiselleştirme</li>
                    <li>• Arama geçmişi</li>
                  </ul>
                </div>

                {/* Reklam Çerezleri */}
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center space-x-2 mb-3">
                    <Eye className="h-4 w-4 text-orange-600" />
                    <h4 className="font-semibold text-orange-600">Reklam Çerezleri</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Size ilgili reklamlar göstermek için kullanılır.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Hedefli reklamlar</li>
                    <li>• Reklam performansı</li>
                    <li>• Çapraz site takibi</li>
                    <li>• Sosyal medya reklamları</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Kullandığımız Çerezler */}
          <Card>
            <CardHeader>
              <CardTitle>Kullandığımız Çerezler</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 font-semibold">Çerez Adı</th>
                      <th className="text-left py-2 font-semibold">Amaç</th>
                      <th className="text-left py-2 font-semibold">Süre</th>
                      <th className="text-left py-2 font-semibold">Tür</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-2">
                    <tr className="border-b">
                      <td className="py-2 font-mono text-xs">session_id</td>
                      <td className="py-2">Oturum yönetimi</td>
                      <td className="py-2">Oturum süresi</td>
                      <td className="py-2">Gerekli</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-mono text-xs">_ga</td>
                      <td className="py-2">Google Analytics</td>
                      <td className="py-2">2 yıl</td>
                      <td className="py-2">Analitik</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-mono text-xs">_gid</td>
                      <td className="py-2">Google Analytics</td>
                      <td className="py-2">24 saat</td>
                      <td className="py-2">Analitik</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-mono text-xs">language</td>
                      <td className="py-2">Dil tercihi</td>
                      <td className="py-2">1 yıl</td>
                      <td className="py-2">Fonksiyonel</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-mono text-xs">theme</td>
                      <td className="py-2">Tema tercihi</td>
                      <td className="py-2">1 yıl</td>
                      <td className="py-2">Fonksiyonel</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Çerez Yönetimi */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Settings className="h-5 w-5 text-primary" />
                <CardTitle>Çerez Yönetimi</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Çerezleri kontrol etmek ve yönetmek için aşağıdaki seçenekleriniz bulunmaktadır:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Tarayıcı Ayarları</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Tarayıcınızın ayarlarından çerezleri kontrol edebilirsiniz.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Chrome: Ayarlar > Gizlilik ve Güvenlik</li>
                    <li>• Firefox: Seçenekler > Gizlilik ve Güvenlik</li>
                    <li>• Safari: Tercihler > Gizlilik</li>
                    <li>• Edge: Ayarlar > Çerezler ve site izinleri</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Çerez Tercihleri</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Web sitemizde çerez tercihlerinizi yönetebilirsiniz.
                  </p>
                  <button className="text-sm text-primary hover:text-primary/80 transition-colors">
                    Çerez Ayarlarını Aç
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Üçüncü Taraf Çerezler */}
          <Card>
            <CardHeader>
              <CardTitle>Üçüncü Taraf Çerezler</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Web sitemizde aşağıdaki üçüncü taraf hizmetlerin çerezleri kullanılabilir:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 border rounded-lg text-center">
                  <h5 className="font-semibold mb-1">Google Analytics</h5>
                  <p className="text-xs text-muted-foreground">Web sitesi analizi</p>
                </div>
                <div className="p-3 border rounded-lg text-center">
                  <h5 className="font-semibold mb-1">Google Ads</h5>
                  <p className="text-xs text-muted-foreground">Reklam takibi</p>
                </div>
                <div className="p-3 border rounded-lg text-center">
                  <h5 className="font-semibold mb-1">Facebook Pixel</h5>
                  <p className="text-xs text-muted-foreground">Sosyal medya reklamları</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Çerez Süreleri */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary" />
                <CardTitle>Çerez Süreleri</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Oturum Çerezleri</h4>
                  <p className="text-sm text-muted-foreground">Tarayıcı kapatıldığında silinir</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Kalıcı Çerezler</h4>
                  <p className="text-sm text-muted-foreground">Belirli bir süre sonra silinir</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Üçüncü Taraf</h4>
                  <p className="text-sm text-muted-foreground">İlgili hizmet tarafından belirlenir</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Güncellemeler */}
          <Card>
            <CardHeader>
              <CardTitle>Politika Güncellemeleri</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Bu çerez politikası zaman zaman güncellenebilir. Önemli değişiklikler olduğunda 
                web sitemizde duyuru yapılacaktır. Politikanın güncel versiyonu her zaman bu sayfada bulunabilir.
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
                Çerez politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:
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
