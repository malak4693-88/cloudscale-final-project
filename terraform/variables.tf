variable "resource_group_name" {
  description = "Name of the Azure Resource Group"
  type        = string
  default     = "malak-mayar-saja-final-aks-rg"
}

variable "location" {
  description = "Azure region"
  type        = string
  default     = "swedencentral"
}

variable "acr_name" {
  description = "Azure Container Registry name. Must be globally unique, lowercase, and without spaces."
  type        = string
  default     = "malakmayarsajafinalacr2026"
}

variable "aks_cluster_name" {
  description = "Name of the AKS cluster"
  type        = string
  default     = "malak-mayar-saja-final-aks"
}

variable "student_name" {
  description = "Student names used in Azure tags"
  type        = string
  default     = "Malak, Mayar, and Saja"
}
