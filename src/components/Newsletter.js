"use client";

import { useState } from "react";

export default function Newsletter({ id = "blog-newsletter" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email) return setStatus("error");
    setStatus("sending");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
        fetch("/api/analytics", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ event: "newsletter_signup", email, ok: true }),
        }).catch(() => {});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="newsletter-card" id={id}>
      <div className="newsletter-icon">📬</div>
      <h3>Never Miss a Marketing Insight</h3>
      <p>Get weekly tips, SEO updates, business insights, and free resources delivered to your inbox.</p>
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Email address"
        />
        <button className="btn-primary" disabled={status === "sending"} type="submit">
          {status === "sending" ? "Subscribing…" : "Subscribe"}
        </button>
      </form>

      {status === "success" && (
        <div className="newsletter-success">Thanks! Check your inbox to confirm your subscription.</div>
      )}
      {status === "error" && (
        <div className="newsletter-error">Subscription failed. Please try again.</div>
      )}

      <ul className="newsletter-benefits">
        <li>✓ Weekly Tips</li>
        <li>✓ SEO Updates</li>
        <li>✓ Business Insights</li>
        <li>✓ Free Resources</li>
      </ul>
    </div>
  );
}
