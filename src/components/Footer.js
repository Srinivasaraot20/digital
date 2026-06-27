import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-brand">
          <Link href="/" className="logo" style={{ marginBottom: "12px" }}>
            <Image 
              src="/logo.png" 
              alt="Digital Marketing TenX" 
              width={56} 
              height={56} 
              className="logo-img-file footer-logo" 
            />
            <span className="brand-name footer-brand-name">
              Digital Marketing <span className="brand-highlight">TenX</span>
            </span>
          </Link>
          <p>We help businesses grow 10X faster with AI-powered digital marketing, high-performance websites, and automation solutions.</p>
          <div className="social-links">
            <a href="#">f</a>
            <a href="#">in</a>
            <a href="#">▶</a>
            <a href="#">🐦</a>
            <a href="#">✕</a>
          </div>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li><Link href="/services#seo">SEO</Link></li>
            <li><Link href="/services/google-ads">Google Ads</Link></li>
            <li><Link href="/services#social-media">Social Media Marketing</Link></li>
            <li><Link href="/services/website-design">Website Design</Link></li>
            <li><Link href="/services/whatsapp-automation">WhatsApp Automation</Link></li>
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">Marketing Guides</a></li>
          </ul>
          <h4 style={{ marginTop: "20px" }}>Legal</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <div className="contact-item"><span>📞</span><span>+91 98765 43210</span></div>
          <div className="contact-item"><span>✉️</span><span>info@digitalmarketingtenx.com</span></div>
          <div className="contact-item"><span>📍</span><span>125, Growth Tower, Business Hub, India - 400001</span></div>
        </div>
      </footer>
      <div className="footer-bottom">
        © 2024 Digital Marketing TenX. All Rights Reserved. &nbsp;|&nbsp; Made with ❤️ for Business Growth
      </div>
    </>
  );
}
