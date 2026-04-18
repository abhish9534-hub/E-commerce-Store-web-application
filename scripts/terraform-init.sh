#!/bin/bash
# Terraform Initialization & Plan
set -e
cd terraform
terraform init
terraform plan -out=tfplan
echo "Terraform plan created at terraform/tfplan"
cd ..
