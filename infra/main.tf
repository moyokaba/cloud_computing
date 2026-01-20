

# 2. Security Group (AVEC CORRECTIF LIFECYCLE)
resource "aws_security_group" "app_sg" {
  name        = "app_security_group_v2" # Changer le nom aide parfois à débloquer
  description = "Allow SSH and Next.js traffic"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress { # Alles raus erlauben
    from_port = 0
    to_port   = 0
    protocol  = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # EMPECHE L'ERREUR DEPENDENCY VIOLATION
  lifecycle {
    create_before_destroy = true
  }
}

# 1. Clé SSH
resource "aws_key_pair" "deployer" {
  key_name   = "deployer-key"
  public_key = var.ssh_public_key
}

variable "ssh_public_key" {
  type = string
}

# 3. L'Instance EC2
resource "aws_instance" "app_server" {
  ami                    = "ami-0a628e1e89aaedf80" 
  instance_type          = "t3.small"
  key_name               = aws_key_pair.deployer.key_name
  vpc_security_group_ids = [aws_security_group.app_sg.id] # Liaison cruciale

  user_data = <<-EOF
              #!/bin/bash
              apt-get update -y
              curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
              apt-get install -y nodejs
              npm install -g pm2
              mkdir -p /home/ubuntu/myapp
              chown ubuntu:ubuntu /home/ubuntu/myapp
              EOF

  tags = { Name = "NextJs-Server" }
}

output "server_ip" {
  value = aws_instance.app_server.public_ip
}
