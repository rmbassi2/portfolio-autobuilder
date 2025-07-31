---
title: "Azure Terraform Bootstrap for Client Projects"
date: "2025-04-13"
tags: ["terraform", "azure", "automation"]
repo: "https://github.com/yourusername/az-tf-bootstrap"
---

# 🧱 Azure Terraform Bootstrap for Client Projects

**Summary:**  
Built a reusable Terraform bootstrap script for onboarding new Azure clients with GitHub integration. The script provisions a resource group, Terraform state backend, service principal, and sets up a secure GitHub repo with preconfigured CI/CD workflows.

## 🚀 What I Did
- Wrote an idempotent **PowerShell bootstrap script**
- Created **Terraform state storage** (resource group + blob container)
- Generated **Azure service principal** scoped to the RG
- Set up **GitHub repo** with secrets and Terraform GitHub Actions workflow
- Included IP whitelist automation and Super Linter integration

## ⚙️ Tech Stack
- Terraform
- Azure CLI / PowerShell
- GitHub Actions
- Azure Storage
- Azure AD (Service Principal)

## 🧠 Challenges & Solutions
- **Idempotent scripting:** Ensured resources are reused if they already exist
- **OIDC constraints:** Workaround for limited OIDC support in non-main branches
- **Secure secret management:** Automated secret injection into GitHub

## 🔗 Links
- [Example GitHub Workflow](https://github.com/yourusername/az-tf-bootstrap/.github/workflows/main.yml)
