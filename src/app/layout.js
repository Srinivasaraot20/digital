import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Digital Marketing TenX",
  description: "Scale Your Business 10X With AI-Powered Digital Marketing. We help startups, local businesses, healthcare brands, educational institutions, and enterprises generate more leads and increase sales.",
};

export default function RootLayout({ children }) {
  // Inject schemas
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Digital Marketing TenX",
    "url": "https://digitalmarketingtenx.com",
    "logo": "https://digitalmarketingtenx.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-99999-99999",
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": ["en", "tel", "hi"]
    },
    "sameAs": [
      "https://facebook.com/digitalmarketingtenx",
      "https://instagram.com/digitalmarketingtenx",
      "https://linkedin.com/company/digitalmarketingtenx"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Digital Marketing TenX (Hyderabad Branch)",
    "image": "https://digitalmarketingtenx.com/logo.png",
    "telePhone": "+91-93922-51739",
    "email": "grow@digitalmarketingtenx.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Level 4, Gumidelli Towers, Begumpet",
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
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://digitalmarketingtenx.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://digitalmarketingtenx.com/?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en">
      <head>
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
