'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language, I18N } from './i18n';

type Theme = 'dark' | 'light';

interface LanguageContextType {
  lang: Language;
  theme: Theme;
  toggleLang: () => void;
  toggleTheme: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('en');
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedLang = (localStorage.getItem('portfolio-lang') as Language) || 'en';
    const storedTheme = (localStorage.getItem('portfolio-theme') as Theme) || 
      (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    
    setLang(storedLang);
    setTheme(storedTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('portfolio-lang', lang);
  }, [lang, mounted]);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme, mounted]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const t = (key: string): string => {
    return I18N[lang][key] || I18N['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, theme, toggleLang, toggleTheme, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
