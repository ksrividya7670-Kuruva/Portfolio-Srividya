export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  timeline: string;
  currentStatus?: string;
  location?: string;
  isPlaceholder?: boolean;
  notes?: string;
}

export const educationData: EducationItem[] = [
  {
    id: 'btech',
    degree: 'B.Tech – Artificial Intelligence and Data Science',
    institution: 'St. Marys Group of Institutions',
    timeline: '2025 – 2028',
    currentStatus: 'Currently in 3rd Year / 3-2 Semester',
    location: 'Telangana, India',
    isPlaceholder: false,
    notes: 'Focused on core software engineering, artificial intelligence, data structures, algorithms, and full-stack system development.'
  },
  {
    id: 'intermediate',
    degree: 'Intermediate Education (Class XII)',
    institution: '[Institution Name / Junior College Placeholder]',
    timeline: '[Year Placeholder]',
    location: 'Telangana, India',
    isPlaceholder: true,
    notes: 'Pre-university higher secondary education with focus on Mathematics, Physics, and Chemistry (MPC).'
  },
  {
    id: 'school',
    degree: 'Secondary School Certificate (Class X / SSC)',
    institution: '[School Name Placeholder]',
    timeline: '[Year Placeholder]',
    location: 'Telangana, India',
    isPlaceholder: true,
    notes: 'Secondary school education focusing on core academics, foundational sciences, and mathematics.'
  }
];
