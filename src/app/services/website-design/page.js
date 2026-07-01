"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { openWhatsAppQuote } from "@/lib/whatsappQuote";
import "./website-design.css";

// Reusable Animated Counter component for metrics
function AnimatedCounter({ value, duration = 1500 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const numericPart = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
    if (numericPart === 0) {
      setCount(value);
      return;
    }

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * numericPart));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasAnimated, value, duration]);

  const suffix = value.replace(/[0-9]/g, "");
  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
}

export default function WebsiteDesignPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  // Section 3: Subtypes data
  const subtypes = [
    {
      title: "Business Websites",
      icon: "🏢",
      desc: "Establish a strong, professional corporate presence that articulates your value proposition, services, and trust factors.",
      timeline: "2-3 Weeks",
      cta: "Get Custom Business Site"
    },
    {
      title: "Corporate Portals",
      icon: "🌐",
      desc: "Comprehensive enterprise portals designed with advanced navigation systems, multi-department layouts, and custom integrations.",
      timeline: "4-5 Weeks",
      cta: "Request Enterprise Portal"
    },
    {
      title: "Landing Pages",
      icon: "🎯",
      desc: "High-impact single-page micro-sites designed with a single marketing focus to capture quality leads or sell a specific product.",
      timeline: "1-2 Weeks",
      cta: "Build Custom Landing Page"
    },
    {
      title: "Portfolio Websites",
      icon: "🎨",
      desc: "Stunning visual showcases tailored for creators, architects, photographers, and agencies to present work in high resolution.",
      timeline: "2 Weeks",
      cta: "Design Creative Portfolio"
    },
    {
      title: "E-Commerce Stores",
      icon: "🛒",
      desc: "Conversion-optimized online shops featuring product filters, cart flows, secure checkout gateways, and management dashboards.",
      timeline: "4 Weeks",
      cta: "Launch E-Commerce Store"
    },
    {
      title: "SaaS Product Sites",
      icon: "⚡",
      desc: "Premium, modern marketing sites for software products, featuring interactive pricing tables, product grids, and CTA funnels.",
      timeline: "3 Weeks",
      cta: "Deploy SaaS Landing Page"
    },
    {
      title: "Startup Pages",
      icon: "🚀",
      desc: "Fast, adaptable, and sleek website layouts that help newly funded startups validate product-market fit and capture emails.",
      timeline: "2 Weeks",
      cta: "Launch Startup Landing Page"
    },
    {
      title: "Custom Web Apps",
      icon: "🛠️",
      desc: "Dynamic, database-driven web platforms built to your custom logic using React, Node.js, and API system connections.",
      timeline: "6-8 Weeks",
      cta: "Scope Custom Web App"
    }
  ];

  // Section 4: What's Included (8 Deliverables)
  const deliverables = [
    {
      title: "Custom Figma UI/UX Design",
      icon: "🎨",
      desc: "We design completely bespoke website mockups in Figma, tailored to your brand identity, colors, and layout requirements, before writing any code."
    },
    {
      title: "Mobile Responsive Layouts",
      icon: "📱",
      desc: "Every layout is built from the ground up to render flawlessly on iPhones, Android devices, tablets, and wide desktop screens."
    },
    {
      title: "CMS Integration Options",
      icon: "⚙️",
      desc: "We integrate powerful, flexible platforms like WordPress, Webflow, or headless options (Sanity, Strapi) so you can update text and posts easily."
    },
    {
      title: "Core Web Vitals & Speed Audit",
      icon: "⚡",
      desc: "We employ deep code optimizations, image compressions, and server-side configurations to achieve sub-second load times."
    },
    {
      title: "Technical SEO Foundation",
      icon: "🔍",
      desc: "We set up proper metadata, schema markups, structured data, semantic HTML tags, and clean sitemaps so search engines index you fast."
    },
    {
      title: "Conversion-Focused Copywriting",
      icon: "✍️",
      desc: "Our copywriters draft engaging headlines, body text, and call-to-actions tailored to speak directly to your target buyer persona."
    },
    {
      title: "Analytics & Event Tracking",
      icon: "📊",
      desc: "We integrate Google Analytics 4, Tag Manager, Facebook Pixel, and Hotjar heatmaps to track every user click and conversion action."
    },
    {
      title: "SSL & Server Hardening",
      icon: "🛡️",
      desc: "We secure your domains, configure free SSL certificates, implement spam-protected forms, and harden server access layers."
    }
  ];

  // Section 5: Timeline Process Steps (8 steps)
  const processSteps = [
    {
      num: "01",
      title: "Discovery & Strategy",
      desc: "We define your target goals, audit current assets, analyze competitors, and plan out structural maps."
    },
    {
      num: "02",
      title: "Research & Planning",
      desc: "We map user journeys, research high-ranking search keywords, and establish layout strategy blueprints."
    },
    {
      num: "03",
      title: "Wireframing & UX",
      desc: "We map out low-fidelity UX wireframes to establish logical site structure and user conversion flows."
    },
    {
      num: "04",
      title: "High-Fidelity UI Design",
      desc: "We craft custom, modern UI layouts in Figma featuring sleek gradients, modern typography, and glassmorphism."
    },
    {
      num: "05",
      title: "Production Coding",
      desc: "We convert approved Figma designs into clean, fast, and semantic Next.js or React code architectures."
    },
    {
      num: "06",
      title: "Performance & QA",
      desc: "We run rigorous checks for mobile response, cross-browser compatibility, security compliance, and speed."
    },
    {
      num: "07",
      title: "Domain & Launch",
      desc: "We map your custom DNS configurations, set up Vercel or AWS server deployments, and launch live."
    },
    {
      num: "08",
      title: "Support & Iteration",
      desc: "We provide monthly updates, database backups, security patches, and site modifications to scale results."
    }
  ];

  // Section 6: Feature Matrix / Checklist
  const featuresChecklist = [
    "Core Web Vitals Passed",
    "Schema & Metadata Ready",
    "HTTPS & SSL Secured",
    "CDN Edge Cached",
    "Clean Coding Architecture",
    "Accessible UI (WCAG)",
    "Automated Backup Systems",
    "Scalable Server Deployments",
    "Cross-Browser Compatible",
    "Spam-Protected Contacts"
  ];

  // Section 7: Tech Stack Categories
  const techCategories = [
    {
      title: "Frontend Frameworks",
      techs: ["React", "Next.js", "Vue.js", "HTML5", "CSS3 / Sass", "JavaScript (ES6+)"]
    },
    {
      title: "Backend Frameworks",
      techs: ["Node.js", "Express.js", "Python Django", "Python FastAPI", "PHP / Laravel"]
    },
    {
      title: "Database Solutions",
      techs: ["MongoDB", "PostgreSQL", "MySQL", "Redis (Caching)"]
    },
    {
      title: "Content Management (CMS)",
      techs: ["WordPress", "Webflow", "Sanity CMS", "Strapi", "Shopify Engine"]
    },
    {
      title: "Cloud & DevOps",
      techs: ["AWS S3 / EC2", "Vercel Edge", "Netlify Hosting", "GitHub Actions", "Docker Containers"]
    },
    {
      title: "Analytics & Tools",
      techs: ["Google Analytics 4", "Tag Manager", "Hotjar Analytics", "Figma Design Pro"]
    }
  ];

  // Section 8: Comparison Table Metrics (20 metrics)
  const comparisonTable = [
    { metric: "Page Load Speed", before: "3.5s - 5.2s (Slow)", after: "0.4s - 0.9s (Ultra Fast)" },
    { metric: "Mobile Optimization", before: "Broken layouts & tiny text", after: "Fluid, mobile-first responsiveness" },
    { metric: "Core Web Vitals Status", before: "Failed (Poor Cumulative Layout Shift)", after: "Passed (Perfect Core Web Vitals)" },
    { metric: "Bounce Rate", before: "58% - 72% (Visitors leave quickly)", after: "25% - 38% (High visitor engagement)" },
    { metric: "Conversion Rate", before: "0.8% - 1.5% (Low lead volume)", after: "3.8% - 6.2% (Double/Triple lead inflow)" },
    { metric: "SEO Metadata Setup", before: "Missing titles & image alt tags", after: "Fully-optimized structural index schema" },
    { metric: "Lead Quality", before: "High spam & unqualified submissions", after: "Clean, pre-qualified forms & leads" },
    { metric: "Google PageSpeed Score", before: "34 - 55 / 100", after: "95 - 100 / 100 (Perfect rating)" },
    { metric: "Custom Branding Style", before: "Generic template / Outdated look", after: "Premium glassmorphic modern design" },
    { metric: "Content Management (CMS)", before: "Requires developer for minor text edits", after: "Easy dashboard CMS to edit in seconds" },
    { metric: "Security Protection", before: "Vulnerable contact forms & outdated plugins", after: "SSL secured, anti-spam layers configured" },
    { metric: "Analytics tracking parameters", before: "Basic pageviews (GA4 misconfigured)", after: "Granular conversion event tracking" },
    { metric: "Tech Stack Scalability", before: "Monolithic, bloated template code", after: "Modular component React/Next.js architecture" },
    { metric: "Navigation Interface", before: "Confusing menu layout", after: "Intuitive UX menus & clear CTA flows" },
    { metric: "Layout Shift (CLS)", before: "Jumpy banners & moving columns", after: "Zero shift during asynchronous asset load" },
    { metric: "Accessibility compliance", before: "Contrast issues & no screen-reader support", after: "WCAG/ADA compliant structure" },
    { metric: "Server & Hosting reliability", before: "Frequent downtime (cheap shared hosting)", after: "99.99% uptime edge-cached servers" },
    { metric: "Image weight compressions", before: "Raw uncompressed PNGs & JPEGs", after: "Next-gen WebP & SVG vector assets" },
    { metric: "Pixel Tag tracking integrations", before: "Missing FB / LinkedIn API tracking", after: "Server-side Conversion API connected" },
    { metric: "Maintenance difficulty", before: "Constant plugins break website structure", after: "Robust code with low dependency overhead" }
  ];

  // Section 8: KPI Cards (6 cards)
  const kpis = [
    { emoji: "📈", title: "SEO Visibility", items: ["Up to +140% organic reach", "Top page keywords rank", "Rich schema listings"] },
    { emoji: "💰", title: "Conversions Boost", items: ["Averaging 3.8% to 6.2%", "Dynamic CTA triggers", "Lead forms optimized"] },
    { emoji: "🤖", title: "Lead Automation", items: ["Automated CRM syncs", "WhatsApp lead capture", "Email trigger sequences"] },
    { emoji: "🎨", title: "UX Excellence", items: ["0.1s input latency", "Heatmap tested flows", "Premium glassmorphism"] },
    { emoji: "⚡", title: "Web Performance", items: ["PageSpeed score > 95", "Next-gen image formats", "Global Edge CDN cache"] },
    { emoji: "🛠️", title: "Tech Architecture", items: ["Next.js SSR / SSG", "Zero code bloat", "Secure REST API routes"] }
  ];

  // Section 9: Portfolio Showcases
  const portfolioProjects = [
    {
      img: "/workspace_techlab.png",
      tag: "SaaS / Product Design",
      title: "Zenith Flow SaaS Dashboard",
      stats: ["2.8 Weeks Delivery", "+180% Signups", "Next.js & Rest APIs"],
      techs: ["React", "Next.js", "Express.js", "PostgreSQL"]
    },
    {
      img: "/workspace_collab.png",
      tag: "E-Commerce / Custom Shopify",
      title: "Aura Luxe Jewelry Shop",
      stats: ["4 Weeks Delivery", "+24% Avg Order Value", "Headless Checkout"],
      techs: ["Headless Shopify", "Tailwind CSS", "React", "Vercel"]
    },
    {
      img: "/workspace_boardroom.png",
      tag: "Corporate / Brand Strategy",
      title: "Apex Global Consulting Portal",
      stats: ["3 Weeks Delivery", "-45% Bounce Rate", "Headless CMS Active"],
      techs: ["Next.js", "Sanity CMS", "Sass", "AWS Server"]
    }
  ];

  // Section 11: Testimonials
  const testimonials = [
    {
      text: "Working with Digital Marketing TenX completely transformed our online presence. Our page load speeds dropped from 4.8 seconds to under half a second, and our sales conversion rate doubled in the first 30 days. They are true masters of Next.js and high-performance layouts.",
      author: "Elena Rostova",
      role: "Marketing Director at Zenflow SaaS",
      stars: 5
    },
    {
      text: "We needed a website design that looked premium and established our authority in enterprise consulting. They built a custom portal with a seamless Headless CMS that our marketing team can update in seconds. High-performing, fast, and gorgeous.",
      author: "Vikram Malhotra",
      role: "Managing Director at Apex Global",
      stars: 5
    },
    {
      text: "Our e-commerce store load speed was hurting our sales. TenX's redesign and conversion optimization increased our average order value by 24% and built a seamless checkout experience. Highly recommend their website design service!",
      author: "Jessica Mercer",
      role: "Founder of Aura Luxe",
      stars: 5
    }
  ];

  // Section 13: FAQ data (6 drop-down panels)
  const faqs = [
    {
      q: "How long does it take to design and develop a custom website?",
      a: "Typically, a custom website project takes 3 to 6 weeks, depending on the complexity of design requirements, number of pages, custom features (like dynamic filters or client dashboards), and integration workflows."
    },
    {
      q: "Will my website be mobile-friendly and optimized for SEO?",
      a: "Absolutely. Every single website we design is built from the ground up to be fully responsive on mobile, tablet, and desktop viewports. We also implement strict technical SEO foundations, including structured schemas, optimized metadata, clean markup, and optimized media compression."
    },
    {
      q: "What technologies do you use to build your websites?",
      a: "We specialize in modern, high-performance technology stacks. Our main competencies are React, Next.js, HTML5/CSS3, Node.js, and the MERN stack. For content management, we integrate flexible systems like WordPress, Webflow, or modern Headless CMS solutions (Sanity, Strapi) depending on client preferences."
    },
    {
      q: "Who writes the content and designs the graphics for the site?",
      a: "We provide a comprehensive service. Our team includes professional copywriters who draft high-impact, conversion-focused copies, and UI/UX designers who create all layouts, graphics, and interactive elements. However, we can also work with your existing content and brand style guide if provided."
    },
    {
      q: "Do you provide web hosting and ongoing maintenance?",
      a: "Yes, we assist with secure hosting setups on optimized platforms like AWS, Vercel, or Netlify, configured with global CDN cache layers. We also offer monthly support packages that cover regular data backups, software updates, security audits, page edit hours, and performance speed tests."
    },
    {
      q: "Can you redesign our existing outdated website?",
      a: "Yes. We perform complete website redesigns. We audit your existing site layout, design an updated and modern UI/UX, optimize loading performance, and structure your pages around new conversion funnels. We also configure correct 301 redirects to ensure you do not lose any existing SEO authority or keyword rankings."
    }
  ];

  return (
    <div className="web-design-page">
      <Header />

      <main>
        {/* SECTION 1: HERO */}
        <section className="w-hero-section">
          <div className="w-grid-bg"></div>
          <div className="w-glow w-glow-orange" style={{ top: "-10%", left: "-10%" }}></div>
          <div className="w-glow w-glow-purple" style={{ bottom: "5%", right: "-10%" }}></div>
          
          <div className="w-grid-content w-hero-grid">
            <div className="w-hero-content">
              <span className="badge-premium">🚀 Website Design Services</span>
              <h1>
                High-Performance<br />
                Website Design<br />
                <span className="w-text-orange">That Converts</span> <span className="w-text-purple">Visitors</span><br />
                Into Customers
              </h1>
              <p>
                We design fast, responsive, SEO-friendly websites that combine exceptional user experience with conversion-focused strategy to help your business grow.
              </p>
              <div className="w-hero-buttons">
                <button className="btn-primary" onClick={() => window.open("https://wa.me/919392251739", "_blank")}>
                  📅 Book Consultation
                </button>
                <Link href="#portfolio" className="btn-outline">
                  ▶ View Our Portfolio
                </Link>
              </div>

              <div className="w-hero-trust">
                <div className="w-trust-item">
                  <div className="w-trust-icon-box trust-purple">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                  </div>
                  <div className="w-trust-info">
                    <span className="w-trust-num"><AnimatedCounter value="500+" /></span>
                    <span className="w-trust-label">Projects Delivered</span>
                  </div>
                </div>
                <div className="w-trust-item">
                  <div className="w-trust-icon-box trust-green">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div className="w-trust-info">
                    <span className="w-trust-num"><AnimatedCounter value="150+" /></span>
                    <span className="w-trust-label">Happy Clients</span>
                  </div>
                </div>
                <div className="w-trust-item">
                  <div className="w-trust-icon-box trust-blue">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      <polyline points="9 11 11 13 15 9"></polyline>
                    </svg>
                  </div>
                  <div className="w-trust-info">
                    <span className="w-trust-num"><AnimatedCounter value="97%" /></span>
                    <span className="w-trust-label">Client Retention</span>
                  </div>
                </div>
                <div className="w-trust-item">
                  <div className="w-trust-icon-box trust-orange">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="20" x2="18" y2="10"></line>
                      <line x1="12" y1="20" x2="12" y2="4"></line>
                      <line x1="6" y1="20" x2="6" y2="14"></line>
                      <path d="M3 18l6-6 4 4 8-8"></path>
                      <polyline points="17 8 21 8 21 12"></polyline>
                    </svg>
                  </div>
                  <div className="w-trust-info">
                    <span className="w-trust-num"><AnimatedCounter value="10X" /></span>
                    <span className="w-trust-label">Business Growth</span>
                  </div>
                </div>
              </div>

              <div className="w-hero-trusted-by">
                <span className="w-trusted-by-text">Trusted by 150+ businesses worldwide</span>
                <div className="w-trusted-by-logos">
                  <span className="w-brand-logo-svg" title="airbnb">
                    <svg viewBox="0 0 32 32" fill="currentColor">
                      <path d="M16 1c-2.008 0-3.683 1.154-4.816 2.922L1.87 20.893A6.002 6.002 0 0 0 7.043 30c2.19 0 4.14-1.184 5.224-3.084l3.733-6.533 3.733 6.533C20.817 28.816 22.768 30 24.957 30a6.002 6.002 0 0 0 5.172-9.107l-9.314-16.97C19.683 2.154 18.008 1 16 1zm0 3c1.238 0 2.277.72 2.977 1.815l9.314 16.971A3 3 0 0 1 24.957 27c-1.353 0-2.527-.723-3.232-1.957l-4.25-7.437a1.996 1.996 0 0 0-3.488 0l-4.25 7.437C9.034 26.277 7.86 27 6.507 27A3 3 0 0 1 3.17 22.786l9.314-16.97C13.723 4.72 14.762 4 16 4zm0 6c-2.21 0-4 1.79-4 4 0 1.83 1.234 3.37 2.906 3.844l-.794 1.39a1 1 0 1 0 1.748.973l1.14-1.994v-.004c1.672-.474 2.906-2.014 2.906-3.844 0-2.21-1.79-4-4-4zm0 2c1.105 0 2 .895 2 2 0 .74-.403 1.38-1.006 1.723a1 1 0 0 0-.494.865v.412l-.994-1.74a1.01 1.01 0 0 0-.012-.02 1 1 0 0 0-.5-.382C14.403 15.38 14 14.74 14 14c0-1.105.895-2 2-2z"/>
                    </svg>
                    <span>airbnb</span>
                  </span>
                  <span className="w-brand-logo-svg" title="HubSpot">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21.2 12c-.3 0-.6-.1-.8-.3l-3.3-3.3c-.4-.4-.4-1.1 0-1.5s1.1-.4 1.5 0l2.6 2.6V4.1c0-.6.5-1.1 1.1-1.1s1.1.5 1.1 1.1v6.8c0 .6-.5 1.1-1.1 1.1c-.4.1-.8 0-1.1 0zm-11 5.9c-.6 0-1.1-.5-1.1-1.1v-3c0-.6.5-1.1 1.1-1.1s1.1.5 1.1 1.1v3c0 .6-.5 1.1-1.1 1.1zm-.6-9.7c-.6-.6-.6-1.6 0-2.2l3.3-3.3c.6-.6 1.6-.6 2.2 0s.6 1.6 0 2.2l-3.3 3.3c-.6.6-1.6.6-2.2 0zm-4.7 3.8c0-2.1 1.7-3.8 3.8-3.8s3.8 1.7 3.8 3.8s-1.7 3.8-3.8 3.8s-3.8-1.7-3.8-3.8zM0 12c0-3.3 2.7-6 6-6s6 2.7 6 6s-2.7 6-6 6s-6-2.7-6-6zm2.2 0c0 2.1 1.7 3.8 3.8 3.8s3.8-1.7 3.8-3.8s-1.7-3.8-3.8-3.8s-3.8 1.7-3.8 3.8z"/>
                    </svg>
                    <span>HubSpot</span>
                  </span>
                  <span className="w-brand-logo-svg" title="Microsoft">
                    <svg viewBox="0 0 23 23" fill="currentColor">
                      <path d="M0 0h11v11H0z" fill="#f25022"/><path d="M12 0h11v11H12z" fill="#7fba00"/><path d="M0 12h11v11H0z" fill="#01a4ef"/><path d="M12 12h11v11H12z" fill="#ffb900"/>
                    </svg>
                    <span>Microsoft</span>
                  </span>
                  <span className="w-brand-logo-svg" title="Google">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114A5.79 5.79 0 0 1 8.2 12.729a5.79 5.79 0 0 1 5.79-5.79c2.472 0 4.413 1.542 5.176 3.738l3.864-1.503C21.727 5.253 17.502 3 13.99 3A9.79 9.79 0 0 0 4.2 12.79a9.79 9.79 0 0 0 9.79 9.79c5.297 0 9.615-3.834 9.615-9.79a9.23 9.23 0 0 0-.173-1.505H12.24z"/>
                    </svg>
                    <span>Google</span>
                  </span>
                  <span className="w-brand-logo-svg" title="Spotify">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.565.387-.86.207c-2.377-1.454-5.37-1.783-8.893-.982c-.336.075-.668-.135-.744-.47c-.077-.337.135-.668.47-.745c3.856-.88 7.15-.5 9.822 1.132c.294.18.385.565.205.858zm1.225-2.722a.965.965 0 0 1-.328.784a.972.972 0 0 1-.84.143c-2.72-.835-6.87-1.32-10.08-.347c-.497.15-1.025-.13-1.176-.628a.968.968 0 0 1 .628-1.176c3.676-1.115 8.243-.574 11.385.39c.28.087.498.298.577.575a.962.962 0 0 1-.166.759zm.106-2.836C14.393 8.76 8.57 8.57 5.187 9.597a1.2 1.2 0 0 1-.684-2.298c3.882-1.177 10.316-.96 14.385 1.456a1.2 1.2 0 1 1-1.2 2.077z"/>
                    </svg>
                    <span>Spotify</span>
                  </span>
                  <span className="w-brand-logo-svg" title="Slack">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523a2.528 2.528 0 0 1-2.522-2.523a2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm1.261 0a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.043a2.528 2.528 0 0 1-2.522 2.52H8.823a2.528 2.528 0 0 1-2.52-2.52v-5.043zm0-6.326a2.528 2.528 0 0 1 2.52-2.522a2.528 2.528 0 0 1 2.522 2.522v2.52H8.823a2.528 2.528 0 0 1-2.52-2.52zm0-1.262a2.528 2.528 0 0 1 2.52-2.522h5.043a2.528 2.528 0 0 1 2.522 2.522v5.042a2.528 2.528 0 0 1-2.522 2.522H8.823a2.528 2.528 0 0 1-2.52-2.522V7.577zm11.38 1.262a2.528 2.528 0 0 1 2.522-2.522a2.528 2.528 0 0 1 2.52 2.522v2.52h-2.522a2.528 2.528 0 0 1-2.52-2.52zm-1.262 0a2.528 2.528 0 0 1-2.52 2.52h-5.043a2.528 2.528 0 0 1-2.522-2.52V3.796a2.528 2.528 0 0 1 2.522-2.52H15.18a2.528 2.528 0 0 1 2.52 2.52v5.043zm0 6.326a2.528 2.528 0 0 1-2.52 2.52a2.528 2.528 0 0 1-2.522-2.52v-2.52h2.522a2.52 2.52 0 0 1 2.52 2.52zm0 1.262a2.528 2.528 0 0 1-2.52 2.523h-5.043a2.528 2.528 0 0 1-2.522-2.523v-5.043a2.528 2.528 0 0 1 2.522-2.52H15.18a2.528 2.528 0 0 1 2.52 2.52v5.043z"/>
                    </svg>
                    <span>slack</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side Visual Devices */}
            <div className="w-hero-visual-container">
              {/* Background Glow */}
              <div className="w-hero-glow-bg"></div>

              {/* Laptop Device Mockup (Browser Window) */}
              <div className="w-device-laptop">
                <div className="w-browser-header">
                  <div className="w-dot w-dot-close"></div>
                  <div className="w-dot w-dot-min"></div>
                  <div className="w-dot w-dot-max"></div>
                </div>
                
                <div className="w-screen-nextoria">
                  {/* Nextoria Nav Header */}
                  <div className="w-nextoria-header">
                    <div className="w-nextoria-logo">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '2px', display: 'inline-block', verticalAlign: 'middle'}}>
                        <circle cx="12" cy="12" r="10"></circle>
                        <circle cx="12" cy="12" r="4"></circle>
                      </svg>
                      TenX
                    </div>
                    <div className="w-nextoria-nav">
                      <span>Home</span>
                      <span>Features</span>
                      <span>Pricing</span>
                      <span>About</span>
                      <span>Contact</span>
                    </div>
                    <button className="w-nextoria-btn">Get Started</button>
                  </div>
                  
                  {/* Nextoria Hero + Dashboard Content */}
                  <div className="w-nextoria-body">
                    {/* Hero Left Content */}
                    <div className="w-nextoria-hero-left">
                      <h2>Build Better<br />Digital Experiences</h2>
                      <p>We create beautiful, high-performing websites that drive results for your business.</p>
                      <div className="w-nextoria-hero-btns">
                        <button className="w-nextoria-btn-small primary">Get Started</button>
                        <button className="w-nextoria-btn-small secondary">
                          <svg width="6" height="6" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '2px', display: 'inline-block', verticalAlign: 'middle'}}>
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                          </svg>
                          Watch Demo
                        </button>
                      </div>
                    </div>
                    
                    {/* Analytics Overview Card */}
                    <div className="w-nested-analytics">
                      <div className="w-card-header-lbl">Analytics Overview</div>
                      <div className="w-analytics-stats">
                        <div className="w-stat-col">
                          <span className="w-col-lbl">Total Users</span>
                          <span className="w-col-val">12,458</span>
                          <span className="w-col-change">+24.0%</span>
                        </div>
                        <div className="w-stat-col">
                          <span className="w-col-lbl">Sessions</span>
                          <span className="w-col-val">24,742</span>
                          <span className="w-col-change">+18.6%</span>
                        </div>
                        <div className="w-stat-col">
                          <span className="w-col-lbl">Conversions</span>
                          <span className="w-col-val">3,246</span>
                          <span className="w-col-change">+32.7%</span>
                        </div>
                      </div>
                      
                      {/* Area Chart SVG */}
                      <div className="w-analytics-chart">
                        <svg viewBox="0 0 200 60" width="100%" height="45" fill="none">
                          <defs>
                            <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.25" />
                              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <path d="M0 50 C20 45, 40 25, 60 30 C80 35, 100 15, 120 18 C140 20, 160 5, 180 8 C190 10, 200 4, 200 4 L200 60 L0 60 Z" fill="url(#chartGlow)" />
                          <path d="M0 50 C20 45, 40 25, 60 30 C80 35, 100 15, 120 18 C140 20, 160 5, 180 8 C190 10, 200 4, 200 4" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                        <div className="w-chart-months">
                          <span>Jan</span>
                          <span>Feb</span>
                          <span>Mar</span>
                          <span>Apr</span>
                          <span>May</span>
                          <span>Jun</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Two cards at the bottom of laptop screen */}
                  <div className="w-nextoria-bottom-row">
                    <div className="w-nested-traffic">
                      <div className="w-card-header-lbl">Traffic Source</div>
                      <div className="w-traffic-content">
                        {/* Donut Chart SVG */}
                        <div className="w-donut-container">
                          <svg width="32" height="32" viewBox="0 0 36 36">
                            <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#e2e8f0" strokeWidth="3" />
                            <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#2563eb" strokeWidth="3.2" strokeDasharray="48 52" strokeDashoffset="25" />
                            <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#7c3aed" strokeWidth="3.2" strokeDasharray="24 76" strokeDashoffset="77" />
                            <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#ec4899" strokeWidth="3.2" strokeDasharray="18 82" strokeDashoffset="1" />
                            <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#ff8a00" strokeWidth="3.2" strokeDasharray="10 90" strokeDashoffset="19" />
                          </svg>
                        </div>
                        <ul className="w-traffic-legend">
                          <li><span className="dot blue"></span>Organic Search 48%</li>
                          <li><span className="dot purple"></span>Direct 24%</li>
                          <li><span className="dot pink"></span>Referral 18%</li>
                          <li><span className="dot orange"></span>Social Media 10%</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="w-nested-top-pages">
                      <div className="w-card-header-lbl">Top Pages</div>
                      <table className="w-pages-table">
                        <tbody>
                          <tr>
                            <td>/home</td>
                            <td className="num">8,632</td>
                          </tr>
                          <tr>
                            <td>/about</td>
                            <td className="num">4,321</td>
                          </tr>
                          <tr>
                            <td>/services</td>
                            <td className="num">3,842</td>
                          </tr>
                          <tr>
                            <td>/contact</td>
                            <td className="num">2,145</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Device Mockup */}
              <div className="w-device-phone">
                <div className="w-phone-notch"></div>
                <div className="w-screen-nextoria-phone">
                  <div className="w-phone-header">
                    <div className="w-nextoria-logo">TenX</div>
                    <div className="w-phone-hamburger"></div>
                  </div>
                  <div className="w-phone-body">
                    <h3>Build Better<br />Digital Experiences</h3>
                    <p>We create beautiful, high-performing websites.</p>
                    <div className="w-phone-btns">
                      <button className="primary">Get Started</button>
                      <button className="secondary">Watch Demo</button>
                    </div>
                    {/* Nested Mini Chart Card */}
                    <div className="w-phone-mini-card">
                      <span className="lbl">Analytics Overview</span>
                      <svg viewBox="0 0 100 30" width="100%" height="20" fill="none">
                        <path d="M0 25 C10 22, 20 12, 30 15 C40 18, 50 8, 60 10 C70 12, 80 2, 90 4 C95 5, 100 2, 100 2 L100 30 L0 30 Z" fill="rgba(124, 58, 237, 0.15)" />
                        <path d="M0 25 C10 22, 20 12, 30 15 C40 18, 50 8, 60 10 C70 12, 80 2, 90 4 C95 5, 100 2, 100 2" stroke="#7c3aed" strokeWidth="1" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tablet Device Mockup */}
              <div className="w-device-tablet">
                <div className="w-tablet-header">
                  <div className="w-dot w-dot-close"></div>
                  <div className="w-dot w-dot-min"></div>
                  <div className="w-dot w-dot-max"></div>
                </div>
                <div className="w-screen-nextoria-tablet">
                  <div className="w-tablet-nav">
                    <div className="w-nextoria-logo">TenX</div>
                    <div className="w-tablet-links">
                      <span>Home</span>
                      <span>Features</span>
                      <span>Pricing</span>
                      <span>About</span>
                      <span>Contact</span>
                    </div>
                    <button className="w-nextoria-btn">Get Started</button>
                  </div>
                  <div className="w-tablet-body">
                    <div className="w-tablet-hero-left">
                      <h3>Build Better Digital Experiences</h3>
                      <p>We create beautiful, high-performing websites that drive results for your business.</p>
                      <div className="w-tablet-btns">
                        <button className="primary">Get Started</button>
                        <button className="secondary">Watch Demo</button>
                      </div>
                    </div>
                    {/* Tablet Mini Chart Card */}
                    <div className="w-tablet-mini-card">
                      <span className="lbl">Analytics Overview</span>
                      <svg viewBox="0 0 100 45" width="100%" height="28" fill="none">
                        <path d="M0 35 C10 32, 20 12, 30 18 C40 22, 50 8, 60 12 C70 15, 80 2, 90 4 L100 2 L100 45 L0 45 Z" fill="rgba(37, 99, 235, 0.15)" />
                        <path d="M0 35 C10 32, 20 12, 30 18 C40 22, 50 8, 60 12 C70 15, 80 2, 90 4 L100 2" stroke="#2563eb" strokeWidth="1.2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stat Badges */}
              <div className="w-floating-stat conversion">
                <div className="w-stat-header-row">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '3px'}}>
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                    <path d="M3 18l6-6 4 4 8-8"></path>
                    <polyline points="17 8 21 8 21 12"></polyline>
                  </svg>
                  <span className="w-stat-label">Conversion Rate</span>
                </div>
                <span className="w-stat-value">+342%</span>
                <svg width="65" height="16" viewBox="0 0 80 24" fill="none" style={{ marginTop: "3px" }}>
                  <path d="M0 20 C10 18, 15 8, 25 12 C35 16, 40 4, 50 8 C60 12, 70 2, 80 4" stroke="#10b981" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
              </div>

              {/* Floating Stat Badges Stacked (Speed & Vitals) */}
              <div className="w-floating-stat speed-time">
                <div className="w-stat-gauge-col">
                  {/* Gauge SVG */}
                  <svg width="24" height="24" viewBox="0 0 36 36" style={{transform: 'rotate(-90deg)'}}>
                    <circle cx="18" cy="18" r="16" fill="none" stroke="#f1f5f9" strokeWidth="3.5" />
                    <circle cx="18" cy="18" r="16" fill="none" stroke="#7c3aed" strokeWidth="3.5" strokeDasharray="100" strokeDashoffset="35" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="w-stat-info-col">
                  <span className="w-stat-label">Page Load Time</span>
                  <span className="w-stat-value dark">0.4s</span>
                </div>
              </div>

              <div className="w-floating-stat speed-vitals">
                <div className="w-stat-gauge-col">
                  {/* Gauge SVG */}
                  <svg width="24" height="24" viewBox="0 0 36 36" style={{transform: 'rotate(-90deg)'}}>
                    <circle cx="18" cy="18" r="16" fill="none" stroke="#f1f5f9" strokeWidth="3.5" />
                    <circle cx="18" cy="18" r="16" fill="none" stroke="#7c3aed" strokeWidth="3.5" strokeDasharray="100" strokeDashoffset="15" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="w-stat-info-col">
                  <span className="w-stat-label">Core Web Vitals</span>
                  <div className="w-vitals-row">
                    <span className="w-stat-value green">Passed</span>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="#10b981" style={{marginLeft: '3px', flexShrink: 0}}>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1.5: HERO FEATURES BOTTOM BAR */}
        <section className="w-hero-bottom-bar-section">
          <div className="w-grid-content">
            <div className="w-hero-bottom-bar">
              <div className="w-bar-item">
                <div className="w-bar-icon rocket">🚀</div>
                <div className="w-bar-info">
                  <h4>SEO Optimized</h4>
                  <p>Built for higher rankings and better visibility</p>
                </div>
              </div>
              <div className="w-bar-item">
                <div className="w-bar-icon phone">📱</div>
                <div className="w-bar-info">
                  <h4>Fully Responsive</h4>
                  <p>Perfect experience on every device</p>
                </div>
              </div>
              <div className="w-bar-item">
                <div className="w-bar-icon bolt">⚡</div>
                <div className="w-bar-info">
                  <h4>Lightning Fast</h4>
                  <p>Optimized for speed and performance</p>
                </div>
              </div>
              <div className="w-bar-item">
                <div className="w-bar-icon target">🎯</div>
                <div className="w-bar-info">
                  <h4>Conversion Focused</h4>
                  <p>Designed to turn visitors into customers</p>
                </div>
              </div>
              <div className="w-bar-item">
                <div className="w-bar-icon shield">🛡️</div>
                <div className="w-bar-info">
                  <h4>Secure & Reliable</h4>
                  <p>Advanced security for complete peace of mind</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: WHY CHOOSE US (BEFORE VS AFTER VISUALS) */}
        <section className="w-section w-section-light">
          <div className="w-grid-content">
            <div className="w-title-centered">
              <span className="badge-premium" style={{ background: "rgba(124, 58, 237, 0.08)", color: "var(--w-accent-purple)", border: "none" }}>🎯 Designed for Commercial Impact</span>
              <h2>Websites Engineered to Drive <span className="w-text-orange">Business</span> <span className="w-text-purple">Results</span></h2>
              <p>
                Every structural element we create serves a single business purpose: turning organic search traffic and ad clicks into qualified inquiries and revenue.
              </p>
            </div>

            <div className="w-why-needs-grid">
              <div className="w-why-visual-panel">
                {/* Outdated Website Card */}
                <div className="w-comparison-wrapper bad">
                  <div className="w-comparison-header bad">
                    <span>✕</span> Outdated Website (Low Conversion)
                  </div>
                  <div className="w-comparison-card-grid">
                    <div className="w-comparison-left-mock">
                      <div className="w-outdated-mock-screen">
                        <div className="w-browser-header" style={{ height: "16px", padding: "0 8px", background: "#f1f5f9" }}>
                          <div className="w-dot" style={{ width: "4px", height: "4px", background: "#cbd5e1" }}></div>
                          <div className="w-dot" style={{ width: "4px", height: "4px", background: "#cbd5e1" }}></div>
                          <div className="w-dot" style={{ width: "4px", height: "4px", background: "#cbd5e1" }}></div>
                        </div>
                        <div className="w-outdated-body">
                          <div className="w-outdated-header">
                            <div className="w-outdated-logo"></div>
                            <div className="w-outdated-nav-lines">
                              <span></span><span></span><span></span>
                            </div>
                          </div>
                          <div className="w-outdated-split">
                            <div className="w-outdated-placeholder-img">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <polyline points="21 15 16 10 5 21" />
                              </svg>
                            </div>
                            <div className="w-outdated-text-lines">
                              <span></span>
                              <span></span>
                              <span className="short"></span>
                            </div>
                          </div>
                          <div className="w-outdated-grid">
                            <div className="w-outdated-grid-item"></div>
                            <div className="w-outdated-grid-item"></div>
                            <div className="w-outdated-grid-item"></div>
                            <div className="w-outdated-grid-item"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-comparison-right-list">
                      <div className="w-comparison-item">
                        <span className="w-comp-icon">✕</span>
                        <div className="w-comp-text">
                          <h4>Poor Visual Design</h4>
                          <p>Outdated layout that doesn't build trust</p>
                        </div>
                      </div>
                      <div className="w-comparison-item">
                        <span className="w-comp-icon">✕</span>
                        <div className="w-comp-text">
                          <h4>Not Mobile Friendly</h4>
                          <p>Frustrating experience on mobile devices</p>
                        </div>
                      </div>
                      <div className="w-comparison-item">
                        <span className="w-comp-icon">✕</span>
                        <div className="w-comp-text">
                          <h4>Slow Loading Speed</h4>
                          <p>High bounce rate and lost visitors</p>
                        </div>
                      </div>
                      <div className="w-comparison-item">
                        <span className="w-comp-icon">✕</span>
                        <div className="w-comp-text">
                          <h4>No Clear CTA</h4>
                          <p>Missed opportunities to capture leads</p>
                        </div>
                      </div>
                      <div className="w-comparison-item">
                        <span className="w-comp-icon">✕</span>
                        <div className="w-comp-text">
                          <h4>Low Conversion</h4>
                          <p>Visitors leave without taking action</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* VS divider spacer badge */}
                <div className="w-vs-divider">VS</div>

                {/* Modern Website Card */}
                <div className="w-comparison-wrapper good">
                  <div className="w-comparison-header good">
                    <span>✔</span> Modern High-Performance Website
                  </div>
                  <div className="w-comparison-card-grid">
                    <div className="w-comparison-left-mock">
                      <div className="w-modern-mock-screen">
                        <div className="w-browser-header" style={{ height: "16px", padding: "0 8px", background: "rgba(255, 255, 255, 0.05)", borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                          <div className="w-dot" style={{ width: "4px", height: "4px", background: "#cbd5e1" }}></div>
                          <div className="w-dot" style={{ width: "4px", height: "4px", background: "#cbd5e1" }}></div>
                          <div className="w-dot" style={{ width: "4px", height: "4px", background: "#cbd5e1" }}></div>
                        </div>
                        <div className="w-modern-body">
                          <div className="w-modern-hero-left">
                            <div className="w-modern-header">
                              <span className="w-modern-logo" style={{ fontSize: "5px" }}>⚡ Nexora</span>
                              <div className="w-modern-nav">
                                <span>Home</span>
                                <span>Services</span>
                              </div>
                            </div>
                            <h3>Building Digital Experiences That Drive Growth</h3>
                            <p>We help businesses grow with high-performance websites.</p>
                            <div className="w-modern-hero-btns">
                              <span className="w-modern-btn primary">Get Started Now</span>
                              <span className="w-modern-btn secondary">Watch Video</span>
                            </div>
                          </div>

                          <div className="w-modern-hero-right">
                            <div className="w-db-header" style={{ height: "10px" }}>
                              <div className="w-db-title" style={{ fontSize: "4px" }}>Analytics</div>
                            </div>
                            <div className="w-db-main" style={{ padding: "4px" }}>
                              <div className="w-db-mini-card" style={{ padding: "2px" }}>
                                <span className="w-db-card-lbl" style={{ fontSize: "3.5px" }}>Total Users</span>
                                <span style={{ fontSize: "7px", fontWeight: "900" }}>12,458 <span style={{ color: "#10b981", fontSize: "5px" }}>+24%</span></span>
                              </div>
                              <div className="w-db-big-card" style={{ height: "15px", padding: "2px" }}>
                                <svg width="35" height="12" viewBox="0 0 60 24" fill="none">
                                  <path d="M0 20 C10 18, 15 6, 25 10 C35 14, 40 4, 50 8 C55 10, 58 2, 60 4 L60 24 L0 24 Z" fill="rgba(37, 99, 235, 0.1)" />
                                  <path d="M0 20 C10 18, 15 6, 25 10 C35 14, 40 4, 50 8 C55 10, 58 2, 60 4" stroke="#2563eb" strokeWidth="1.5" fill="none" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-comparison-right-list">
                      <div className="w-comparison-item">
                        <span className="w-comp-icon">✔</span>
                        <div className="w-comp-text">
                          <h4>Modern & Professional</h4>
                          <p>Premium design that builds instant trust</p>
                        </div>
                      </div>
                      <div className="w-comparison-item">
                        <span className="w-comp-icon">✔</span>
                        <div className="w-comp-text">
                          <h4>Fully Responsive</h4>
                          <p>Seamless experience on all devices</p>
                        </div>
                      </div>
                      <div className="w-comparison-item">
                        <span className="w-comp-icon">✔</span>
                        <div className="w-comp-text">
                          <h4>Lightning Fast</h4>
                          <p>Ultra-fast load times keep users engaged</p>
                        </div>
                      </div>
                      <div className="w-comparison-item">
                        <span className="w-comp-icon">✔</span>
                        <div className="w-comp-text">
                          <h4>Clear CTA Strategy</h4>
                          <p>Action-driven design that converts</p>
                        </div>
                      </div>
                      <div className="w-comparison-item">
                        <span className="w-comp-icon">✔</span>
                        <div className="w-comp-text">
                          <h4>High Conversion</h4>
                          <p>Optimized for leads, sales & growth</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-needs-content">
                <ul className="w-needs-bullets-premium">
                  <li>
                    <span className="w-needs-bullets-premium-icon">✓</span>
                    <div><strong>Build credibility</strong> and trust with premium brand-focused design</div>
                  </li>
                  <li>
                    <span className="w-needs-bullets-premium-icon">✓</span>
                    <div><strong>Deliver seamless mobile experiences</strong> that users love</div>
                  </li>
                  <li>
                    <span className="w-needs-bullets-premium-icon">✓</span>
                    <div><strong>Load in a blink</strong> to reduce bounce rates and increase engagement</div>
                  </li>
                  <li>
                    <span className="w-needs-bullets-premium-icon">✓</span>
                    <div><strong>Integrate with CRM</strong>, analytics, and marketing tools effortlessly</div>
                  </li>
                  <li>
                    <span className="w-needs-bullets-premium-icon">✓</span>
                    <div><strong>Optimize for conversions</strong> with data-driven UX and CTAs</div>
                  </li>
                </ul>

                <div className="w-needs-grid-cards">
                  <div className="w-needs-mini-card">
                    <div className="w-needs-mini-card-icon trust">🛡️</div>
                    <h4>Higher Trust</h4>
                    <p>Establish brand authority with premium layout and visual consistency.</p>
                    <span className="w-needs-mini-card-arrow trust">→</span>
                  </div>
                  <div className="w-needs-mini-card">
                    <div className="w-needs-mini-card-icon ux">📱</div>
                    <h4>Seamless UX</h4>
                    <p>Frictionless navigation that guides users straight to action.</p>
                    <span className="w-needs-mini-card-arrow ux">→</span>
                  </div>
                  <div className="w-needs-mini-card">
                    <div className="w-needs-mini-card-icon speed">⚡</div>
                    <h4>Sub-Second Speed</h4>
                    <p>Load pages in under 1 second to retain more organic users.</p>
                    <span className="w-needs-mini-card-arrow speed">→</span>
                  </div>
                  <div className="w-needs-mini-card">
                    <div className="w-needs-mini-card-icon conversion">📈</div>
                    <h4>10X Conversions</h4>
                    <p>Capture and convert more leads with strategic form placements.</p>
                    <span className="w-needs-mini-card-arrow conversion">→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: SPECIFIC SERVICE SUBTYPES */}
        <section className="w-section w-section-white">
          <div className="w-grid-content">
            <div className="w-title-centered">
              <span className="eyebrow">Service Offerings</span>
              <h2>Website Structures Tailored to Your Business Goals</h2>
              <p>
                Whether you need a high-converting landing page, an online retail shop, or an enterprise SaaS layout, our team delivers custom code structured to scale.
              </p>
            </div>

            <div className="w-services-grid">
              {subtypes.map((sub, idx) => (
                <div className="w-service-type-card w-glass-card" key={idx}>
                  <div className="w-type-icon" style={{ background: "rgba(255, 107, 0, 0.06)", color: "var(--w-accent-orange)" }}>
                    {sub.icon}
                  </div>
                  <h3>{sub.title}</h3>
                  <p>{sub.desc}</p>
                  
                  <div className="w-type-meta">
                    <span className="w-type-timeline">⏳ {sub.timeline}</span>
                    <button className="w-type-cta" onClick={() => openWhatsAppQuote(sub.title)}>
                      Get Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: DELIVERABLES CHECKLIST */}
        <section className="w-section w-section-light">
          <div className="w-grid-content">
            <div className="w-title-centered">
              <span className="eyebrow">What's Included</span>
              <h2>Comprehensive Deliverables in Every Single Project</h2>
              <p>
                We do not just hand over code. We build a complete digital marketing asset configured to drive long-term business growth.
              </p>
            </div>

            <div className="w-included-grid">
              {deliverables.map((del, idx) => (
                <div className="w-included-card w-glass-card" key={idx}>
                  <div className="w-inc-icon-box" style={{ background: "rgba(124, 58, 237, 0.08)", color: "var(--w-accent-purple)" }}>
                    {del.icon}
                  </div>
                  <div>
                    <h3>{del.title}</h3>
                    <p>{del.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: TIMELINE PROCESS */}
        <section className="w-section w-section-white">
          <div className="w-grid-content">
            <div className="w-title-centered">
              <span className="eyebrow">Our Workflow</span>
              <h2>A Structured, High-Performance Design Journey</h2>
              <p>
                From initial conceptual maps in Figma to live production deployment, we maintain absolute transparency and quality verification at every step.
              </p>
            </div>

            <div className="w-process-grid">
              <div className="w-process-interactive-timeline">
                {processSteps.map((step, idx) => (
                  <div 
                    key={idx} 
                    className={`w-process-timeline-item ${activeStep === idx ? "active" : ""}`}
                    onClick={() => setActiveStep(idx)}
                  >
                    <div className="w-process-num-dot"></div>
                    <div className="w-process-info">
                      <h4>{step.num}. {step.title}</h4>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Side Visual Board */}
              <div className="w-process-visual-board">
                {activeStep === 0 && (
                  <div className="w-process-visual-graphic" style={{ opacity: 1 }}>
                    <div style={{ padding: "24px", background: "#fff", border: "1px solid var(--w-border)", borderRadius: "16px", textAlign: "center" }}>
                      <h4 style={{ margin: "0 0 12px 0", color: "var(--w-accent-orange)", fontWeight: "800" }}>📈 Discovery & Strategy</h4>
                      <p style={{ fontSize: "13px", color: "var(--w-text-muted)", margin: "0 0 16px 0" }}>
                        Mapping business acquisition funnels and listing target visitor actions.
                      </p>
                      <div style={{ height: "8px", background: "#f1f5f9", borderRadius: "4px", width: "100%", overflow: "hidden" }}>
                        <div style={{ height: "100%", background: "var(--w-accent-orange)", width: "30%" }}></div>
                      </div>
                    </div>
                  </div>
                )}
                {activeStep === 1 && (
                  <div className="w-process-visual-graphic" style={{ opacity: 1 }}>
                    <div style={{ padding: "24px", background: "#fff", border: "1px solid var(--w-border)", borderRadius: "16px", textAlign: "center" }}>
                      <h4 style={{ margin: "0 0 12px 0", color: "var(--w-accent-purple)", fontWeight: "800" }}>🔍 Research & Competitors</h4>
                      <p style={{ fontSize: "13px", color: "var(--w-text-muted)", margin: "0 0 16px 0" }}>
                        Auditing 15 top competitor sites for conversion hooks, speed, and keywords.
                      </p>
                      <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
                        <span style={{ fontSize: "11px", padding: "4px 10px", background: "#ede9fe", color: "var(--w-accent-purple)", borderRadius: "6px", fontWeight: "700" }}>A/B Testing</span>
                        <span style={{ fontSize: "11px", padding: "4px 10px", background: "#ede9fe", color: "var(--w-accent-purple)", borderRadius: "6px", fontWeight: "700" }}>SEO Audits</span>
                      </div>
                    </div>
                  </div>
                )}
                {activeStep === 2 && (
                  <div className="w-process-visual-graphic" style={{ opacity: 1 }}>
                    <div style={{ padding: "24px", background: "#fff", border: "1px solid var(--w-border)", borderRadius: "16px" }}>
                      <h4 style={{ margin: "0 0 12px 0", color: "var(--w-accent-blue)", fontWeight: "800", textAlign: "center" }}>✍️ UX Blueprint & Wireframes</h4>
                      <p style={{ fontSize: "12px", color: "var(--w-text-muted)", marginBottom: "16px", textAlign: "center" }}>
                        Structuring low-fidelity conversion points.
                      </p>
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <div style={{ height: "16px", background: "#f1f5f9", border: "1px dashed #cbd5e1" }}></div>
                        <div style={{ display: "flex", gap: "8px" }}>
                          <div style={{ height: "30px", flex: 1, background: "#f1f5f9", border: "1px dashed #cbd5e1" }}></div>
                          <div style={{ height: "30px", flex: 2, background: "#f1f5f9", border: "1px dashed #cbd5e1" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeStep === 3 && (
                  <div className="w-process-visual-graphic" style={{ opacity: 1 }}>
                    <div style={{ padding: "24px", background: "#fff", border: "1px solid var(--w-border)", borderRadius: "16px", textAlign: "center" }}>
                      <h4 style={{ margin: "0 0 12px 0", color: "var(--w-accent-pink)", fontWeight: "800" }}>🎨 High-Fidelity Figma Design</h4>
                      <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "linear-gradient(135deg, var(--w-accent-purple), var(--w-accent-pink))", margin: "0 auto 12px auto", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: "900" }}>UI</div>
                      <p style={{ fontSize: "12px", color: "var(--w-text-muted)", margin: 0 }}>
                        Custom layout design with balanced typography and glassmorphic icons.
                      </p>
                    </div>
                  </div>
                )}
                {activeStep === 4 && (
                  <div className="w-process-visual-graphic" style={{ opacity: 1 }}>
                    <div style={{ padding: "24px", background: "#fff", border: "1px solid var(--w-border)", borderRadius: "16px" }}>
                      <h4 style={{ margin: "0 0 12px 0", color: "var(--w-accent-green)", fontWeight: "800", textAlign: "center" }}>💻 Clean React & Next.js Coding</h4>
                      <pre style={{ fontSize: "11px", color: "#0f172a", background: "#f8f9fc", padding: "12px", borderRadius: "8px", margin: 0, fontFamily: "monospace" }}>
                        {`export default function App() {\n  return (\n    <div className="app">\n      <Header glass={true} />\n    </div>\n  );\n}`}
                      </pre>
                    </div>
                  </div>
                )}
                {activeStep === 5 && (
                  <div className="w-process-visual-graphic" style={{ opacity: 1 }}>
                    <div style={{ padding: "24px", background: "#fff", border: "1px solid var(--w-border)", borderRadius: "16px", textAlign: "center" }}>
                      <h4 style={{ margin: "0 0 12px 0", color: "var(--w-accent-orange)", fontWeight: "800" }}>⚡ Rigorous Speed Testing</h4>
                      <div style={{ fontSize: "36px", fontWeight: "900", color: "var(--w-success)", marginBottom: "8px" }}>100/100</div>
                      <p style={{ fontSize: "12px", color: "var(--w-text-muted)", margin: 0 }}>
                        Speed Index: 0.3s. Cumulative Layout Shift: 0. Core Web Vitals passed.
                      </p>
                    </div>
                  </div>
                )}
                {activeStep === 6 && (
                  <div className="w-process-visual-graphic" style={{ opacity: 1 }}>
                    <div style={{ padding: "24px", background: "#fff", border: "1px solid var(--w-border)", borderRadius: "16px", textAlign: "center" }}>
                      <h4 style={{ margin: "0 0 12px 0", color: "var(--w-accent-teal)", fontWeight: "800" }}>🚀 Server Setup & Launch</h4>
                      <p style={{ fontSize: "13px", color: "var(--w-success)", fontWeight: "700", margin: "0 0 12px 0" }}>
                        Domain mapped successfully!
                      </p>
                      <p style={{ fontSize: "12px", color: "var(--w-text-muted)", margin: 0 }}>
                        Vercel Global Edge CDN connected. SSL certificates successfully routed.
                      </p>
                    </div>
                  </div>
                )}
                {activeStep === 7 && (
                  <div className="w-process-visual-graphic" style={{ opacity: 1 }}>
                    <div style={{ padding: "24px", background: "#fff", border: "1px solid var(--w-border)", borderRadius: "16px", textAlign: "center" }}>
                      <h4 style={{ margin: "0 0 12px 0", color: "var(--w-accent-purple)", fontWeight: "800" }}>🛠️ Support & Marketing Iterations</h4>
                      <p style={{ fontSize: "12px", color: "var(--w-text-muted)", margin: "0 0 16px 0" }}>
                        Monthly website updates, server security scans, and database backup pipelines.
                      </p>
                      <div style={{ display: "flex", gap: "6px", justifyContent: "center" }}>
                        <span style={{ fontSize: "10px", padding: "4px 8px", background: "#f1f5f9", borderRadius: "4px" }}>Daily Backup</span>
                        <span style={{ fontSize: "10px", padding: "4px 8px", background: "#f1f5f9", borderRadius: "4px" }}>Uptime Monitor</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: FEATURES CHECKLIST */}
        <section className="w-section w-section-light">
          <div className="w-grid-content">
            <div className="w-title-centered">
              <span className="eyebrow">Quality Benchmarks</span>
              <h2>Our Strict Quality Verification Parameters</h2>
              <p>
                Every project goes through a rigorous checklists to satisfy global standards of accessibility, code compliance, and loading velocity.
              </p>
            </div>

            <div className="w-features-checklist-grid">
              {featuresChecklist.map((feat, idx) => (
                <div className="w-feature-check-card" key={idx}>
                  <div className="w-feature-check-icon">✔</div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: TECHNOLOGY STACK */}
        <section className="w-section w-section-white">
          <div className="w-grid-content">
            <div className="w-title-centered">
              <span className="eyebrow">Our Tech competencies</span>
              <h2>Building on High-Performance Modern Stacks</h2>
              <p>
                We do not rely on bloated drag-and-drop templates. We utilize robust, clean coding technologies to deliver pages that rank well and load instantly.
              </p>
            </div>

            <div className="w-tech-categories">
              {techCategories.map((cat, idx) => (
                <div className="w-tech-category-row" key={idx}>
                  <div className="w-tech-category-title">
                    <h3>{cat.title}</h3>
                  </div>
                  <div className="w-tech-logos-grid">
                    {cat.techs.map((tech, techIdx) => (
                      <span className="w-tech-badge" key={techIdx}>
                        <span>✔</span> {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              {/* MERN Stack Highlight Card */}
              <div className="w-mern-highlight-card">
                <div className="w-mern-logo-container">
                  <div className="w-mern-circle m">M</div>
                  <div className="w-mern-circle e">E</div>
                  <div className="w-mern-circle r">R</div>
                  <div className="w-mern-circle n">N</div>
                </div>
                <div className="w-mern-info">
                  <h4>Custom Web Applications via the MERN Stack</h4>
                  <p>
                    For complex commercial workflows, we utilize MongoDB, Express.js, React, and Node.js. This stack provides complete customization, sub-second input processing latency, and scalable databases to power your online apps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: BEFORE VS AFTER BUSINESS IMPACT */}
        <section className="w-section w-section-light">
          <div className="w-grid-content">
            <div className="w-title-centered">
              <span className="eyebrow">Performance Metrics Comparison</span>
              <h2>Transforming Digital Metrics: Before vs After</h2>
              <p>
                See how replacing a standard template site with our custom Next.js layout structures improves all commercial acquisition indicators.
              </p>
            </div>

            <div className="w-before-after-grid">
              {/* 20-Point Table */}
              <div className="w-table-wrapper">
                <table className="w-comparison-table">
                  <thead>
                    <tr>
                      <th>Assessment Parameter</th>
                      <th className="before">Before Our Redesign</th>
                      <th className="after">After Custom Next.js Launch</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonTable.map((row, idx) => (
                      <tr key={idx}>
                        <td><strong>{idx + 1}. {row.metric}</strong></td>
                        <td className="before-val">{row.before}</td>
                        <td className="after-val">{row.after}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* KPI Impact Cards */}
              <div className="w-title-centered" style={{ marginTop: "40px", marginBottom: "32px" }}>
                <span className="eyebrow">Granular Value Additions</span>
                <h2>6 Primary Channels of Business Value</h2>
              </div>
              <div className="w-kpi-grid">
                {kpis.map((kpi, idx) => (
                  <div className="w-kpi-card w-glass-card" key={idx}>
                    <div className="w-kpi-emoji">{kpi.emoji}</div>
                    <h3>{kpi.title}</h3>
                    <ul>
                      {kpi.items.map((item, itemIdx) => (
                        <li key={itemIdx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: PORTFOLIO SHOWCASES */}
        <section className="w-section w-section-white" id="portfolio">
          <div className="w-grid-content">
            <div className="w-title-centered">
              <span className="eyebrow">Our Work Portfolio</span>
              <h2>Real Client Websites Delivering Tangible Growth</h2>
              <p>
                Explore our high-performance design projects, detailing the technologies deployed and the conversions results achieved.
              </p>
            </div>

            <div className="w-portfolio-grid">
              {portfolioProjects.map((proj, idx) => (
                <div className="w-project-card w-glass-card" key={idx}>
                  <div className="w-project-img-frame" style={{ position: "relative" }}>
                    <Image 
                      src={proj.img} 
                      alt={proj.title} 
                      fill
                      style={{ objectFit: "cover" }} 
                    />
                  </div>
                  <span className="w-project-tag">{proj.tag}</span>
                  <h3>{proj.title}</h3>
                  
                  <div className="w-project-stats-row">
                    {proj.stats.map((stat, statIdx) => (
                      <span className="w-proj-stat" key={statIdx}>{stat}</span>
                    ))}
                  </div>

                  <div className="w-project-tech-logos">
                    {proj.techs.map((tech, techIdx) => (
                      <span className="w-project-tech-tag" key={techIdx}>
                        {techIdx > 0 && " • "} {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 10: RESULTS STATS */}
        <section className="w-results-section">
          <div className="w-grid-bg" style={{ opacity: 0.05 }}></div>
          <div className="w-results-grid">
            <div className="w-result-card">
              <div className="w-result-num"><AnimatedCounter value="99.8%" /></div>
              <div className="w-result-label">Client Satisfaction</div>
            </div>
            <div className="w-result-card">
              <div className="w-result-num"><AnimatedCounter value="0.4s" /></div>
              <div className="w-result-label">Avg Load Speed</div>
            </div>
            <div className="w-result-card">
              <div className="w-result-num"><AnimatedCounter value="98%" /></div>
              <div className="w-result-label">Conversion Rate Lift</div>
            </div>
            <div className="w-result-card">
              <div className="w-result-num"><AnimatedCounter value="100" /></div>
              <div className="w-result-label">PageSpeed Score</div>
            </div>
            <div className="w-result-card">
              <div className="w-result-num"><AnimatedCounter value="150+" /></div>
              <div className="w-result-label">Websites Launched</div>
            </div>
          </div>
        </section>

        {/* SECTION 11: TESTIMONIALS */}
        <section className="w-section w-section-light">
          <div className="w-grid-content">
            <div className="w-title-centered">
              <span className="eyebrow">Client Feedback</span>
              <h2>What Business Leaders Say About Our Service</h2>
              <p>
                Read reviews from clients who upgraded their business models with custom high-converting web applications.
              </p>
            </div>

            <div className="w-testimonials-container">
              {/* Google Review Badge Widget Placeholder */}
              <div className="w-reviews-slider-card">
                <div className="w-review-stars">
                  {"★".repeat(testimonials[activeTestimonial].stars)}
                </div>
                <p className="w-review-text">"{testimonials[activeTestimonial].text}"</p>
                <h4 className="w-review-author">{testimonials[activeTestimonial].author}</h4>
                <p className="w-review-role">{testimonials[activeTestimonial].role}</p>
                <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginTop: "24px" }}>
                  {testimonials.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveTestimonial(idx)}
                      style={{ 
                        width: "10px", 
                        height: "10px", 
                        borderRadius: "50%", 
                        border: "none", 
                        backgroundColor: activeTestimonial === idx ? "var(--w-accent-orange)" : "#cbd5e1",
                        cursor: "pointer"
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 12: PRICING PACKAGES */}
        <section className="w-section w-section-white">
          <div className="w-grid-content">
            <div className="w-title-centered">
              <span className="eyebrow">Affordable Investments</span>
              <h2>Pricing Packages Built for Business Scale</h2>
              <p>
                Choose the structure that matches your current business requirements. All plans feature clean custom coding and technical SEO setup.
              </p>
            </div>

            <div className="w-pricing-grid">
              {/* Column 1: Starter */}
              <div className="w-price-card w-glass-card">
                <span className="w-price-badge">Starter</span>
                <h3>High-Converting Landing Page</h3>
                <p className="w-price-desc">Perfect for newly launched startups, target ad campaigns, or single product validations.</p>
                <div className="w-price-amount">₹14,999 <span>/ fixed</span></div>
                <ul className="w-price-features-list">
                  <li>Single-page custom Figma design</li>
                  <li>Responsive code architecture</li>
                  <li>Technical SEO foundations configured</li>
                  <li>WhatsApp & CRM lead integration</li>
                  <li>Sub-second loading optimizations</li>
                  <li>1 week delivery timeline</li>
                </ul>
                <button className="btn-primary w-price-btn-stretch" onClick={() => openWhatsAppQuote("High-Converting Landing Page")}>
                  📅 Get Started Now
                </button>
              </div>

              {/* Column 2: Featured Business */}
              <div className="w-price-card w-glass-card featured">
                <span className="w-price-badge" style={{ backgroundColor: "var(--w-accent-orange)", color: "#fff" }}>Recommended</span>
                <h3>Premium Corporate Website</h3>
                <p className="w-price-desc">Ideal for expanding small and medium companies looking to establish market authority.</p>
                <div className="w-price-amount">₹29,999 <span>/ fixed</span></div>
                <ul className="w-price-features-list">
                  <li>Up to 7 custom structured pages</li>
                  <li>Bespoke Figma UI/UX prototypes</li>
                  <li>Headless CMS (WordPress / Sanity) integration</li>
                  <li>Full blog & news layouts configured</li>
                  <li>Google Analytics 4 & tracking pixels</li>
                  <li>3 weeks delivery timeline</li>
                  <li>1 month post-launch support</li>
                </ul>
                <button className="btn-primary w-price-btn-stretch" onClick={() => openWhatsAppQuote("Premium Corporate Website")}>
                  📅 Get Started Now
                </button>
              </div>

              {/* Column 3: Enterprise */}
              <div className="w-price-card w-glass-card">
                <span className="w-price-badge" style={{ backgroundColor: "rgba(124, 58, 237, 0.08)", color: "var(--w-accent-purple)" }}>Enterprise</span>
                <h3>Custom SaaS & Web Platform</h3>
                <p className="w-price-desc">Tailored for SaaS products, database tools, e-commerce networks, or complex dashboards.</p>
                <div className="w-price-amount">₹59,999+ <span>/ custom scope</span></div>
                <ul className="w-price-features-list">
                  <li>Fully custom React / Node / MERN stack code</li>
                  <li>Unlimited database scale & dynamic views</li>
                  <li>Client portals, admin logs, or secure checkouts</li>
                  <li>Third-party API integrations (Payment, ERP)</li>
                  <li>Dedicated DevOps setup (Vercel/AWS)</li>
                  <li>Custom sprint delivery timeline</li>
                  <li>3 months priority tech support</li>
                </ul>
                <button className="btn-primary w-price-btn-stretch" onClick={() => openWhatsAppQuote("Custom SaaS & Web Platform")}>
                  📅 Get Started Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 13: FAQ ACCORDION */}
        <section className="w-section w-section-light">
          <div className="w-grid-content">
            <div className="w-title-centered">
              <span className="eyebrow">Got Questions?</span>
              <h2>Frequently Asked Inquiries About Website Design</h2>
              <p>
                Find answers to common questions about our design process, development stack, and hosting setup.
              </p>
            </div>

            <div className="w-faq-accordion">
              {faqs.map((faq, idx) => (
                <div key={idx} className={`w-faq-item ${openFaqIndex === idx ? "open" : ""}`}>
                  <button className="w-faq-question-btn" onClick={() => toggleFaq(idx)}>
                    <span>{faq.q}</span>
                    <span className="w-faq-toggle-icon">+</span>
                  </button>
                  <div className="w-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 14: FINAL CTA */}
        <section className="w-section w-section-white">
          <div className="w-grid-content">
            <div className="w-cta-card">
              <div className="w-grid-bg"></div>
              <h2>Accelerate Your Business Growth Today</h2>
              <p>
                Contact our design consultants to review your current website metrics, get a free UI audit, and build a conversion roadmap.
              </p>
              <div className="w-cta-buttons">
                <button className="btn-primary" onClick={() => window.dispatchEvent(new CustomEvent("trigger-consultation-modal", { detail: { service: "Website Design" } }))}>
                  📅 Book Free Consultation
                </button>
                <button className="btn-outline" onClick={() => window.open("mailto:info@digitalmarketingtenx.com")}>
                  ✉️ Contact Email Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
