"use client";

import { useMemo, useState } from "react";
import BlogFilters from "./BlogFilters";
import ArticleCard from "./ArticleCard";
import BlogCategories from "./BlogCategories";
import { filterArticles, getAllTags } from "@/lib/blog";

export default function BlogList({ initialArticles = [], categoryCards = [] }) {
  const [filters, setFilters] = useState({});

  const categories = useMemo(
    () => [...new Set(initialArticles.map((a) => a.category))],
    [initialArticles]
  );
  const authors = useMemo(
    () => [...new Set(initialArticles.map((a) => a.author))],
    [initialArticles]
  );
  const tags = useMemo(() => getAllTags(), []);

  const list = useMemo(
    () => filterArticles(initialArticles, filters),
    [initialArticles, filters]
  );

  function handleCategorySelect(name) {
    setFilters((prev) => ({ ...prev, category: name }));
    document.getElementById("blog-articles")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="blog-list">
      <BlogCategories categories={categoryCards} onSelect={handleCategorySelect} />

      <div id="blog-articles" className="articles-section">
        <div className="section-header">
          <h2>Latest Articles</h2>
          <p>{list.length} article{list.length !== 1 ? "s" : ""} found</p>
        </div>

        <BlogFilters
          categories={categories}
          authors={authors}
          tags={tags}
          onChange={setFilters}
        />

        {list.length === 0 ? (
          <div className="no-results">
            <p>No articles match your filters. Try adjusting your search.</p>
          </div>
        ) : (
          <div className="articles-grid">
            {list.map((a) => (
              <ArticleCard key={a.id} article={a} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
