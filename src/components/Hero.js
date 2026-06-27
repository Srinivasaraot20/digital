"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

function Counter({ end, duration = 1500, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !window.IntersectionObserver) {
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = progress * (2 - progress);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasAnimated, end, duration]);

  return <span ref={elementRef}>{count}{suffix}</span>;
}

export default function Hero() {
  return (
    <>
      <section className="hero" style={{ paddingBottom: "30px" }}>
        <div>
          <h1 className="animate-fade-in-up delay-100">
            Scale Your Business<br />
            <span style={{ background: "linear-gradient(135deg, #ff6b00 0%, #d946ef 50%, #3b82f6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block" }}>10X</span> Speed With<br />
            AI-Powered<br />
            Digital Marketing
          </h1>
          <p className="animate-fade-in-up delay-200">
            We help startups, local businesses, healthcare brands, educational institutions, and enterprises generate more leads, increase sales, and dominate their market through SEO, Digital Marketing, <span style={{ whiteSpace: "nowrap" }}>AI automation</span>, and high-performance websites.
          </p>
          <div className="hero-btns animate-fade-in-up delay-300">
            <button className="btn-primary" onClick={() => window.dispatchEvent(new CustomEvent("trigger-consultation-modal"))}>📅 Book Free Consultation</button>
          </div>
        </div>

        <div className="hero-visual animate-fade-in-right delay-200">
          <div className="globe-wrap">
            <Image 
              src="/marketing.png" 
              alt="Digital Marketing Megaphone" 
              width={700} 
              height={700} 
              className="globe-img"
              priority
            />
          </div>
        </div>
      </section>

      {/* Horizontal Stats Row bar */}
      <div className="hero-stats-bar-wrapper">
        <div className="ga-wrap">
          <div className="hero-stats-bar-container">
            <div className="bar-stat-card animate-scale-in delay-300">
              <div className="bar-stat-icon" style={{ border: "1px solid rgba(59, 130, 246, 0.2)", backgroundColor: "rgba(59, 130, 246, 0.04)", color: "#2563eb", borderRadius: "10px", width: "40px", height: "40px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>
              </div>
              <div className="bar-stat-info">
                <h4><Counter end={500} suffix="+" /></h4>
                <p>Projects Delivered</p>
              </div>
            </div>
            <div className="bar-stat-card animate-scale-in delay-400">
              <div className="bar-stat-icon" style={{ border: "1px solid rgba(59, 130, 246, 0.2)", backgroundColor: "rgba(59, 130, 246, 0.04)", color: "#2563eb", borderRadius: "10px", width: "40px", height: "40px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div className="bar-stat-info">
                <h4><Counter end={150} suffix="+" /></h4>
                <p>Happy Clients</p>
              </div>
            </div>
            <div className="bar-stat-card animate-scale-in delay-500">
              <div className="bar-stat-icon" style={{ border: "1px solid rgba(59, 130, 246, 0.2)", backgroundColor: "rgba(59, 130, 246, 0.04)", color: "#2563eb", borderRadius: "10px", width: "40px", height: "40px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 9.7a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 .76-.97l8-2a1 1 0 0 1 .48 0l8 2A1 1 0 0 1 20 6z"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <div className="bar-stat-info">
                <h4><Counter end={97} suffix="%" /></h4>
                <p>Client Retention</p>
              </div>
            </div>
            <div className="bar-stat-card animate-scale-in delay-600">
              <div className="bar-stat-icon" style={{ border: "1px solid rgba(59, 130, 246, 0.2)", backgroundColor: "rgba(59, 130, 246, 0.04)", color: "#2563eb", borderRadius: "10px", width: "40px", height: "40px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
              </div>
              <div className="bar-stat-info">
                <h4><Counter end={10} suffix="X" /></h4>
                <p>Average Growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
