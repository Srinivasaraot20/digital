import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import './blog.css';

export const metadata = {
  title: 'Blog - Digital Marketing TenX',
  description: 'Authority hub for digital marketing, SEO, business strategy, and more.',
};

export default function BlogLayout({ children }) {
  return (
    <>
      <Header />
      <div className="blog-layout">
        {children}
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
