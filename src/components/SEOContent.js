"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What services does Digital Marketing TenX offer?",
    a: "Digital Marketing TenX is a premier full-service digital marketing agency. We offer high-performance Search Engine Optimization (SEO Services), Google Ads PPC Management, Social Media Marketing, Meta Ads (Facebook & Instagram Marketing), E-commerce development (Shopify & WordPress), custom Website Design, WhatsApp Automation, and AI-powered Lead Generation solutions."
  },
  {
    q: "How long does it take to see results from SEO Services?",
    a: "Search Engine Optimization (SEO) is a long-term organic growth strategy. While technical SEO fixes and local SEO optimizations can yield quick improvements within 30 to 60 days, significant organic search rankings and traffic growth typically take between 4 to 6 months of continuous optimization and content marketing."
  },
  {
    q: "Do you offer Google Ads PPC Management?",
    a: "Yes. As a certified Google partner agency, we handle complete PPC management. We build, optimize, and scale Google Search, Display, YouTube, and Performance Max campaigns to reduce your Cost Per Click (CPC) and drive high-intent conversion traffic."
  },
  {
    q: "How much does professional Website Design and development cost?",
    a: "Website design costs vary depending on structural complexity, page count, and interactive functionalities. We build everything from conversion-focused startup landing pages to enterprise e-commerce portals. Contact us for a free technical website audit and custom pricing estimate."
  },
  {
    q: "Why is Local SEO important for my business?",
    a: "Local SEO services help your business rank at the top of local searches and Google Maps (Map Pack). By optimizing your Google Business Profile (GBP), maintaining Name-Address-Phone (NAP) consistency, and targeting location-based keywords, we connect you directly with nearby customers searching for your services."
  },
  {
    q: "What makes your agency different from other digital marketing companies?",
    a: "Unlike traditional agencies focused on vanity metrics, TenX focuses strictly on ROI and revenue growth. We merge certified marketing processes with software engineering and AI automation systems to build conversion funnels that guarantee measurable customer acquisition."
  },
  {
    q: "Do you offer social media marketing and branding services?",
    a: "Yes. We develop complete social media marketing campaigns across LinkedIn, Facebook, Instagram, Threads, and YouTube. Our branding team handles logo creation, brand guidelines, graphic design, and content strategy to establish unified online visibility."
  },
  {
    q: "How does AI automation improve digital marketing results?",
    a: "We integrate AI tools to automate lead qualification, manage bid optimization on Google/Meta ads 24/7, personalize email marketing outreach, and power WhatsApp automation systems. This increases speed-to-lead and maximizes your advertising budget efficiency."
  },
  {
    q: "Do you serve businesses in Hyderabad?",
    a: "Yes! While we serve clients globally, our main local marketing footprint is in Hyderabad, Telangana. We specialize in localized search and marketing campaigns targeting the Hyderabad regional market."
  },
  {
    q: "What is Technical SEO?",
    a: "Technical SEO focuses on optimizing your website's backend code and infrastructure. This includes increasing website speed, fixing broken redirect paths, generating XML sitemaps, adding canonical tags, structuring schema markups, and ensuring mobile responsiveness for search engine crawlers."
  },
  {
    q: "How do you track and report campaign progress?",
    a: "All clients receive access to a real-time Looker Studio dashboard that aggregates search rankings, impressions, clicks, conversions, and ad spend. We also host monthly review calls to map performance metrics directly to your business growth goals."
  },
  {
    q: "Do you build custom Shopify and WordPress e-commerce websites?",
    a: "Yes. Our web development team builds secure, fast, and conversion-optimized Shopify stores and custom WordPress WooCommerce websites that are fully integrated with payment gateways, inventory syncs, and tracking analytics."
  },
  {
    q: "Can you help lower my cost per lead (CPL) on ad campaigns?",
    a: "Absolutely. Through systematic Conversion Rate Optimization (CRO), negative keyword management, landing page split-testing, and audience segmentation, we filter out irrelevant traffic to significantly reduce your cost per acquisition."
  },
  {
    q: "Do you offer custom WhatsApp automation and marketing packages?",
    a: "Yes, we integrate WhatsApp API platforms to automate customer engagement, send bulk campaign broadcasts, set up trigger-based alert sequences (like abandoned cart reminders), and build automated support chatbots to nurture leads instantly."
  },
  {
    q: "How do we get started with Digital Marketing TenX?",
    a: "Simply click the 'Book Free Consultation' button to schedule a free strategy session. We will run a website audit, analyze your competitors, and map out a data-driven growth roadmap tailored for your business."
  }
];

export default function SEOContent() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate FAQ JSON-LD schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <>
      {/* FAQ Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="seo-section">
        <div className="ga-wrap">
          <div className="seo-grid">
            
            {/* Left: FAQs Accordion */}
            <div className="seo-faqs-col">
              <div className="sec-title">
                <span className="eyebrow">💡 Help Desk</span>
                <h2>Frequently Asked Questions</h2>
                <p>Everything you need to know about our digital marketing, SEO, PPC ads, and web development models.</p>
              </div>

              <div className="seo-faq-accordion">
                {faqs.map((faq, idx) => (
                  <div key={idx} className={`seo-faq-item ${openIndex === idx ? "open" : ""}`}>
                    <button 
                      id={`faq-btn-${idx}`}
                      className="seo-faq-question-btn" 
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={openIndex === idx}
                      aria-controls={`faq-answer-${idx}`}
                    >
                      <span>{faq.q}</span>
                      <svg className="chevron-icon" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <div 
                      id={`faq-answer-${idx}`}
                      className="seo-faq-answer"
                      role="region"
                      aria-labelledby={`faq-btn-${idx}`}
                    >
                      <p>{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
