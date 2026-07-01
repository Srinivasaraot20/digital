import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: "/website-design.png",
      title: "Website Design",
      desc: "Create modern, responsive, and user-friendly websites for your business.",
      bgColor: "#eef2ff",
      href: "/services/website-design",
    },
    {
      icon: "/google-ads.png",
      title: "Google Ads",
      desc: "Drive instant traffic, leads, and sales with targeted advertising campaigns.",
      bgColor: "#fff5ee",
      href: "/services/google-ads",
    },
    {
      icon: "/seo.png",
      title: "SEO",
      desc: "Improve your website ranking and reach more customers through search engines.",
      bgColor: "#f0fdf4",
      href: "/seo-services",
    },
    {
      icon: "/smm.png",
      title: "SMM",
      desc: "Grow your brand presence and engage your audience on social platforms.",
      bgColor: "#fdf4ff",
      href: "/services/social-media-marketing",
    },
    {
      icon: "/e-commerce.png",
      title: "E Commerce",
      desc: "Boost online store sales with performance-driven marketing strategies.",
      bgColor: "#f0fdf4",
      href: "/services#e-commerce",
    },
    {
      icon: "/whatsapp-automation.png",
      title: "WhatsApp Automation",
      desc: "Engage customers instantly through personalized messages, promotions on WhatsApp.",
      bgColor: "#f0fff4",
      href: "/services/whatsapp-automation",
    },
  ];

  return (
    <section className="services">
      <div className="sec-header">
        <span className="eyebrow">+ OUR SERVICES</span>
        <h2>Services We Offer</h2>
        <p>"We provide powerful digital marketing services designed to increase visibility, traffic, and sales."</p>
      </div>
      <div className="services-grid">
        {services.map((svc, idx) => (
          <Link href={svc.href} className="svc-card" key={idx} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
            <div className="svc-icon" style={{ backgroundColor: svc.bgColor }}>
              <Image 
                src={svc.icon} 
                alt={svc.title} 
                width={32} 
                height={32} 
                style={{ objectFit: "contain" }}
              />
            </div>
            <h3>{svc.title}</h3>
            <p>{svc.desc}</p>
            <span className="arrow">→</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
