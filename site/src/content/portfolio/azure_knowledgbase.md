---
title: "Personal Knowledgebase with Astro and Azure Static Web Apps"
date: "2025-07-10"
tags: ["astro", "azure", "documentation"]
repo: "https://github.com/yourusername/astro-knowledgebase"
---

# 🧠 Personal Knowledgebase with Astro and Azure Static Web Apps

**Summary:**  
Built a private, self-documented knowledgebase using Astro v4+ and deployed it to Azure Static Web Apps. Designed to help resume paused or abandoned projects by capturing architecture, setup steps, and design choices in a searchable, Git-backed system. Protected access using Tailscale or Entra ID.

## 🚀 What I Did
- Created a structured Astro site with Markdown-backed content
- Designed a clean, responsive layout using **TailwindCSS**
- Wrote documentation for multiple self-hosted and client projects
- Integrated tag-based filtering and semantic URL routing
- Deployed to **Azure Static Web Apps** with **GitHub Actions**
- Planned optional private access via **Tailscale IP filtering** or **Entra ID**

## ⚙️ Tech Stack
- Astro v4
- TailwindCSS
- Azure Static Web Apps
- GitHub Actions
- Markdown
- (Optional) Entra ID or Tailscale for access control

## 🧠 Challenges & Solutions
- **Protecting a static site:** Considered two options:  
  - Tailscale with an IP-restricted Azure Static Web App  
  - Entra ID auth with private routes  
- **Tag structure for docs:** Created a standard for tagging each page by tech stack, status (e.g. archived, active), and domain (cloud, frontend, automation, etc.)
- **Avoiding staleness:** Focused on documenting only completed steps instead of future plans to reduce friction

## 🗂️ Future Enhancements
- Add search (Algolia or client-side fuzzy search)
- Version control for doc pages (auto pull Git commit messages)
- Visual timeline of project milestones

## 🔗 Links
- [Astro Docs](https://docs.astro.build)
- [Azure Static Web Apps](https://learn.microsoft.com/en-us/azure/static-web-apps/)
