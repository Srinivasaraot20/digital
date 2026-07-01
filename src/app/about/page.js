"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./about.css";

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

export default function AboutPage() {
  // State for Section 13 FAQ Accordion
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  // Section 13 Accordion Questions & Answers
  const faqData = [
    {
      q: "What is Digital Marketing TenX, and what makes you different?",
      a: "Digital Marketing TenX is a premium, technology-driven agency. We combine performance marketing, SEO, AI automation, and high-performance development to help brands achieve 10X growth. Unlike traditional agencies, we take a data-first, ROI-focused approach and utilize advanced AI tools to automate workflows and optimize results."
    },
    {
      q: "Do you only work with large enterprises?",
      a: "No, we partner with startups, local businesses, healthcare brands, educational institutions, and mid-market enterprises. Our growth frameworks are scalable and tailored specifically to your business size, budget, and growth stage."
    },
    {
      q: "How does AI automation fit into digital marketing?",
      a: "We use AI automation to optimize ad targeting, generate data-driven content at scale, automate lead nurturing on platforms like WhatsApp and email, and streamline workflow processes. This decreases client customer acquisition costs and increases conversion rates."
    },
    {
      q: "What digital marketing channels do you specialize in?",
      a: "We specialize in Search Engine Optimization (SEO), Google PPC Ads, Meta (Facebook & Instagram) Ads, TikTok Advertising, Social Media Management, WhatsApp Marketing Automation, and custom High-Conversion Web Development."
    },
    {
      q: "How do you measure campaign success?",
      a: "We focus on bottom-line business metrics: leads generated, sales conversions, customer acquisition cost (CAC), return on ad spend (ROAS), and net lifetime value. We provide transparent live dashboards so you can see your growth in real time."
    },
    {
      q: "What is your onboarding process for new clients?",
      a: "Our onboarding starts with a free strategy call followed by a deep-dive audit of your digital presence. Once we align on key milestones, we establish our communication channels, set up tracking dashboards, and launch the first phase of optimization within 14 days."
    },
    {
      q: "How long does it take to see results from SEO?",
      a: "While PPC ads drive immediate traffic, SEO is a long-term asset. Typically, clients see noticeable ranking improvements and organic traffic increases within 3 to 6 months, building a compounding source of free leads."
    },
    {
      q: "Can you design and build custom websites?",
      a: "Yes, our in-house developers design and build bespoke, high-performance web applications using modern stacks like Next.js, React, and Tailwind CSS. We ensure every site is optimized for SEO, speed, and conversion."
    },
    {
      q: "Do you offer WhatsApp Marketing Automation separately?",
      a: "Yes! We build custom WhatsApp chatbot flows, broadcast setups, and CRM integrations to help you automate customer support and broadcast promotional offers directly to your users' phones."
    },
    {
      q: "How do you handle ad budgets?",
      a: "Ad budget is paid directly to the ad platforms (Google/Meta), and we charge a flat management fee or percentage of ad spend based on the scope. We continuously optimize targeting and copy to make sure your ad budget is spent efficiently."
    },
    {
      q: "Do you offer content creation and copy writing?",
      a: "Yes, our creative team writes high-converting copy, designs social media creatives, writes SEO articles, and creates optimized ad landing pages that align with your brand voice."
    },
    {
      q: "How often do you send progress reports?",
      a: "We provide you with a 24/7 live data dashboard. Additionally, we conduct bi-weekly syncs and send comprehensive monthly performance reports detailing work done and growth metrics."
    },
    {
      q: "Do you work under non-disclosure agreements (NDAs)?",
      a: "Yes, we protect all intellectual property and sensitive business data. We are happy to sign NDAs before discussing proprietary details or kicking off campaigns."
    },
    {
      q: "What is the typical contract length?",
      a: "We offer flexible terms. While SEO campaigns typically require a 6-month commitment to see meaningful organic results, our PPC and development projects can be set up on monthly retainers or project-based agreements."
    },
    {
      q: "How do we get started?",
      a: "Simply click 'Book Free Strategy Call' on our site. You will be able to select a time that works for you, and one of our digital marketing experts will analyze your business and map out a 10X growth plan."
    }
  ];

  // Section 4 Core Values
  const coreValues = [
    {
      title: "Innovation First",
      desc: "We stay ahead of the curve by continuously testing and deploying AI tools, performance marketing updates, and cutting-edge tech.",
      color: "rgba(234, 88, 12, 0.08)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5M14 9l-6 6M9 4l-5 5M20 4a2 2 0 0 0-2-2h-3l-7 7v4h4l7-7V4z" />
          <path d="M14 5h3v3" />
        </svg>
      )
    },
    {
      title: "Complete Transparency",
      desc: "No hidden charges, vanity metrics, or smoke and mirrors. We provide 24/7 access to live reports detailing your actual business growth.",
      color: "rgba(22, 163, 74, 0.08)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    },
    {
      title: "Absolute Integrity",
      desc: "We treat your business and ad spend as if it were our own, making choices that drive long-term value over short-term wins.",
      color: "rgba(217, 119, 6, 0.08)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m16 16 3-8 3 8c-.1.3-.3.5-.6.5h-4.8c-.3 0-.5-.2-.6-.5z" />
          <path d="m2 16 3-8 3 8c-.1.3-.3.5-.6.5H2.6c-.3 0-.5-.2-.6-.5z" />
          <path d="M12 3v18" />
          <path d="M12 7h7M5 7h7" />
          <path d="M12 21a2 2 0 1 1-4 0h8a2 2 0 0 1-4 0z" />
        </svg>
      )
    },
    {
      title: "Results-Driven Focus",
      desc: "We prioritize actual revenue, leads, and sales over clicks and impressions. If it doesn't positively impact your bottom line, we optimize it.",
      color: "rgba(220, 38, 38, 0.08)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
          <path d="m22 2-6.5 6.5" />
          <path d="M22 6V2h-4" />
        </svg>
      )
    },
    {
      title: "Customer Success",
      desc: "Our clients are our long-term growth partners. We measure our achievement solely by the scale of your business's expansion.",
      color: "rgba(124, 58, 237, 0.08)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 15a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2h10v-2z" />
          <circle cx="9" cy="7" r="3" />
          <path d="M17 13a2 2 0 0 0-2-2h-1a3.5 3.5 0 0 1 .5 2v2h3.5v-1z" />
          <circle cx="15" cy="8" r="2.2" />
          <path d="M2 19h15a3 3 0 0 0 3-3v-2" />
          <path d="M6 22h8" />
        </svg>
      )
    },
    {
      title: "Continuous Improvement",
      desc: "We analyze campaign performance, search algorithms, and user behavior daily to continuously squeeze out higher conversions.",
      color: "rgba(37, 99, 235, 0.08)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
          <line x1="9" y1="15" x2="9" y2="9" />
          <line x1="12" y1="15" x2="12" y2="11" />
          <line x1="15" y1="15" x2="15" y2="7" />
        </svg>
      )
    }
  ];

  // Section 8 Skills data
  const skillsData = [
    { name: "Search Engine Optimization (SEO)", pct: 95 },
    { name: "Google Paid PPC Ads", pct: 90 },
    { name: "Meta (Facebook/Instagram) Ads", pct: 92 },
    { name: "High-Performance Next.js/React Dev", pct: 88 },
    { name: "AI Automation & WhatsApp Funnels", pct: 94 },
    { name: "Branding & Creative Design", pct: 85 }
  ];



  // Section 10 Workspace data
  const workspaceData = [
    {
      title: "Main Collaboration Space",
      desc: "Open, vibrant, and energetic space designed for teamwork and creativity.",
      img: "/workspace_collab.png",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      iconBg: "#eff6ff"
    },
    {
      title: "Executive Board Room",
      desc: "Strategic discussions, planning, and big decisions happen here.",
      img: "/workspace_boardroom.png",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="12" y2="17" />
          <line x1="12" y1="17" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <line x1="6" y1="8" x2="10" y2="8" />
          <line x1="6" y1="12" x2="14" y2="12" />
        </svg>
      ),
      iconBg: "#fff7ed"
    },
    {
      title: "Creative Brainstorming Corner",
      desc: "Where ideas flow freely and creative campaigns come to life.",
      img: "/workspace_brainstorm.png",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <line x1="9" y1="18" x2="15" y2="18" />
          <line x1="10" y1="22" x2="14" y2="22" />
        </svg>
      ),
      iconBg: "#fef9c3"
    },
    {
      title: "AI & Tech Lab",
      desc: "Building smart solutions, automation pipelines, and AI-driven systems.",
      img: "/workspace_techlab.png",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="10" rx="2" />
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v4M8 15h.01M16 15h.01M9 18h6" />
        </svg>
      ),
      iconBg: "#faf5ff"
    },
    {
      title: "Client Success Celebration",
      desc: "Celebrating milestones, achievements, and long-term partnerships.",
      img: "/workspace_celebrate.png",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 22v-4l10-10 4 4-10 10H4Z" />
          <path d="m14 8 4 4M19 3l-2.5 2.5M14 2l1.5 1.5M18 7.5 19.5 9" />
        </svg>
      ),
      iconBg: "#fdf2f8"
    },
    {
      title: "Annual Innovation Summit",
      desc: "Sharing insights, innovations, and the vision that drives us forward.",
      img: "/workspace_summit.png",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5M14 9l-6 6M9 4l-5 5M20 4a2 2 0 0 0-2-2h-3l-7 7v4h4l7-7V4Z" />
          <path d="M14 5h3v3" />
        </svg>
      ),
      iconBg: "#fff5f1"
    }
  ];

  return (
    <div className="about-page-container">
      <Header />

      <main>
        {/* ──────────────────────────────────────
           SECTION 1 — HERO
           ────────────────────────────────────── */}
        <section className="about-hero-section">
          <div className="grid-overlay"></div>
          <div className="radial-glow glow-1"></div>
          <div className="radial-glow glow-2"></div>
          
          <div className="about-grid-content">
            <div className="about-hero-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "40px", alignItems: "center" }}>
              <div className="about-hero-content" style={{ textAlign: "left" }}>
                <span className="badge-premium" style={{ 
                  display: "inline-flex", 
                  alignItems: "center", 
                  gap: "6px", 
                  border: "1px solid #ff6b00", 
                  color: "#ff6b00", 
                  background: "#ffffff", 
                  padding: "6px 16px", 
                  borderRadius: "30px", 
                  fontSize: "11px", 
                  fontWeight: "700", 
                  textTransform: "uppercase", 
                  letterSpacing: "1px", 
                  marginBottom: "20px" 
                }}>
                  🚀 ABOUT DIGITAL MARKETING TENX
                </span>
                <h1 style={{ fontSize: "52px", fontWeight: "900", color: "#0f172a", lineHeight: "1.15", marginBottom: "20px", letterSpacing: "-1.5px" }}>
                  We Drive<br />
                  <span style={{ color: "#3b82f6" }}>Digital</span> <span style={{ color: "#8b5cf6" }}>Growth</span>.<br />
                  You Achieve More.
                </h1>
                <p className="hero-subtitle" style={{ fontSize: "16px", color: "#64748b", lineHeight: "1.7", marginBottom: "32px", maxWidth: "580px" }}>
                  Digital Marketing TenX is a technology-driven digital marketing agency combining creativity, performance marketing, AI automation, and data to help businesses grow faster and smarter.
                </p>

                {/* 4 Feature pillars */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "36px" }} className="about-pillars-row">
                  <div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "50%", background: "#eff6ff", color: "#3b82f6", marginBottom: "10px" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>
                      </svg>
                    </div>
                    <h5 style={{ fontSize: "13.5px", fontWeight: "700", color: "#0f172a", marginBottom: "4px" }}>Result Driven</h5>
                    <p style={{ fontSize: "11.5px", color: "#64748b", lineHeight: "1.4", margin: "0" }}>Strategies that deliver measurable growth.</p>
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "50%", background: "#fdf2f8", color: "#db2777", marginBottom: "10px" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>
                      </svg>
                    </div>
                    <h5 style={{ fontSize: "13.5px", fontWeight: "700", color: "#0f172a", marginBottom: "4px" }}>Data Backed</h5>
                    <p style={{ fontSize: "11.5px", color: "#64748b", lineHeight: "1.4", margin: "0" }}>Smart decisions powered by data.</p>
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "50%", background: "#fff7ed", color: "#ea580c", marginBottom: "10px" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect>
                      </svg>
                    </div>
                    <h5 style={{ fontSize: "13.5px", fontWeight: "700", color: "#0f172a", marginBottom: "4px" }}>AI Powered</h5>
                    <p style={{ fontSize: "11.5px", color: "#64748b", lineHeight: "1.4", margin: "0" }}>Automation for max performance.</p>
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "50%", background: "#f0fdf4", color: "#16a34a", marginBottom: "10px" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <h5 style={{ fontSize: "13.5px", fontWeight: "700", color: "#0f172a", marginBottom: "4px" }}>Expert Team</h5>
                    <p style={{ fontSize: "11.5px", color: "#64748b", lineHeight: "1.4", margin: "0" }}>Experienced staff dedicated to you.</p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "40px", flexWrap: "wrap" }}>
                  <button className="btn-primary" onClick={() => window.dispatchEvent(new CustomEvent("trigger-consultation-modal"))}>
                    📅 Book Free Consultation
                  </button>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }} className="lets-grow-handwriting">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5">
                      <path d="M3 12a9 9 0 0 1 9-9 9 9 0 0 1 9 9 9 9 0 0 1-9 9m0-18v18" strokeDasharray="3 3" />
                    </svg>
                    <span style={{ fontSize: "14px", color: "#f97316", fontWeight: "600", fontStyle: "italic" }}>Let's grow your business!</span>
                  </div>
                </div>

                {/* Overlapping Avatars and Google Reviews */}
                <div className="hero-trust-row" style={{ display: "flex", alignItems: "center", gap: "30px", flexWrap: "wrap" }}>
                  <div className="trust-brands">
                    <div className="avatar-group">
                      <div className="avatar-circle">AS</div>
                      <div className="avatar-circle" style={{ backgroundColor: "#e0f2fe" }}>PN</div>
                      <div className="avatar-circle" style={{ backgroundColor: "#fef3c7" }}>RK</div>
                      <div className="avatar-circle plus">150+</div>
                    </div>
                    <div className="trust-text">
                      Trusted by 150+<br />
                      Brands Worldwide
                    </div>
                  </div>

                  <div className="trust-reviews" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div className="google-review-icon" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "32px", height: "32px", borderRadius: "50%", background: "#f1f5f9", fontWeight: "bold", color: "#4285F4" }}>G</div>
                    <div>
                      <div className="review-rating-val" style={{ display: "flex", alignItems: "center", gap: "6px", fontWeight: "700" }}>
                        4.9/5 <span className="review-stars-small" style={{ color: "#f59e0b" }}>★★★★★</span>
                      </div>
                      <div className="trust-text" style={{ fontSize: "11px", color: "#64748b" }}>
                        Based on 120+ Reviews
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Interactive Dashboard & Floating Cards */}
              <div className="about-hero-visual" style={{ position: "relative", width: "100%", height: "450px" }}>
                <Image
                  src="/about.png"
                  alt="Digital Marketing TenX Rocket Performance Dashboard"
                  fill
                  style={{ objectFit: "contain", objectPosition: "center right" }}
                  priority
                />
              </div>
            </div>

            {/* Bottom Features Horizontal Card */}
            <div className="hero-bottom-row">
              <div className="features-glass-panel">
                <div className="feat-col">
                  <div className="feat-col-icon" style={{ backgroundColor: "#eff6ff", color: "#3b82f6" }}>🎯</div>
                  <div className="feat-col-info">
                    <h4>Data-Driven Strategies</h4>
                    <p>Decisions backed by real insights and analytics</p>
                  </div>
                </div>
                <div className="feat-col">
                  <div className="feat-col-icon" style={{ backgroundColor: "#fff7ed", color: "#ff6b00" }}>💡</div>
                  <div className="feat-col-info">
                    <h4>Creative Marketing Solutions</h4>
                    <p>Unique ideas that build brands and drive results</p>
                  </div>
                </div>
                <div className="feat-col">
                  <div className="feat-col-icon" style={{ backgroundColor: "#f0fdf4", color: "#10b981" }}>📈</div>
                  <div className="feat-col-info">
                    <h4>Business Growth Focused</h4>
                    <p>ROI-first approach that accelerates business growth</p>
                  </div>
                </div>
                <div className="feat-col">
                  <div className="feat-col-icon" style={{ backgroundColor: "#fdf4ff", color: "#d946ef" }}>👥</div>
                  <div className="feat-col-info">
                    <h4>Dedicated Expert Team</h4>
                    <p>Experienced professionals committed to your success</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────
           SECTION 2 — OUR STORY
           ────────────────────────────────────── */}
        <section className="about-section section-light">
          <div className="about-grid-content story-grid">
            <div className="story-visual-wrap">
              {/* Using existing placeholder or logo/marketing graphic */}
              <Image 
                src="/marketing.png" 
                alt="Digital Marketing TenX Office Workspace" 
                fill
                priority
              />
            </div>
            <div className="story-content">
              <span className="badge-premium">📖 Our Story</span>
              <h2>Our Story — A Performance Marketing Agency</h2>

              <p>
                Digital Marketing TenX was founded in 2023 with a clear, singular vision: to put an end to the era of generic marketing packages, smoke-and-mirror analytics reports, and vanity metrics that do not impact bottom-line profit.
              </p>
              <p>
                We noticed that too many agencies were delivering clicks and impressions, but failing to scale client sales, revenue, and customer lifetime value. We assembled a team of specialists to focus strictly on data-backed performance marketing and modern engineering pipelines.
              </p>
              <p>
                By combining multi-channel advertising engines with custom web development and AI workflow automation, we help our client partners capture, nurture, and close leads at a fraction of the traditional cost.
              </p>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────
           SECTION 3 — OUR MISSION & VISION
           ────────────────────────────────────── */}
        <section className="about-section section-dark">
          <div className="grid-overlay"></div>
          <div className="radial-glow glow-3"></div>

          <div className="about-grid-content">
            <div className="sec-header">
              <span className="eyebrow">+ MISSION & VISION</span>
              <h2>Driven by Purpose, Guided by Metrics</h2>
            </div>

            <div className="mission-vision-grid">
              <div className="glass-card mv-card">
                <div className="mv-glow"></div>
                <div className="mv-card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff6b00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <h3>Our Mission</h3>
                <p>
                  To empower ambitious startups and established enterprises to achieve predictable, compounding 10X business growth. We do this by engineering high-converting digital marketing funnels, automating customer nurturing pipelines, and maintaining absolute data transparency.
                </p>
              </div>

              <div className="glass-card mv-card">
                <div className="mv-glow"></div>
                <div className="mv-card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3>Our Vision</h3>
                <p>
                  To become the global standard for ROI-first digital marketing. We envision a future where marketing campaigns are built as automated software engines, driven by clean predictive analytics, and executed with mathematical precision to maximize shareholder value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────
           SECTION 4 — OUR CORE VALUES
           ────────────────────────────────────── */}
        <section className="about-section section-white">
          <div className="about-grid-content">
            <div className="values-header">
              <span className="eyebrow">⚓ OUR CORE VALUES</span>
              <h2>Company Values & Business Philosophy</h2>
              <p style={{ marginTop: "10px" }}>These foundational pillars guide how we manage campaigns, collaborate with clients, and engineer technology.</p>
            </div>

            <div className="values-grid">
              {coreValues.map((val, idx) => (
                <div className="value-card" key={idx}>
                  <div className="value-icon" style={{ backgroundColor: val.color }}>
                    {val.icon}
                  </div>
                  <h3>{val.title}</h3>
                  <p>{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────
           SECTION 5 — WHY BUSINESSES CHOOSE TENX
           ────────────────────────────────────── */}
        <section className="about-section section-light why-choose-section-premium">
          <div className="about-grid-content why-grid-premium">
            {/* Left side info & cards */}
            <div className="why-left-content">
              <span className="badge-premium">🚀 WHY CHOOSE US</span>
              <h2 className="why-title-premium">
                Engineered for <span className="grad-performance">Performance</span> — TenX Growth Agency
              </h2>
              <p className="why-subtitle-premium">
                Traditional digital marketing agencies rely on outdated templates and hope. We build proprietary marketing pipelines backed by robust testing structures to deliver consistent, measurable growth.
              </p>

              <div className="why-features-grid-premium">
                <div className="why-feature-card-premium">
                  <div className="why-feature-icon-premium icon-orange">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="20" x2="18" y2="10" />
                      <line x1="12" y1="20" x2="12" y2="4" />
                      <line x1="6" y1="20" x2="6" y2="14" />
                    </svg>
                  </div>
                  <h3>Data-Driven Campaigns</h3>
                  <p>Analytics integration to track user acquisition channels and measure performance.</p>
                </div>

                <div className="why-feature-card-premium">
                  <div className="why-feature-icon-premium icon-orange">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                      <path d="m22 2-6.5 6.5" />
                      <path d="M22 6V2h-4" />
                    </svg>
                  </div>
                  <h3>AI-Powered Optimization</h3>
                  <p>Predictive bidding and automated audience targeting for maximum ROI.</p>
                </div>

                <div className="why-feature-card-premium">
                  <div className="why-feature-icon-premium icon-orange">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  </div>
                  <h3>High-Speed Dev Stacks</h3>
                  <p>Lighter next-gen code built for lightning-fast load speeds and performance.</p>
                </div>

                <div className="why-feature-card-premium">
                  <div className="why-feature-icon-premium icon-orange">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <h3>WhatsApp Automation</h3>
                  <p>Nurturing leads and broadcasts using official WhatsApp Business API.</p>
                </div>

                <div className="why-feature-card-premium">
                  <div className="why-feature-icon-premium icon-orange">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                      <path d="M22 12A10 10 0 0 0 12 2v10z" />
                    </svg>
                  </div>
                  <h3>Live 24/7 Dashboards</h3>
                  <p>Track real-time leads, cost-per-lead, and total conversions with live insights.</p>
                </div>

                <div className="why-feature-card-premium">
                  <div className="why-feature-icon-premium icon-orange">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3>ROAS-Driven Strategy</h3>
                  <p>Continuous budget redistribution towards high-performing ads for better returns.</p>
                </div>
              </div>

              {/* Achievements bottom strip */}

            </div>

            {/* Right side graph card */}
            <div className="why-right-card-premium">
              {/* Header */}
              <div className="why-right-header">
                <div className="why-header-icon-wrap">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 6l-9.5 9.5-5-5L1 18" />
                    <path d="M17 6h6v6" />
                  </svg>
                </div>
                <div className="why-header-text">
                  <h3>Average Campaign Lift Metrics</h3>
                  <p>Real results. Measurable growth.</p>
                </div>
                {/* Target board watermark deco */}
                <div className="why-target-deco">
                  <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="rgba(255,107,0,0.05)" strokeWidth="4">
                    <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
                    <circle cx="50" cy="50" r="25" />
                    <circle cx="50" cy="50" r="10" fill="rgba(255,107,0,0.02)" />
                    <line x1="50" y1="0" x2="50" y2="100" />
                    <line x1="0" y1="50" x2="100" y2="50" />
                  </svg>
                </div>
              </div>

              {/* Progress rows */}
              <div className="why-progress-list-premium">
                <div className="why-progress-item-premium">
                  <div className="why-prog-left-icon icon-bg-orange">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </div>
                  <div className="why-prog-main">
                    <div className="why-prog-labels">
                      <span className="why-prog-title">ORGANIC SEO TRAFFIC LIFT</span>
                      <span className="why-prog-val-group">
                        <span className="why-prog-percentage">94%</span>
                        <span className="why-prog-change">↑ 94%</span>
                      </span>
                    </div>
                    <div className="why-prog-bar-bg">
                      <div className="why-prog-bar-fill bar-fill-orange" style={{ width: "94%" }}></div>
                    </div>
                  </div>
                </div>

                <div className="why-progress-item-premium">
                  <div className="why-prog-left-icon icon-bg-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div className="why-prog-main">
                    <div className="why-prog-labels">
                      <span className="why-prog-title">CUSTOMER ACQUISITION COST (CAC) REDUCTION</span>
                      <span className="why-prog-val-group">
                        <span className="why-prog-percentage">38%</span>
                        <span className="why-prog-change">↑ 38%</span>
                      </span>
                    </div>
                    <div className="why-prog-bar-bg">
                      <div className="why-prog-bar-fill bar-fill-blue" style={{ width: "38%" }}></div>
                    </div>
                  </div>
                </div>

                <div className="why-progress-item-premium">
                  <div className="why-prog-left-icon icon-bg-purple">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c084fc" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </div>
                  <div className="why-prog-main">
                    <div className="why-prog-labels">
                      <span className="why-prog-title">WHATSAPP NURTURE CONVERSION LIFT</span>
                      <span className="why-prog-val-group">
                        <span className="why-prog-percentage">76%</span>
                        <span className="why-prog-change">↑ 76%</span>
                      </span>
                    </div>
                    <div className="why-prog-bar-bg">
                      <div className="why-prog-bar-fill bar-fill-purple" style={{ width: "76%" }}></div>
                    </div>
                  </div>
                </div>

                <div className="why-progress-item-premium">
                  <div className="why-prog-left-icon icon-bg-green">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <div className="why-prog-main">
                    <div className="why-prog-labels">
                      <span className="why-prog-title">PPC GOOGLE ADS ROAS LIFT</span>
                      <span className="why-prog-val-group">
                        <span className="why-prog-percentage">82%</span>
                        <span className="why-prog-change">↑ 82%</span>
                      </span>
                    </div>
                    <div className="why-prog-bar-bg">
                      <div className="why-prog-bar-fill bar-fill-green" style={{ width: "82%" }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom trophy banner */}
              <div className="why-right-trophy-banner">
                <div className="why-trophy-icon-wrap">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
                    <path d="M12 2a4 4 0 0 0-4 4v5c0 1.5 1.5 3 4 3s4-1.5 4-3V6a4 4 0 0 0-4-4Z" />
                  </svg>
                </div>
                <p>
                  We don't guess. We test, optimize, and deliver <span className="highlight-orange">predictable growth for your business.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────
           SECTION 8 — OUR EXPERTISE
           ────────────────────────────────────── */}
        <section className="about-section expertise-section-premium">
          <div className="premium-grid-overlay"></div>
          <div className="circuit-board-deco left-circuit">
            <svg width="200" height="400" viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0 50 L 80 50 L 120 90 L 120 180 L 160 220 L 200 220" stroke="rgba(15,23,42,0.08)" strokeWidth="2" strokeLinecap="round" />
              <circle cx="120" cy="90" r="4" fill="rgba(15,23,42,0.05)" stroke="rgba(15,23,42,0.15)" strokeWidth="1" />
              <circle cx="160" cy="220" r="4" fill="rgba(15,23,42,0.05)" stroke="rgba(15,23,42,0.15)" strokeWidth="1" />
              <path d="M 0 280 L 60 280 L 100 240 L 100 150 L 140 110 L 200 110" stroke="rgba(15,23,42,0.08)" strokeWidth="2" strokeLinecap="round" />
              <circle cx="100" cy="240" r="4" fill="rgba(15,23,42,0.05)" stroke="rgba(15,23,42,0.15)" strokeWidth="1" />
            </svg>
          </div>
          <div className="circuit-board-deco right-circuit">
            <svg width="200" height="400" viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 200 50 L 120 50 L 80 90 L 80 180 L 40 220 L 0 220" stroke="rgba(15,23,42,0.08)" strokeWidth="2" strokeLinecap="round" />
              <circle cx="80" cy="90" r="4" fill="rgba(15,23,42,0.05)" stroke="rgba(15,23,42,0.15)" strokeWidth="1" />
              <circle cx="40" cy="220" r="4" fill="rgba(15,23,42,0.05)" stroke="rgba(15,23,42,0.15)" strokeWidth="1" />
              <path d="M 200 280 L 140 280 L 100 240 L 100 150 L 60 110 L 0 110" stroke="rgba(15,23,42,0.08)" strokeWidth="2" strokeLinecap="round" />
              <circle cx="100" cy="240" r="4" fill="rgba(15,23,42,0.05)" stroke="rgba(15,23,42,0.15)" strokeWidth="1" />
            </svg>
          </div>
          <div className="sparkle-deco">✦</div>

          <div className="skills-card-container-white">
            <div className="sec-header">
              <span className="eyebrow" style={{ color: "#ff6b00" }}>+ CAPABILITIES & EXPERTISE</span>
              <h2 style={{ color: "#0f172a" }}>Our Specialized Skill Sets</h2>
            </div>

            <div className="expertise-grid-premium">
              {skillsData.map((skill, idx) => {
                let icon = null;
                let deco = null;

                if (idx === 0) {
                  // SEO
                  icon = (
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="13" cy="13" r="6" stroke="#2563eb" strokeWidth="2" />
                      <line x1="17.5" y1="17.5" x2="25" y2="25" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
                      <path d="M7 13 H9 M17 13 H19 M13 7 V9 M13 17 V19" stroke="#3b82f6" strokeWidth="1.5" />
                      <path d="M21 9 L25 13 L21 17" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  );
                  deco = <div className="skill-deco-dot-glow"></div>;
                } else if (idx === 1) {
                  // Google PPC
                  icon = (
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 6C10.48 6 6 10.48 6 16C6 21.52 10.48 26 16 26C21.52 26 26 21.52 26 16C26 14.88 25.8 13.8 25.44 12.8H16V17.2H21.4C20.88 19.52 18.72 21.2 16 21.2C13.12 21.2 10.8 18.88 10.8 16C10.8 13.12 13.12 10.8 16 10.8C17.32 10.8 18.52 11.32 19.44 12.16L22.84 8.76C21 7.04 18.64 6 16 6Z" fill="#ea580c" />
                      <rect x="20" y="16" width="10" height="7" rx="1.5" fill="#3b82f6" />
                      <text x="21" y="21" fill="#fff" fontSize="5" fontWeight="bold">Bid</text>
                      <path d="M22 25 L24 23 L26 25" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  );
                  deco = (
                    <div className="skill-deco-coins">
                      <span className="coin coin-1"></span>
                      <span className="coin coin-2"></span>
                      <span className="coin coin-3"></span>
                    </div>
                  );
                } else if (idx === 2) {
                  // Meta
                  icon = (
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.5 21C8.46 21 6 18.54 6 15.5C6 12.46 8.46 10 11.5 10C13.84 10 15.68 11.42 16.5 13C17.32 11.42 19.16 10 21.5 10C24.54 10 27 12.46 27 15.5C27 18.54 24.54 21 21.5 21C19.16 21 17.32 19.58 16.5 18C15.68 19.58 13.84 21 11.5 21Z" stroke="#0064e0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      <rect x="18" y="18" width="8" height="6" rx="1" fill="#ff6b00" />
                      <text x="19.5" y="22.5" fill="#fff" fontSize="5" fontWeight="bold">Ad</text>
                    </svg>
                  );
                  deco = <div className="skill-deco-glow-tip"></div>;
                } else if (idx === 3) {
                  // Next.js/React
                  icon = (
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="7" stroke="#000" strokeWidth="2" />
                      <text x="9" y="16" fill="#000" fontSize="10" fontWeight="bold">N</text>
                      <ellipse cx="22" cy="20" rx="7" ry="2.5" transform="rotate(30 22 20)" stroke="#14b8a6" strokeWidth="1.5" />
                      <ellipse cx="22" cy="20" rx="7" ry="2.5" transform="rotate(-30 22 20)" stroke="#14b8a6" strokeWidth="1.5" />
                      <circle cx="22" cy="20" r="1.5" fill="#14b8a6" />
                    </svg>
                  );
                  deco = (
                    <div className="skill-deco-stopwatch">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="12" cy="13" r="7" />
                        <polyline points="12 9 12 13 15 13" />
                        <line x1="12" y1="3" x2="12" y2="6" />
                        <line x1="9" y1="4" x2="15" y2="4" />
                      </svg>
                    </div>
                  );
                } else if (idx === 4) {
                  // AI WhatsApp
                  icon = (
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="5" y="10" width="14" height="12" rx="3" stroke="#8b5cf6" strokeWidth="2" fill="none" />
                      <circle cx="9" cy="16" r="1.5" fill="#8b5cf6" />
                      <circle cx="15" cy="16" r="1.5" fill="#8b5cf6" />
                      <line x1="12" y1="10" x2="12" y2="7" stroke="#8b5cf6" strokeWidth="2" />
                      <circle cx="12" cy="6" r="1.5" fill="#8b5cf6" />
                      <path d="M22 17.5C22 20.5 19.5 23 16.5 23C15.5 23 14.5 22.7 13.7 22.2L10 23L11 19.5C10.4 18.7 10 17.7 10 16.5C10 13.5 12.5 11 15.5 11C18.5 11 22 13.5 22 17.5Z" fill="#22c55e" />
                      <path d="M15 15.5C15.5 15.8 17 17.2 17 17.5C17 17.8 16.5 18.2 16 18.5C15.5 18.8 15 18.2 14.5 17.8C14 17.4 13.5 16.8 13.2 16.2C13 15.8 13.2 15.5 13.5 15.2C13.8 15 14.2 15 14.5 15.2L15 15.5Z" fill="#fff" />
                    </svg>
                  );
                  deco = (
                    <div className="skill-deco-bubbles">
                      <span className="bubble-chat chat-1">AI</span>
                      <span className="bubble-chat chat-2">💬</span>
                      <span className="bubble-chat chat-3">🤖</span>
                    </div>
                  );
                } else if (idx === 5) {
                  // Branding
                  icon = (
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 6 L25 11 L25 21 L16 26 L7 21 L7 11 Z" stroke="#ec4899" strokeWidth="2" fill="none" />
                      <path d="M16 6 L16 26 M16 16 L25 11 M16 16 L7 11" stroke="#ec4899" strokeWidth="1.5" />
                      <line x1="8" y1="24" x2="24" y2="8" stroke="#eab308" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M22 6 L26 10" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  );
                  deco = (
                    <div className="skill-deco-palette">
                      <span className="brush-icon">🎨</span>
                    </div>
                  );
                }

                return (
                  <div className="skill-card-premium" key={idx}>
                    <div className="skill-icon-wrap-premium">
                      {icon}
                    </div>
                    <div className="skill-card-content-premium">
                      <div className="skill-card-text-premium">
                        <span className="skill-title-premium">{skill.name}</span>
                        <span className="skill-pct-premium">{skill.pct}%</span>
                      </div>
                      <div className="skill-bar-bg-premium">
                        <div 
                          className={`skill-bar-fill-premium ${idx === 5 ? 'bar-fill-rainbow' : 'bar-fill-gradient'}`} 
                          style={{ width: `${skill.pct}%` }}
                        >
                          {deco}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>



        {/* ──────────────────────────────────────
           SECTION 10 — OUR WORKSPACE
           ────────────────────────────────────── */}
        <section className="about-section section-white workspace-section-premium">
          <div className="about-grid-content">
            <div className="sec-header">
              <span className="badge-premium">🏢 OUR WORKSPACE</span>
              <h2>Our Creative Workspace</h2>
              <p>A space built for innovation, collaboration, and growth. This is where ideas turn into strategies and strategies into measurable results.</p>
            </div>

            <div className="workspace-grid-premium">
              {workspaceData.map((item, idx) => (
                <div className="workspace-card-premium" key={idx}>
                  <div className="workspace-bg-image">
                    <Image 
                      src={item.img} 
                      alt={item.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="workspace-overlay-card">
                    <div className="workspace-overlay-icon" style={{ backgroundColor: item.iconBg }}>
                      {item.icon}
                    </div>
                    <div className="workspace-overlay-info">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                    <div className="workspace-overlay-arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        

        {/* ──────────────────────────────────────
           SECTION 12 — CLIENT TESTIMONIALS
           ────────────────────────────────────── */}
        <section className="about-section section-light">
          <div className="about-grid-content">
            <div className="sec-header">
              <span className="eyebrow">⭐ CLIENT SUCCESS STORIES</span>
              <h2>What Our Growth Partners Say</h2>
            </div>

            <div className="testimonials-row">
              <div className="review-card">
                <div className="review-stars">★★★★★</div>
                <p className="review-text">
                  "TenX scaled our medical consultation leads by 12X within four months. Their AI automation saved us countless hours of manual work."
                </p>
                <div className="review-author">
                  <div className="author-avatar">Dr. R</div>
                  <div className="author-info">
                    <h4>Dr. Rohan Sen</h4>
                    <p>Founder, Apex Healthcare</p>
                  </div>
                </div>
              </div>

              <div className="review-card">
                <div className="review-stars">★★★★★</div>
                <p className="review-text">
                  "The live growth dashboard they set up is a game-changer. We can trace every rupee spent to an actual customer acquisition."
                </p>
                <div className="review-author">
                  <div className="author-avatar">M.K</div>
                  <div className="author-info">
                    <h4>Meera Kapoor</h4>
                    <p>CMO, Sparkle E-Commerce</p>
                  </div>
                </div>
              </div>

              <div className="review-card">
                <div className="review-stars">★★★★★</div>
                <p className="review-text">
                  "Next.js web development combined with their SEO strategies pushed our site traffic to 25k monthly visits in record time."
                </p>
                <div className="review-author">
                  <div className="author-avatar">A.K</div>
                  <div className="author-info">
                    <h4>Anil Kothari</h4>
                    <p>Director, Elevate Education</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────
           SECTION 13 — FAQ ACCORDION
           ────────────────────────────────────── */}
        <section className="about-section section-white">
          <div className="about-grid-content">
            <div className="sec-header">
              <span className="eyebrow">❓ FREQUENTLY ASKED QUESTIONS</span>
              <h2>Common Questions & Answers</h2>
              <p>Everything you need to know about our growth frameworks and engagement processes.</p>
            </div>

            <div className="faq-wrap">
              {faqData.map((faq, idx) => (
                <div className={`faq-item ${openFaqIndex === idx ? "open" : ""}`} key={idx}>
                  <button className={`faq-trigger ${openFaqIndex === idx ? "open" : ""}`} onClick={() => toggleFaq(idx)}>
                    <span className="faq-question">{faq.q}</span>
                    <span className="faq-icon-wrapper">
                      <span className="faq-icon-line line-1"></span>
                      <span className="faq-icon-line line-2"></span>
                    </span>
                  </button>
                  <div className="faq-content">
                    <div className="faq-content-inner">
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────
           SECTION 14 — FINAL CTA
           ────────────────────────────────────── */}
        <section className="about-section section-white" style={{ paddingTop: "0" }}>
          <div className="about-grid-content">
            <div className="cta-banner-premium">
              <div className="cta-grid-overlay"></div>
              <div className="cta-radial-glow"></div>
              
              {/* Floating 3D-like icons */}
              <div className="cta-float-icon icon-tl">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="44" width="8" height="10" rx="2" fill="rgba(255, 107, 0, 0.1)" stroke="#ff6b00" strokeWidth="2" />
                  <rect x="22" y="32" width="8" height="22" rx="2" fill="rgba(255, 107, 0, 0.2)" stroke="#ff6b00" strokeWidth="2" />
                  <rect x="34" y="20" width="8" height="34" rx="2" fill="rgba(255, 107, 0, 0.3)" stroke="#ff6b00" strokeWidth="2" />
                  <path d="M14 42L28 26L42 12" stroke="#ff6b00" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M32 12H42V22" stroke="#ff6b00" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="cta-float-icon icon-bl">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="28" cy="12" r="4" stroke="#ff6b00" strokeWidth="2" fill="rgba(255, 107, 0, 0.1)" />
                  <circle cx="12" cy="20" r="4" stroke="#ff6b00" strokeWidth="2" fill="rgba(255, 107, 0, 0.1)" />
                  <circle cx="28" cy="28" r="4" stroke="#ff6b00" strokeWidth="2" fill="rgba(255, 107, 0, 0.1)" />
                  <line x1="15.5" y1="18.5" x2="24.5" y2="13.5" stroke="#ff6b00" strokeWidth="2" />
                  <line x1="15.5" y1="21.5" x2="24.5" y2="26.5" stroke="#ff6b00" strokeWidth="2" />
                </svg>
              </div>

              <div className="cta-float-icon icon-tr">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="4" width="40" height="40" rx="8" stroke="rgba(0,0,0,0.03)" strokeWidth="1" fill="rgba(255,255,255,0.4)" />
                  <path d="M12 36V12" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 36H36" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
                  <path d="M16 30L22 22L28 26L34 16" stroke="#a0aec0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M30 16H34V20" stroke="#a0aec0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="cta-float-icon icon-br">
                <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="18" stroke="#a0aec0" strokeWidth="2.5" fill="rgba(255, 255, 255, 0.7)" />
                  <line x1="45" y1="45" x2="60" y2="60" stroke="#ff6b00" strokeWidth="5.5" strokeLinecap="round" />
                  <path d="M24 38 L30 30 L36 34 L40 26" stroke="#ff6b00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              
              <h2 className="cta-title-premium">Let's Grow Your Business Together</h2>
              <p className="cta-subtitle-premium">
                Partner with Digital Marketing TenX and experience predictable,<br />data-driven revenue and traffic growth.
              </p>
              <div className="cta-btns-premium">
                <button className="btn-primary-premium" onClick={() => window.dispatchEvent(new CustomEvent("trigger-consultation-modal"))}>Book Strategy Call</button>
                <a href="/contact" className="btn-outline-premium">Contact Us</a>
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
