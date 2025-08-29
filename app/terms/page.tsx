import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Scale, Shield, AlertTriangle, Search, BarChart3, Target } from 'lucide-react';
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
            Promind360 SEO analiz platformunu kullanarak aşağıdaki şartları kabul etmiş sayılırsınız. 
            Bu şartlar SEO analiz hizmetlerimizin kullanımını düzenler.
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
                <CardTitle>SEO Platform Genel Şartları</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                SEO analiz platformumuzu kullanarak aşağıdaki şartları kabul etmiş sayılırsınız:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Platformu yasal SEO analiz amaçları için kullanacağınızı</li>
                <li>Başkalarının web sitesi haklarını ihlal etmeyeceğinizi</li>
                <li>Platform güvenliğini tehlikeye atmayacağınızı</li>
                <li>Doğru ve güncel web sitesi URL&apos;leri sağlayacağınızı</li>
                <li>SEO analiz sonuçlarını etik kurallar çerçevesinde kullanacağınızı</li>
                <li>Fikri mülkiyet haklarına saygı göstereceğinizi</li>
              </ul>
            </CardContent>
          </Card>

          {/* SEO Hizmet Kapsamı */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Search className="h-5 w-5 text-primary" />
                <CardTitle>SEO Analiz Hizmet Kapsamı</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Promind360 aşağıdaki SEO analiz ve dijital pazarlama hizmetlerini sunar:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Website SEO Analizi</h4>
                  <p className="text-sm text-muted-foreground">
                    Kapsamlı SEO denetimi ile sitenizin arama motoru performansını analiz ediyoruz.
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">PageSpeed Optimizasyonu</h4>
                  <p className="text-sm text-muted-foreground">
                    Site hızınızı analiz ederek performans sorunlarını tespit ediyoruz.
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">AI Bot Erişim Analizi</h4>
                  <p className="text-sm text-muted-foreground">
                    Yapay zeka botlarının sitenize erişim durumunu kontrol ediyoruz.
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Meta Tag Optimizasyonu</h4>
                  <p className="text-sm text-muted-foreground">
                    Title, description ve meta tag&apos;larınızın SEO uyumluluğunu değerlendiriyoruz.
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">CTA ve Dönüşüm Analizi</h4>
                  <p className="text-sm text-muted-foreground">
                    Call-to-action butonlarınızın varlığını ve etkinliğini analiz ediyoruz.
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Anahtar Kelime Yoğunluğu</h4>
                  <p className="text-sm text-muted-foreground">
                    İçeriğinizdeki anahtar kelime yoğunluğunu ve dağılımını analiz ediyoruz.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SEO Analiz Kuralları */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-primary" />
                <CardTitle>SEO Analiz Kullanım Kuralları</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                SEO analiz platformumuzu kullanırken aşağıdaki kurallara uymanız gerekmektedir:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Yalnızca kendi web sitelerinizi veya analiz izni olan siteleri analiz edin</li>
                <li>Platformu spam veya kötü niyetli amaçlarla kullanmayın</li>
                <li>Analiz sonuçlarını ticari amaçlarla paylaşırken kaynak belirtin</li>
                <li>Platform kaynaklarını aşırı kullanmayın (rate limiting)</li>
                <li>SEO analiz verilerini yanlış yorumlamayın veya yanıltıcı şekilde sunmayın</li>
                <li>Platform güvenlik önlemlerini atlatmaya çalışmayın</li>
              </ul>
            </CardContent>
          </Card>

          {/* Sorumluluk Reddi */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                <CardTitle>SEO Analiz Sorumluluk Reddi</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Promind360 aşağıdaki durumlarda sorumluluk kabul etmez:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>SEO analiz sonuçlarının yanlış yorumlanmasından kaynaklanan zararlar</li>
                <li>Analiz edilen web sitelerinin performans değişiklikleri</li>
                <li>Üçüncü taraf SEO araçlarının kesintisi veya hataları</li>
                <li>Müşterinin sağladığı yanlış URL veya bilgilerden kaynaklanan sorunlar</li>
                <li>Doğal afetler, savaş veya diğer mücbir sebepler</li>
                <li>Teknik sorunlar veya platform kesintileri</li>
                <li>SEO analiz sonuçlarına dayalı alınan iş kararları</li>
              </ul>
            </CardContent>
          </Card>

          {/* Fikri Mülkiyet */}
          <Card>
            <CardHeader>
              <CardTitle>SEO Platform Fikri Mülkiyet Hakları</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                SEO analiz platformumuzdaki tüm içerik Promind360&apos;ın fikri mülkiyeti altındadır:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>SEO analiz algoritmaları ve metodolojileri</li>
                <li>Platform arayüzü ve kullanıcı deneyimi tasarımı</li>
                <li>SEO rapor şablonları ve analiz formatları</li>
                <li>Yazılım kodları ve teknolojiler</li>
                <li>SEO eğitim materyalleri ve rehberler</li>
                <li>Platform markası ve logo tasarımları</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Bu içeriklerin izinsiz kullanımı, kopyalanması veya dağıtılması yasaktır.
              </p>
            </CardContent>
          </Card>

          {/* SEO Analiz Sonuçları */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                <CardTitle>SEO Analiz Sonuçları Kullanımı</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                SEO analiz sonuçlarınızın kullanımı ile ilgili şartlar:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Kişisel Kullanım</h4>
                  <p className="text-sm text-muted-foreground">
                    Analiz sonuçlarını kendi web sitenizi iyileştirmek için kullanabilirsiniz.
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Ticari Kullanım</h4>
                  <p className="text-sm text-muted-foreground">
                    Müşterilerinize sunarken Promind360 kaynağını belirtmelisiniz.
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Yeniden Dağıtım</h4>
                  <p className="text-sm text-muted-foreground">
                    Analiz sonuçlarını toplu olarak dağıtmak için izin almanız gerekir.
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Veri Doğruluğu</h4>
                  <p className="text-sm text-muted-foreground">
                    Sonuçlar anlık durumu yansıtır, sürekli değişiklik gösterebilir.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Gizlilik */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <CardTitle>SEO Veri Gizliliği</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                SEO analiz verilerinizin işlenmesi hakkında detaylı bilgi için 
                <Link href="/privacy" className="text-primary hover:text-primary/80 ml-1">
                  Gizlilik Politikamızı
                </Link> inceleyebilirsiniz.
              </p>
            </CardContent>
          </Card>

          {/* Ödeme ve İptal */}
          <Card>
            <CardHeader>
              <CardTitle>SEO Hizmet Ödeme ve İptal Şartları</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">SEO Hizmet Ödemeleri</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                    <li>SEO analiz hizmet bedelleri önceden belirlenen fiyatlardan alınır</li>
                    <li>Ödemeler güvenli ödeme sistemleri ile yapılır</li>
                    <li>KDV dahil fiyatlar geçerlidir</li>
                    <li>Toplu analiz paketleri için özel fiyatlandırma uygulanır</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">SEO Hizmet İptal ve İade</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                    <li>Analiz başlamadan önce %100 iade</li>
                    <li>Analiz başladıktan sonra kullanılan kısım için iade yapılmaz</li>
                    <li>İptal talepleri yazılı olarak yapılmalıdır</li>
                    <li>Teknik sorunlar durumunda analiz tekrarlanır</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Platform Kullanım Sınırları */}
          <Card>
            <CardHeader>
              <CardTitle>SEO Platform Kullanım Sınırları</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                SEO analiz platformumuzda aşağıdaki kullanım sınırları geçerlidir:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Günlük Analiz</h4>
                  <p className="text-sm text-muted-foreground">Ücretsiz: 5 analiz</p>
                  <p className="text-sm text-muted-foreground">Premium: Sınırsız</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Eş Zamanlı Analiz</h4>
                  <p className="text-sm text-muted-foreground">Ücretsiz: 1 analiz</p>
                  <p className="text-sm text-muted-foreground">Premium: 10 analiz</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Veri Saklama</h4>
                  <p className="text-sm text-muted-foreground">Ücretsiz: 30 gün</p>
                  <p className="text-sm text-muted-foreground">Premium: 1 yıl</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Değişiklikler */}
          <Card>
            <CardHeader>
              <CardTitle>SEO Platform Şartlarında Değişiklik</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Promind360, bu kullanım şartlarını önceden haber vermeksizin değiştirme hakkını saklı tutar. 
                Değişiklikler SEO analiz platformumuzda yayınlandığı tarihten itibaren geçerli olur.
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
                SEO analiz platformumuzun kullanım şartları hakkında sorularınız için bizimle iletişime geçebilirsiniz:
              </p>
              <div className="space-y-2">
                <p className="text-sm">
                  <strong>Yasal İşler:</strong> legal@promind360.com
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
