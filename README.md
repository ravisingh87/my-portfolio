🚀 iamravisingh.in | Personal Portfolio
A high-performance, secure portfolio built with Next.js, deployed on a hardened AWS Multi-Tier Architecture, and automated via GitHub Actions.

🏗️ The Infrastructure Architecture
This project is hosted on a professional-grade AWS setup designed for security and scalability:

Cloudflare (Edge Layer): Handles DNS, SSL (Flexible mode), and global CDN caching.

Bastion Host (Public Subnet): Acts as a secure gateway (Jump Box) and runs an Nginx Reverse Proxy to route traffic.

Private Instance (Private Subnet): Houses the Next.js application, completely isolated from the public internet.

NAT Gateway: Allows the Private Instance to securely fetch updates (npm install, git pull) without exposing incoming ports.

PM2: Process manager ensuring the Node.js application stays online 24/7.

🛠️ Tech Stack
Frontend: Next.js, Tailwind CSS, Framer Motion.

Deployment: AWS EC2 (Amazon Linux 2023), Nginx.

Automation: GitHub Actions (CI/CD).

Security: VPC, Private Subnets, Security Groups, Cloudflare WAF.

🚀 CI/CD Pipeline
The deployment is fully automated. On every push to the main branch, the following occurs:

Build & Lint: The code is validated and built on a GitHub Runner.

Secure Proxy Jump: GitHub connects to the Bastion Host to "hop" into the Private Instance via SSH.

Atomic Update: The latest code is pulled, dependencies are installed, and the project is rebuilt on the server.

Zero-Downtime Restart: PM2 reloads the application.

Cache Purge: A signal is sent to the Cloudflare API to purge the global edge cache, making changes live instantly.

💻 Local Development
Clone the repository:

Bash

git clone https://github.com/your-username/your-repo.git
Install dependencies:

Bash

npm install
Set up environment variables: Create a .env.local file with your EmailJS or API keys.

Run the development server:

Bash

npm run dev
🔒 Security Best Practices Implemented
Isolation: The app server has no Public IP; it is only reachable via the Bastion Host.

Least Privilege: Security Groups are locked down to only allow traffic from Cloudflare IPs and the Bastion Host.

Environment Safety: Sensitive API keys are managed via GitHub Secrets and manual .env injection on the private server.