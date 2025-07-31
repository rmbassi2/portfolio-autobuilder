---
title: "Self-Hosted Mealie on Oracle Cloud"
date: "2025-07-26"
tags: ["self-hosting", "cloud", "docker"]
repo: "https://github.com/yourusername/mealie-on-oracle"
---

# 🍽️ Self-Hosted Mealie on Oracle Cloud

**Summary:**  
Deployed a full Mealie recipe manager stack on an Oracle Cloud Ampere VM using Docker and Caddy. This project showcased secure, lightweight app hosting using Oracle's free tier and efficient reverse proxying.

## 🚀 What I Did
- Provisioned Oracle Cloud Ampere VM using Terraform
- Hardened the instance (firewall, fail2ban, SSH config)
- Set up Docker environment with volume separation on `/mnt/data`
- Deployed Mealie with PostgreSQL and Azure File-compatible persistent storage
- Reverse-proxied traffic through Caddy with HTTPS and subdomain routing

## ⚙️ Tech Stack
- Oracle Cloud Free Tier
- Ubuntu Server (Ampere)
- Docker Compose
- Caddy
- Mealie
- PostgreSQL
- fail2ban + ufw

## 🧠 Challenges & Solutions
- **Caddy config for subdomain routing:** Solved with flexible Docker networking
- **Resend SMTP integration:** Switched from SendGrid after pricing changes
- **ARM image compatibility:** Verified container support for Ampere architecture

## 🔗 Links
- [Mealie Docs](https://docs.mealie.io/)
