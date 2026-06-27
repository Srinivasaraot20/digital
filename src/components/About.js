import Image from "next/image";

export default function About() {
  return (
    <section className="about">
      {/* Left side dashboard metrics */}
      <div className="about-dashboard">
        <div className="db-metrics-row">
          <div className="db-metric-card">
            <div className="db-metric-label">WEBSITE TRAFFIC</div>
            <div className="db-metric-val">
              25.8K <span className="db-metric-up">+18.2%</span>
            </div>
          </div>
          <div className="db-metric-card">
            <div className="db-metric-label">LEADS GENERATED</div>
            <div className="db-metric-val">
              8.6K <span className="db-metric-up">+24.4%</span>
            </div>
          </div>
        </div>
        <div className="db-chart-card">
          <div className="db-chart-bars">
            <div className="db-bar bar-1"></div>
            <div className="db-bar bar-2"></div>
            <div className="db-bar bar-3"></div>
            <div className="db-bar bar-4"></div>
            <div className="db-bar bar-5"></div>
          </div>
          <div className="db-badge-card">
            <div className="db-badge-val">10X</div>
            <div className="db-badge-label">GROWTH</div>
          </div>
        </div>
      </div>

      {/* Right side text column */}
      <div className="about-text">
        <span className="eyebrow" style={{ display: "inline-block", color: "#ff6b00", fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>
          ABOUT US
        </span>
        <h2 style={{ fontSize: "36px", fontWeight: "800", color: "#0f172a", marginBottom: "16px", lineHeight: "1.25" }}>
          Your Trusted Digital Growth Partner
        </h2>
        <p style={{ fontSize: "15px", color: "#64748b", lineHeight: "1.8", marginBottom: "28px" }}>
          We combine creativity, technology, and marketing expertise to help businesses grow online. From startups to established brands, we create customized marketing solutions that deliver measurable results.
        </p>

        <div className="about-features" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px 30px", textAlign: "left" }}>
          <div className="ab-feat" style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div className="ab-feat-icon-wrap" style={{
              width: "84px",
              height: "84px",
              borderRadius: "50%",
              padding: "2.5px",
              background: "linear-gradient(135deg, #ff6b00 0%, #ffedd5 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0
            }}>
              <div style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
                background: "#fff",
                position: "relative"
              }}>
                <Image 
                  src="/feat-data-driven.png" 
                  alt="Data Driven Strategies" 
                  fill
                  sizes="84px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div>
              <div className="ab-feat-title" style={{ fontWeight: "800", fontSize: "15.5px", color: "#0f172a" }}>Data Driven Strategies</div>
              <div style={{ width: "24px", height: "3px", borderRadius: "2px", background: "#ff6b00", margin: "6px 0" }}></div>
              <div className="ab-feat-sub" style={{ fontSize: "13px", color: "#64748b", lineHeight: "1.5" }}>Analytics-backed decisions that deliver measurable results.</div>
            </div>
          </div>

          <div className="ab-feat" style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div className="ab-feat-icon-wrap" style={{
              width: "84px",
              height: "84px",
              borderRadius: "50%",
              padding: "2.5px",
              background: "linear-gradient(135deg, #ec4899 0%, #fce7f3 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0
            }}>
              <div style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
                background: "#fff",
                position: "relative"
              }}>
                <Image 
                  src="/feat-creative-solutions.png" 
                  alt="Creative Marketing Solutions" 
                  fill
                  sizes="84px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div>
              <div className="ab-feat-title" style={{ fontWeight: "800", fontSize: "15.5px", color: "#0f172a" }}>Creative Marketing Solutions</div>
              <div style={{ width: "24px", height: "3px", borderRadius: "2px", background: "#ec4899", margin: "6px 0" }}></div>
              <div className="ab-feat-sub" style={{ fontSize: "13px", color: "#64748b", lineHeight: "1.5" }}>Unique brand stories and campaigns that connect and inspire.</div>
            </div>
          </div>

          <div className="ab-feat" style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div className="ab-feat-icon-wrap" style={{
              width: "84px",
              height: "84px",
              borderRadius: "50%",
              padding: "2.5px",
              background: "linear-gradient(135deg, #2563eb 0%, #dbeafe 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0
            }}>
              <div style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
                background: "#fff",
                position: "relative"
              }}>
                <Image 
                  src="/feat-business-growth.png" 
                  alt="Business Growth Focused" 
                  fill
                  sizes="84px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div>
              <div className="ab-feat-title" style={{ fontWeight: "800", fontSize: "15.5px", color: "#0f172a" }}>Business Growth Focused</div>
              <div style={{ width: "24px", height: "3px", borderRadius: "2px", background: "#2563eb", margin: "6px 0" }}></div>
              <div className="ab-feat-sub" style={{ fontSize: "13px", color: "#64748b", lineHeight: "1.5" }}>ROI-first approach that accelerates growth and maximizes impact.</div>
            </div>
          </div>

          <div className="ab-feat" style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div className="ab-feat-icon-wrap" style={{
              width: "84px",
              height: "84px",
              borderRadius: "50%",
              padding: "2.5px",
              background: "linear-gradient(135deg, #7c3aed 0%, #f3e8ff 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0
            }}>
              <div style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
                background: "#fff",
                position: "relative"
              }}>
                <Image 
                  src="/feat-expert-team.png" 
                  alt="Dedicated Expert Team" 
                  fill
                  sizes="84px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div>
              <div className="ab-feat-title" style={{ fontWeight: "800", fontSize: "15.5px", color: "#0f172a" }}>Dedicated Expert Team</div>
              <div style={{ width: "24px", height: "3px", borderRadius: "2px", background: "#7c3aed", margin: "6px 0" }}></div>
              <div className="ab-feat-sub" style={{ fontSize: "13px", color: "#64748b", lineHeight: "1.5" }}>Experienced professionals committed to your success, always by your side.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
