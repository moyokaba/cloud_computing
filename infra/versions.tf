terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  # Hier sagen wir Terraform: Speichere den State im Bucket!
  backend "s3" {
    bucket = "mycloudprojekt" # <--- DEIN BUCKET NAME HIER
    key    = "seminar/terraform.tfstate"
    region = "eu-central-1"
  }
}

provider "aws" {
  region = "eu-central-1"
}