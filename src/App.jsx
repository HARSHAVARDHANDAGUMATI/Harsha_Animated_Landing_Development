import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import Contact from './Components/Contact';
import Features from './Components/Features';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
import Hero from './Components/Hero';
import Loader from './Components/Loader';
import Navbar from './Components/Navbar';
import ScrollProgress from './Components/ScrollProgress';
import Stats from './Components/Stats';
import Testimonials from './Components/Testimonials';
import { pageTransition } from './Utils/Animations';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 650);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" />
        ) : (
          <motion.div
            key="page"
            className="relative min-h-screen overflow-hidden bg-[var(--bg)] text-[var(--text-primary)] transition-colors duration-500"
            {...pageTransition}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(30,208,183,0.16),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(255,125,84,0.18),_transparent_32%),radial-gradient(circle_at_bottom,_rgba(64,119,255,0.14),_transparent_28%)]" />
            <ScrollProgress />
            <Navbar />
            <main className="relative z-10">
              <Hero />
              <Features />
              <Gallery />
              <Stats />
              <Testimonials />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3500,
          style: {
            background: 'var(--surface-strong)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border)',
          },
        }}
      />
    </>
  );
}

export default App;
