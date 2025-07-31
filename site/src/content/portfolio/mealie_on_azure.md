---
title: "Mealie on Azure Container Apps"
date: "2025-03-28"
tags: ["containers", "azure", "devops"]
repo: "https://github.com/yourusername/mealie-aca"
---

# 🍴 Mealie on Azure Container Apps

**Summary:**  
Containerized Mealie and deployed it to **Azure Container Apps** with persistent PostgreSQL and Azure Files integration. This setup enabled scalable app hosting with automatic HTTPS ingress and isolated storage.

## 🚀 What I Did
- Deployed **PostgreSQL** with Azure-managed instance
- Provisioned Azure File share and mounted it via `azureFile` volume
- Built **Docker Compose**-compatible container definitions for ACA
- Set up **Terraform modules** for automated deployment and cleanup
- Configured HTTPS ingress with custom domains

## ⚙️ Tech Stack
- Azure Container Apps
- Azure PostgreSQL
- Azure Files
- Terraform
- Docker

## 🧠 Challenges & Solutions
- **Azure Files in ACA:** Used `volumeMounts` + `azureFile` config for durable storage
- **Image compatibility:** Verified builds for Linux x64
- **PostgreSQL access:** Managed firewall rules and connection strings through Bicep/Terraform

## 🔗 Links
- [Mealie](https://docs.mealie.io/)
