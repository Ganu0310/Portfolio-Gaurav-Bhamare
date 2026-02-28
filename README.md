# Gaurav Bhamare - Personal Portfolio

A modern, highly interactive, and fully responsive personal portfolio website built to showcase projects, skills, and professional experience. Designed with a sleek UI featuring glassmorphism, fluid animations, and dark mode support.

## ✨ Features

- **Modern Tech Stack**: Built with React 18, Vite, and TypeScript for blazing-fast performance.
- **Interactive UI**: Fluid scroll animations, spotlight hover effects, and page transitions powered by `framer-motion`.
- **Fully Responsive**: Optimized for all devices—mobile, tablet, and desktop.
- **Dark/Light Mode**: Seamless theme switching with persistent state.
- **Data-Driven Architecture**: All portfolio data (skills, projects, education) is centralized in a single `portfolio.ts` file for incredibly easy updates.
- **Dynamic Projects Section**: Filterable project gallery with detailed modal views.
- **Comprehensive Sections**: Includes specialized sections for Cybersecurity mindset, Internships, and Academic Achievements.

## 🛠️ Tech Stack

- **Framework**: React.js (v18)
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui & Radix UI primitives
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Deployment**: Vercel/Netlify (Recommended)

## 📂 Project Structure

```text
├── public/               # Static assets
├── src/
│   ├── assets/           # Images, SVGs, etc.
│   ├── components/       # Reusable React components (Sections, UI)
│   ├── data/
│   │   └── portfolio.ts  # 🎯 Centralized data file (Edit this!)
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Page-level components (Index, NotFound)
│   ├── App.tsx           # Application root & router
│   ├── index.css         # Global styles & Tailwind directives
│   └── main.tsx          # Entry point
├── tailwind.config.ts    # Tailwind CSS configuration
└── vite.config.ts        # Vite configuration
```

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need Node.js installed on your machine.

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Ganu0310/Portfolio-Gaurav-Bhamare.git
   ```

2. **Navigate into the project directory**

   ```bash
   cd Portfolio-Gaurav-Bhamare
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:8080` (or the port specified in your terminal).

## ✏️ Customizing Your Data

The portfolio is designed to be easily configurable without digging into the component code.

To update your personal information, skills, or projects, simply edit `src/data/portfolio.ts`. The UI will automatically reflect the changes across the entire website.

```typescript
// Example: Adding a new project in src/data/portfolio.ts
export const projects = [
  {
    id: 1,
    title: "My Awesome Project",
    description: "A brief description of what I built.",
    tech: ["React", "Node.js"],
    github: "https://github.com/...",
    demo: "https://my-demo-link.com",
  },
];
```

## 📫 Contact & Links

- **LinkedIn:** [Gaurav Bhamare](https://linkedin.com/in/gaurav-bhamare-b3733a2b4)
- **GitHub:** [@Ganu0310](https://github.com/Ganu0310)
- **Email:** bhamaregaurav165@gmail.com

---

_Designed and developed by Gaurav Anil Bhamare_
