# 📘 Portfolio Autobuilder – Project Overview

## 🎯 Purpose

A system to turn any kind of project input — like a GitHub repo, a short blurb, or task list — into a well-structured, styled entry in a professional portfolio site. Built to be low-friction, automatable, and portable.

---

## 🧩 System Architecture

### 1. **Input Anything**

You provide:

- GitHub repo link
- Task list or short blurb
- Manually written Markdown

> Input can be added manually or automated later with scripts or n8n.

---

### 2. **Content Builder**

Converts inputs into structured Markdown entries:

- Title, date, tags
- Description, highlights
- Optional metadata: repo URL, screenshot, outcome

All entries live in the `content/` folder.

---

### 3. **Site Generator**

An Astro + Tailwind site renders entries into:

- Timeline view (or card/grid layout)
- Mobile responsive, dark/light mode
- Basic filtering or tag-based search (future)

---

### 4. **Deployment**

Deploy options:

- **GitHub Pages** (default, free)
- **Azure Static Web Apps** (optional, Terraform-friendly)
- **Self-hosted via Docker + Caddy** on Oracle Cloud

Uses GitHub Actions to:

- Rebuild the site on content change
- Auto-deploy to selected hosting target

---

### 5. **Optional Enhancements**

- Local preview via Docker
- Auto-generation from GitHub repos (via script or n8n)
- Integration with custom domains
- Screenshot embeds
- Filtering/search UI

---

## 🧱 Project Folder Structure

```bash
portfolio-autobuilder/
├── content/                 # All portfolio entries as .md files
├── site/                    # Astro site source
│   └── astro/
├── scripts/                # CLI tools (e.g., add-entry.ts)
├── .github/workflows/      # GitHub Actions for build + deploy
├── README.md
└── portfolio.config.json   # Optional global settings (name, theme)
```

---

## 🧪 Phase Plan

| Phase              | Focus                                               | Outcome                 |
| ------------------ | --------------------------------------------------- | ----------------------- |
| **1. MVP**         | Manual input → Markdown → Astro site → GitHub Pages | Live, simple portfolio  |
| **2. Automation**  | CLI tool to create entries                          | Consistent content fast |
| **3. Integration** | GitHub/n8n repo parser                              | Less manual effort      |
| **4. Hosting**     | Add Azure or Oracle-hosting option                  | Flexible deployment     |
| **5. Polish**      | Add screenshots, filtering, RSS                     | Fully featured site     |

---

## 🔧 Technologies

- **Astro** – Static site generator
- **Tailwind** – Styling framework
- **Markdown** – Content format
- **GitHub Pages** – Default hosting target
- **GitHub Actions** – CI/CD automation
- **Docker** – Local preview & Oracle VM deployment (optional)

---

## ✅ Next Steps

1. Scaffold Astro site with content collection
2. Add manual entry + build test
3. Set up GitHub Pages workflow
4. Expand with CLI + auto-generation later

