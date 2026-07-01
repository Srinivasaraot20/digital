import SEOServicesClient from "./SEOServicesClient";

export const metadata = {
  title: "SEO Agency in Hyderabad | Top SEO Company Hyderabad | TenX",
  description: "Scale your organic traffic with our expert SEO agency in Hyderabad. We offer custom SEO services, technical audits, link building, and performance packages in India.",
  alternates: {
    canonical: "https://digitalmarketingtenx.com/seo-services"
  },
  openGraph: {
    title: "SEO Agency in Hyderabad | Top SEO Company Hyderabad",
    description: "Scale your organic traffic with our expert SEO agency in Hyderabad. We offer custom SEO services, technical audits, link building, and performance packages in India.",
    url: "https://digitalmarketingtenx.com/seo-services",
    type: "website",
    images: [
      {
        url: "https://digitalmarketingtenx.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Digital Marketing TenX SEO Services"
      }
    ]
  }
};

export default function SEOServicesPage() {
  return <SEOServicesClient />;
}
