export const metadata = {
  title: "About Digital Marketing TenX | AI-Powered Digital Marketing & SEO Experts",
  description: "Learn about Digital Marketing TenX, a results-driven digital marketing agency specializing in SEO, Google Ads, website development, AI automation, performance marketing, and business growth solutions. Meet our team, explore our mission, and discover how we help businesses achieve measurable growth through data-driven strategies.",
  alternates: {
    canonical: "https://digitalmarketingtenx.com/about",
  },
  openGraph: {
    title: "About Digital Marketing TenX | AI-Powered Digital Marketing & SEO Experts",
    description: "Learn about Digital Marketing TenX, a results-driven digital marketing agency specializing in SEO, Google Ads, website development, AI automation, performance marketing, and business growth solutions. Meet our team, explore our mission, and discover how we help businesses achieve measurable growth through data-driven strategies.",
    url: "https://digitalmarketingtenx.com/about",
    type: "website",
    images: [
      {
        url: "https://digitalmarketingtenx.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Digital Marketing TenX",
      },
    ],
  },
};

export default function AboutLayout({ children }) {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Digital Marketing TenX",
      "url": "https://digitalmarketingtenx.com",
      "logo": "https://digitalmarketingtenx.com/logo.png",
      "description": "AI-Powered Full-Service Digital Marketing Agency & SEO Experts based in Hyderabad, Telangana.",
      "telephone": "+91-93922-51739",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Level 4, Gumidelli Towers, Begumpet",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500016",
        "addressCountry": "IN"
      },
      "knowsAbout": [
        "Search Engine Optimization (SEO)",
        "Google Ads",
        "Meta Ads",
        "Social Media Marketing",
        "Website Development",
        "Next.js",
        "React",
        "AI Automation",
        "WhatsApp Business API",
        "Performance Marketing",
        "Conversion Rate Optimization"
      ],
      "certification": [
        "Google Ads Certified Professionals",
        "Certified SEO Experts"
      ]
    }
  };

  const faqDataSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Digital Marketing TenX, and what makes you different?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Digital Marketing TenX is a premium, technology-driven agency. We combine performance marketing, SEO, AI automation, and high-performance development to help brands achieve 10X growth. Unlike traditional agencies, we take a data-first, ROI-focused approach and utilize advanced AI tools to automate workflows and optimize results."
        }
      },
      {
        "@type": "Question",
        "name": "Do you only work with large enterprises?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, we partner with startups, local businesses, healthcare brands, educational institutions, and mid-market enterprises. Our growth frameworks are scalable and tailored specifically to your business size, budget, and growth stage."
        }
      },
      {
        "@type": "Question",
        "name": "How does AI automation fit into digital marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use AI automation to optimize ad targeting, generate data-driven content at scale, automate lead nurturing on platforms like WhatsApp and email, and streamline workflow processes. This decreases client customer acquisition costs and increases conversion rates."
        }
      },
      {
        "@type": "Question",
        "name": "What digital marketing channels do you specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialize in Search Engine Optimization (SEO), Google PPC Ads, Meta (Facebook & Instagram) Ads, TikTok Advertising, Social Media Management, WhatsApp Marketing Automation, and custom High-Conversion Web Development."
        }
      },
      {
        "@type": "Question",
        "name": "How do you measure campaign success?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We focus on bottom-line business metrics: leads generated, sales conversions, customer acquisition cost (CAC), return on ad spend (ROAS), and net lifetime value. We provide transparent live dashboards so you can see your growth in real time."
        }
      }
    ]
  };

  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqDataSchema) }}
        />
      </head>
      {children}
    </>
  );
}
