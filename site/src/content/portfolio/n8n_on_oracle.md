---
title: "n8n Automation Server on Oracle Cloud"
date: "2025-07-27"
tags: ["automation", "docker", "devops"]
repo: "https://github.com/yourusername/n8n-on-oracle"
---

# ⚙️ n8n Automation Server on Oracle Cloud

**Summary:**  
Built a personal automation platform with n8n, self-hosted on Oracle Cloud. This enabled powerful no-code and low-code workflows like email parsing, GitHub automation, and daily reminders.

## 🚀 What I Did
- Deployed n8n in Docker on ARM-based Oracle VM
- Created Docker volumes and bind mounts for persistent config
- Integrated Caddy reverse proxy with custom domain + TLS
- Configured file upload behavior and ensured database cleanup
- Designed future-proofed automation workflows

## ⚙️ Tech Stack
- Oracle Cloud
- n8n (Docker)
- Caddy
- Custom SMTP via Resend
- n8n Workflows (e.g. GitHub issues, email triggers)

## 🧠 Challenges & Solutions
- **Upload path handling in n8n:** Avoided bloated `.n8n` folders by customizing outputs
- **Reverse proxy headers:** Simplified with Caddy's `header_up` config
- **Workflow cleanup:** Focused on stateless design to minimize persistent artifacts

## 🔗 Links
- [n8n.io](https://n8n.io)
