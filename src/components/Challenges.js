export default function Challenges() {
  const challenges = [
    "Poor Website",
    "No SEO Strategy",
    "No Lead Generation",
    "Low Conversion Rates",
    "Ineffective Advertising",
    "No Automation",
  ];

  const solutions = [
    "SEO Growth Systems",
    "AI Automation",
    "Google Ads Management",
    "Meta Ads Campaigns",
    "Conversion-Focused Websites",
    "CRM Integrations",
  ];

  return (
    <section className="challenges">
      <span className="eyebrow">WHY MOST BUSINESSES FAIL TO GROW ONLINE</span>
      <h2>Common Challenges vs Our Solutions</h2>
      <div className="chal-wrap">
        <div className="chal-box red">
          <h3>⚠️ Common Challenges</h3>
          {challenges.map((item, idx) => (
            <div className="chal-item" key={idx}>
              <span className="dot bad">✕</span> {item}
            </div>
          ))}
        </div>
        <div className="vs-badge">VS</div>
        <div className="chal-box green">
          <h3>✅ Our Solutions</h3>
          {solutions.map((item, idx) => (
            <div className="chal-item" key={idx}>
              <span className="dot good">✓</span> {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
