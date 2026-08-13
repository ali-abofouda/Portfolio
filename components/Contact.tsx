'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

interface ContactProps {
  onShowToast: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const { lang, t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleCopyEmail = () => {
    const email = 'ali.ashraf@example.com';
    navigator.clipboard
      .writeText(email)
      .then(() => {
        onShowToast(lang === 'ar' ? 'تم نسخ البريد الإلكتروني!' : 'Email address copied!');
      })
      .catch(() => {
        onShowToast('ali.ashraf@example.com');
      });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      onShowToast(lang === 'ar' ? 'يرجى ملء كافة الحقول.' : 'Please complete all required fields.');
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        onShowToast(
          lang === 'ar'
            ? `شكراً لك يا ${formData.name}! تم إرسال رسالتك بنجاح.`
            : `Thank you, ${formData.name}! Message sent successfully.`
        );
        setFormData({ name: '', email: '', message: '' });
      } else {
        onShowToast(data.message || (lang === 'ar' ? 'حدث خطأ أثناء الإرسال.' : 'Failed to send message.'));
      }
    } catch {
      onShowToast(
        lang === 'ar'
          ? `شكراً لك يا ${formData.name}! تم إرسال رسالتك.`
          : `Thank you, ${formData.name}! Message sent.`
      );
      setFormData({ name: '', email: '', message: '' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-head">
          <span className="section-num">05</span>
          <h2 className="section-title">{t('contact.title')}</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <p className="contact-lead">{t('contact.lead')}</p>
            <div className="contact-links">
              <button
                className="contact-card"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span className="contact-text">ali.ashraf@example.com</span>
                <span className="copy-badge">{t('contact.copy')}</span>
              </button>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.11-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.42.36.79 1.07.79 2.16v3.2c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
                </svg>
                <span className="contact-text">GitHub Profile</span>
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                <span className="contact-text">LinkedIn Profile</span>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="formName">{t('contact.formName')}</label>
              <input
                type="text"
                id="formName"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Name or Organization"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="formEmail">{t('contact.formEmail')}</label>
              <input
                type="email"
                id="formEmail"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="formMessage">{t('contact.formMessage')}</label>
              <textarea
                id="formMessage"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Brief details about your project or inquiry..."
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-submit" disabled={submitting}>
              <span>{submitting ? '...' : t('contact.formSubmit')}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
