import BlogHero from "@/components/BlogHero";
import FeaturedArticle from "@/components/FeaturedArticle";
import Newsletter from "@/components/Newsletter";
import BlogList from "@/components/BlogList";
import BookmarksPanel from "@/components/BookmarksPanel";
import SidebarTrending from "@/components/SidebarTrending";
import RelatedServices from "@/components/RelatedServices";
import CTA from "@/components/CTA";
import { ARTICLES } from "@/data/articles";
import { getFeaturedArticle, getCategoryCards, getTrendingSidebar } from "@/lib/blog";
import "./blog.css";

export default function BlogPage() {
  const featured = getFeaturedArticle();
  const categoryCards = getCategoryCards();
  const trending = getTrendingSidebar();

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Digital Marketing TenX Blog",
    description: "Expert digital marketing, SEO, and business growth insights",
    url: "https://digitalmarketingtenx.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Digital Marketing TenX",
      logo: { "@type": "ImageObject", url: "https://digitalmarketingtenx.com/logo.png" },
    },
    blogPost: ARTICLES.slice(0, 10).map((a) => ({
      "@type": "BlogPosting",
      headline: a.title,
      url: `https://digitalmarketingtenx.com/blog/${a.slug}`,
      datePublished: a.date,
      author: { "@type": "Person", name: a.author },
    })),
  };

  return (
    <main className="blog-page-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <BlogHero />

      <section className="blog-wrap">
        <div className="blog-main">
          <FeaturedArticle article={featured} />
          <BlogList initialArticles={ARTICLES} categoryCards={categoryCards} />
        </div>

        <aside className="blog-sidebar">
          <SidebarTrending data={trending} />
          <div id="blog-newsletter">
            <Newsletter />
          </div>
          <BookmarksPanel />
        </aside>
      </section>

      <RelatedServices />
      <CTA />
    </main>
  );
}
