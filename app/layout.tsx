import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/lib/LanguageContext';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Ali Ashraf — AI / ML Engineer',
  description:
    'Full-Stack AI & Machine Learning Engineer specializing in medical AI diagnosis systems, computer vision models (PyTorch), and LLM agent pipelines (FastAPI, Next.js, LangGraph).',
  keywords: [
    'Ali Ashraf',
    'AI Engineer',
    'Machine Learning Engineer',
    'Medical AI',
    'PyTorch',
    'FastAPI',
    'Next.js',
    'Egypt',
    'LangGraph',
  ],
  authors: [{ name: 'Ali Ashraf' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Ali Ashraf — AI / ML Engineer Portfolio',
    description:
      'Building medical AI diagnosis systems, computer vision models, and production LLM agent pipelines.',
    url: 'https://aliashraf.dev',
    siteName: 'Ali Ashraf Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ali Ashraf — AI / ML Engineer',
    description: 'Medical AI Systems, Computer Vision & Full-Stack Next.js Applications.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
