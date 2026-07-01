"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function getBookmarks() {
  try {
    const raw = localStorage.getItem("dmtenx_bookmarks");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function getLikes() {
  try {
    const raw = localStorage.getItem("dmtenx_likes");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function toggleBookmark(id) {
  const list = getBookmarks();
  const exists = list.includes(id);
  const updated = exists ? list.filter((x) => x !== id) : [...list, id];
  localStorage.setItem("dmtenx_bookmarks", JSON.stringify(updated));
  return !exists;
}

function toggleLike(id) {
  const list = getLikes();
  const exists = list.includes(id);
  const updated = exists ? list.filter((x) => x !== id) : [...list, id];
  localStorage.setItem("dmtenx_likes", JSON.stringify(updated));
  return !exists;
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function ArticleCard({ article, compact = false }) {
  const [bookmarked, setBookmarked] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(article.likes || 0);
  const [shareOpen, setShareOpen] = useState(false);

  useEffect(() => {
    setBookmarked(getBookmarks().includes(article.id));
    setLiked(getLikes().includes(article.id));
  }, [article.id]);

  function onToggleBookmark(e) {
    e.preventDefault();
    e.stopPropagation();
    const now = toggleBookmark(article.id);
    setBookmarked(now);
    fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event: "bookmark", articleId: article.id, bookmarked: now }),
    }).catch(() => {});
  }

  function onToggleLike(e) {
    e.preventDefault();
    e.stopPropagation();
    const now = toggleLike(article.id);
    setLiked(now);
    setLikeCount((c) => (now ? c + 1 : Math.max(c - 1, 0)));
    fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event: "like", articleId: article.id, liked: now }),
    }).catch(() => {});
  }

  function onShare(e) {
    e.preventDefault();
    e.stopPropagation();
    const url = `${window.location.origin}/blog/${article.slug}`;
    if (navigator.share) {
      navigator.share({ title: article.title, url }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(url);
      setShareOpen(true);
      setTimeout(() => setShareOpen(false), 2000);
    }
  }

  return (
    <article className={`article-card ${compact ? "article-card-compact" : ""}`}>
      <Link href={`/blog/${article.slug}`} className="article-card-link">
        <div className="article-media">
          {article.image && (
            <img
              src={article.image}
              alt={article.title}
              className="article-img"
              loading="lazy"
            />
          )}
        </div>
        <div className="article-body">
          <div className="article-meta-top">
            <span className="cat">{article.category}</span>
            <span className="views">{article.views?.toLocaleString()} views</span>
          </div>
          <h3>{article.title}</h3>
          {!compact && <p className="desc">{article.summary}</p>}
          <div className="meta">
            {article.author} · {formatDate(article.date)} · {article.readingTime} min
          </div>
        </div>
      </Link>
      <div className="article-actions">
        <button
          type="button"
          className={`action-btn ${liked ? "active" : ""}`}
          onClick={onToggleLike}
          aria-pressed={liked}
          aria-label="Like article"
        >
          {liked ? "❤️" : "🤍"} {likeCount}
        </button>
        <button type="button" className="action-btn" onClick={onShare} aria-label="Share article">
          {shareOpen ? "✓ Copied" : "↗ Share"}
        </button>
        <button
          type="button"
          className={`action-btn ${bookmarked ? "active" : ""}`}
          onClick={onToggleBookmark}
          aria-pressed={bookmarked}
          aria-label="Bookmark article"
        >
          {bookmarked ? "★ Saved" : "☆ Save"}
        </button>
        <Link href={`/blog/${article.slug}`} className="read-more-link">
          Read More →
        </Link>
      </div>
    </article>
  );
}
