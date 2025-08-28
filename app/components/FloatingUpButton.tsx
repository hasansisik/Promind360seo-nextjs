'use client';

import { ArrowUp } from 'lucide-react';

const FloatingUpButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300 z-50 hover:scale-110"
      aria-label="Yukarı çık"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};

export default FloatingUpButton;
