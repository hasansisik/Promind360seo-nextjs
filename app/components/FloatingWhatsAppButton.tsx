'use client';

import { MessageCircle } from 'lucide-react';

const FloatingWhatsAppButton = () => {
  const openWhatsApp = () => {
    // WhatsApp numarasını buraya ekleyin
    const phoneNumber = '905555555555'; // Örnek numara
    const message = 'Merhaba! SEO analizi hakkında bilgi almak istiyorum.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 left-6 p-3 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all duration-300 z-50 hover:scale-110"
      aria-label="WhatsApp ile iletişime geç"
    >
      <MessageCircle className="h-5 w-5" />
    </button>
  );
};

export default FloatingWhatsAppButton;
