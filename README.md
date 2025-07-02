# Codexpa (A Replit Alternative)

Codexpa is an open-source, web-based coding workspace platform (like Replit) that allows developers to run, write, and contribute to projects directly from their browser — powered by containerized environments and VS Code UI.

---

## 🚀 Tech Stack

### Frontend

- **Next.js** (App Router)
- **Tailwind CSS**
- **Monaco Editor / code-server** (VS Code UI)
- **tRPC** (for type-safe API calls)

### Backend

- **tRPC** (internal logic)
- **Express** (container runtime APIs)
- **Docker** (for sandboxed code execution)
- **Optional:** Firecracker (for microVM-based isolation)

### Monorepo

- **Turborepo**
- `apps/web` → Next.js frontend with tRPC
- `apps/runtime-api` → Express server for running code in containers
- `packages/ui` → Shared UI components
- `packages/config` → Shared config
- `packages/trpc` → Shared tRPC logic

### Auth

- **OAuth** via `next-auth` (GitHub, Google, etc.)

---

## ✨ Key Features

- Connect GitHub repo directly (no local clone needed)
- Run and edit code in the browser
- Support for multiple languages (Node.js, Python, Go, etc.)
- Terminal + code editor
- Auto-deployable environments
- Option to self-host or use hosted Codexpa instance

---

## 🏗️ Folder Structure

```bash
apps/
  web/              # Next.js app with tRPC routes
  runtime-api/      # Express backend to execute code

packages/
  ui/               # Shared UI components (Tailwind)
  trpc/             # Shared types and routers
  config/           # tsconfig, eslint, etc.
```

# 🧪 Dev Setup (Using pnpm)

### 1. Clone the Repo

```bash
git clone https://github.com/your-org/codexpa.git
cd codexpa
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Start Dev Environment

```bash
pnpm run dev
```

## 🧱 How It Works

- Frontend connects to tRPC APIs for user/project actions
- Backend (Express) manages Docker containers to compile & run code
- Users can launch projects in isolated environments
- All code execution is sandboxed

---

## 🌐 Deploying

You can deploy the full stack to:

- **Vercel** (Frontend)
- **Render / Fly.io / DigitalOcean** (Express backend)
- **Docker containers** for code runners

---

## 💸 Cost Modes

- **Local (free)** — all runs on user machine
- **Cloud (low cost)** — metered per usage or per machine

---

## 📛 Naming & Branding

**Codexpa** — _"Code + Experience Platform"_

> A playground for developers. (A Replit alternative)

---

## 🔐 Authentication

- Handled via **NextAuth** with GitHub or Google providers
- Redirects back to Express APIs with secure tokens

---

## 🎯 Future Features

- Collaborative coding (like Live Share)
- AI-assisted code completion
- Persistent environments
- Pay-per-use metering
- Plugin support

---

## 📃 License

**MIT License**  
Open to contributors.

---

## 👨‍💻 Maintainers

Built with ❤️ by the **Codexpa** team.  
Feel free to open PRs or issues!
