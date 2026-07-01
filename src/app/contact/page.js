import ContactClient from "./ContactClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// Export metadata for Google & Bing search engines + OpenGraph social cards
export const metadata = {
  title: "Contact Digital Marketing TenX | Digital Marketing Agency in Hyderabad",
  description: "Contact Digital Marketing TenX for expert SEO, Google Ads, Website Development, Social Media Marketing, AI Automation, and E-Commerce Marketing. Visit our Hyderabad office or book a free consultation today.",
  alternates: {
    canonical: "https://digitalmarketingtenx.com/contact",
  },
  openGraph: {
    title: "Contact Digital Marketing TenX | Digital Marketing Agency in Hyderabad",
    description: "Contact Digital Marketing TenX for expert SEO, Google Ads, Website Development, Social Media Marketing, AI Automation, and E-Commerce Marketing. Visit our Hyderabad office or book a free consultation today.",
    url: "https://digitalmarketingtenx.com/contact",
    type: "website",
    images: [
      {
        url: "https://digitalmarketingtenx.com/logo.png",
        width: 300,
        height: 300,
        alt: "Digital Marketing TenX",
      },
    ],
  },
};

export default function ContactPage() {
  // Inject local & technical JSON-LD structured schemas
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Digital Marketing TenX",
    "description": "Reach out to Digital Marketing TenX for expert consultations regarding SEO, Google Ads, web design, and digital scaling services in Hyderabad and globally.",
    "url": "https://digitalmarketingtenx.com/contact",
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Digital Marketing TenX",
    "url": "https://digitalmarketingtenx.com",
    "logo": "https://digitalmarketingtenx.com/logo.png",
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61590692422833",
      "https://www.instagram.com/digitalmarketingtenx?utm_source=qr&igsh=MW5zcmVoOWhlZ3M3ag==",
      "https://linkedin.com/in/digitalmarketing-tenx-8278b440b",
      "https://medium.com/@digitalmarketingtenx",
      "https://x.com/DigitalTenx9",
      "https://www.quora.com/profile/DIGITAL-MARKEING-TEN-X"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Digital Marketing TenX (Hyderabad Branch)",
    "image": "https://digitalmarketingtenx.com/logo.png",
    "telePhone": "+91-93922-51739",
    "email": "grow@digitalmarketingtenx.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Level 4, Gumidelli Towers, Sardar Patel Road, Begumpet",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500016",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "17.4447",
      "longitude": "78.4664"
    },
    "url": "https://digitalmarketingtenx.com",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://digitalmarketingtenx.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://digitalmarketingtenx.com/contact"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you offer free consultation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We offer a completely free, 30-minute growth strategy consultation. During this session, our digital marketing experts will analyze your current online presence, identify gaps, and provide actionable recommendations to increase your traffic and sales. There are no obligations."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly do you respond?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We respond to all contact form inquiries and emails within 2 hours during business hours (Monday to Saturday). For urgent matters, you can reach out directly via WhatsApp for instant communication with our team."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide remote services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, absolutely! While our main branch is in Hyderabad, we serve clients globally. We utilize Google Meet, Zoom, Slack, and detailed real-time reporting dashboards to collaborate seamlessly with businesses worldwide."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with international clients?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Digital Marketing TenX works with e-commerce stores, B2B brands, and service businesses across India, North America, Europe, the Middle East, and Southeast Asia. We align our campaign strategies with target local market behaviors."
        }
      },
      {
        "@type": "Question",
        "name": "Can we visit your office?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Of course! Our physical office is located at Level 4, Gumidelli Towers, Begumpet, Hyderabad. We recommend scheduling an appointment in advance via our contact form or phone call so we can prepare for your visit."
        }
      },
      {
        "@type": "Question",
        "name": "How do I schedule a meeting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can schedule a meeting by submitting the contact form, clicking the 'Book Free Consultation' button to trigger our calendar scheduler, or messaging us directly on WhatsApp. We will confirm a time slot that works for you."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide website audits?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we do. We provide comprehensive, manual website audits covering SEO ranking factors, mobile responsiveness, page speed optimization, checkout funnel leaks, and conversion rate optimization (CRO) opportunities."
        }
      },
      {
        "@type": "Question",
        "name": "How much do your services cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our pricing depends on the project scope, services selected, and target milestones. We offer flexible, value-based monthly retainers and project-based pricing structures designed to optimize your return on investment (ROI). All proposals are fully transparent with zero hidden fees."
        }
      }
    ]
  };

  return (
    <>
      {/* Injecting technical JSON-LD structured schemas */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />
      <main>
        <ContactClient />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
