import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const About = dynamic(() => import("@/components/About"), { ssr: true });
const Services = dynamic(() => import("@/components/Services"), { ssr: true });
const Challenges = dynamic(() => import("@/components/Challenges"), { ssr: true });
const Industries = dynamic(() => import("@/components/Industries"), { ssr: true });
const Process = dynamic(() => import("@/components/Process"), { ssr: true });
const WhyUs = dynamic(() => import("@/components/WhyUs"), { ssr: true });
const RecentBlogs = dynamic(() => import("@/components/RecentBlogs"), { ssr: true });
const SEOContent = dynamic(() => import("@/components/SEOContent"), { ssr: true });
const CTA = dynamic(() => import("@/components/CTA"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"), { ssr: false });

// Export metadata for Google & Bing search engine optimization + OpenGraph Social cards
export const metadata = {
  title: "Digital Marketing Agency in Hyderabad | SEO, Google Ads & Web Design - TenX",
  description: "Accelerate your business with Digital Marketing TenX in Hyderabad. Premium SEO services, Google Ads PPC management, social media marketing, and custom web development.",
  alternates: {
    canonical: "https://digitalmarketingtenx.com",
  },
  openGraph: {
    title: "Digital Marketing Agency in Hyderabad | SEO, Google Ads & Web Design",
    description: "Accelerate your business with Digital Marketing TenX in Hyderabad. Premium SEO services, Google Ads PPC management, social media marketing, and custom web development.",
    url: "https://digitalmarketingtenx.com",
    type: "website",
    images: [
      {
        url: "https://digitalmarketingtenx.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Digital Marketing TenX Agency Hyderabad",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Challenges />
        <Industries />
        <Process />
        <WhyUs />
        <RecentBlogs />

        {/* Expanded SEO block with FAQs, Local details and schema */}
        <SEOContent />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
