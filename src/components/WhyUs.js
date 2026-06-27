export default function WhyUs() {
  const points = [
    { icon: "📊", title: "Data Driven Strategies", desc: "We use data and analytics to make smarter decisions that drive results." },
    { icon: "🤖", title: "AI Powered Systems", desc: "Leverage AI tools and automation to save time and improve efficiency." },
    { icon: "📋", title: "Transparent Reporting", desc: "Get clear, accurate, and real-time reports with complete transparency." },
    { icon: "👨‍💼", title: "Dedicated Growth Team", desc: "Experts dedicated to your success and long-term growth." },
    { icon: "📈", title: "Proven ROI", desc: "We focus on delivering measurable results that impact your bottom line." },
    { icon: "⚡", title: "Fast Response Times", desc: "Quick communication and fast action for all your business needs." },
    { icon: "📅", title: "Monthly Strategy Reviews", desc: "We review, analyze, and refine strategies every month for better results." },
    { icon: "🔒", title: "Enterprise-Level Security", desc: "Your data and business information are safe with top security." },
  ];

  return (
    <section className="why">
      <div className="sec-header">
        <span className="eyebrow">+ WHY CHOOSE US</span>
        <h2>Why Businesses Partner With Us</h2>
      </div>
      <div className="why-grid">
        {points.map((pt, idx) => (
          <div className="why-card" key={idx}>
            <div className="why-icon">{pt.icon}</div>
            <h3>{pt.title}</h3>
            <p>{pt.desc}</p>
          </div>
        ))}
        <div className="why-card cta-card">
          <div className="why-icon">🚀</div>
          <h3>Ready to Scale?</h3>
          <p>Join 150+ businesses that trust us for their digital growth journey.</p>
        </div>
      </div>
    </section>
  );
}
