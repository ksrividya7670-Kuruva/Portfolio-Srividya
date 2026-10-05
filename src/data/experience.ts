export interface Experience {
  id: string;
  role: string;
  organization: string;
  duration: string;
  workMode: string;
  type: string;
  statusBadge: string;
  isCurrent?: boolean;
  description: string;
  highlights?: string[];
  skills: string[];
  hasOfferLetter?: boolean;
  offerLetterUrl?: string;
  offerLetterFilename?: string;
  offerLetterRef?: string;
  offerLetterTitle?: string;
}

export const experienceData: Experience[] = [
  {
    id: 'thiranex',
    role: 'Intern – Full Stack Development',
    organization: 'Thiranex',
    duration: '05 Oct 2026 – 04 Nov 2026',
    workMode: 'Remote / Project-Based',
    type: 'Internship',
    statusBadge: 'Current Internship',
    isCurrent: true,
    description: 'Currently gaining practical experience in Full Stack Development through a remote, project-based internship at Thiranex.',
    skills: ['Full Stack Development', 'Remote Project Engineering'],
    hasOfferLetter: true,
    offerLetterUrl: '/documents/Thiranex_OfferLetter_K_Srividya_THX-OCT0526-124.pdf',
    offerLetterFilename: 'Thiranex_OfferLetter_K_Srividya_THX-OCT0526-124.pdf',
    offerLetterRef: 'THX-OCT0526-124',
    offerLetterTitle: 'Thiranex — Internship Offer Letter'
  },
  {
    id: 'unified-mentor',
    role: 'Fullstack Web Development Intern',
    organization: 'Unified Mentor',
    duration: '01 Aug 2026 – 01 Nov 2026',
    workMode: 'Remote',
    type: 'Internship',
    statusBadge: 'Verified Offer & Internship',
    isCurrent: false,
    description: 'Completed a 3-month Fullstack Web Development internship at Unified Mentor Pvt. Ltd., developing full-stack web applications and assigned project modules.',
    highlights: [
      'Developed frontend interfaces and integrated backend services across assigned project modules.',
      'Worked with modern JavaScript, component architectures, backend routing, and database integrations.',
      'Strengthened technical problem-solving capabilities, code organization, and collaborative Git version control workflows.'
    ],
    skills: ['Full-Stack Development', 'Frontend Development', 'Backend Development', 'JavaScript', 'Git', 'Software Engineering'],
    hasOfferLetter: true,
    offerLetterUrl: '/documents/unified_mentor_offer_letter.pdf',
    offerLetterFilename: 'Unified_Mentor_OfferLetter_Kuruva_Srividya.pdf',
    offerLetterRef: 'UMID250726103538',
    offerLetterTitle: 'Unified Mentor — Internship Offer Letter'
  },
  {
    id: 'academic-systems',
    role: 'Software Project & Systems Development',
    organization: 'Academic & Project Engineering (OAMS Platform)',
    duration: '2025 – 2026',
    workMode: 'Academic / Monorepo',
    type: 'Academic Development',
    statusBadge: 'System Architecture',
    isCurrent: false,
    description: 'Contributed to the design, architectural planning, and implementation of the Official Appointment Management System (OAMS), engineering backend route controllers, appointment scheduling algorithms, and schema definitions.',
    highlights: [
      'Engineered backend route controllers, appointment scheduling algorithms, and background worker queues.',
      'Prepared technical documentation, architectural diagrams, and schema definitions for multi-role workflows.',
      'Focused on modular code design, error handling, security middleware, and placement-oriented technical excellence.'
    ],
    skills: ['TypeScript', 'Express.js', 'PostgreSQL', 'System Design', 'Technical Documentation'],
    hasOfferLetter: false
  }
];
