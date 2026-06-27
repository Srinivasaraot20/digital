export default function Industries() {
  const industries = [
    { icon: "🏠", title: "Real Estate", desc: "Generate qualified property leads and close more deals." },
    { icon: "❤️", title: "Healthcare", desc: "Increase patient appointments and grow your practice." },
    { icon: "🎓", title: "Education", desc: "Boost student admissions and increase inquiries." },
    { icon: "🛍️", title: "Retail", desc: "Increase store footfall and boost in-store sales." },
    { icon: "🍽️", title: "Restaurants", desc: "Get more footfall and food orders for your restaurant." },
    { icon: "🏗️", title: "Construction", desc: "Generate quality B2B leads with more projects." },
    { icon: "💻", title: "Technology", desc: "Generate high-quality B2B leads to accelerate your business." },
    { icon: "💰", title: "Finance", desc: "Get more leads and increase customer trust." },
  ];

  return (
    <section className="industries">
      <div className="sec-header">
        <span className="eyebrow">INDUSTRIES WE SERVE</span>
        <h2>Industry-Specific Growth Strategies</h2>
      </div>
      <div className="ind-grid">
        {industries.map((ind, idx) => (
          <div className="ind-card" key={idx}>
            <span className="ind-icon">{ind.icon}</span>
            <h3>{ind.title}</h3>
            <p>{ind.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
