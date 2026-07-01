import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import bcrypt from 'bcryptjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// instance folder two levels up: projectRoot/instance
const instanceDir = path.join(__dirname, '..', '..', 'instance');
if (!fs.existsSync(instanceDir)) {
  fs.mkdirSync(instanceDir);
}
const dbPath = path.join(instanceDir, 'consultation.db');
export const db = new Database(dbPath);

// Initialise tables
db.exec(`
CREATE TABLE IF NOT EXISTS admin_users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS consultation_requests (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  request_id TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  company_name TEXT,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  whatsapp TEXT,
  website TEXT,
  business_location TEXT,
  business_type TEXT NOT NULL,
  industry TEXT,
  marketing_budget TEXT,
  project_start TEXT,
  preferred_contact TEXT NOT NULL,
  services_interested TEXT,
  project_description TEXT,
  status TEXT DEFAULT 'New',
  ip_address TEXT,
  user_agent TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS consultation_bookings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  booking_id TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  company_name TEXT,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  whatsapp TEXT,
  website TEXT,
  business_location TEXT,
  business_type TEXT NOT NULL,
  industry TEXT,
  company_size TEXT,
  monthly_revenue TEXT,
  services_interested TEXT,
  marketing_goals TEXT,
  estimated_budget TEXT,
  required_timeline TEXT,
  project_description TEXT,
  preferred_contact TEXT NOT NULL,
  preferred_contact_time TEXT,
  privacy_policy INTEGER DEFAULT 0,
  communication_consent INTEGER DEFAULT 0,
  booking_status TEXT DEFAULT 'Pending',
  ip_address TEXT,
  user_agent TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);
`);

// Seed default admin if not present
const adminUsername = 'admin';
const adminPassword = 'digital@123';
const adminExists = db.prepare('SELECT 1 FROM admin_users WHERE username = ?').get(adminUsername);
if (!adminExists) {
  const hash = bcrypt.hashSync(adminPassword, 10);
  db.prepare('INSERT INTO admin_users (username, password_hash) VALUES (?, ?)').run(adminUsername, hash);
}
