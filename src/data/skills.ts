export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: 'Frontend Development',
    description: 'Building modern, performant, and responsive web user interfaces',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'Bootstrap']
  },
  {
    title: 'Backend Engineering',
    description: 'Architecting robust server-side APIs, business logic, and services',
    skills: ['Node.js', 'Express.js', 'Python', 'Django', 'Django REST Framework']
  },
  {
    title: 'Database Management',
    description: 'Relational & NoSQL data modeling, querying, and optimization',
    skills: ['PostgreSQL', 'MongoDB', 'SQL']
  },
  {
    title: 'Programming Languages',
    description: 'Core languages for software engineering, algorithms, and applications',
    skills: ['Python', 'Java', 'JavaScript']
  },
  {
    title: 'AI & Data Science',
    description: 'Foundations of intelligent data systems, models, and analytics',
    skills: ['Artificial Intelligence', 'Data Science', 'Machine Learning fundamentals']
  },
  {
    title: 'Tools & Technologies',
    description: 'Modern development tools, authentication patterns, and dev ecosystems',
    skills: ['REST APIs', 'JWT Authentication', 'Git', 'GitHub', 'Vite']
  }
];
