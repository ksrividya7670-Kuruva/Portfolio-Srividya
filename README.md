# Srividya Kuruva — Software Engineering Portfolio

A complete, modern, placement-ready personal portfolio website for **Srividya Kuruva**, positioning her as a **Software Engineer**, **Full-Stack Developer**, and **AI & Data Science Student**.

Designed for campus placement drives, recruiters, and engineering hiring managers. The portfolio features verified academic records, real-world system architecture highlights (including the flagship **Official Appointment Management System (OAMS)**), categorized technical skills, and an ATS-formatted interactive resume.

---

## 🚀 Key Features

- **Recruiter-Focused Hero Section**: Immediate clarity on placement readiness (2028 batch, B.Tech AI & DS at St. Marys Group of Institutions), with quick-action links to projects, contact channels, and resume preview.
- **Flagship Project Deep Dive (OAMS)**: Genuine technical presentation of the monorepo architecture (`@oams/api` and `@oams/web`), Express/TypeScript services, Knex SQL migrations, Redis outbox workers, role-based access control, and automated operations.
- **Categorized Technical Skills**: Interactive filter tabs and search functionality across Frontend, Backend, Databases, Programming Languages, AI & Data Science, and Tools. Strictly uses honest skill badges without arbitrary percentage bars.
- **Honest Education Timeline**: Verified B.Tech status at St. Marys Group of Institutions alongside transparent, designated placeholders for pre-university schooling—ensuring zero fabricated marks or percentages.
- **Work Experience & Internships**: Highlights practical software development from the **Unified Mentor** Full-Stack Web Development Internship and academic system engineering. Strictly excludes freelancing, Upwork, or unrelated commercial claims.
- **Courses & Continuous Learning**: Verified course tracks from **Tutedude** (Web Development and Advanced Python) along with ongoing Data Structures & Algorithms (DSA) preparation.
- **Coding & Placement Preparation**: Demonstrates conceptual growth across DSA, SQL/DBMS, Computer Science fundamentals, and core OOP principles, linking directly to GitHub and LeetCode profiles.
- **Interactive ATS Resume Modal**: Built-in resume modal with clean typography, full career specifications, and native browser `Print / Save as PDF` support (`window.print()`).
- **Responsive & Accessible UI**: Mobile drawer navigation, sticky navbar, fluid typography, dark/light mode toggle with local storage persistence, high contrast, and keyboard navigation.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Iconography**: [Lucide React](https://lucide.dev/)
- **Theme Support**: Custom dark/light mode hook with `localStorage` persistence

---

## 📁 Folder Structure

```
portfolio-srividya/
├── index.html                   # Entry HTML with OpenGraph and SEO meta tags
├── package.json                 # Project dependencies & scripts
├── tsconfig.json                # TypeScript compiler configuration
├── vite.config.ts               # Vite configuration with Tailwind CSS plugin
├── public/
│   ├── favicon.svg              # Custom SVG developer favicon
│   └── images/
│       └── profile_picture.jpg  # Verified profile photo
├── src/
│   ├── main.tsx                 # Application DOM entrypoint
│   ├── App.tsx                  # Root layout & modal state management
│   ├── index.css                # Tailwind imports, custom theme & print rules
│   ├── hooks/
│   │   └── useTheme.ts          # Dark / light theme management hook
│   ├── data/
│   │   ├── codingPrep.ts        # Placement preparation syllabus & focus areas
│   │   ├── courses.ts           # Verified Tutedude & self-paced tracks
│   │   ├── education.ts         # B.Tech degree & pre-university placeholders
│   │   ├── experience.ts        # Unified Mentor internship & academic projects
│   │   ├── projects.ts          # Flagship OAMS, LearnHub, AI Resume Analyzer, etc.
│   │   └── skills.ts            # Categorized skills matrix
│   └── components/
│       ├── Navbar.tsx           # Sticky navigation bar with mobile drawer
│       ├── Hero.tsx             # Placement hero with interactive code terminal
│       ├── About.tsx            # Candidate bio & engineering strengths
│       ├── Skills.tsx           # Searchable & filterable skill badges
│       ├── Education.tsx        # Academic timeline & placeholder cards
│       ├── Experience.tsx       # Internship & project timeline
│       ├── Projects.tsx         # Primary & secondary project showcases + modal
│       ├── Courses.tsx          # Tutedude course badges & continuous tracks
│       ├── CodingPrep.tsx       # DSA and placement growth section
│       ├── ResumeSection.tsx    # On-page resume credentials banner
│       ├── ResumeModal.tsx      # ATS-formatted printable resume modal
│       ├── Contact.tsx          # Validated contact form & direct reachouts
│       └── Footer.tsx           # Monogram, quick links & copyright
```

---

## 💻 Getting Started Locally

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher (or `pnpm` / `yarn`)

### 2. Installation
```bash
# Navigate to the portfolio directory
cd portfolio-srividya

# Install dependencies
npm install
```

### 3. Development Server
```bash
# Start local development server with Hot Module Replacement (HMR)
npm run dev
```
Open your browser at `http://localhost:5173`.

### 4. Production Build
```bash
# Type check and build production assets into /dist
npm run build

# Preview the production build locally
npm run preview
```

---

## 🌐 Deployment Guidelines

This project builds static assets (`dist/`) suitable for deployment on any modern static hosting service:

- **Vercel**: Import the repository and set Build Command to `npm run build` and Output Directory to `dist`.
- **Netlify**: Connect repository, set Build Command to `npm run build`, and Publish Directory to `dist`.
- **GitHub Pages**: Build the project and deploy the `dist/` directory using `gh-pages` or GitHub Actions.

---

## 🔒 Confidentiality & Accuracy Rules Followed

- **Strict Exclusions**: Zero mentions of Upwork, freelancing, freelance clients, or Reliance.
- **Integrity**: Zero fabricated companies, certificate IDs, LeetCode rankings, or fake live URLs.
- **Clear Status Demarcation**: In-development and planned projects (LearnHub, AI Resume Analyzer) are prominently designated as such.

---

## 👤 Author Information

- **Name**: Vidya (Srividya Kuruva)
- **Degree**: B.Tech in Artificial Intelligence & Data Science (3rd Year, 2025–2028)
- **Institution**: St. Marys Group of Institutions
- **Location**: Jogulamba Gadwal District, Telangana, India
- **GitHub**: [github.com/ksrividya7670-Kuruva](https://github.com/ksrividya7670-Kuruva)
- **LinkedIn**: [linkedin.com/in/srividya-kuruva-17a25638b](https://www.linkedin.com/in/srividya-kuruva-17a25638b/)
- **Email**: ksrividya7670@gmail.com
