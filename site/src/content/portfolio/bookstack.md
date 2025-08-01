---
title: "Self-Hosted BookStack Knowledgebase on Oracle Cloud"
date: "2025-07-31"
tags: ["bookstack", "oracle cloud", "docker", "reverse proxy", "caddy"]
repo: "" # (Add your infra repo if public)
---

# 📚 Self-Hosted BookStack Knowledgebase on Oracle Cloud

**Summary:**  
Deployed a personal knowledgebase using [BookStack](https://www.bookstackapp.com/) on an Oracle Cloud Ampere VM. Used Docker Compose for orchestration, LinuxServer.io images for maintainability, and Caddy as a secure HTTPS reverse proxy. Designed for easy backups, fast recovery, and long-term sustainability—giving me full control and ownership of my knowledge system.

## 🚀 What I Did
- Provisioned an Oracle Cloud Always Free VM (Ampere A1) running Ubuntu
- Built a BookStack stack with **Docker Compose** (BookStack app + MariaDB)
- Isolated and persisted all data/configs to `/mnt/data/docker/bookstack`
- Integrated with an existing **Caddy** reverse proxy for HTTPS and custom domains
- Connected Caddy and BookStack with a shared Docker network (`caddy_proxy`)
- Documented setup for repeatability and quick recovery

## ⚙️ Tech Stack
- BookStack (LinuxServer.io image)
- MariaDB (LinuxServer.io image)
- Docker & Docker Compose
- Oracle Cloud Free Tier (Ampere VM)
- Caddy (HTTPS reverse proxy)
- Domain + DNS

## 🧠 Challenges & Solutions
- **Secure reverse proxying:** Used Caddy and Docker network aliases to ensure BookStack was never directly exposed, only accessible through HTTPS.
- **Persistent, portable storage:** All config and data folders are mapped to a dedicated volume, making backups and migrations trivial.
- **Easy recovery:** The full stack can be redeployed in minutes using `docker compose up -d`, restoring all knowledgebase data from backup if needed.

## 🗂️ Future Enhancements
- Automate knowledgebase article creation via API or workflow tools (n8n)
- Integrate SSO (OAuth/Entra ID) for easier admin access
- Build regular, automated backup scripts to cloud storage

## 🔗 Links
- [BookStack Docs](https://www.bookstackapp.com/docs/)
- [Caddy Reverse Proxy](https://caddyserver.com/docs/)
- [LinuxServer.io BookStack](https://docs.linuxserver.io/images/docker-bookstack/)
