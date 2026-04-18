# AWS Infrastructure for Enterprise Full-Stack Project
# Provider: AWS

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.region
}

# 1. Network Layer (VPC)
module "vpc" {
  source = "./modules/vpc"
  
  vpc_cidr             = "10.0.0.0/16"
  public_subnets       = ["10.0.1.0/24", "10.0.2.0/24"]
  private_subnets      = ["10.0.10.0/24", "10.0.11.0/24"]
  availability_zones   = ["${var.region}a", "${var.region}b"]
}

# 2. Managed Kubernetes (EKS Cluster)
module "eks" {
  source = "./modules/eks"
  
  cluster_name    = "enterprise-stack-cluster"
  vpc_id          = module.vpc.vpc_id
  private_subnets = module.vpc.private_subnet_ids
  
  node_groups = {
    standard = {
      instance_types = ["t3.medium"]
      capacity_type  = "ON_DEMAND"
      min_size       = 2
      max_size       = 5
      desired_size   = 3
    }
  }
}

# 3. Database (RDS PostgreSQL)
module "rds" {
  source = "./modules/rds"
  
  db_name        = "enterprise_db"
  username       = "dbadmin"
  password       = var.db_password
  vpc_id         = module.vpc.vpc_id
  subnet_ids     = module.vpc.private_subnet_ids
  allowed_sg_id  = module.eks.node_security_group_id
}

# 4. Storage (S3 for Static Assets/Logs)
resource "aws_s3_bucket" "assets" {
  bucket = "enterprise-static-assets-${var.environment}"
}

# 5. Domain & SSL (Route53 & ACM)
module "dns_ssl" {
  source = "./modules/dns"
  
  domain_name = var.domain_name
}
