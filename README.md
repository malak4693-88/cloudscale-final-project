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

## Terraform Infrastructure

Student 2 created the Azure infrastructure using Terraform.

The Terraform files are stored in:

```text
terraform/
```

The files are:

- `providers.tf`: Configures Terraform to use the Azure provider.
- `variables.tf`: Stores reusable input values such as resource group name, location, ACR name, AKS name, and student names.
- `main.tf`: Creates the Azure Resource Group, Azure Container Registry, Azure Kubernetes Service, and AcrPull role assignment.
- `outputs.tf`: Displays important values such as the ACR login server and AKS cluster name.

## Azure Resources Created

Terraform creates:

- Resource Group
- Azure Container Registry with Basic SKU
- Azure Kubernetes Service with 2 nodes
- AKS node size: Standard_B2s
- AKS + ACR integration using AcrPull role assignment

## Terraform Commands

```bash
cd terraform
terraform init
terraform fmt
terraform validate
terraform plan
terraform apply
```

## AKS Verification

After Terraform apply, Student 2 connected kubectl to AKS using:

```bash
az aks get-credentials \
  --resource-group studentnames-final-aks-rg \
  --name studentnames-final-aks \
  --overwrite-existing
```

Then Student 2 verified the AKS nodes:

```bash
kubectl get nodes
```

The expected result is two nodes with status `Ready`.

## ACR Verification

Student 2 verified Azure Container Registry using:

```bash
az acr list --resource-group studentnames-final-aks-rg --output table
```

## AKS + ACR Integration

AKS can pull images from ACR because Terraform creates an `AcrPull` role assignment.

This means Kubernetes does not need `imagePullSecrets`.

## Student 2 Screenshots

Student 2 added:

- Screenshot 3: Terraform apply successful
- Screenshot 4: AKS nodes ready
- Screenshot 8: Azure Portal showing AKS + ACR
