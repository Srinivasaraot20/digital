export default function Testimonials() {
  const testimonials = [
    {
      type: "card",
      stars: "★★★★★",
      text: "Digital Marketing TenX transformed our business. Our website traffic increased by 450%, and leads by 300% in just 4 months!",
      avatar: "R",
      avatarColor: "#ff6b00",
      name: "Rahul Sharma",
      role: "Real Estate Business"
    },
    {
      type: "video"
    },
    {
      type: "card",
      stars: "★★★★★",
      text: "Amazing team! They understand our needs and deliver results beyond expectations. Highly recommended.",
      avatar: "N",
      avatarColor: "#4267B2",
      name: "Neha Patel",
      role: "Healthcare Clinic"
    },
    {
      type: "card",
      stars: "★★★★★",
      text: "Our B2B lead generation campaign exceeded all targets. 10/10 recommend Digital Marketing TenX for scaling!",
      avatar: "P",
      avatarColor: "#8b5cf6",
      name: "Priya Nair",
      role: "Tech Startup Founder"
    },
    {
      type: "card",
      stars: "★★★★★",
      text: "WhatsApp Automation saved us hours of manual follow-ups. Our conversion rate boosted by 40% in weeks.",
      avatar: "V",
      avatarColor: "#10b981",
      name: "Vikram Rao",
      role: "E-commerce Brand"
    },
    {
      type: "card",
      stars: "★★★★★",
      text: "Their Google Ads strategy helped us scale our admissions during peak admission season. High ROI!",
      avatar: "A",
      avatarColor: "#f59e0b",
      name: "Amit Verma",
      role: "Edu Group Director"
    }
  ];

  const doubleList = [...testimonials, ...testimonials];

  return (
    <section className="testimonials">
      <div className="sec-header">
        <span className="eyebrow">+ TESTIMONIALS</span>
        <h2>What Our Clients Say</h2>
      </div>
      <div className="testimonials-track-container">
        <div className="testimonials-track">
          {doubleList.map((item, idx) => {
            if (item.type === "video") {
              return (
                <div className="testi-video" key={idx}>
                  <div className="play-btn">▶</div>
                </div>
              );
            }
            return (
              <div className="testi-card" key={idx}>
                <div className="google-badge">
                  <div className="g-logo">G</div>
                  <span style={{ fontSize: "12px", fontWeight: "700", color: "#555" }}>Google</span>
                </div>
                <div className="testi-stars">{item.stars}</div>
                <p className="testi-text">{item.text}</p>
                <div className="testi-user">
                  <div 
                    className="testi-avatar" 
                    style={item.avatarColor ? { backgroundColor: item.avatarColor } : {}}
                  >
                    {item.avatar}
                  </div>
                  <div>
                    <div className="testi-name">{item.name}</div>
                    <div className="testi-role">{item.role}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
