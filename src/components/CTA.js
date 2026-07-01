"use client";

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-card-wrapper">
        <div className="cta-grid-bg"></div>
        
        {/* Floating Icons */}
        <div className="cta-deco-icon cta-deco-1">
          {/* Orange chart icon */}
          <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#ff6b00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
            <path d="M3 18l6-6 4 4 8-8"></path>
            <polyline points="17 8 21 8 21 12"></polyline>
          </svg>
        </div>
        
        <div className="cta-deco-icon cta-deco-2">
          {/* Share connection icon */}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff6b00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
        </div>
        
        <div className="cta-deco-icon cta-deco-3">
          {/* Tiny blue stock chart icon */}
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#b0c4de" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <path d="M7 17l4-4 4 4 6-6"></path>
            <polyline points="18 11 21 11 21 14"></polyline>
          </svg>
        </div>
        
        <div className="cta-deco-icon cta-deco-4">
          {/* Magnifying glass with trend line */}
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="7" stroke="#64748b" strokeWidth="2" />
            <path d="M6 12L9 9L11 11L14 8" stroke="#ff6b00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 15L21 21" stroke="#ff6b00" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>

        <div className="cta-card-content">
          <h2>Let's Grow Your Business Together</h2>
          <p>
            Partner with Digital Marketing TenX and experience predictable, data-driven revenue and traffic growth.
          </p>
          <div className="cta-card-buttons">
            <button className="btn-primary" onClick={() => window.dispatchEvent(new CustomEvent("trigger-consultation-modal"))}>
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
