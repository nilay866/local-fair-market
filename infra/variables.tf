variable "project_name" {
  description = "Project tag name"
  type        = string
  default     = "local-fair-market"
}

variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "ap-south-1"
}

variable "key_name" {
  description = "ijk"
  type        = string
}

variable "my_ip" {
  description = "103.173.244.224/32"
  type        = string
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t3.micro"
}
