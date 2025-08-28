import Header from './components/Header';
import Stats from './components/Stats';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Stats />
        <Services />
        <Process />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
