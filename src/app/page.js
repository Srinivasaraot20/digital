import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Challenges from "@/components/Challenges";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import SEOContent from "@/components/SEOContent";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// Export metadata for Google & Bing search engine optimization + OpenGraph Social cards
export const metadata = {
  title: "Digital Marketing Agency | SEO, Google Ads & Web Design | TenX",
  description: "Accelerate your business with Digital Marketing TenX. Premium SEO services, Google Ads PPC management, social media marketing, and custom web development.",
  alternates: {
    canonical: "https://digitalmarketingtenx.com",
  },
  openGraph: {
    title: "Digital Marketing Agency | SEO, Google Ads & Web Design",
    description: "Accelerate your business with Digital Marketing TenX. Premium SEO services, Google Ads PPC management, social media marketing, and custom web development.",
    url: "https://digitalmarketingtenx.com",
    type: "website",
    images: [
      {
        url: "https://digitalmarketingtenx.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Digital Marketing TenX Agency",
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
        <Testimonials />
        {/* Expanded SEO block with FAQs, Local details and schema */}
        <SEOContent />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
