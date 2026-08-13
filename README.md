# Ali Ashraf — Generative AI & LLM Systems Portfolio

A production-ready, enterprise-grade developer portfolio for **Ali Ashraf — Generative AI & LLM Systems Engineer**. Built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Serverless API Routes**, and a **Vercel / Linear-inspired Slate Obsidian Design System**.

---

## 🚀 Key Features

- **Generative AI & Agentic Focus**: Architecture showcase highlighting Multi-Agent systems (LangGraph), RAG pipelines, Vision-Language Models (PyTorch), and LLM orchestration.
- **Full-Stack Next.js 15 App Router**: Built with strict TypeScript type safety, modular React components, and optimized static rendering.
- **Serverless Backend API Routes**:
  - `POST /api/contact`: Form submission handling integrated with **Resend API** for direct email delivery.
  - `GET /api/github`: Live GitHub account statistics and repository metrics fetching.
- **Bilingual & Full RTL Support**: Instant switching between **Arabic (RTL)** and **English (LTR)** with state persistence in `localStorage`.
- **Linear / Vercel Design Aesthetics**: Slate obsidian palette (`#080c14`), linear background grid pattern, crisp typography (`Cairo` & `Inter`), zero emojis, and handcrafted vector SVG icons.
- **CI/CD & Deployment Ready**: Pre-configured for single-click deployment on **Vercel** with **GitHub Actions** automated workflow validation.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: Next.js 15 (App Router)
- **Frontend**: React 19, TypeScript, Vanilla CSS Modules
- **State & i18n**: React Context (`LanguageContext`)
- **Backend & APIs**: Next.js Serverless Functions, Resend Email API, GitHub REST API
- **AI & ML Focus**: LangGraph, PyTorch, ChromaDB, LangChain, Ollama, FastAPI, Next.js 15

---

## 📂 Project Structure

```text
Portfolio/
├── app/
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts         # Serverless email dispatch handler
│   │   └── github/
│   │       └── route.ts         # Live GitHub metrics API
│   ├── favicon.ico
│   ├── globals.css              # Linear Slate Obsidian design system
│   ├── layout.tsx               # Root layout, fonts, SEO OpenGraph metadata
│   └── page.tsx                 # Main application page
├── components/
│   ├── Navbar.tsx               # Header, Theme & Language toggles, Drawer
│   ├── Hero.tsx                 # GenAI hero banner & action buttons
│   ├── About.tsx                # Engineering narrative & statistics
│   ├── Skills.tsx               # Categorized GenAI & software stack
│   ├── Projects.tsx             # System category filter tabs & card grid
│   ├── ProjectModal.tsx         # Expandable architecture detail modal
│   ├── Timeline.tsx             # Experience stepper timeline
│   ├── Contact.tsx              # Interactive contact form & email copy
│   ├── Toast.tsx                # Notification alert toasts
│   └── BackgroundGrid.tsx       # Radial linear background grid
├── lib/
│   ├── i18n.ts                  # Bilingual translation dictionary & types
│   ├── projects-data.ts         # Typed GenAI project metadata dataset
│   └── LanguageContext.tsx      # React context for lang and theme state
├── .github/
│   └── workflows/
│       └── ci.yml               # GitHub Actions CI build validation
├── .env.example                 # Environment variables spec
├── vercel.json                  # Vercel deployment configuration
├── tsconfig.json
├── package.json
└── README.md
```

---

## ⚙️ Local Development Setup

1. **Clone Repository & Install Dependencies**:
   ```bash
   git clone https://github.com/aliashraf/portfolio.git
   cd portfolio
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev -- -p 3005
   ```
   Open [`http://localhost:3005`](http://localhost:3005) in your browser.

3. **Build & Verify Production Bundle**:
   ```bash
   npm run build
   ```

---

## 🔑 Environment Variables Specification

Create a `.env.local` file in the root directory (or configure them in your Vercel project dashboard):

```env
# Resend API Key for live email delivery (https://resend.com)
RESEND_API_KEY=re_your_resend_api_key

# Destination email address for portfolio inquiries
CONTACT_EMAIL=ali.ashraf.abofouda@gmail.com

# (Optional) GitHub Personal Access Token to increase API rate limits
GITHUB_TOKEN=ghp_your_github_token
```

---

## 🚀 Deployment

### Deploy to Vercel

1. Push your repository to GitHub.
2. Import the project into **[Vercel](https://vercel.com)**.
3. Add the `RESEND_API_KEY` and `CONTACT_EMAIL` environment variables.
4. Click **Deploy**.

---

## 📬 Contact & Socials

- **Email**: [ali.ashraf.abofouda@gmail.com](mailto:ali.ashraf.abofouda@gmail.com)
- **LinkedIn**: [linkedin.com/in/ali-ashraf-8b619b22a](https://www.linkedin.com/in/ali-ashraf-8b619b22a)
- **X / Twitter**: [x.com/justAliaAhraf](https://twitter.com/justAliaAhraf)

---

Developed by **Ali Ashraf** · Powered by **Next.js 15, TypeScript & GenAI Systems**.
