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
            Partner with a results-driven digital marketing agency specializing in SEO, Local SEO, Google Ads, AI-powered marketing, branding, automation, and high-performance website development. We help startups, small businesses, healthcare providers, educational institutions, eCommerce brands, and enterprises attract qualified customers, generate high-quality leads, increase conversions, strengthen their online presence, and achieve sustainable long-term digital growth through data-driven strategies and measurable results.

          </p>
          <div className="hero-btns animate-fade-in-up delay-300">
            <button className="btn-primary" onClick={() => window.dispatchEvent(new CustomEvent("trigger-consultation-modal"))}>📅 Book Free Consultation</button>
          </div>
        </div>

        <div className="hero-visual animate-fade-in-right delay-200">
          <div className="globe-wrap">
            <Image 
              src="/mark.png" 
              alt="Digital Marketing Megaphone" 
              width={700} 
              height={700} 
              className="globe-img"
              priority
              fetchPriority="high"
              sizes="100vw"
            />
          </div>
        </div>
      </section>


    </>
  );
}
