# 1. Wir laden den öffentlichen Schlüssel hoch, damit wir uns einloggen können
resource "aws_key_pair" "deployer" {
  key_name   = "deployer-key"
  public_key = var.ssh_public_key
}

# 2. Variable für den Schlüssel (kommt aus der Pipeline)
variable "ssh_public_key" {
  type = string
}

# 3. Security Group (Firewall)
resource "aws_security_group" "app_sg" {
  name        = "app_security_group"
  description = "Allow SSH and Next.js traffic"

  # SSH pour le déploiement
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Port de l'application Next.js
  ingress {
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Autoriser toute sortie (pour télécharger les packages npm)
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
# 4. Der Server
resource "aws_instance" "app_server" {
  ami           = "ami-0a628e1e89aaedf80" # Ubuntu 24.04 in Frankfurt (prüfen!)
  instance_type = "t3.small"
  key_name      = aws_key_pair.deployer.key_name
  vpc_security_group_ids = [aws_security_group.app_sg.id]

  # Script de configuration automatique
 user_data = <<-EOF
              #!/bin/bash
              apt-get update -y
              # Installation de Node.js 20
              curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
              apt-get install -y nodejs
              # Installation globale de PM2
              npm install -g pm2
              # On s'assure que le dossier de destination existe pour éviter des erreurs SCP
              mkdir -p /home/ubuntu/myapp
              chown ubuntu:ubuntu /home/ubuntu/myapp
              EOF
  tags = {
    Name = "NextJs-Server"
  }
}

# 5. Output IP (damit die Pipeline weiß, wohin der Code muss)
output "server_ip" {
  value = aws_instance.app_server.public_ip
}
