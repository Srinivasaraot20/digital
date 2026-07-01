import sqlite3
import os
from pathlib import Path

# Path to SQLite DB (project-level data folder)
DB_PATH = Path(__file__).resolve().parents[2] / 'data' / 'blog.db'
DB_PATH.parent.mkdir(parents=True, exist_ok=True)

def get_connection():
    conn = sqlite3.connect(str(DB_PATH))
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_connection()
    c = conn.cursor()
    # Users (optional for comments/auth)
    c.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE NOT NULL,
            password_hash TEXT,
            is_admin INTEGER DEFAULT 0,
            name TEXT,
            avatar TEXT
        )
    ''')
    # Articles
    c.execute('''
        CREATE TABLE IF NOT EXISTS articles (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            slug TEXT UNIQUE NOT NULL,
            title TEXT NOT NULL,
            author_id INTEGER,
            category TEXT,
            tags TEXT,
            excerpt TEXT,
            content TEXT,
            featured_image TEXT,
            published_at TEXT,
            updated_at TEXT,
            views INTEGER DEFAULT 0,
            is_featured INTEGER DEFAULT 0,
            FOREIGN KEY(author_id) REFERENCES users(id)
        )
    ''')
    # Comments
    c.execute('''
        CREATE TABLE IF NOT EXISTS comments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            article_id INTEGER NOT NULL,
            author_name TEXT NOT NULL,
            author_email TEXT NOT NULL,
            rating INTEGER,
            comment TEXT NOT NULL,
            created_at TEXT DEFAULT (datetime('now')),
            approved INTEGER DEFAULT 0,
            FOREIGN KEY(article_id) REFERENCES articles(id)
        )
    ''')
    # Leads (lead‑gen form)
    c.execute('''
        CREATE TABLE IF NOT EXISTS leads (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT,
            message TEXT,
            created_at TEXT DEFAULT (datetime('now'))
        )
    ''')
    conn.commit()
    conn.close()

# Initialise database when module loads
init_db()
