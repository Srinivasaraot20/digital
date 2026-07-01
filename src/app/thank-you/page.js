import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata = {
  title: "Thank You | Digital Marketing TenX",
  description: "Thank you for contacting Digital Marketing TenX. We have received your consultation request and our team will get back to you shortly.",
};

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main style={{ background: "#f8fafc", padding: "120px 20px 100px", minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{
          background: "#ffffff",
          border: "1px solid rgba(0, 0, 0, 0.06)",
          borderRadius: "24px",
          padding: "50px 40px",
          maxWidth: "600px",
          width: "100%",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.03)"
        }}>
          {/* Animated Success Checkmark */}
          <div style={{
            width: "80px",
            height: "80px",
            background: "rgba(16, 185, 129, 0.08)",
            color: "#10b981",
            fontSize: "36px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px"
          }}>
            ✓
          </div>

          <h1 style={{ fontSize: "32px", fontWeight: 900, color: "#0f172a", margin: "0 0 12px" }}>
            Thank You!
          </h1>
          
          <p style={{ fontSize: "16px", fontWeight: 700, color: "#1d4ed8", margin: "0 0 16px" }}>
            Your consultation request has been successfully submitted.
          </p>

          <p style={{ fontSize: "14.5px", color: "#475569", lineHeight: "1.6", margin: "0 0 32px" }}>
            We have registered your details in our CRM, and our team of Google & Meta certified experts will review your website and requirements. We will contact you via your preferred method within <strong>2 hours</strong> during business hours to schedule your strategy call.
          </p>

          {/* SLA Next Steps */}
          <div style={{
            background: "#f1f5f9",
            borderRadius: "16px",
            padding: "20px",
            textAlign: "left",
            marginBottom: "36px",
            border: "1px solid rgba(0, 0, 0, 0.02)"
          }}>
            <h4 style={{ fontSize: "14px", fontWeight: 800, color: "#0f172a", margin: "0 0 12px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              What Happens Next?
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", gap: "10px" }}>
                <span style={{ color: "#ff6b00", fontWeight: 700 }}>1.</span>
                <span style={{ fontSize: "13.5px", color: "#475569" }}><strong>Initial Audit:</strong> We analyze your domain, SEO metrics, and competitor strategies.</span>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <span style={{ color: "#ff6b00", fontWeight: 700 }}>2.</span>
                <span style={{ fontSize: "13.5px", color: "#475569" }}><strong>Introduction Call:</strong> We discuss your project details and confirm strategic opportunities.</span>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <span style={{ color: "#ff6b00", fontWeight: 700 }}>3.</span>
                <span style={{ fontSize: "13.5px", color: "#475569" }}><strong>Growth Proposal:</strong> We deliver a transparent blueprint with action items and ROI estimates.</span>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link 
              href="/" 
              style={{
                background: "#ff6b00",
                color: "#ffffff",
                padding: "12px 28px",
                borderRadius: "8px",
                fontWeight: 700,
                fontSize: "14px",
                textDecoration: "none",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 10px rgba(255, 107, 0, 0.2)"
              }}
            >
              Go to Home Page
            </Link>
            <Link 
              href="/services" 
              style={{
                background: "rgba(29, 78, 216, 0.06)",
                color: "#1d4ed8",
                padding: "12px 28px",
                borderRadius: "8px",
                fontWeight: 700,
                fontSize: "14px",
                textDecoration: "none",
                transition: "all 0.3s ease"
              }}
            >
              Browse Services
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
