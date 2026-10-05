export interface Project {
  id: string;
  name: string;
  tagline: string;
  problemStatement: string;
  description: string;
  keyFeatures: string[];
  technologies: string[];
  myContribution: string;
  category: 'Featured' | 'Other';
  status: 'Completed' | 'In Development' | 'Planned / In Development';
  githubUrl?: string;
  liveUrl?: string;
  docsAvailable?: boolean;
}

export const projectsData: Project[] = [
  {
    id: 'oams',
    name: 'Official Appointment Management System (OAMS)',
    tagline: 'Enterprise appointment scheduling & role-based workflow platform',
    problemStatement:
      'Manual appointment scheduling in institutions and offices frequently encounters double-booking conflicts, lack of role isolation between staff and visitors, inefficient manual follow-ups, and a lack of audit visibility.',
    description:
      'A real-world-oriented, production-ready appointment management platform designed to streamline appointment requests, scheduling, communication, and role-based workflows across administrative and departmental operations.',
    keyFeatures: [
      'Monorepo architecture with @oams/api (Express, TypeScript, Knex) and @oams/web (React 19, TanStack Query, Tailwind)',
      'Role-based Access Control (RBAC) & secure authentication with bcrypt and session management',
      'Conflict-free scheduling engine with calendar availability, room allocation, and holiday management',
      'Transactional Outbox Pattern & asynchronous background workers for task reminders and overdue tracking',
      'Automated operational workers: no-show detection, visitor auto-checkout, and automatic appointment completion',
      'Enterprise security middleware stack: Helmet HTTP headers, CORS policies, cookie parsing, and API rate limiting',
      'Knex.js database schema migrations and multi-container Docker Compose orchestration'
    ],
    technologies: [
      'TypeScript',
      'Node.js',
      'Express.js',
      'React 19',
      'PostgreSQL / SQL',
      'Knex.js',
      'Redis',
      'Docker',
      'TanStack Query',
      'Tailwind CSS'
    ],
    myContribution:
      'Architected backend services across appointment, calendar, and task reminder modules; created database schema migrations; implemented transactional outbox worker pipelines; and integrated modern React interface components.',
    category: 'Featured',
    status: 'Completed',
    githubUrl: 'https://github.com/ksrividya7670-Kuruva/OAMS',
    docsAvailable: true
  },
  {
    id: 'learnhub',
    name: 'Interactive Coding Learning Platform',
    tagline: 'W3Schools-inspired modern developer education platform',
    problemStatement:
      'Engineering students frequently experience fragmented learning across disparate tutorial sites, lacking a single cohesive platform that combines structured course tracks, coding exercises, quizzes, and company-focused interview preparation.',
    description:
      'An interactive web-based learning platform inspired by modern developer documentation and tutorials, engineered to provide structured programming courses, hands-on exercises, quizzes, progress tracking, and placement interview roadmaps.',
    keyFeatures: [
      'Structured modular courses organized by technology domains and language categories',
      'Interactive coding exercises and lesson-by-lesson practice components',
      'Chapter quizzes, progress tracking, and persistent student note-taking',
      'Curated developer roadmaps, technical FAQs, and company-wise interview preparation tracks',
      'Instructor and administrative management panel for curriculum publishing'
    ],
    technologies: [
      'React.js',
      'JavaScript',
      'Tailwind CSS',
      'Python',
      'Django',
      'Django REST Framework',
      'JWT Authentication',
      'PostgreSQL',
      'Cloudinary'
    ],
    myContribution:
      'Designing modern, responsive course navigation and interactive learning interfaces in React; building Django REST Framework endpoints for course content delivery, user authentication, and student progress tracking.',
    category: 'Featured',
    status: 'In Development',
    docsAvailable: true
  },
  {
    id: 'resume-analyzer',
    name: 'AI-Powered Resume Analyzer',
    tagline: 'Intelligent resume optimization & ATS compatibility platform',
    problemStatement:
      'Campus placement candidates often face early screening rejections due to non-ATS-optimized resume formats, missing technical keywords, and lack of alignment with targeted software engineering job descriptions.',
    description:
      'An AI-driven resume analysis platform that evaluates resumes against software engineering job descriptions, providing comprehensive skill extraction, missing keyword identification, ATS scoring, and targeted resume improvement suggestions.',
    keyFeatures: [
      'Resume file upload and structured technical profile parsing',
      'Automated extraction of programming languages, frameworks, and database proficiencies',
      'Semantic job description comparison and missing skill gap analysis',
      'ATS-oriented compatibility score and breakdown dashboard',
      'Actionable recommendations for project descriptions and technical impact phrasing'
    ],
    technologies: [
      'React.js',
      'Python',
      'Django',
      'Django REST Framework',
      'NLP / AI Analysis',
      'PostgreSQL',
      'Tailwind CSS'
    ],
    myContribution:
      'Architecting candidate evaluation workflows, structuring data schemas for resume parsing, and designing user-friendly dashboard interfaces for score inspection and recommendations.',
    category: 'Featured',
    status: 'Planned / In Development',
    docsAvailable: false
  },
  {
    id: 'mern-workout',
    name: 'MERN Workout Application',
    tagline: 'Full-stack fitness and workout tracking system',
    problemStatement:
      'Maintaining consistent fitness tracking requires a straightforward, responsive tool without unnecessary paywalls or clutter.',
    description:
      'A full-stack workout management application for creating, viewing, updating, and tracking personal workout records and fitness progression.',
    keyFeatures: [
      'Full CRUD operations for workout routines, sets, and load weights',
      'RESTful backend architecture with Express.js and Node.js',
      'MongoDB database integration with Mongoose schema validation',
      'Clean and responsive user interface for mobile and desktop logging'
    ],
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs'],
    myContribution:
      'Built full-stack application from scratch, including MongoDB schema modeling, Express route controllers, and React UI state management.',
    category: 'Other',
    status: 'Completed'
  },
  {
    id: 'laundry-wallah',
    name: 'Laundry Wallah — Service Workflow System',
    tagline: 'Operational service scheduling and garment order tracking',
    problemStatement:
      'Local laundry service providers rely on error-prone paper registers to track order statuses, pricing, and promised delivery times.',
    description:
      'A workflow application designed to streamline customer order intake, garment itemization, laundry stage updates, and delivery timelines.',
    keyFeatures: [
      'Order registration and automated receipt itemization',
      'Multi-stage status lifecycle (Received, In Wash, Pressed, Ready for Pickup)',
      'Customer contact logging and order search filter',
      'Lightweight and intuitive responsive UI designed for quick input'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    myContribution:
      'Created user workflow interfaces and implemented client-side state handling for order tracking and calculation logic.',
    category: 'Other',
    status: 'Completed'
  },
  {
    id: 'sneaker-store',
    name: 'Thala 7 Sneaker Store',
    tagline: 'Modern footwear e-commerce showcase',
    problemStatement:
      'Showcasing footwear online requires high-performance catalog rendering, intuitive product filtering, and engaging visual layouts.',
    description:
      'An e-commerce frontend project highlighting product presentations, dynamic category filters, shopping cart state management, and responsive layouts.',
    keyFeatures: [
      'Interactive product catalog with brand and category filtering',
      'Client-side cart functionality with real-time total updates',
      'Responsive design optimized for smooth mobile and desktop shopping'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
    myContribution:
      'Designed and coded the frontend interface, cart state logic, and responsive layouts.',
    category: 'Other',
    status: 'Completed'
  },
  {
    id: 'expense-tracker',
    name: 'Personal Expense Tracker',
    tagline: 'Real-time personal finance and balance tracking utility',
    problemStatement:
      'Managing student budgets and daily cash flows requires a fast, accessible tool to visualize income and expenditures.',
    description:
      'A web application for logging personal transactions, categorizing spending, and calculating real-time account balances.',
    keyFeatures: [
      'Real-time calculation of total income, expenses, and net balance',
      'Categorized transaction history list with delete capability',
      'Browser LocalStorage persistence for saving entries across sessions'
    ],
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'LocalStorage'],
    myContribution:
      'Implemented transactional ledger logic, DOM manipulation algorithms, and local data persistence.',
    category: 'Other',
    status: 'Completed'
  },
  {
    id: 'todo-app',
    name: 'Interactive Task Manager',
    tagline: 'Focused daily productivity and task organizer',
    problemStatement:
      'Managing daily academic deadlines and coding goals requires a clean, zero-friction task organizer.',
    description:
      'A clean task management application demonstrating DOM manipulation, task priority management, status toggles, and data persistence.',
    keyFeatures: [
      'Add, edit, complete, and remove daily task items',
      'Filter tasks by All, Active, and Completed views',
      'Local storage integration ensuring tasks remain saved across page refreshes'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    myContribution:
      'Built clean user interaction flows and persistent state management using native JavaScript.',
    category: 'Other',
    status: 'Completed'
  }
];

export const projectFilters = ['All', 'Featured', 'Other', 'Full Stack', 'Frontend'];
