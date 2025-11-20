<!-- Title Section -->
<h1 align="center">🚀 FlowNexus</h1> <p align="center"> <em>Where automation meets connection — your central nexus for effortless productivity.</em> </p> <br/>
<!-- Description -->
<h2>🔹 What is FlowNexus?</h2> <p> FlowNexus is an intelligent automation platform that connects your apps, data, and workflows into one unified ecosystem. With FlowNexus, anyone—from developers to full teams—can design, automate, and scale powerful workflows <strong>without writing complex code</strong>. </p> <br/>
<!-- Tech Stack Icons -->
<h2>🧱 Tech Stack</h2> <table> <tr> <td><img src="https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white"/></td> <td><img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white"/></td> <td><img src="https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white"/></td> <td><img src="https://img.shields.io/badge/Neon-0099FF?logo=neon&logoColor=white"/></td> <td><img src="https://img.shields.io/badge/tRPC-2596BE?logo=trpc&logoColor=white"/></td> </tr> <tr> <td><img src="https://img.shields.io/badge/Inngest-0A0A0A?logo=inngest&logoColor=white"/></td> <td><img src="https://img.shields.io/badge/Polar-111111?logo=polar&logoColor=white"/></td> <td><img src="https://img.shields.io/badge/Sentry-362D59?logo=sentry&logoColor=white"/></td> <td><img src="https://img.shields.io/badge/OpenAI-412991?logo=openai&logoColor=white"/></td> <td><img src="https://img.shields.io/badge/React%20Flow-087EA4?logo=react&logoColor=white"/></td> </tr> <tr> <td><img src="https://img.shields.io/badge/Slack-4A154B?logo=slack&logoColor=white"/></td> <td><img src="https://img.shields.io/badge/Discord-5865F2?logo=discord&logoColor=white"/></td> <td><img src="https://img.shields.io/badge/Claude-A100FF?logo=anthropic&logoColor=white"/></td> <td><img src="https://img.shields.io/badge/Anthropic-000000?logo=anthropic&logoColor=white" />
</td> <td><img src="https://img.shields.io/badge/Better%20Auth-000000"/></td> </tr> </table> <br/>
<!-- Features Table -->
<h2>✨ Features</h2> <table> <tr> <td>🔄 Visual workflow builder</td> <td>🎨 React Flow canvas</td> </tr> <tr> <td>🎯 Trigger nodes (Webhook, Google Form, Stripe, Manual)</td> <td>💬 Messaging nodes (Discord, Slack)</td> </tr> <tr> <td>🤖 AI integrations (OpenAI, Claude, Gemini)</td> <td>🌐 HTTP request node</td> </tr> <tr> <td>⚡ Background job execution (Inngest)</td> <td>💳 Polar payments & subscriptions</td> </tr> <tr> <td>🔐 Better Auth authentication</td> <td>🗄️ Prisma + Neon Postgres</td> </tr> <tr> <td>🔒 End-to-end type safety (TypeScript + tRPC)</td> <td>🐛 Sentry error tracking + AI monitoring</td> </tr> <tr> <td>🧑‍💻 CodeRabbit PR reviews</td> <td>🌐 Next.js 15 App Router</td> </tr> </table> <br/>

<h2>👁‍🗨 Demo Preview  👁‍🗨</h2>
[demo-recorder.webm](https://github.com/user-attachments/assets/1b62f3eb-aa46-4109-ab52-a91780410889)


<!-- Architecture Diagram -->
<h2>🏗️ System Architecture</h2>
flowchart LR
<table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; font-family: sans-serif; width: 100%;">
  <tr style="background:#222; color:white;">
    <th>Group</th>
    <th>Components</th>
    <th>Connections</th>
  </tr>

  <tr style="background:#e8f1ff;">
    <td>🖥️ Client (Browser)</td>
    <td>- Next.js UI<br>- React Flow Canvas<br>- Better Auth UI</td>
    <td>→ UI → Canvas<br>→ AuthUI<br>→ Actions / tRPC Client</td>
  </tr>

  <tr style="background:#e8ffed;">
    <td>🌐 Frontend</td>
    <td>- Server Actions<br>- tRPC Client</td>
    <td>UI → Actions<br>UI → tRPC Client → tRPC Router<br>→ Sentry</td>
  </tr>

  <tr style="background:#fff3e6;">
    <td>⚙️ Backend</td>
    <td>- tRPC Router<br>- Better Auth<br>- Polar Payments<br>- Webhook Handlers<br>- HTTP Node Handler</td>
    <td>tRPC → Auth / Payments / Webhooks / HTTP Node<br>→ Prisma → Neon<br>→ OpenAI / Anthropic / Gemini<br>→ Sentry</td>
  </tr>

  <tr style="background:#f3e8ff;">
    <td>🤖 AI Providers</td>
    <td>- OpenAI<br>- Anthropic<br>- Gemini</td>
    <td>tRPC → AI Providers</td>
  </tr>

  <tr style="background:#fff9db;">
    <td>⚡ Inngest Jobs</td>
    <td>- Inngest Functions</td>
    <td>Webhooks / Payments / HTTPNode → Inngest<br>Inngest → Prisma / Neon</td>
  </tr>

  <tr style="background:#f7efe8;">
    <td>🗄️ Database</td>
    <td>- Prisma ORM<br>- Neon Serverless Postgres</td>
    <td>tRPC / Inngest → Prisma → Neon</td>
  </tr>

  <tr style="background:#ffe8e8;">
    <td>🔒 Monitoring / QA</td>
    <td>- Sentry<br>- CodeRabbit Reviews</td>
    <td>Backend → Sentry<br>Frontend → Sentry<br>CodeRabbit → Backend</td>
  </tr>
</table>

<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; font-family: sans-serif;">

  <div style="background:#e8f1ff; padding:16px; border-radius:8px;">
    <h3>🖥️ Client (Browser)</h3>
    <ul>
      <li>Next.js UI</li>
      <li>React Flow Canvas</li>
      <li>Better Auth UI</li>
    </ul>
  </div>

  <div style="background:#e8ffed; padding:16px; border-radius:8px;">
    <h3>🌐 Frontend</h3>
    <ul>
      <li>Server Actions</li>
      <li>tRPC Client</li>
    </ul>
  </div>

  <div style="background:#fff3e6; padding:16px; border-radius:8px;">
    <h3>⚙️ Backend</h3>
    <ul>
      <li>tRPC Router</li>
      <li>Better Auth</li>
      <li>Polar Payments</li>
      <li>Webhooks</li>
      <li>HTTP Node Handler</li>
    </ul>
  </div>

  <div style="background:#f3e8ff; padding:16px; border-radius:8px;">
    <h3>🤖 AI Providers</h3>
    <ul>
      <li>OpenAI</li>
      <li>Claude</li>
      <li>Gemini</li>
    </ul>
  </div>

  <div style="background:#fff9db; padding:16px; border-radius:8px;">
    <h3>⚡ Inngest Jobs</h3>
    <ul>
      <li>Inngest Functions</li>
    </ul>
  </div>

  <div style="background:#f7efe8; padding:16px; border-radius:8px;">
    <h3>🗄️ Database</h3>
    <ul>
      <li>Prisma ORM</li>
      <li>Neon Postgres</li>
    </ul>
  </div>

  <div style="background:#ffe8e8; padding:16px; border-radius:8px;">
    <h3>🔒 Monitoring / QA</h3>
    <ul>
      <li>Sentry</li>
      <li>CodeRabbit Reviews</li>
    </ul>
  </div>

</div>


<br/>
<!-- Getting Started -->
<h2>📦 Getting Started</h2> <h3>1️⃣ Clone the repo</h3>
git clone https://github.com/theBappy/flownexus.git
cd flownexus

<h3>2️⃣ Install dependencies</h3>
npm install

<h3>3️⃣ Configure environment variables (fill necessary env. variables)</h3>

<h3>4️⃣ Run dev server</h3>
npm run dev:all

<br/>
<!-- Project Structure -->
<h2>📁 Project Structure</h2>
<table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse; font-family: sans-serif; width: 100%;">

  <tr style="background:#222; color:white;">
    <th>Folder</th>
    <th>Description</th>
  </tr>

  <tr style="background:#e8f1ff;">
    <td>/app</td>
    <td>Next.js App Router</td>
  </tr>

  <tr style="background:#e8ffed;">
    <td>/components</td>
    <td>UI Components</td>
  </tr>

  <tr style="background:#fff9db;">
    <td>/lib</td>
    <td>Utility functions & shared helpers</td>
  </tr>

  <tr style="background:#fff3e6;">
    <td>/server</td>
    <td>Server-side logic root</td>
  </tr>

  <tr style="background:#f3e8ff;">
    <td>/server/trpc</td>
    <td>tRPC routers & procedures</td>
  </tr>

  <tr style="background:#f7efe8;">
    <td>/server/auth</td>
    <td>Better Auth configuration</td>
  </tr>

  <tr style="background:#e8fff4;">
    <td>/server/payments</td>
    <td>Polar payments integration</td>
  </tr>

  <tr style="background:#e8f7ff;">
    <td>/server/nodes</td>
    <td>Workflow Nodes / HTTP Node Handlers</td>
  </tr>

  <tr style="background:#f3e8ff;">
    <td>/server/inngest</td>
    <td>Inngest background jobs</td>
  </tr>

  <tr style="background:#fcefe8;">
    <td>/prisma</td>
    <td>DB schema & migrations</td>
  </tr>

  <tr style="background:#f9f9f9;">
    <td>/public</td>
    <td>Static assets (images, icons, files)</td>
  </tr>

</table>


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





