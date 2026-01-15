output "jenkins_public_ip" {
  value = aws_instance.jenkins.public_ip
}

output "app_public_ip" {
  value = aws_instance.app.public_ip
}

output "monitoring_public_ip" {
  value = aws_instance.monitoring.public_ip
}
