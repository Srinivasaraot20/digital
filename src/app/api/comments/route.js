import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const COMMENTS_FILE = path.join(process.cwd(), "src/data/comments.json");

async function readComments() {
  try {
    const data = await fs.readFile(COMMENTS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeComments(comments) {
  await fs.writeFile(COMMENTS_FILE, JSON.stringify(comments, null, 2), "utf-8");
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, website, comment, rating, articleId, notify } = body;

    if (!name?.trim() || !email?.trim() || !comment?.trim() || !articleId) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }

    const entry = {
      id: Date.now(),
      articleId: Number(articleId),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      website: website?.trim() || "",
      comment: comment.trim(),
      rating: Number(rating) || 5,
      notify: Boolean(notify),
      status: "pending",
      isAdmin: false,
      replies: [],
      createdAt: new Date().toISOString(),
    };

    const comments = await readComments();
    comments.push(entry);
    await writeComments(comments);

    // Simulated email notifications (log in dev; wire to email service in production)
    console.log(`[Comment] User confirmation sent to ${entry.email}`);
    console.log(`[Comment] Admin notification for article ${entry.articleId}`);

    return NextResponse.json({ ok: true, id: entry.id, message: "Comment submitted for review" }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const articleId = searchParams.get("articleId");
    const all = await readComments();

    let filtered = all.filter((c) => c.status === "approved");
    if (articleId) {
      filtered = filtered.filter((c) => c.articleId === Number(articleId));
    }

    return NextResponse.json({ ok: true, comments: filtered });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
