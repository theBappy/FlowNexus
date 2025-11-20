📁FlowNexus

FlowNexus is an intelligent automation platform that connects your apps, data, and workflows into one unified ecosystem. With FlowNexus, anyone—from developers to full teams—can design, automate, and scale powerful workflows without writing complex code.

It’s where automation meets connection — your central nexus for effortless productivity.

![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white)
![Neon](https://img.shields.io/badge/Neon-0099FF?logo=neon&logoColor=white)
![tRPC](https://img.shields.io/badge/tRPC-2596BE?logo=trpc&logoColor=white)
![Inngest](https://img.shields.io/badge/Inngest-0A0A0A?logo=inngest&logoColor=white)
![Polar](https://img.shields.io/badge/Polar-111111?logo=polar&logoColor=white)
![Sentry](https://img.shields.io/badge/Sentry-362D59?logo=sentry&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?logo=openai&logoColor=white)
![Slack](https://img.shields.io/badge/Slack-4A154B?logo=slack&logoColor=white)
![Discord](https://img.shields.io/badge/Discord-5865F2?logo=discord&logoColor=white)
![React Flow](https://img.shields.io/badge/React%20Flow-087EA4?logo=react&logoColor=white)

🚀 Features
🔄 Visual Workflow Builder

Drag-and-drop workflow creation

Powered by React Flow

Custom nodes & real-time logic

🎯 Trigger Nodes

Webhook

Google Form

Stripe

Manual triggers

🤖 AI Integrations

OpenAI

Anthropic

Google Gemini

💬 Messaging Nodes

Slack

Discord

🌐 HTTP Request Node

Call any API

Custom headers, params, body

⚡ Background Job Execution

Reliable async processing with Inngest

Durable event-driven workflows

💳 Payments & Subscriptions

Built-in Polar integration

Subscription tiers, customer dashboard

🔐 Authentication

Powered by Better Auth

Secure sessions, OAuth, email login

🗄️ Database Layer

Prisma ORM

Neon Serverless Postgres

Automatic scaling

🔒 Type Safety

TypeScript

tRPC for end-to-end typing

🐛 Monitoring

Sentry for logs + performance

AI insights for error analysis

🧑‍💻 Developer Experience

CodeRabbit automated PR reviews

Modular node system

Clean monorepo structure

🧩 System Architecture
flowchart LR

subgraph Client["🖥️ Client (Browser)"]
    UI["Next.js 15 App Router UI"]
    Canvas["React Flow Canvas"]
    AuthUI["Better Auth UI Components"]
end

subgraph Frontend["🌐 Frontend (Next.js 15)"]
    Actions["Server Actions"]
    TRPCClient["tRPC Client"]
end

subgraph Backend["⚙️ Backend (Next.js Server)"]
    TRPC["tRPC Router"]
    Auth["Better Auth"]
    Payments["Polar Integration"]
    Webhooks["Webhook Handlers"]
    HTTPNode["HTTP Request Node Handler"]
end

subgraph AI["🤖 AI Providers"]
    OpenAI["OpenAI API"]
    Claude["Claude API"]
    Gemini["Google Gemini API"]
end

subgraph Jobs["⚡ Background Jobs"]
    Inngest["Inngest Functions"]
end

subgraph DB["🗄️ Database Layer"]
    Prisma["Prisma ORM"]
    Neon["Neon Serverless Postgres"]
end

subgraph Monitoring["🔒 Monitoring & QA"]
    Sentry["Sentry Error Tracking"]
    CodeRabbit["CodeRabbit PR Reviews"]
end


%% Connections
Client --> UI --> Canvas
Client --> AuthUI

UI --> Actions
UI --> TRPCClient --> TRPC

Actions --> TRPC
TRPC --> Auth
TRPC --> Payments
TRPC --> Webhooks
TRPC --> HTTPNode

TRPC --> Prisma --> Neon

Webhooks --> Inngest
HTTPNode --> Inngest
Payments --> Inngest

Inngest --> Prisma
Inngest --> Neon

TRPC --> OpenAI
TRPC --> Claude
TRPC --> Gemini

Backend --> Sentry
Frontend --> Sentry
CodeRabbit -. reviews PRs .-> Backend

📦 Getting Started
1. Clone the repository
git clone https://github.com/theBappy/flownexus.git
cd flownexus

2. Install dependencies
npm install

3. Environment variables

4. Run locally
pnpm dev

🧪 Development
Tech Highlights

Full stack type safety (TS + tRPC + Prisma)

Modular node system for workflow steps

Inngest for durable async execution

Clean architecture with clear separation:
UI → API → Workers → DB

Recommended Workflow

Add a new node → /nodes

Add its worker logic → /inngest/functions

Map it inside tRPC routers

Test using local Inngest dev server

Push → CodeRabbit reviews your PR

🛡️ Security

JWT-free, session-based authentication

Secure storage of secrets via environment variables

DB-level row validation

Full audit trails through Inngest events

Sentry monitoring for every API error

📄 License

MIT — you’re free to use, modify, distribute.

❤️ Contributing

PRs are welcome!
The repo uses:

CodeRabbit for automated PR reviews

Conventional commits

Clean code requirements



