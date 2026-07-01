"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { openWhatsAppQuote } from "@/lib/whatsappQuote";
import "./social-media-marketing.css";

// Reusable Animated Counter component
function MetricCounter({ value, duration = 1500 }) {
  const [count, setCount] = useState(0);
  const numericPart = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
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
  }, [value, numericPart, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function SocialMediaMarketingPage() {
  // Scroll reveal Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll(".reveal-element");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // FAQs State
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Before/After State
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);

  // Growth Calculator States
  const [adBudget, setAdBudget] = useState(30000); // INR
  const [avgCpc, setAvgCpc] = useState(12); // INR
  const [convRate, setConvRate] = useState(3); // %

  const calculatedClicks = Math.floor(adBudget / avgCpc) || 0;
  const calculatedLeads = Math.floor((calculatedClicks * convRate) / 100) || 0;
  const calculatedCostPerLead = calculatedLeads > 0 ? Math.floor(adBudget / calculatedLeads) : 0;

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const caseStudies = [
    {
      brand: "E-Commerce Fashion Brand",
      before: { followers: "2,400", reach: "15K", leads: "45", revenue: "₹1,20,000" },
      after: { followers: "28,500", reach: "420K", leads: "850", revenue: "₹14,50,000" }
    },
    {
      brand: "Local Dental Clinic Chain",
      before: { followers: "850", reach: "3.2K", leads: "12", revenue: "₹85,000" },
      after: { followers: "4,600", reach: "85K", leads: "140", revenue: "₹6,80,000" }
    },
    {
      brand: "B2B SaaS Platform",
      before: { followers: "1,200", reach: "8.5K", leads: "18", revenue: "₹3,40,000" },
      after: { followers: "9,800", reach: "140K", leads: "210", revenue: "₹24,00,000" }
    }
  ];

  const services = [
    {
      title: "Instagram Marketing",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" className="animate-spin-path"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      ),
      color: "#fdf2f8",
      text: "#db2777",
      desc: "Grow organic followers, compile viral Reels, optimize stories, and build visual brand loyalty."
    },
    {
      title: "Facebook Marketing",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" className="animate-pulse-path"/>
        </svg>
      ),
      color: "#eff6ff",
      text: "#2563eb",
      desc: "Build active local communities, configure professional business pages, and drive referral reviews."
    },
    {
      title: "LinkedIn Marketing",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" className="animate-pulse-path"/>
          <rect width="4" height="12" x="2" y="9"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
      color: "#f0f9ff",
      text: "#0284c7",
      desc: "Generate quality B2B corporate leads, position executives as industry authorities, and run newsletter hubs."
    },
    {
      title: "YouTube Marketing",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"/>
        </svg>
      ),
      color: "#fef2f2",
      text: "#dc2626",
      desc: "Optimize video descriptions, build engaging Shorts, structure keywords, and coordinate banner systems."
    },
    {
      title: "Twitter/X Marketing",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4l11.733 16h4.267l-11.733 -16z"/>
          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/>
        </svg>
      ),
      color: "#f8fafc",
      text: "#0f172a",
      desc: "Coordinate fast-moving industry threads, build real-time authority, and engage key brand accounts."
    },
    {
      title: "Pinterest Marketing",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19" className="animate-draw-path"/>
          <path d="M5 12h14"/>
          <circle cx="12" cy="12" r="9"/>
        </svg>
      ),
      color: "#fff1f2",
      text: "#e11d48",
      desc: "Create visual inspiration boards, pin product listings, and drive targeted shopping traffic."
    },
    {
      title: "TikTok Marketing",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18V5l12-2v13"/>
          <circle cx="6" cy="18" r="3"/>
          <circle cx="18" cy="16" r="3"/>
        </svg>
      ),
      color: "#f5f3ff",
      text: "#7c3aed",
      desc: "Design trend-jacking shorts, target younger demographics, and deploy user-generated content strategies."
    },
    {
      title: "Community Management",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      ),
      color: "#f0fdf4",
      text: "#16a34a",
      desc: "Moderate user comments, reply to direct messages instantly, and host interactive polls to keep fans engaged."
    },
    {
      title: "Creative Design",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/>
          <circle cx="7.5" cy="10.5" r="1.5" fill="currentColor"/>
          <circle cx="11.5" cy="7.5" r="1.5" fill="currentColor"/>
          <circle cx="16.5" cy="9.5" r="1.5" fill="currentColor"/>
        </svg>
      ),
      color: "#fff7ed",
      text: "#ea580c",
      desc: "Design bespoke social media grids, visual carousels, infographics, templates, and banners."
    },
    {
      title: "Content Planning",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
          <line x1="16" x2="16" y1="2" y2="6"/>
          <line x1="8" x2="8" y1="2" y2="6"/>
          <line x1="3" x2="21" y1="10" y2="10"/>
        </svg>
      ),
      color: "#faf5ff",
      text: "#9333ea",
      desc: "Map strategic monthly content calendars tailored to your specific brand pillars and marketing funnel."
    },
    {
      title: "Influencer Marketing",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      color: "#fff1f2",
      text: "#f43f5e",
      desc: "Source relevant local influencers, negotiate promotional terms, and structure cross-collaborative reviews."
    },
    {
      title: "Paid Social Ads",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" x2="12" y1="1" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      color: "#ecfdf5",
      text: "#059669",
      desc: "Run Facebook Ads, Instagram conversion ads, LinkedIn lead gen forms, and remarketing audiences."
    }
  ];

  const platforms = [
    { name: "Instagram", icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#db2777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
      </svg>
    )},
    { name: "Facebook", icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    )},
    { name: "LinkedIn", icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect width="4" height="12" x="2" y="9"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    )},
    { name: "YouTube", icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"/>
      </svg>
    )},
    { name: "TikTok", icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13"/>
        <circle cx="6" cy="18" r="3"/>
        <circle cx="18" cy="16" r="3"/>
      </svg>
    )},
    { name: "Pinterest", icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"/>
        <path d="M5 12h14"/>
        <circle cx="12" cy="12" r="9"/>
      </svg>
    )},
    { name: "Twitter", icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l11.733 16h4.267l-11.733 -16z"/>
      </svg>
    )},
    { name: "Threads", icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9333ea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/>
        <path d="M12 8a4 4 0 1 0 4 4"/>
      </svg>
    )},
    { name: "WhatsApp", icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    )},
    { name: "Google Business", icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="12" x="3" y="9" rx="2"/>
        <path d="M3 22h18"/>
        <path d="M10 9V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v4"/>
      </svg>
    )}
  ];





  const industries = [
    {
      name: "Healthcare",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      )
    },
    {
      name: "Real Estate",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18"/>
          <path d="M9 21V9a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v12"/>
        </svg>
      )
    },
    {
      name: "Education",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
        </svg>
      )
    },
    {
      name: "Finance",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" x2="12" y1="1" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      )
    },
    {
      name: "Construction",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2"/>
          <line x1="9" x2="15" y1="9" y2="15"/>
          <line x1="15" x2="9" y1="9" y2="15"/>
        </svg>
      )
    },
    {
      name: "Restaurants",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5"/>
        </svg>
      )
    },
    {
      name: "Travel",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>
        </svg>
      )
    },
    {
      name: "Technology",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="3" rx="2"/>
          <line x1="8" x2="16" y1="21" y2="21"/>
          <line x1="12" x2="12" y1="17" y2="21"/>
        </svg>
      )
    },
    {
      name: "E-Commerce",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1"/>
          <circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
      )
    },
    {
      name: "Automotive",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="10" x="3" y="11" rx="2"/>
          <circle cx="7" cy="21" r="2"/>
          <circle cx="17" cy="21" r="2"/>
          <path d="M5 11V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v5"/>
        </svg>
      )
    }
  ];

  const benefits = [
    { title: "Increase Followers", desc: "Attract a dedicated, targeted fan base interested in your service niche." },
    { title: "Higher Engagement", desc: "Get more likes, shares, comments, and direct message queries." },
    { title: "More Website Traffic", desc: "Drive high-intent social media clickers directly to your landing pages." },
    { title: "Brand Recognition", desc: "Familiarize local audiences with your company color, voice, and values." },
    { title: "Quality Leads", desc: "Capture user contact details using interactive bios and ad-forms." },
    { title: "Higher Sales Conversion", desc: "Nurture social traffic into sales using product retargeting ads." },
    { title: "Customer Loyalty", desc: "Engage post-purchase users to build repeat customers." },
    { title: "Maximum ROI", desc: "Optimize ad spend using custom conversion targeting options." }
  ];

  const whyChooseUs = [
    { title: "Certified Experts", desc: "Our strategists hold official certifications from Meta Blueprint and Google Ads." },
    { title: "Creative Studio Team", desc: "Dedicated copywriters and graphic designers build content from scratch." },
    { title: "Performance Driven", desc: "We focus on leads, sales conversions, and ROAS rather than basic vanity numbers." },
    { title: "Weekly Strategy Reports", desc: "Get clear weekly message updates and detailed monthly metric decks." },
    { title: "Dedicated Account Lead", desc: "Your direct point of contact for coordinates, revisions, and requests." },
    { title: "Transparent Pricing Model", desc: "Flat monthly packages without hidden fees or surprise contracts." },
    { title: "AI-Powered Optimization", desc: "Utilize state-of-the-art AI content tools to scale research and targeting." },
    { title: "Up-to-Date with Trends", desc: "We deploy viral trends, Reels formats, and algorithm tweaks instantly." }
  ];

  const faqs = [
    { q: "How long does social media marketing take to show results?", a: "Organic growth and brand authority typically show noticeable momentum in 3 to 6 months. However, paid social media advertising campaigns (like Meta Ads or LinkedIn Ads) can drive immediate traffic, leads, and sales within the first week of launch." },
    { q: "Which social media platform is best for my business?", a: "It depends on your audience. B2B companies find LinkedIn and Twitter/X highly effective. B2C brands, retail, and local services thrive on Instagram, Facebook, and TikTok. We perform a competitor analysis to identify where your customers are most active." },
    { q: "Do you create the content for our posts?", a: "Yes, we handle the entire content creation workflow: content calendar planning, custom graphic design, copywriting, Reels/Shorts video editing, and caption writing. Everything is sent to you for approval before scheduling." },
    { q: "How much do your social media marketing packages cost?", a: "Our pricing is transparent and depends on the scope of management (number of platforms, posting frequency, creative types) and ad budget. We customize our packages to deliver the highest ROI for your startup or enterprise. Contact us for a free strategy proposal." },
    { q: "Can social media marketing help with lead generation?", a: "Absolutely. Through organic click-funnels, lead magnets, bio optimizations, and highly targeted lead generation ads (with Meta instant forms or custom landing pages), we capture high-quality leads directly from social feeds." },
    { q: "Do you run paid social media advertising campaigns?", a: "Yes, we structure and optimize campaigns across Meta (Facebook & Instagram Ads), LinkedIn Ads, YouTube Ads, and TikTok Ads. We handle audience targeting, graphic assets, copywriting, and bid management." },
    { q: "Do you provide monthly analytics reports?", a: "Yes, we send comprehensive monthly reports detailing follower growth, reach, impressions, engagement rates, click-through rates, lead conversions, and ad return metrics. We also host a monthly review call to review the next steps." },
    { q: "How often will you post on our accounts?", a: "It varies by package, typically ranging from 3 posts a week up to daily updates, depending on the platform and package scope. We balance consistency with quality to keep the algorithm happy." },
    { q: "Do we need to sign a long-term contract?", a: "We work on a month-to-month retainer basis. You can pause or adjust your package scope at any time with a 30-day notice. We believe in earning your partnership every month through solid performance." },
    { q: "Can you help set up our social media pages from scratch?", a: "Yes. If you are launching a new startup or brand, we will set up and design your profiles, write optimized bios, configure buttons, and set up tracking links to get you started." }
  ];

  return (
    <div className="smm-container">
      <Header />

      {/* 1. HERO SECTION */}
      <section className="smm-hero">
        {/* LEFT: content */}
        <div className="smm-hero-content">
          <div className="smm-hero-badge">
            ⚡ Social Media Management &amp; Ads
          </div>
          <h1>
            Social Media<br />
            Marketing Services<br />
            That <span className="grad-brand">Grow Brands</span><br />
            &amp; Generate Leads
          </h1>
          <p>
            Build a powerful social media presence with data-driven strategies that increase brand awareness, engage your audience, and generate qualified leads across Instagram, Facebook, LinkedIn, and more.
          </p>
          <div className="smm-hero-btns">
            <button className="btn-brand-primary" onClick={() => window.dispatchEvent(new CustomEvent("trigger-consultation-modal", { detail: { service: "Social Media Marketing" } }))}>
              📅 Book Free Consultation
            </button>
            <button className="btn-brand-outline" onClick={() => openWhatsAppQuote("Social Media Marketing")}>
              📄 Request Proposal
            </button>
          </div>

          {/* Mini trust badges */}
          <div className="smm-hero-trust-row">
            <div className="smm-hero-trust-item">
              <div className="smm-hero-trust-icon" style={{ background: "rgba(124,58,237,0.08)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div>
                <div className="smm-trust-item-title">Targeted Audience</div>
                <div className="smm-trust-item-desc">Reach the right people</div>
              </div>
            </div>
            <div className="smm-hero-trust-item">
              <div className="smm-hero-trust-icon" style={{ background: "rgba(236,72,153,0.08)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
              </div>
              <div>
                <div className="smm-trust-item-title">Higher Engagement</div>
                <div className="smm-trust-item-desc">Increase likes, shares &amp; comments</div>
              </div>
            </div>
            <div className="smm-hero-trust-item">
              <div className="smm-hero-trust-icon" style={{ background: "rgba(255,107,0,0.08)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff6b00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 9 11 13 15 22 22 3"/></svg>
              </div>
              <div>
                <div className="smm-trust-item-title">Lead Generation</div>
                <div className="smm-trust-item-desc">Convert followers into customers</div>
              </div>
            </div>
            <div className="smm-hero-trust-item">
              <div className="smm-hero-trust-icon" style={{ background: "rgba(16,185,129,0.08)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
              </div>
              <div>
                <div className="smm-trust-item-title">Brand Growth</div>
                <div className="smm-trust-item-desc">Build authority &amp; grow your brand</div>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="smm-hero-stats-bar">
            <div className="smm-hero-stat">
              <span className="smm-hero-stat-icon" style={{ background: "rgba(124,58,237,0.1)", color: "#7c3aed" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </span>
              <div>
                <div className="smm-hero-stat-num">2.8M+</div>
                <div className="smm-hero-stat-lbl">People Reached</div>
              </div>
            </div>
            <div className="smm-hero-stat-divider"></div>
            <div className="smm-hero-stat">
              <span className="smm-hero-stat-icon" style={{ background: "rgba(236,72,153,0.1)", color: "#ec4899" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#ec4899" stroke="#ec4899" strokeWidth="1"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </span>
              <div>
                <div className="smm-hero-stat-num">148K+</div>
                <div className="smm-hero-stat-lbl">Engagements</div>
              </div>
            </div>
            <div className="smm-hero-stat-divider"></div>
            <div className="smm-hero-stat">
              <span className="smm-hero-stat-icon" style={{ background: "rgba(255,107,0,0.1)", color: "#ff6b00" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 9 11 13 15 22 22 3"/></svg>
              </span>
              <div>
                <div className="smm-hero-stat-num">18K+</div>
                <div className="smm-hero-stat-lbl">Leads Generated</div>
              </div>
            </div>
            <div className="smm-hero-stat-divider"></div>
            <div className="smm-hero-stat">
              <span className="smm-hero-stat-icon" style={{ background: "rgba(16,185,129,0.1)", color: "#10b981" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
              </span>
              <div>
                <div className="smm-hero-stat-num">240%</div>
                <div className="smm-hero-stat-lbl">Average Growth</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: premium visual */}
        <div className="smm-hero-visual">
          <div className="smm-hero-scene">

            {/* ── Background soft glow ── */}
            <div className="smm-scene-glow"></div>

            {/* ── White circular platform base ── */}
            <div className="smm-platform-base"></div>

            {/* ── Instagram icon (top-left) ── */}
            <div className="smm-si smm-si-insta">
              <div className="smm-si-inner">
                <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                  <rect width="48" height="48" rx="12" fill="url(#igGrad)"/>
                  <defs>
                    <linearGradient id="igGrad" x1="0" y1="48" x2="48" y2="0">
                      <stop offset="0%" stopColor="#f9ce34"/>
                      <stop offset="35%" stopColor="#ee2a7b"/>
                      <stop offset="70%" stopColor="#6228d7"/>
                    </linearGradient>
                  </defs>
                  <rect x="12" y="12" width="24" height="24" rx="7" stroke="white" strokeWidth="2.5" fill="none"/>
                  <circle cx="24" cy="24" r="7" stroke="white" strokeWidth="2.5" fill="none"/>
                  <circle cx="33" cy="15" r="2" fill="white"/>
                </svg>
              </div>
            </div>

            {/* ── Facebook icon (left) ── */}
            <div className="smm-si smm-si-fb">
              <div className="smm-si-inner">
                <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                  <rect width="48" height="48" rx="12" fill="#1877F2"/>
                  <path d="M30 10H26C22.7 10 20 12.7 20 16V20H16V26H20V40H26V26H30L31 20H26V16C26 15.4 26.4 15 27 15H31V10H30Z" fill="white"/>
                </svg>
              </div>
            </div>

            {/* ── LinkedIn icon (top-right) ── */}
            <div className="smm-si smm-si-li">
              <div className="smm-si-inner">
                <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                  <rect width="48" height="48" rx="10" fill="#0A66C2"/>
                  <rect x="10" y="18" width="8" height="22" rx="2" fill="white"/>
                  <circle cx="14" cy="12" r="4" fill="white"/>
                  <path d="M24 18H30C33.3 18 38 20.7 38 26V40H32V27C32 25.3 30.7 24 29 24C27.3 24 26 25.3 26 27V40H20V18H24Z" fill="white"/>
                </svg>
              </div>
            </div>

            {/* ── TikTok icon (right) ── */}
            <div className="smm-si smm-si-tt">
              <div className="smm-si-inner">
                <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                  <rect width="48" height="48" rx="12" fill="#010101"/>
                  <path d="M34 15C32.3 14.1 31 12.7 30.4 11H26V29C26 30.7 24.7 32 23 32C21.3 32 20 30.7 20 29C20 27.3 21.3 26 23 26C23.4 26 23.7 26.1 24 26.2V22C23.7 22 23.3 22 23 22C19.1 22 16 25.1 16 29C16 32.9 19.1 36 23 36C26.9 36 30 32.9 30 29V20.2C31.8 21.3 33.9 22 36 22V18C35.2 18 34.6 17.7 34 17.2V15Z" fill="white"/>
                  <path d="M35 15C35 15 34.5 16 36 17" stroke="#69C9D0" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            {/* ── Heart bubble (left-center) ── */}
            <div className="smm-si smm-si-heart">
              <div className="smm-heart-bubble">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#ff3864">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
            </div>

            {/* ── Curved purple growth arrow ── */}
            <div className="smm-growth-arrow">
              <svg viewBox="0 0 120 130" width="120" height="130" fill="none">
                <defs>
                  <linearGradient id="arrowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7c3aed"/>
                    <stop offset="100%" stopColor="#ec4899"/>
                  </linearGradient>
                </defs>
                <path d="M10 120 Q20 60 80 20" stroke="url(#arrowGrad)" strokeWidth="7" fill="none" strokeLinecap="round"/>
                <path d="M80 20 L60 18 M80 20 L78 40" stroke="url(#arrowGrad)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* ── 3D Bar Chart ── */}
            <div className="smm-3d-bars">
              <svg viewBox="0 0 130 100" width="130" height="100" fill="none">
                {/* Bar shadows */}
                <ellipse cx="22" cy="98" rx="12" ry="3" fill="rgba(0,0,0,0.08)"/>
                <ellipse cx="52" cy="98" rx="12" ry="3" fill="rgba(0,0,0,0.08)"/>
                <ellipse cx="82" cy="98" rx="12" ry="3" fill="rgba(0,0,0,0.08)"/>
                <ellipse cx="112" cy="98" rx="12" ry="3" fill="rgba(0,0,0,0.08)"/>
                {/* Bars */}
                <rect x="10" y="60" width="24" height="36" rx="5" fill="#ff6b00"/>
                <rect x="10" y="60" width="24" height="8" rx="5" fill="rgba(255,255,255,0.25)"/>
                <rect x="40" y="38" width="24" height="58" rx="5" fill="#7c3aed"/>
                <rect x="40" y="38" width="24" height="8" rx="5" fill="rgba(255,255,255,0.25)"/>
                <rect x="70" y="22" width="24" height="74" rx="5" fill="#ec4899"/>
                <rect x="70" y="22" width="24" height="8" rx="5" fill="rgba(255,255,255,0.25)"/>
                <rect x="100" y="48" width="24" height="48" rx="5" fill="#3b82f6"/>
                <rect x="100" y="48" width="24" height="8" rx="5" fill="rgba(255,255,255,0.25)"/>
              </svg>
            </div>

            {/* ── Main phone mockup ── */}
            <div className="smm-phone-hero-mock">
              <div className="smm-phone-shell">
                {/* Notch */}
                <div className="smm-phone-notch-pill"></div>
                {/* Status */}
                <div className="smm-phone-status">
                  <span>9:41</span>
                  <div className="smm-phone-signal">
                    <svg width="30" height="10" viewBox="0 0 60 16" fill="white" opacity="0.9">
                      <rect x="0" y="8" width="8" height="8" rx="1"/>
                      <rect x="13" y="5" width="8" height="11" rx="1"/>
                      <rect x="26" y="2" width="8" height="14" rx="1"/>
                      <rect x="39" y="0" width="8" height="16" rx="1"/>
                      <rect x="52" y="4" width="8" height="12" rx="2"/>
                    </svg>
                  </div>
                </div>
                {/* Screen content */}
                <div className="smm-phone-content">
                  {/* Profile row */}
                  <div className="smm-phone-profile">
                    <div className="smm-phone-profile-avatar">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                      </svg>
                    </div>
                    <div className="smm-phone-profile-info">
                      <div className="smm-phone-profile-name">TenX Growth</div>
                      <div className="smm-phone-profile-sub">Agency ✔</div>
                    </div>
                  </div>
                  {/* Metrics */}
                  <div className="smm-phone-metrics">
                    <div className="smm-phone-metric">
                      <div className="smm-pm-val">128K</div>
                      <div className="smm-pm-lbl">Followers</div>
                      <div className="smm-pm-chg up">+12.5%</div>
                    </div>
                    <div className="smm-phone-metric">
                      <div className="smm-pm-val">8.6K</div>
                      <div className="smm-pm-lbl">Engagement</div>
                      <div className="smm-pm-chg up">+18.2%</div>
                    </div>
                    <div className="smm-phone-metric">
                      <div className="smm-pm-val">2.8M</div>
                      <div className="smm-pm-lbl">Reach</div>
                      <div className="smm-pm-chg up">+24.6%</div>
                    </div>
                  </div>
                  {/* Chart */}
                  <div className="smm-phone-chart-area">
                    <div className="smm-phone-chart-title">
                      Audience Growth
                      <span className="smm-phone-chart-badge">+240%</span>
                    </div>
                    <svg viewBox="0 0 160 50" width="100%" height="50" fill="none">
                      <defs>
                        <linearGradient id="cf2" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.25"/>
                          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0"/>
                        </linearGradient>
                      </defs>
                      <path d="M0 42 L22 38 L44 32 L66 24 L88 17 L110 11 L132 6 L160 2 L160 50 L0 50Z" fill="url(#cf2)"/>
                      <path d="M0 42 L22 38 L44 32 L66 24 L88 17 L110 11 L132 6 L160 2" stroke="#7c3aed" strokeWidth="2.2" strokeLinejoin="round"/>
                      <circle cx="160" cy="2" r="3" fill="#7c3aed"/>
                      <text x="0"   y="50" fontSize="6.5" fill="#94a3b8">Jan</text>
                      <text x="28"  y="50" fontSize="6.5" fill="#94a3b8">Feb</text>
                      <text x="56"  y="50" fontSize="6.5" fill="#94a3b8">Mar</text>
                      <text x="84"  y="50" fontSize="6.5" fill="#94a3b8">Apr</text>
                      <text x="112" y="50" fontSize="6.5" fill="#94a3b8">May</text>
                      <text x="140" y="50" fontSize="6.5" fill="#94a3b8">Jun</text>
                    </svg>
                  </div>
                  {/* Platforms */}
                  <div className="smm-phone-platforms">
                    <div className="smm-phone-plat-title">Top Platforms</div>
                    {[
                      { name: "Instagram", color: "#ec4899", pct: 42 },
                      { name: "Facebook",  color: "#2563eb", pct: 28 },
                      { name: "LinkedIn",  color: "#0a66c2", pct: 18 },
                      { name: "TikTok",    color: "#010101", pct: 12 },
                    ].map((p, i) => (
                      <div key={i} className="smm-phone-plat-row">
                        <span className="smm-phone-plat-name">{p.name}</span>
                        <div className="smm-phone-plat-bar-wrap">
                          <div className="smm-phone-plat-bar" style={{ width: `${p.pct}%`, background: p.color }}></div>
                        </div>
                        <span className="smm-phone-plat-pct">{p.pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Campaign Performance Donut ── */}
            <div className="smm-donut-card">
              <div className="smm-donut-title">Campaign Performance</div>
              <div className="smm-donut-wrap">
                <svg viewBox="0 0 90 90" width="90" height="90">
                  <circle cx="45" cy="45" r="34" fill="none" stroke="#f1f5f9" strokeWidth="12"/>
                  <circle cx="45" cy="45" r="34" fill="none" stroke="#7c3aed" strokeWidth="12"
                    strokeDasharray="128 86" strokeDashoffset="-32" strokeLinecap="round"
                    style={{transform:"rotate(-90deg)",transformOrigin:"center"}}/>
                  <circle cx="45" cy="45" r="34" fill="none" stroke="#ec4899" strokeWidth="12"
                    strokeDasharray="64 150" strokeDashoffset="97" strokeLinecap="round"
                    style={{transform:"rotate(-90deg)",transformOrigin:"center"}}/>
                  <circle cx="45" cy="45" r="34" fill="none" stroke="#10b981" strokeWidth="12"
                    strokeDasharray="38 176" strokeDashoffset="33" strokeLinecap="round"
                    style={{transform:"rotate(-90deg)",transformOrigin:"center"}}/>
                  <circle cx="45" cy="45" r="34" fill="none" stroke="#ff6b00" strokeWidth="12"
                    strokeDasharray="20 194" strokeDashoffset="-5" strokeLinecap="round"
                    style={{transform:"rotate(-90deg)",transformOrigin:"center"}}/>
                  <text x="45" y="42" textAnchor="middle" fontSize="13" fontWeight="900" fill="#0f172a">240%</text>
                  <text x="45" y="54" textAnchor="middle" fontSize="7" fill="#94a3b8">Growth</text>
                </svg>
              </div>
              <div className="smm-donut-legend">
                <div className="smm-donut-legend-item"><span style={{background:"#7c3aed"}}></span>Reach</div>
                <div className="smm-donut-legend-item"><span style={{background:"#ec4899"}}></span>Engagement</div>
                <div className="smm-donut-legend-item"><span style={{background:"#10b981"}}></span>Leads</div>
                <div className="smm-donut-legend-item"><span style={{background:"#ff6b00"}}></span>Conversions</div>
              </div>
            </div>

            {/* ── Target / Dartboard ── */}
            <div className="smm-target-icon">
              <svg viewBox="0 0 90 90" width="90" height="90" fill="none">
                <circle cx="45" cy="45" r="40" fill="#f0f0fa" stroke="#e2e0f0" strokeWidth="1"/>
                <circle cx="45" cy="45" r="33" fill="white"/>
                <circle cx="45" cy="45" r="33" stroke="#7c3aed" strokeWidth="6" fill="none"/>
                <circle cx="45" cy="45" r="22" stroke="#7c3aed" strokeWidth="6" fill="white"/>
                <circle cx="45" cy="45" r="11" fill="#7c3aed"/>
                {/* Arrow */}
                <line x1="75" y1="15" x2="50" y2="40" stroke="#ec4899" strokeWidth="4" strokeLinecap="round"/>
                <polygon points="75,15 62,18 72,28" fill="#ec4899"/>
              </svg>
            </div>

            {/* ── Leads Generated card ── */}
            <div className="smm-leads-card">
              <div className="smm-leads-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                  <polyline points="17 6 23 6 23 12"/>
                </svg>
              </div>
              <div className="smm-leads-info">
                <div className="smm-leads-val">+3,240</div>
                <div className="smm-leads-lbl">Leads Generated</div>
              </div>
              <svg viewBox="0 0 60 20" width="60" height="20" fill="none">
                <polyline points="0,18 10,14 20,10 30,7 40,4 50,3 60,1" stroke="#10b981" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHY SMM */}
      <section className="smm-section">
        <div className="smm-sec-header reveal-element">
          <span className="eyebrow">Why Social Media?</span>
          <h2>Why Your Business Needs Social Media Marketing</h2>
          <p>Traditional static marketing cannot compare to the viral power and targeted segmentation options of modern social channels.</p>
        </div>
        <div className="smm-why-grid reveal-element">
          <div className="glass-card smm-why-card">
            <div className="smm-why-icon">📢</div>
            <h3>Increase Brand Awareness</h3>
            <p>Establish a cohesive color, voice, and narrative strategy to ensure local audiences recognize and trust your logo.</p>
          </div>
          <div className="glass-card smm-why-card">
            <div className="smm-why-icon">🎯</div>
            <h3>Generate Quality Leads</h3>
            <p>Capture interested buyer contact details using targeted lead magnets, profile bios, and native ad forms.</p>
          </div>

          <div className="glass-card smm-why-card">
            <div className="smm-why-icon">🤝</div>
            <h3>Build Customer Trust</h3>
            <p>Transparent updates, replies to user queries, and positive review highlights reinforce E-E-A-T trust signals.</p>
          </div>
          <div className="glass-card smm-why-card">
            <div className="smm-why-icon">⚡</div>
            <h3>Improve Engagement</h3>
            <p>Develop active dialogue channels with fans through interactive stories, polls, and comment sections.</p>
          </div>
          <div className="glass-card smm-why-card">
            <div className="smm-why-icon">🌐</div>
            <h3>Drive Website Traffic</h3>
            <p>Funnel social media clickers directly to your website design pages, Google Ads pages, and conversion pathways.</p>
          </div>
          <div className="glass-card smm-why-card">
            <div className="smm-why-icon">📈</div>
            <h3>Boost Sales Conversion</h3>
            <p>Re-engage past visitors and cart-abandoners using visual product catalog remarketing ad systems.</p>
          </div>
        </div>
      </section>

      {/* 4. SERVICES WE OFFER & INTERACTIVE ICONS */}
      <section className="smm-section" style={{ backgroundColor: "#ffffff" }}>
        <div className="smm-sec-header reveal-element">
          <span className="eyebrow">Services Catalog</span>
          <h2>Our Social Media Marketing Services</h2>
          <p>We deploy full-scope campaign management to cover all organic scheduling and advertising needs.</p>
        </div>
        <div className="smm-services-grid reveal-element">
          {services.map((svc, idx) => (
            <div key={idx} className="glass-card smm-svc-card">
              <div className="smm-svc-header">
                <div className="smm-svc-icon-box" style={{ backgroundColor: svc.color, color: svc.text }}>
                  {svc.icon}
                </div>
                <h3>{svc.title}</h3>
              </div>
              <p>{svc.desc}</p>
              <Link href="/services" className="smm-svc-link">
                Learn More <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 5. PLATFORMS WE MANAGE */}
      <section className="smm-section">
        <div className="smm-sec-header reveal-element">
          <span className="eyebrow">Platforms</span>
          <h2>Social Platforms We Manage</h2>
          <p>We configure profiles, visual grids, and custom ad campaigns on all major social networks.</p>
        </div>
        <div className="smm-plat-grid reveal-element">
          {platforms.map((plat, idx) => (
            <div key={idx} className="glass-card smm-plat-card">
              <div className="smm-plat-logo-circle">
                {plat.icon}
              </div>
              <span>{plat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE WIDGET: GROWTH CALCULATOR */}
      <section className="smm-section smm-calc-section">

        {/* Section Header */}
        <div className="smm-calc-header reveal-element">
          <div className="smm-calc-eyebrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
            </svg>
            GROWTH PROJECTIONS
          </div>
          <h2 className="smm-calc-heading">
            Interactive Social Media <span className="smm-roi-grad">ROI</span> Calculator
          </h2>
          <p className="smm-calc-subhead">
            Move the sliders below to estimate the traffic, leads, and cost efficiency<br/>of your SMM ad campaigns.
          </p>
          {/* Decorative images */}
          <div className="smm-calc-deco-left">
            <svg viewBox="0 0 90 90" width="90" height="90" fill="none">
              <rect x="5" y="5" width="80" height="80" rx="14" fill="#7c3aed" opacity="0.12"/>
              <rect x="14" y="14" width="62" height="62" rx="10" fill="#7c3aed" opacity="0.18"/>
              <rect x="22" y="22" width="46" height="12" rx="4" fill="#7c3aed"/>
              <rect x="22" y="40" width="20" height="20" rx="3" fill="#ff6b00"/>
              <rect x="48" y="40" width="20" height="9" rx="3" fill="#e0d6ff"/>
              <rect x="48" y="53" width="20" height="7" rx="3" fill="#e0d6ff"/>
            </svg>
          </div>
          <div className="smm-calc-deco-right">
            <svg viewBox="0 0 90 80" width="90" height="80" fill="none">
              <defs>
                <linearGradient id="arwGr" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="#7c3aed"/>
                  <stop offset="100%" stopColor="#ec4899"/>
                </linearGradient>
              </defs>
              <path d="M10 70 Q20 30 70 10" stroke="url(#arwGr)" strokeWidth="5" strokeLinecap="round" fill="none"/>
              <polygon points="70,10 56,14 66,24" fill="url(#arwGr)"/>
              <rect x="18" y="50" width="14" height="22" rx="4" fill="#ff6b00"/>
              <rect x="38" y="36" width="14" height="36" rx="4" fill="#7c3aed"/>
              <rect x="58" y="22" width="14" height="50" rx="4" fill="#10b981"/>
            </svg>
          </div>
        </div>

        {/* Main Calculator Panel */}
        <div className="smm-calc-panel reveal-element">

          {/* LEFT: Inputs */}
          <div className="smm-calc-left">
            <div className="smm-calc-panel-title">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>
                <circle cx="4" cy="6" r="1.5" fill="#7c3aed"/><circle cx="4" cy="18" r="1.5" fill="#7c3aed"/>
              </svg>
              AD CAMPAIGN INPUTS
            </div>

            {/* Slider 1: Monthly Budget */}
            <div className="smm-calc-slider-block">
              <div className="smm-calc-slider-header">
                <div className="smm-calc-slider-icon" style={{background:"rgba(255,107,0,0.1)"}}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff6b00" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="5" width="20" height="14" rx="3"/><line x1="2" y1="10" x2="22" y2="10"/>
                  </svg>
                </div>
                <div className="smm-calc-slider-info">
                  <div className="smm-calc-slider-label">Monthly Ad Budget</div>
                  <div className="smm-calc-slider-desc">Set your total monthly ad spend</div>
                </div>
                <div className="smm-calc-slider-val" style={{color:"#ff6b00"}}>₹{adBudget.toLocaleString()}</div>
              </div>
              <input
                type="range" min="5000" max="200000" step="5000"
                value={adBudget}
                onChange={(e) => setAdBudget(Number(e.target.value))}
                className="smm-slider smm-slider-orange"
                style={{"--pct": `${((adBudget - 5000) / (200000 - 5000)) * 100}%`}}
              />
              <div className="smm-calc-slider-range">
                <span>₹5,000</span><span>₹2,00,000</span>
              </div>
            </div>

            {/* Slider 2: CPC */}
            <div className="smm-calc-slider-block">
              <div className="smm-calc-slider-header">
                <div className="smm-calc-slider-icon" style={{background:"rgba(59,130,246,0.1)"}}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 15l-2 5L9 9l11 4-5 2z"/>
                  </svg>
                </div>
                <div className="smm-calc-slider-info">
                  <div className="smm-calc-slider-label">Average Cost Per Click (CPC)</div>
                  <div className="smm-calc-slider-desc">Average cost you pay per click</div>
                </div>
                <div className="smm-calc-slider-val" style={{color:"#3b82f6"}}>₹{avgCpc}</div>
              </div>
              <input
                type="range" min="2" max="50" step="1"
                value={avgCpc}
                onChange={(e) => setAvgCpc(Number(e.target.value))}
                className="smm-slider smm-slider-blue"
                style={{"--pct": `${((avgCpc - 2) / (50 - 2)) * 100}%`}}
              />
              <div className="smm-calc-slider-range">
                <span>₹2</span><span>₹50</span>
              </div>
            </div>

            {/* Slider 3: Conversion Rate */}
            <div className="smm-calc-slider-block">
              <div className="smm-calc-slider-header">
                <div className="smm-calc-slider-icon" style={{background:"rgba(16,185,129,0.1)"}}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
                  </svg>
                </div>
                <div className="smm-calc-slider-info">
                  <div className="smm-calc-slider-label">Lead Conversion Rate (%)</div>
                  <div className="smm-calc-slider-desc">Percentage of clicks that convert to leads</div>
                </div>
                <div className="smm-calc-slider-val" style={{color:"#10b981"}}>{convRate}%</div>
              </div>
              <input
                type="range" min="1" max="15" step="0.5"
                value={convRate}
                onChange={(e) => setConvRate(Number(e.target.value))}
                className="smm-slider smm-slider-green"
                style={{"--pct": `${((convRate - 1) / (15 - 1)) * 100}%`}}
              />
              <div className="smm-calc-slider-range">
                <span>1%</span><span>15%</span>
              </div>
            </div>

            {/* Hint */}
            <div className="smm-calc-hint">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              Adjust the sliders to see how it impacts your campaign performance.
            </div>
          </div>

          {/* RIGHT: Results */}
          <div className="smm-calc-right">
            <div className="smm-calc-results-header">
              <div className="smm-calc-panel-title smm-calc-panel-title-light">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
                </svg>
                ESTIMATED RESULTS
              </div>
              <div className="smm-calc-live-badge">
                <span className="smm-live-dot"></span>Live Calculation
              </div>
            </div>

            {/* Result cards */}
            <div className="smm-calc-result-card">
              <div className="smm-calc-result-icon" style={{background:"rgba(255,255,255,0.15)"}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 15l-2 5L9 9l11 4-5 2z"/>
                </svg>
              </div>
              <div className="smm-calc-result-text">
                <div className="smm-calc-result-label">Estimated Ad Clicks</div>
                <div className="smm-calc-result-sub">Total clicks from your ad campaign</div>
              </div>
              <div className="smm-calc-result-num" style={{color:"#7c3aed"}}>{calculatedClicks.toLocaleString()}</div>
              <div className="smm-calc-result-arrow smm-arrow-up">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round"><polyline points="18 15 12 9 6 15"/></svg>
              </div>
            </div>

            <div className="smm-calc-result-card">
              <div className="smm-calc-result-icon" style={{background:"rgba(255,255,255,0.15)"}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div className="smm-calc-result-text">
                <div className="smm-calc-result-label">Estimated Leads</div>
                <div className="smm-calc-result-sub">Total leads generated from clicks</div>
              </div>
              <div className="smm-calc-result-num" style={{color:"#10b981"}}>{calculatedLeads.toLocaleString()}</div>
              <div className="smm-calc-result-arrow smm-arrow-up">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round"><polyline points="18 15 12 9 6 15"/></svg>
              </div>
            </div>

            <div className="smm-calc-result-card">
              <div className="smm-calc-result-icon" style={{background:"rgba(255,255,255,0.15)"}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <div className="smm-calc-result-text">
                <div className="smm-calc-result-label">Estimated Cost Per Lead</div>
                <div className="smm-calc-result-sub">Your average cost to acquire one lead</div>
              </div>
              <div className="smm-calc-result-num" style={{color:"#ff6b00"}}>₹{calculatedCostPerLead.toLocaleString()}</div>
              <div className="smm-calc-result-arrow smm-arrow-down">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>
              </div>
            </div>

            {/* CTA Row */}
            <div className="smm-calc-cta-row">
              <div className="smm-calc-cta-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2" fill="white"/>
                </svg>
              </div>
              <p className="smm-calc-cta-text">
                Increase your budget or improve conversion rate to get more leads and better ROI!
              </p>
              <button className="smm-calc-cta-btn" onClick={() => window.dispatchEvent(new CustomEvent("trigger-consultation-modal", { detail: { service: "Social Media Marketing" } }))}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="none">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3-8.58A2 2 0 0 1 3.59 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Features Strip */}
        <div className="smm-calc-features reveal-element">
          {[
            { icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="7" height="18" rx="1"/><rect x="9" y="8" width="7" height="13" rx="1"/><rect x="16" y="12" width="7" height="9" rx="1"/>
                </svg>
              ), title: "Data-Driven Insights", desc: "Make smarter decisions with real numbers" },
            { icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff6b00" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2" fill="#ff6b00"/>
                </svg>
              ), title: "Optimize Budget", desc: "Find the perfect balance for maximum ROI" },
            { icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                  <line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/>
                </svg>
              ), title: "Generate More Leads", desc: "Improve conversions and grow your business" },
            { icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              ), title: "Better ROI", desc: "Lower cost per lead & higher returns" },
          ].map((f, i) => (
            <div key={i} className="smm-calc-feature-item">
              <div className="smm-calc-feature-icon">{f.icon}</div>
              <div>
                <div className="smm-calc-feature-title">{f.title}</div>
                <div className="smm-calc-feature-desc">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>

      </section>





      {/* 8. PAID SOCIAL ADVERTISING */}
      <section className="smm-section smm-paid-section">
        <div className="smm-paid-grid reveal-element">
          <div className="smm-paid-content">
            <span className="eyebrow">Paid Campaigns</span>
            <h2>Scale Instantly With Paid Social Advertising</h2>
            <p>
              Organic push builds branding, but paid ads generate immediate revenue. We build custom landing page pathways, Meta instant forms, and precise lookalike audiences to maximize conversion rates.
            </p>
            <div className="smm-paid-features">
              <div className="smm-paid-feat-item">
                <span className="smm-paid-check">✓</span>
                <span>Facebook & Instagram Ads</span>
              </div>
              <div className="smm-paid-feat-item">
                <span className="smm-paid-check">✓</span>
                <span>LinkedIn Lead Gen Forms</span>
              </div>
              <div className="smm-paid-feat-item">
                <span className="smm-paid-check">✓</span>
                <span>Custom Remarketing Lists</span>
              </div>
              <div className="smm-paid-feat-item">
                <span className="smm-paid-check">✓</span>
                <span>A/B Copy & Visual Testing</span>
              </div>
            </div>
          </div>
          
          <div className="smm-paid-visual">
            <div className="smm-ads-dash-mock">
              <div className="smm-ads-dash-title">📊 PAID CAMPAIGNS PERFORMANCE</div>
              <div className="smm-ads-dash-kpis">
                <div className="smm-ads-dash-card">
                  <h5>Ad Spend</h5>
                  <div className="val">₹48,500</div>
                </div>
                <div className="smm-ads-dash-card">
                  <h5>Conversions</h5>
                  <div className="val">340 Leads</div>
                </div>
                <div className="smm-ads-dash-card">
                  <h5>Avg. ROAS</h5>
                  <div className="val" style={{ color: "#10b981" }}>4.8x</div>
                </div>
              </div>
              <div style={{ marginTop: "16px", height: "80px", position: "relative" }}>
                <svg viewBox="0 0 100 30" width="100%" height="100%">
                  <path d="M0 25 L30 20 L60 8 L100 2" fill="none" stroke="#2563eb" strokeWidth="2" />
                  <circle cx="100" cy="2" r="3" fill="#2563eb" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. INDUSTRIES SERVED */}
      <section className="smm-section">
        <div className="smm-sec-header reveal-element">
          <span className="eyebrow">Industries</span>
          <h2>Industries We Serve</h2>
          <p>We tailor SMM strategies to address sector-specific regulations and buyer habits.</p>
        </div>
        <div className="smm-ind-grid reveal-element">
          {industries.map((ind, idx) => (
            <div key={idx} className="glass-card smm-ind-card">
              <div className="smm-ind-icon-box">{ind.icon}</div>
              <span>{ind.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 10. BENEFITS & RESULTS */}
      <section className="smm-section" style={{ backgroundColor: "#ffffff" }}>
        <div className="smm-sec-header reveal-element">
          <span className="eyebrow">The Benefits</span>
          <h2>Key Growth Benefits of SMM</h2>
          <p>By building consistent touchpoints across feeds, we grow your bottom-line metrics.</p>
        </div>
        <div className="smm-benefits-grid reveal-element">
          {benefits.map((item, idx) => (
            <div key={idx} className="glass-card smm-benefits-card">
              <div className="smm-benefits-icon-box">✓</div>
              <h3>{item.title}</h3>
              <p style={{ fontSize: "13.5px", color: "#64748b", margin: "8px 0 0 0" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 11. PERFORMANCE METRICS */}
      <section className="smm-metrics-section">
        <div className="smm-metrics-grid reveal-element">
          <div className="smm-metric-item">
            <h3><MetricCounter value="200+" /></h3>
            <p>Brands Managed</p>
          </div>
          <div className="smm-metric-item">
            <h3><MetricCounter value="15M+" /></h3>
            <p>Monthly Reach</p>
          </div>
          <div className="smm-metric-item">
            <h3><MetricCounter value="120M+" /></h3>
            <p>Impressions</p>
          </div>
          <div className="smm-metric-item">
            <h3><MetricCounter value="95%" /></h3>
            <p>Client Retention</p>
          </div>
          <div className="smm-metric-item">
            <h3><MetricCounter value="500+" /></h3>
            <p>Campaigns</p>
          </div>
        </div>
      </section>

      {/* 12. CASE STUDIES (BEFORE/AFTER TOGGLE) */}
      <section className="smm-section smm-toggle-section">
        <div className="smm-sec-header reveal-element">
          <span className="eyebrow">Client Success</span>
          <h2>Before vs After Case Studies</h2>
          <p>See exactly how brands scaled after deploying TenX marketing assets.</p>
        </div>
        
        <div className="reveal-element" style={{ display: "flex", justifyContent: "center" }}>
          <div className="smm-calc-toggle-bar">
            {caseStudies.map((cs, idx) => (
              <button
                key={idx}
                className={`smm-toggle-btn ${activeCaseIndex === idx ? "active" : ""}`}
                onClick={() => setActiveCaseIndex(idx)}
              >
                {cs.brand}
              </button>
            ))}
          </div>
        </div>

        <div className="smm-success-comparison reveal-element">
          <div className="glass-card smm-success-card">
            <div className="smm-success-lbl">Initial Followers</div>
            <div className="smm-success-val">{caseStudies[activeCaseIndex].before.followers}</div>
            <div className="smm-success-val after" style={{ marginTop: "10px" }}>{caseStudies[activeCaseIndex].after.followers}</div>
          </div>
          <div className="glass-card smm-success-card">
            <div className="smm-success-lbl">Monthly Reach</div>
            <div className="smm-success-val">{caseStudies[activeCaseIndex].before.reach}</div>
            <div className="smm-success-val after" style={{ marginTop: "10px" }}>{caseStudies[activeCaseIndex].after.reach}</div>
          </div>
          <div className="glass-card smm-success-card">
            <div className="smm-success-lbl">Monthly Leads</div>
            <div className="smm-success-val">{caseStudies[activeCaseIndex].before.leads}</div>
            <div className="smm-success-val after" style={{ marginTop: "10px" }}>{caseStudies[activeCaseIndex].after.leads}</div>
          </div>
          <div className="glass-card smm-success-card">
            <div className="smm-success-lbl">Attributable Revenue</div>
            <div className="smm-success-val">{caseStudies[activeCaseIndex].before.revenue}</div>
            <div className="smm-success-val after" style={{ marginTop: "10px" }}>{caseStudies[activeCaseIndex].after.revenue}</div>
          </div>
        </div>
      </section>

      {/* 13. CLIENT TESTIMONIALS */}
      <section className="smm-section" style={{ backgroundColor: "#ffffff" }}>
        <div className="smm-sec-header reveal-element">
          <span className="eyebrow">Client Feedback</span>
          <h2>Success Stories From Brands Like Yours</h2>
          <p>Read about the results we deliver every single month.</p>
        </div>
        <div className="smm-testi-grid reveal-element">
          <div className="glass-card smm-testi-card">
            <div className="smm-stars">★★★★★</div>
            <p className="smm-testi-text">
              "We saw a 4X increase in qualified leads within 60 days of launching Instagram Reels and custom Lead Ads with TenX."
            </p>
            <div className="smm-testi-user">
              <div className="smm-testi-avatar" style={{ backgroundColor: "#e0f2fe" }}></div>
              <div>
                <span className="smm-testi-name">Ananth Sharma</span>
                <div className="smm-testi-title">Founder, Fashion Hub</div>
              </div>
            </div>
          </div>
          <div className="glass-card smm-testi-card">
            <div className="smm-stars">★★★★★</div>
            <p className="smm-testi-text">
              "The content calendar planning has completely freed up our schedule. Their visual carousel designs are top-tier."
            </p>
            <div className="smm-testi-user">
              <div className="smm-testi-avatar" style={{ backgroundColor: "#faf5ff" }}></div>
              <div>
                <span className="smm-testi-name">Prerna Gupta</span>
                <div className="smm-testi-title">COO, HealthVeda Clinics</div>
              </div>
            </div>
          </div>
          <div className="glass-card smm-testi-card">
            <div className="smm-stars">★★★★★</div>
            <p className="smm-testi-text">
              "B2B lead generation on LinkedIn used to be highly expensive. Their authoritative slide decks solved that."
            </p>
            <div className="smm-testi-user">
              <div className="smm-testi-avatar" style={{ backgroundColor: "#fff7ed" }}></div>
              <div>
                <span className="smm-testi-name">Rahul Kumar</span>
                <div className="smm-testi-title">Marketing Director, SaaSFlow</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 14. WHY CHOOSE US */}
      <section className="smm-section">
        <div className="smm-sec-header reveal-element">
          <span className="eyebrow">Why Partner With Us?</span>
          <h2>Why Choose TenX Digital</h2>
          <p>We are a performance-first agency committed to transparent execution and quality design.</p>
        </div>
        <div className="smm-why-us-grid reveal-element">
          {whyChooseUs.map((item, idx) => (
            <div key={idx} className="glass-card smm-why-us-card">
              <div className="smm-why-us-icon-box">✓</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 15. FAQS ACCORDION */}
      <section className="smm-section smm-faq-section">
        <div className="smm-sec-header reveal-element">
          <span className="eyebrow">FAQs</span>
          <h2>Frequently Asked Questions</h2>
          <p>Find quick answers to common questions about our social media management.</p>
        </div>
        <div className="smm-faq-wrap reveal-element">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`smm-faq-card ${openFaqIndex === idx ? "open" : ""}`}>
              <button className={`smm-faq-trigger ${openFaqIndex === idx ? "open" : ""}`} onClick={() => toggleFaq(idx)}>
                <span>{faq.q}</span>
                <svg className={`smm-faq-chevron ${openFaqIndex === idx ? "rotated" : ""}`} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className={`smm-faq-answer ${openFaqIndex === idx ? "expanded" : ""}`}>
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 16. FINAL CTA */}
      <section className="cta-section" style={{ padding: "40px 60px 80px 60px", background: "#ffffff" }}>
        <div className="cta-card-wrapper">
          <div className="cta-grid-bg"></div>
          
          {/* Floating Icons */}
          <div className="cta-deco-icon cta-deco-1">
            <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#ff6b00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="20" x2="18" y2="10"></line>
              <line x1="12" y1="20" x2="12" y2="4"></line>
              <line x1="6" y1="20" x2="6" y2="14"></line>
              <path d="M3 18l6-6 4 4 8-8"></path>
              <polyline points="17 8 21 8 21 12"></polyline>
            </svg>
          </div>
          
          <div className="cta-deco-icon cta-deco-2">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff6b00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
          </div>
          
          <div className="cta-deco-icon cta-deco-3">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#b0c4de" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <path d="M7 17l4-4 4 4 6-6"></path>
              <polyline points="18 11 21 11 21 14"></polyline>
            </svg>
          </div>
          
          <div className="cta-deco-icon cta-deco-4">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="7" stroke="#64748b" strokeWidth="2" />
              <path d="M6 12L9 9L11 11L14 8" stroke="#ff6b00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15 15L21 21" stroke="#ff6b00" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>

          <div className="cta-card-content">
            <h2>Ready to Grow Your Brand on Social Media?</h2>
            <p>
              Let's map out a customized marketing strategy to increase followers, organic reach, and qualified leads.
            </p>
            <div className="cta-card-buttons">
              <button className="btn-primary" onClick={() => window.dispatchEvent(new CustomEvent("trigger-consultation-modal"))}>
                📅 Book Free Consultation
              </button>
              <a href="/contact" className="btn-outline">▶ Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
