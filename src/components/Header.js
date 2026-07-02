"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const serviceMenuItems = [
  {
    title: "Website Design",
    href: "/services/website-design",
    icon: "/website-design.png",
  },
  {
    title: "Google Ads",
    href: "/services/google-ads",
    icon: "/google-ads.png",
  },
  {
    title: "SEO",
    href: "/seo-services",
    icon: "/seo.png",
  },
  {
    title: "Social Media Marketing",
    href: "/services/social-media-marketing",
    icon: "/smm.png",
  },
  {
    title: "E-Commerce Marketing",
    href: "/services/e-commerce-marketing",
    icon: "/e-commerce.png",
  },
  {
    title: "WhatsApp Automation",
    href: "/services/whatsapp-automation",
    icon: "/whatsapp-automation.png",
  }
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  // Lock scroll when drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("drawer-open");
    } else {
      document.body.classList.remove("drawer-open");
    }
    return () => {
      document.body.classList.remove("drawer-open");
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const toggleAccordion = useCallback((e) => {
    e.preventDefault();
    setIsAccordionOpen((prev) => !prev);
  }, []);

  return (
    <>
      <nav className="header-nav">
        <Link href="/" className="logo" onClick={handleLinkClick}>
          <picture>
            <source srcSet="/logo.webp" type="image/webp" />
            <img 
              src="/logo.png" 
              alt="Digital Marketing TenX" 
              width={56} 
              height={56} 
              className="logo-img-file"
            />
          </picture>
          <span className="brand-name">
            Digital Marketing <span className="brand-highlight">TenX</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="nav-links desktop-only-flex">
          <Link href="/" className={pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link href="/about" className={pathname === "/about" ? "active" : ""}>
            About Us
          </Link>
          
          <div className="nav-item-dropdown">
            <Link 
              href="/services"
              className={`services-dropdown-btn ${pathname.startsWith("/services") ? "active" : ""}`}
            >
              Services 
              <svg className="chevron-icon" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: "4px" }}>
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>

            <div className="services-list-dropdown" style={{ minWidth: "220px", padding: "8px" }}>
              <div className="dropdown-arrow-pointer"></div>
              {serviceMenuItems.map((item, index) => (
                <Link 
                  key={index} 
                  href={item.href} 
                  className="dropdown-list-item" 
                  style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 12px", borderRadius: "6px" }} 
                  onClick={handleLinkClick}
                >
                  {item.icon && (
                    <div className="dropdown-item-icon-wrap" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "24px", height: "24px", minWidth: "24px", borderRadius: "6px", backgroundColor: "#f8fafc", border: "1px solid #f1f5f9" }}>
                      <Image 
                        src={item.icon} 
                        alt={item.title} 
                        width={14} 
                        height={14} 
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  )}
                  <span className="dropdown-list-text" style={{ fontSize: "13.5px", fontWeight: "600", color: "#1e293b" }}>{item.title}</span>
                </Link>
              ))}
            </div>
          </div>



          <Link href="/blog" className={pathname.startsWith('/blog') ? 'active' : ''} onClick={handleLinkClick}>Blog</Link>
          <Link href="/contact">Contact</Link>
          
        </div>

        <button className="btn-primary desktop-only-btn" onClick={() => window.dispatchEvent(new CustomEvent("trigger-consultation-modal"))}>📅 Book Free Consultation</button>

        {/* Hamburger Menu Trigger */}
        <button 
          className={`hamburger-btn mobile-tablet-only ${isMobileMenuOpen ? "open" : ""}`} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </nav>

      {/* Backdrop Blur Overlay */}
      {isMobileMenuOpen && (
        <div className="drawer-overlay" onClick={handleLinkClick}></div>
      )}

      {/* Slide-out Drawer */}
      <div className={`ga-mobile-drawer ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <div className="logo">
            <picture>
              <source srcSet="/logo.webp" type="image/webp" />
              <img src="/logo.png" alt="TenX" width={40} height={40} />
            </picture>
            <span className="brand-name" style={{ fontWeight: 800, fontSize: "15px" }}>TenX Menu</span>
          </div>
          <button className="drawer-close-btn" onClick={handleLinkClick}>✕</button>
        </div>

        <div className="drawer-content">
          {/* Search bar inside drawer */}
          <div className="drawer-search">
            <input type="text" placeholder="Search services..." />
            <span>🔍</span>
          </div>

          <div className="drawer-menu">
            <Link href="/" className={pathname === "/" ? "active" : ""} onClick={handleLinkClick}>
              Home
            </Link>
            <Link href="/about" className={pathname === "/about" ? "active" : ""} onClick={handleLinkClick}>
              About Us
            </Link>

            {/* Accordion dropdown for Services */}
            <div className="drawer-accordion">
              <button 
                className={`drawer-accordion-btn ${isAccordionOpen ? "active" : ""}`}
                onClick={toggleAccordion}
              >
                Services
                <svg className={`chevron-icon ${isAccordionOpen ? "rotated" : ""}`} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className={`drawer-accordion-content ${isAccordionOpen ? "expanded" : ""}`}>
                {serviceMenuItems.map((item, index) => (
                  <Link 
                    key={index}
                    href={item.href} 
                    className="drawer-accordion-sublink"
                    style={{ display: "flex", alignItems: "center", gap: "10px" }}
                    onClick={handleLinkClick}
                  >
                    {item.icon && (
                      <Image 
                        src={item.icon} 
                        alt={item.title} 
                        width={14} 
                        height={14} 
                        style={{ objectFit: "contain" }}
                      />
                    )}
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>



            <Link href="/blog" onClick={handleLinkClick} className={pathname.startsWith('/blog') ? 'active' : ''}>Blog</Link>
            <Link href="/contact" onClick={handleLinkClick}>Contact</Link>
            <Link href="/admin/login" onClick={handleLinkClick} style={{ color: '#ff6b00', fontWeight: 'bold' }}>Admin Login</Link>
          </div>

          {/* Contact quick actions */}
          <div className="drawer-actions">
            <button className="btn-primary w-full" onClick={() => { handleLinkClick(); window.dispatchEvent(new CustomEvent("trigger-consultation-modal")); }}>📅 Book Free Consultation</button>
            <a href="tel:+919392251739" className="action-link phone-action">
              📞 Call Now
            </a>
            <a href="https://wa.me/919392251739" className="action-link whatsapp-action" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
              💬 WhatsApp Chat
            </a>
          </div>

          {/* Social icons */}
          <div className="drawer-socials">
            <a href="#">FB</a>
            <a href="#">TW</a>
            <a href="#">LN</a>
            <a href="#">IG</a>
          </div>
        </div>
      </div>
    </>
  );
}
