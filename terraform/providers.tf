terraform {
  required_version = ">= 1.5.0"

  backend "azurerm" {
    resource_group_name  = "malak-mayar-saja-final-tfstate-rg"
    storage_account_name = "malakmayarsajatfstate26"
    container_name       = "tfstate"
    key                  = "cloudscale-final-project.tfstate"
  }

  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.100"
    }
  }
}

provider "azurerm" {
  features {}

  skip_provider_registration = true
}