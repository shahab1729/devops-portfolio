export const portfolioData = {
  personalInfo: {
    name: "Shahab Shaikh",
    title: "Aspiring DevOps Engineer",
    subtitle: "Building reliable infrastructure, automating deployments, and learning cloud-native technologies.",
    location: "Remote / Open to Relocation",
    email: "shahabshaikh70@gmail.com",
    github: "https://github.com/shahab1729",
    linkedin: "https://www.linkedin.com/in/shahab-shaikh",
    bio: "Passionate aspiring DevOps engineer dedicated to mastering infrastructure automation, containerized application delivery, and cloud management. Focused on building practical hands-on labs, writing shell scripts, configuring cloud resources on AWS, and mastering modern CI/CD pipelines.",
  },

  heroTerminal: {
    whoami: "shahab",
    role: "aspiring-devops-engineer",
    currentFocus: "Linux • Docker • AWS • CI/CD",
    uptime: "247 days, 14 hours, 32 mins",
    status: "SYSTEM_OPERATIONAL [100% READY TO LEARN & BUILD]"
  },

  about: {
    summary: "I am actively developing practical DevOps skills through real-world hands-on projects, lab environments, and self-directed cloud infrastructure experiments.",
    corePillars: [
      {
        title: "Hands-on Lab Focus",
        desc: "Building real Docker compose environments, AWS VPC/EC2 setups, and automated scripts rather than just studying theory."
      },
      {
        title: "Infrastructure Mindset",
        desc: "Emphasizing security group rules, network isolation, reproducibility, and declarative configuration across all projects."
      },
      {
        title: "Continuous Automation",
        desc: "Automating repetitive admin tasks with Bash and Python to reduce manual toil and ensure reliable deployments."
      }
    ],
    focusAreas: [
      "Linux Administration",
      "Bash Scripting",
      "Networking (TCP/IP, DNS, SSH)",
      "Git & GitHub Workflows",
      "Docker & Containerization",
      "AWS Core Infrastructure",
      "CI/CD Fundamentals",
      "Infrastructure Automation"
    ]
  },

  skillCategories: [
    {
      id: "os",
      name: "Operating Systems",
      description: "Core Linux system administration and shell scripting proficiency",
      skills: [
        { name: "Linux", level: "Core Admin", context: "Ubuntu / Debian CLI, file permissions, systemctl, process management" },
        { name: "Ubuntu", level: "Primary OS", context: "Server administration, package management (apt), environment setup" },
        { name: "Bash", level: "Daily Scripting", context: "Shell automation, log parsing, cron jobs, environment scripts" }
      ]
    },
    {
      id: "devops",
      name: "DevOps & Containers",
      description: "Container isolation, image building, version control, and automation",
      skills: [
        { name: "Docker", level: "Hands-on", context: "Dockerfiles, multi-stage builds, container networking, volumes" },
        { name: "Docker Compose", level: "Hands-on", context: "Multi-container orchestration, environment file configs" },
        { name: "Git", level: "Core Workflow", context: "Branching, rebase, cherry-pick, conflict resolution, hooks" },
        { name: "GitHub", level: "Daily Use", context: "Pull requests, code review, issue tracking, organization labs" },
        { name: "CI/CD", level: "In Progress", context: "Pipeline creation, automated testing & linting triggers" }
      ]
    },
    {
      id: "cloud",
      name: "Cloud Infrastructure",
      description: "Practical AWS cloud hosting and security management",
      skills: [
        { name: "AWS", level: "Active Lab Study", context: "IAM roles, VPC setup basics, Elastic IP, CloudWatch logs" },
        { name: "EC2", level: "Hands-on", context: "Provisioning Ubuntu instances, key pair auth, web server hosting" },
        { name: "EBS", level: "Hands-on", context: "Volume creation, mounting, snapshot creation, storage expansion" },
        { name: "Security Groups", level: "Hands-on", context: "Inbound/outbound rule configuration, port isolation, IP CIDR rules" }
      ]
    },
    {
      id: "networking",
      name: "Networking & Security",
      description: "Fundamental networking protocols and secure server access",
      skills: [
        { name: "TCP/IP", level: "Foundational", context: "Subnetting, IP routing, OSI model understanding" },
        { name: "DNS", level: "Configured", context: "A records, CNAME, NS records, domain resolution troubleshooting" },
        { name: "HTTP/HTTPS", level: "Configured", context: "SSL/TLS certificates, Nginx reverse proxy headers, CORS" },
        { name: "SSH", level: "Daily Use", context: "Key pairs, SSH config files, port forwarding, secure tunneling" },
        { name: "Ports & Firewalls", level: "Hands-on", context: "UFW rules, port 22/80/443 mapping, netstat/ss debugging" }
      ]
    },
    {
      id: "programming",
      name: "Programming & Automation",
      description: "Scripting languages for tools, web integration, and API scripts",
      skills: [
        { name: "Python", level: "Scripting", context: "Automation scripts, file handling, REST API interactions, Boto3 basics" },
        { name: "JavaScript", level: "Web & Tooling", context: "Node.js utilities, React frontends, JSON manipulation" }
      ]
    }
  ],

  projects: [
    {
      id: "dockerized-app",
      title: "Dockerized Full-Stack Application",
      badge: "Docker & Networking",
      shortDesc: "Complete multi-container production-like environment with React frontend, Node.js API, and PostgreSQL database.",
      fullDesc: "Designed and implemented a containerized full-stack application environment using Docker Compose. Built custom Dockerfiles with multi-stage builds to minimize image footprint. Established isolated Docker networks for API-database communication while exposing only the required web port to the host system.",
      highlights: [
        "Containerized React frontend, Node.js REST API, and PostgreSQL database",
        "Configured bridge networking for inter-container communication",
        "Utilized persistent named Docker volumes for database data safety",
        "Orchestrated service startup dependencies using Docker Compose",
        "Managed development and production environment variables cleanly"
      ],
      technologies: ["Docker", "Docker Compose", "PostgreSQL", "Node.js", "React", "Linux"],
      githubUrl: "https://github.com/shahab1729/dockerized-fullstack-app",
      architectureCode: `version: '3.8'

services:
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    ports:
      - "80:80"
    networks:
      - app-net
    depends_on:
      - backend

  backend:
    build:
      context: ./backend
    environment:
      - DB_HOST=postgres
      - DB_PORT=5432
    networks:
      - app-net
      - db-net
    depends_on:
      - postgres

  postgres:
    image: postgres:15-alpine
    volumes:
      - pgdata:/var/lib/postgresql/data
    networks:
      - db-net

networks:
  app-net:
  db-net:

volumes:
  pgdata:`
    },
    {
      id: "aws-devops-lab",
      title: "AWS DevOps Infrastructure Lab",
      badge: "AWS & Server Admin",
      shortDesc: "Provisioned and configured cloud Linux environment on AWS EC2 with custom storage and strict security controls.",
      fullDesc: "Constructed a practical AWS cloud lab environment to simulate real infrastructure provisioning. Created EC2 Linux instances, managed key pairs securely, configured custom EBS volumes with Linux filesystem mounts, and implemented strict security group firewall rules.",
      highlights: [
        "Provisioned and managed Ubuntu 22.04 LTS EC2 instances",
        "Configured custom Security Groups with restricted SSH (port 22) and Web access",
        "Created, formatted (ext4), and mounted additional EBS storage volumes",
        "Deployed automated Docker container runtime on instance boot",
        "Configured systemd service daemons and custom log rotating scripts"
      ],
      technologies: ["AWS EC2", "AWS EBS", "AWS Security Groups", "Ubuntu Linux", "SSH", "Docker"],
      githubUrl: "https://github.com/shahab1729/aws-devops-lab",
      architectureCode: `[ AWS VPC Infrastructure ]
 ├── Internet Gateway (0.0.0.0/0)
 ├── Security Group: sg-shahab-devops
 │    ├── Ingress: TCP 22 (Bastion/Admin IP)
 │    ├── Ingress: TCP 80 / 443 (HTTP/HTTPS)
 │    └── Egress: All traffic allowed
 └── EC2 Instance: t3.micro (Ubuntu 22.04)
      ├── /dev/xvda (Root Volume 20GB)
      ├── /dev/xvdf (EBS Volume 50GB mounted @ /data)
      └── Systemd -> Docker Daemon -> Container Workloads`
    },
    {
      id: "git-github-lab",
      title: "Git & GitHub Workflow Lab",
      badge: "Version Control & GitOps",
      shortDesc: "Simulated real-world team repository collaboration, complex merge conflict resolutions, and clean commit rebasing.",
      fullDesc: "Created a comprehensive hands-on lab mastering advanced Git repository management. Focused on trunk-based and Git-Flow branching models, interactive rebasing to maintain linear history, resolving intentional merge conflicts, and configuring repository branch protection rules.",
      highlights: [
        "Mastered feature branching, release tags, and hotfix workflows",
        "Executed interactive rebasing (git rebase -i) to squash and clean commit logs",
        "Simulated and resolved complex multi-file merge conflicts manually",
        "Configured remote branch protection rules, code owners, and PR checks",
        "Created custom Git hooks for pre-commit linting and commit message checks"
      ],
      technologies: ["Git", "GitHub", "Bash", "Linux"],
      githubUrl: "https://github.com/shahab1729/git-workflow-lab",
      architectureCode: `$ git log --graph --oneline --all
* c7a9e21 (HEAD -> main, origin/main) docs: update workflow lab documentation
* 89d2f10 feat(ci): add pre-commit hook validation script
*   f4a1209 Merge pull request #4 from feature/security-hardening
|\  
| * b3e108d feat(security): configure tight permissions on SSH directory
|/  
* 51b32a4 refactor(git): interactive rebase squash feature commits`
    },
    {
      id: "cicd-pipeline-lab",
      title: "CI/CD Pipeline & GitHub Actions Automation",
      badge: "CI/CD & Automation",
      shortDesc: "Automated workflow pipeline testing code, building Docker images, and publishing artifacts on push.",
      fullDesc: "Designed an automated CI/CD pipeline using GitHub Actions to enforce code quality and automate image builds. Triggered automatically on code pushes and pull requests to ensure only validated code gets merged.",
      highlights: [
        "Configured GitHub Actions workflow pipelines with YAML configuration",
        "Implemented parallel job matrix for multi-version testing",
        "Automated Docker container build and linting checks",
        "Configured secret management for deployment credentials",
        "Added status badges and automated pull request comments"
      ],
      technologies: ["GitHub Actions", "Docker", "Bash", "YAML", "CI/CD"],
      githubUrl: "https://github.com/shahab1729/cicd-pipeline-lab",
      architectureCode: `name: DevOps CI/CD Pipeline
on: [push, pull_request]
jobs:
  lint-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run ShellCheck on scripts
        run: shellcheck scripts/*.sh
      - name: Build Docker Image Test
        run: docker build -t test-app .`
    }
  ],

  devopsJourney: [
    {
      stage: "Linux",
      title: "Linux Administration",
      status: "Mastered Basics",
      period: "Milestone 1",
      description: "Command line navigation, file permissions (chmod/chown), process inspection (ps/top), package management, systemd services.",
      isCurrent: false
    },
    {
      stage: "Bash",
      title: "Shell Scripting",
      status: "Mastered Basics",
      period: "Milestone 2",
      description: "Automating routine tasks, shell variables, conditionals, loops, functions, exit codes, and log output parsing.",
      isCurrent: false
    },
    {
      stage: "Networking",
      title: "Networking Fundamentals",
      status: "Mastered Basics",
      period: "Milestone 3",
      description: "Understanding TCP/IP stack, DNS configuration, SSH tunneling, ports, firewalls (UFW), and HTTP request headers.",
      isCurrent: false
    },
    {
      stage: "Git/GitHub",
      title: "Version Control & Collab",
      status: "Mastered Basics",
      period: "Milestone 4",
      description: "Git branching strategies, interactive rebasing, merge conflict resolution, pull request workflows, and repository hygiene.",
      isCurrent: false
    },
    {
      stage: "Docker",
      title: "Containerization",
      status: "Active Learning",
      period: "Current Focus ★",
      description: "Writing efficient Dockerfiles, multi-stage builds, Docker Compose orchestration, volume mounts, and network bridges.",
      isCurrent: true
    },
    {
      stage: "AWS",
      title: "Cloud Infrastructure",
      status: "Active Learning",
      period: "Current Focus ★",
      description: "EC2 server provisioning, Security Group rules, EBS storage management, S3 buckets, and IAM policy creation.",
      isCurrent: true
    },
    {
      stage: "CI/CD",
      title: "Pipeline Automation",
      status: "Active Learning",
      period: "Current Focus ★",
      description: "GitHub Actions workflows, build automation, test suites, artifact storage, and pipeline status notifications.",
      isCurrent: true
    },
    {
      stage: "Kubernetes",
      title: "Container Orchestration",
      status: "Upcoming Focus",
      period: "Next Goal",
      description: "Pods, Deployments, Services, Ingress controllers, and Minikube / K3s cluster administration.",
      isCurrent: false
    },
    {
      stage: "Infrastructure as Code",
      title: "Terraform & Ansible",
      status: "Upcoming Focus",
      period: "Future Milestone",
      description: "Declarative infrastructure provisioning with Terraform modules and configuration management with Ansible playbooks.",
      isCurrent: false
    }
  ],

  githubActivity: {
    totalContributions: "482 contributions in the last year",
    streak: "14 day commit streak",
    recentCommits: [
      {
        repo: "shahab1729/dockerized-fullstack-app",
        sha: "a82f910",
        message: "feat(docker): add multi-stage build optimizations for backend API",
        time: "2 hours ago"
      },
      {
        repo: "shahab1729/aws-devops-lab",
        sha: "e41b9c2",
        message: "ci(github-actions): configure automated lint pipeline trigger",
        time: "Yesterday"
      },
      {
        repo: "shahab1729/aws-devops-lab",
        sha: "7d09f44",
        message: "docs(aws): detail security group rules and SSH bastion setup",
        time: "3 days ago"
      },
      {
        repo: "shahab1729/git-workflow-lab",
        sha: "b319c81",
        message: "refactor(bash): write automated backup script for postgres container",
        time: "4 days ago"
      },
      {
        repo: "shahab1729/dockerized-fullstack-app",
        sha: "91c402e",
        message: "fix(networking): resolve CORS and nginx proxy pass routing issue",
        time: "5 days ago"
      }
    ]
  },

  interactiveTerminalCommands: {
    "docker ps": `CONTAINER ID   IMAGE              COMMAND                  CREATED        STATUS        PORTS                  NAMES
a82f910b2d41   frontend:latest    "docker-entrypoint.s…"   2 hours ago    Up 2 hours    0.0.0.0:80->80/tcp     app_frontend_1
b71c42e5a190   backend:latest     "npm start"              2 hours ago    Up 2 hours    0.0.0.0:5000->5000/tcp app_backend_1
c93d10f88a3b   postgres:15        "docker-entrypoint.s…"   2 hours ago    Up 2 hours    5432/tcp               app_postgres_1`,

    "kubectl get pods": `NAME                                READY   STATUS    RESTARTS   AGE
shahab-web-frontend-7f9949b5c-x29q  1/1     Running   0          4h12m
shahab-api-service-589db78c4-l9k4s  1/1     Running   0          4h12m
postgres-db-0                       1/1     Running   0          24h`,

    "git status": `On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  modified:   infra/terraform/main.tf
  modified:   scripts/deploy.sh

no changes added to commit (use "git add" and/or "git commit")`,

    "systemctl status nginx": `● nginx.service - A high performance web server and a reverse proxy server
     Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
     Active: active (running) since Tue 2026-08-25 10:14:02 UTC; 7h ago
       Docs: man:nginx(8)
    Process: 1204 ExecStart=/usr/sbin/nginx -g daemon on; master_process on; (code=exited, status=0/SUCCESS)
   Main PID: 1205 (nginx)
      Tasks: 3 (limit: 4652)
     Memory: 6.4M
        CPU: 142ms
     CGroup: /system.slice/nginx.service
             ├─1205 nginx: master process /usr/sbin/nginx -g daemon on; master_process on;
             └─1206 nginx: worker process`,

    "aws s3 ls": `2026-08-10 14:22:01 shahab-devops-backups-production
2026-08-15 09:11:45 shahab-terraform-state-backend-store
2026-08-20 18:30:12 shahab-docker-artifacts-registry-mirror`,

    "uname -a": `Linux shahab-devops-node 6.5.0-41-generic #41~22.04.1-Ubuntu SMP PREEMPT_DYNAMIC x86_64 x86_64 x86_64 GNU/Linux`,

    "whoami": `shahab`,

    "help": `Available DevOps Commands:
  • docker ps            - Display running Docker container status
  • kubectl get pods     - List Kubernetes pods in default namespace
  • git status           - Check working tree status
  • systemctl status nginx - Inspect Nginx web server service daemon
  • aws s3 ls            - List AWS S3 storage buckets
  • uname -a             - Print Linux system kernel & architecture info
  • whoami               - Display current logged in shell user
  • clear                - Clear terminal screen console`
  }
};
