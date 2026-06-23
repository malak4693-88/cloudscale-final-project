# cloudscale-final-project
A DevOps final project that containerizes a web application with Docker, stores the image in Azure Container Registry, provisions AKS and ACR using Terraform, and deploys the application to Azure Kubernetes Service using GitHub Actions with a manual production approval gate.


# CloudScale Final Project

## Project Description
This project deploys a containerized web application to Azure Kubernetes Service using DevOps tools and cloud deployment best practices.

The project uses:
- Docker
- Azure Container Registry
- Azure Kubernetes Service
- Terraform
- Kubernetes Manifests
- GitHub Actions
- Manual approval gate
- GitHub Secrets

## Application Description
The web application is called CloudScale Final Project dashboard.

The application displays:
- Docker Image: Running
- Azure Container Registry: Image Stored
- Azure Kubernetes Service: Deployed
- Terraform: Infrastructure Created
- GitHub Actions: CI/CD Enabled
- Environment: Production

The app also includes a /health endpoint. This endpoint is required for Kubernetes readiness and liveness probes.

## Student 1 Work

Student 1 created:
- Web application
- Custom dashboard message with team names (Saja Ghazzal, Mayar, Malak)
- /health endpoint
- Dockerfile
- Docker local build
- Docker local run test

## Docker Build
```bash
docker build -t cloudscale-final-app:local .