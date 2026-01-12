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
  name = "app_sg"
  ingress { # SSH erlauben
    from_port = 22
    to_port   = 22
    protocol  = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress { # Web erlauben
    from_port = 80
    to_port   = 80
    protocol  = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress { # Alles raus erlauben
    from_port = 0
    to_port   = 0
    protocol  = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# 4. Der Server
resource "aws_instance" "app_server" {
  ami           = "ami-0a628e1e89aaedf80" # Ubuntu 24.04 in Frankfurt (prüfen!)
  instance_type = "t3.micro"
  key_name      = aws_key_pair.deployer.key_name
  vpc_security_group_ids = [aws_security_group.app_sg.id]

  user_data_replace_on_change = true

  # Installation von Python beim Start
  user_data = <<-EOF
              #!/bin/bash
              # FORCE REBUILD v5 (Version hochzählen erzwingt Neubau)
              sleep 30
              
              # --- 1. Swap Speicher anlegen (WICHTIG gegen Abstürze!) ---
              fallocate -l 4G /swapfile
              chmod 600 /swapfile
              mkswap /swapfile
              swapon /swapfile
              echo '/swapfile none swap sw 0 0' | tee -a /etc/fstab
              
              # --- 2. Installationen ---
              apt-get update -y
              apt-get install -y curl unzip
              curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
              apt-get install -y nodejs
              
              echo "Installation fertig!" > /home/ubuntu/install_done.txt
              EOF

  tags = {
    Name = "PipelineServer"
  }
}

# 5. Output IP (damit die Pipeline weiß, wohin der Code muss)
output "server_ip" {
  value = aws_instance.app_server.public_ip
}