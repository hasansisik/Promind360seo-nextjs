'use client';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { editProfile } from '@/redux/actions/userActions';
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Toast } from "@/components/ui/toast"
import { MessageCircle, Save, Loader2 } from "lucide-react"

export default function WhatsAppSettingsPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { user, loading } = useSelector((state: RootState) => state.user);
  
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVariant, setToastVariant] = useState<'success' | 'error'>('success');

  useEffect(() => {
    if (user?.whatsappNumber) {
      setWhatsappNumber(user.whatsappNumber);
    }
  }, [user]);

  const showToastMessage = (message: string, variant: 'success' | 'error') => {
    setToastMessage(message);
    setToastVariant(variant);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!whatsappNumber) {
      showToastMessage('WhatsApp numarası gerekli', 'error');
      return;
    }

    // Remove any non-digit characters except +
    const cleanNumber = whatsappNumber.replace(/[^\d+]/g, '');
    
    if (cleanNumber.length < 10) {
      showToastMessage('Geçerli bir WhatsApp numarası girin', 'error');
      return;
    }

    try {
      await dispatch(editProfile({ whatsappNumber: cleanNumber })).unwrap();
      showToastMessage('WhatsApp numarası başarıyla güncellendi', 'success');
    } catch (error: any) {
      showToastMessage(error || 'Güncelleme başarısız', 'error');
    }
  };

  const testWhatsApp = () => {
    if (!whatsappNumber) {
      showToastMessage('Önce WhatsApp numarasını kaydedin', 'error');
      return;
    }
    
    const cleanNumber = whatsappNumber.replace(/[^\d+]/g, '');
    const message = 'Merhaba! SEO analizi hakkında bilgi almak istiyorum.';
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="/dashboard">
                      Yönetim
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>WhatsApp Ayarları</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp Numarası Ayarları</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="whatsappNumber">WhatsApp Numarası</Label>
                    <Input
                      id="whatsappNumber"
                      type="tel"
                      placeholder="905555555555"
                      value={whatsappNumber}
                      onChange={(e) => setWhatsappNumber(e.target.value)}
                      className="font-mono"
                    />
                    <p className="text-sm text-muted-foreground">
                      Ülke kodu ile birlikte numarayı girin (örn: 905555555555)
                    </p>
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button 
                      type="submit" 
                      disabled={loading}
                      className="flex items-center space-x-2"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Kaydediliyor...</span>
                        </>
                      ) : (
                        <>
                          <Save className="h-4 w-4" />
                          <span>Kaydet</span>
                        </>
                      )}
                    </Button>
                    
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={testWhatsApp}
                      className="flex items-center space-x-2"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Test Et</span>
                    </Button>
                  </div>
                </form>
                
                {user?.whatsappNumber && (
                  <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h4 className="text-sm font-semibold text-green-800 mb-2">
                      Mevcut WhatsApp Numarası:
                    </h4>
                    <p className="text-sm text-green-700 font-mono">
                      {user.whatsappNumber}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </SidebarInset>
      </SidebarProvider>

      {showToast && (
        <Toast
          variant={toastVariant}
          message={toastMessage}
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  )
}
