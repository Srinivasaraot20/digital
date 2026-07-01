"use client";

import { useState } from "react";

export default function BlogFilters({ categories = [], authors = [], tags = [], onChange }) {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [tag, setTag] = useState("");
  const [sort, setSort] = useState("latest");

  function update(field, value) {
    const next = { q, category, author, tag, sort, [field]: value };
    if (field === "q") setQ(value);
    if (field === "category") setCategory(value);
    if (field === "author") setAuthor(value);
    if (field === "tag") setTag(value);
    if (field === "sort") setSort(value);
    onChange?.(next);
  }

  return (
    <div className="blog-filters">
      <div className="bf-row">
        <div className="bf-search-wrap">
          <svg className="bf-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
          </svg>
          <input
            aria-label="Search articles"
            className="bf-search"
            placeholder="Search articles, topics or keywords..."
            value={q}
            onChange={(e) => update("q", e.target.value)}
          />
        </div>

        <select className="bf-select" value={category} onChange={(e) => update("category", e.target.value)} aria-label="Filter by category">
          <option value="">All Categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <select className="bf-select" value={author} onChange={(e) => update("author", e.target.value)} aria-label="Filter by author">
          <option value="">All Authors</option>
          {authors.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>

        <select className="bf-select" value={tag} onChange={(e) => update("tag", e.target.value)} aria-label="Filter by tag">
          <option value="">All Tags</option>
          {tags.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        <select className="bf-select" value={sort} onChange={(e) => update("sort", e.target.value)} aria-label="Sort articles">
          <option value="latest">Latest</option>
          <option value="popular">Most Viewed</option>
          <option value="trending">Trending</option>
          <option value="updated">Recently Updated</option>
          <option value="reading">Shortest Read</option>
        </select>
      </div>
    </div>
  );
}
