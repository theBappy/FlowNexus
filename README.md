<!-- Title Section -->
<h1 align="center">🚀 FlowNexus</h1> <p align="center"> <em>Where automation meets connection — your central nexus for effortless productivity.</em> </p> <br/>
<!-- Description -->
<h2>🔹 What is FlowNexus?</h2> <p> FlowNexus is an intelligent automation platform that connects your apps, data, and workflows into one unified ecosystem. With FlowNexus, anyone—from developers to full teams—can design, automate, and scale powerful workflows <strong>without writing complex code</strong>. </p> <br/>
<!-- Tech Stack Icons -->
<h2>🧱 Tech Stack</h2> <table> <tr> <td><img src="https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white"/></td> <td><img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white"/></td> <td><img src="https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white"/></td> <td><img src="https://img.shields.io/badge/Neon-0099FF?logo=neon&logoColor=white"/></td> <td><img src="https://img.shields.io/badge/tRPC-2596BE?logo=trpc&logoColor=white"/></td> </tr> <tr> <td><img src="https://img.shields.io/badge/Inngest-0A0A0A?logo=inngest&logoColor=white"/></td> <td><img src="https://img.shields.io/badge/Polar-111111?logo=polar&logoColor=white"/></td> <td><img src="https://img.shields.io/badge/Sentry-362D59?logo=sentry&logoColor=white"/></td> <td><img src="https://img.shields.io/badge/OpenAI-412991?logo=openai&logoColor=white"/></td> <td><img src="https://img.shields.io/badge/React%20Flow-087EA4?logo=react&logoColor=white"/></td> </tr> <tr> <td><img src="https://img.shields.io/badge/Slack-4A154B?logo=slack&logoColor=white"/></td> <td><img src="https://img.shields.io/badge/Discord-5865F2?logo=discord&logoColor=white"/></td> <td><img src="https://img.shields.io/badge/Claude-A100FF?logo=anthropic&logoColor=white"/></td> <td><img src="https://img.shields.io/badge/Gemini-4285F4?logo=google&logoColor=white"/></td> <td><img src="https://img.shields.io/badge/Better%20Auth-000000"/></td> </tr> </table> <br/>
<!-- Features Table -->
<h2>✨ Features</h2> <table> <tr> <td>🔄 Visual workflow builder</td> <td>🎨 React Flow canvas</td> </tr> <tr> <td>🎯 Trigger nodes (Webhook, Google Form, Stripe, Manual)</td> <td>💬 Messaging nodes (Discord, Slack)</td> </tr> <tr> <td>🤖 AI integrations (OpenAI, Claude, Gemini)</td> <td>🌐 HTTP request node</td> </tr> <tr> <td>⚡ Background job execution (Inngest)</td> <td>💳 Polar payments & subscriptions</td> </tr> <tr> <td>🔐 Better Auth authentication</td> <td>🗄️ Prisma + Neon Postgres</td> </tr> <tr> <td>🔒 End-to-end type safety (TypeScript + tRPC)</td> <td>🐛 Sentry error tracking + AI monitoring</td> </tr> <tr> <td>🧑‍💻 CodeRabbit PR reviews</td> <td>🌐 Next.js 15 App Router</td> </tr> </table> <br/>
<!-- Architecture Diagram -->
<h2>🏗️ System Architecture</h2>
flowchart LR

subgraph Client["🖥️ Client (Browser)"]
    UI["Next.js UI"]
    Canvas["React Flow Canvas"]
    AuthUI["Better Auth UI"]
end

subgraph Frontend["🌐 Frontend"]
    Actions["Server Actions"]
    TRPCClient["tRPC Client"]
end

subgraph Backend["⚙️ Backend"]
    TRPC["tRPC Router"]
    Auth["Better Auth"]
    Payments["Polar"]
    Webhooks["Webhook Handlers"]
    HTTPNode["HTTP Node Handler"]
end

subgraph AI["🤖 AI Providers"]
    OpenAI["OpenAI"]
    Claude["Claude"]
    Gemini["Gemini"]
end

subgraph Jobs["⚡ Inngest Jobs"]
    Inngest["Inngest Functions"]
end

subgraph DB["🗄️ Database"]
    Prisma["Prisma ORM"]
    Neon["Neon Serverless Postgres"]
end

subgraph Monitoring["🔒 QA"]
    Sentry["Sentry"]
    CodeRabbit["CodeRabbit Reviews"]
end

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
Payments --> Inngest
HTTPNode --> Inngest

Inngest --> Prisma
Inngest --> Neon

TRPC --> OpenAI
TRPC --> Claude
TRPC --> Gemini

Backend --> Sentry
Frontend --> Sentry
CodeRabbit -.-> Backend

<br/>
<!-- Getting Started -->
<h2>📦 Getting Started</h2> <h3>1️⃣ Clone the repo</h3>
git clone https://github.com/yourname/flownexus.git
cd flownexus

<h3>2️⃣ Install dependencies</h3>
pnpm install

<h3>3️⃣ Configure environment variables</h3>

Copy:

cp .env.example .env


Fill:

Neon Postgres URL

Better Auth keys

Polar API keys

OpenAI / Claude / Gemini

Sentry DSN

Inngest keys

<h3>4️⃣ Run dev server</h3>
pnpm dev

<br/>
<!-- Project Structure -->
<h2>📁 Project Structure</h2>
/app              → Next.js App Router
/components       → UI Components
/lib              → Utilities
/server
   /trpc          → Routers & procedures
   /auth          → Better Auth config
   /payments      → Polar integration
/nodes            → Workflow Nodes
/inngest          → Background Jobs
/prisma           → DB schema + migrations
/public           → Static files

<br/>
<!-- Security -->
<h2>🛡️ Security</h2>

Session-based auth with Better Auth

Strict type safety

Environment-variable–isolated secrets

Sentry monitoring

Workflow audit history via Inngest events

<br/>
<!-- License -->
<h2>📄 License</h2>

MIT License — free to use and modify.

<br/>
<!-- Contributing -->
<h2>🤝 Contributing</h2>

FlowNexus uses:

CodeRabbit automated PR reviews

Conventional commits

Typed, modular code structure

Contributions welcome!

<br/><br/>
