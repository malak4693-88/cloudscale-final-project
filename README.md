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

## Sajaa Work

Sajaa created:
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

Malak created the Azure infrastructure using Terraform.

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

After Terraform apply, Malak connected kubectl to AKS using:

```bash
az aks get-credentials \
  --resource-group studentnames-final-aks-rg \
  --name studentnames-final-aks \
  --overwrite-existing
```

Then Malak verified the AKS nodes:

```bash
kubectl get nodes
```

The expected result is two nodes with status `Ready`.

## ACR Verification

Malak verified Azure Container Registry using:

```bash
az acr list --resource-group studentnames-final-aks-rg --output table
```

## AKS + ACR Integration

AKS can pull images from ACR because Terraform creates an `AcrPull` role assignment.

This means Kubernetes does not need `imagePullSecrets`.

## Malak Screenshots

Malak added:

- Screenshot 3: Terraform apply successful
- Screenshot 4: AKS nodes ready
- Screenshot 8: Azure Portal showing AKS + ACR

## Kubernetes Deployment

Mayar created the Kubernetes deployment files.

The Kubernetes files are stored in:

```text
k8s/
```

The files are:

- `deployment.yaml`: Creates 3 replicas of the application and uses the `/health` endpoint for readiness and liveness probes.
- `service.yaml`: Exposes the application using a LoadBalancer service.

## Kubernetes Requirements

The deployment includes:

- 3 replicas
- Image from Azure Container Registry
- Container port 3000
- Readiness probe using `/health`
- Liveness probe using `/health`

## GitHub Actions CI/CD

Mayar created the GitHub Actions workflow file:

```text
.github/workflows/ci-cd.yml
```

The workflow performs:

- Docker image build
- Health endpoint test
- Push image to Azure Container Registry
- Deploy application to Azure Kubernetes Service
- Manual approval before production deployment

## GitHub Secrets

The workflow uses these GitHub Secrets:

- `AZURE_CLIENT_ID`
- `AZURE_CLIENT_SECRET`
- `AZURE_TENANT_ID`
- `AZURE_SUBSCRIPTION_ID`

These secrets allow GitHub Actions to authenticate to Azure securely.

## GitHub Variables

The workflow uses these GitHub Variables:

- `ACR_NAME`
- `RESOURCE_GROUP_NAME`
- `AKS_CLUSTER_NAME`
- `IMAGE_NAME`

## Manual Approval Gate

A GitHub Environment called `production` was created.

The deployment job uses:

```yaml
environment: production
```

This makes GitHub Actions wait for manual approval before deploying to AKS.

## Accessing the Application

After deployment, the external IP can be found using:

```bash
kubectl get service cloudscale-final-service
```

Then open:

```text
http://EXTERNAL-IP
```

## Mayar Screenshots

Mayar added:

- Screenshot 2: Image in ACR
- Screenshot 5: Application running in browser
- Screenshot 6: GitHub Actions workflow successful
- Screenshot 7: GitHub Actions approval gate

## Cleanup

After submitting the project and saving all screenshots, delete Azure resources to avoid charges:

```bash
cd terraform
terraform destroy
```

Do not run this command before final submission.

