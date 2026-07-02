"use client";

import { useCallback } from "react";

export default function CTA() {
  const handleConsultation = useCallback(() => {
    window.dispatchEvent(new CustomEvent("trigger-consultation-modal"));
  }, []);

  return (
    <section className="cta-section">
      <div className="cta-card-wrapper">
        <div className="cta-grid-bg"></div>
        
        {/* Floating Icons Removed */}

        <div className="cta-card-content">
          <h2>Let's Grow Your Business Together</h2>
          <p>
            Partner with Digital Marketing TenX and experience predictable, data-driven revenue and traffic growth.
          </p>
          <div className="cta-card-buttons">
            <button className="btn-primary" onClick={handleConsultation}>
              📅 Book Free Consultation
            </button>
            <a href="/contact" className="btn-outline">
              ▶ Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
