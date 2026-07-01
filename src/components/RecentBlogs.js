import Link from "next/link";
import { ARTICLES } from "@/data/articles";
import ArticleCard from "./ArticleCard";
import "../app/blog/blog.css";

export default function RecentBlogs() {
  // Find the specific articles requested by the user
  const targetSlugs = [
    "ai-in-digital-marketing-2026-playbook",
    "local-seo-guide-hyderabad",
    "google-ads-vs-facebook-ads",
    "how-to-improve-website-seo"
  ];

  const recentArticles = ARTICLES.filter(art => targetSlugs.includes(art.slug))
    // Maintain the order of targetSlugs if possible
    .sort((a, b) => targetSlugs.indexOf(a.slug) - targetSlugs.indexOf(b.slug));

  return (
    <section className="recent-blogs-section">
      <div className="process-header" style={{ marginBottom: "40px" }}>
        <div className="process-eyebrow">
          <span className="eyebrow-line"></span>
          OUR BLOG
          <span className="eyebrow-line"></span>
        </div>
        <h2 className="process-title">
          Latest Digital Marketing <span className="highlight-work">Insights</span>
        </h2>
        <p className="process-subtitle">
          Stay ahead of the curve with our expert guides, tools checklists, and performance marketing strategy guides.
        </p>
      </div>

      <div className="recent-blogs-grid">
        {recentArticles.map((article) => (
          <ArticleCard key={article.id} article={article} compact={true} />
        ))}
      </div>

      <div className="recent-blogs-cta">
        <Link href="/blog" className="read-all-blogs-btn">
          Read All Blogs <span className="arrow">→</span>
        </Link>
      </div>
    </section>
  );
}
