variable "region" {
  description = "AWS Deployment Region"
  type        = string
  default     = "us-east-1"
}

variable "environment" {
  description = "Environment Name (prod/stg/dev)"
  type        = string
  default     = "prod"
}

variable "db_password" {
  description = "Password for RDS Instance"
  type        = string
  sensitive   = true
}

variable "domain_name" {
  description = "Base domain for the application"
  type        = string
}
