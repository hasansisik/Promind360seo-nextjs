'use client';

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/redux/store"
import { login } from "@/redux/actions/userActions"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Toast } from "@/components/ui/toast"
import { Loader2 } from "lucide-react"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, isAuthenticated } = useSelector((state: RootState) => state.user);
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVariant, setToastVariant] = useState<'success' | 'error'>('success');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const showToastMessage = (message: string, variant: 'success' | 'error') => {
    setToastMessage(message);
    setToastVariant(variant);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      showToastMessage('Lütfen tüm alanları doldurun', 'error');
      return;
    }

    // Check if user is already authenticated
    if (isAuthenticated) {
      showToastMessage('Zaten giriş yapmış durumdasınız', 'error');
      return;
    }

    try {
      await dispatch(login({
        email: formData.email,
        password: formData.password
      })).unwrap();
      
      showToastMessage('Giriş başarılı!', 'success');
      
      // Redirect to dashboard after successful login
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 1000);
      
    } catch (error: unknown) {
      const errorMessage = (error as string) || 'Giriş başarısız';
      showToastMessage(errorMessage, 'error');
    }
  };

  return (
    <>
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <Card className="overflow-hidden p-0">
          <CardContent className="grid p-0 md:grid-cols-2">
            <form onSubmit={handleSubmit} className="p-6 md:p-8">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold">Hoş Geldiniz</h1>
                  <p className="text-muted-foreground text-balance">
                    Hesabınıza giriş yapın
                  </p>
                </div>
                
                <div className="grid gap-3">
                  <Label htmlFor="email">E-posta</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ornek@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="grid gap-3">
                  <Label htmlFor="password">Şifre</Label>
                  <Input 
                    id="password" 
                    name="password"
                    type="password" 
                    placeholder="Şifrenizi girin"
                    value={formData.password}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Giriş yapılıyor...
                    </>
                  ) : (
                    'Giriş Yap'
                  )}
                </Button>
                
              
              </div>
            </form>
            
            <div className="bg-muted relative hidden md:block">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Güvenli Giriş</h3>
                    <p className="text-sm text-muted-foreground">
                      Hesabınıza güvenli bir şekilde giriş yapın
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="text-muted-foreground text-center text-xs text-balance">
          Giriş yaparak <a href="/kosullar" className="underline underline-offset-4 hover:text-primary">Kullanım Şartları</a>{" "}
          ve <a href="/gizlilik" className="underline underline-offset-4 hover:text-primary">Gizlilik Politikası</a>&apos;nı kabul etmiş olursunuz.
        </div>
      </div>

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
