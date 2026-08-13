'use client';

import React, { useState } from 'react';
import { BackgroundGrid } from '@/components/BackgroundGrid';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Timeline } from '@/components/Timeline';
import { Contact } from '@/components/Contact';
import { Toast } from '@/components/Toast';
import { useLanguage } from '@/lib/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleShowToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <main>
      <BackgroundGrid />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Contact onShowToast={handleShowToast} />

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Ali Ashraf</span>
          <span>{t('footer.built')}</span>
        </div>
      </footer>

      <Toast message={toastMessage} />
    </main>
  );
}
