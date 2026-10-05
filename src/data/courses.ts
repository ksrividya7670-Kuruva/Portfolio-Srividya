export interface Course {
  id: string;
  title: string;
  platform: string;
  topics: string[];
  status: 'Completed' | 'In Progress' | 'Continuous Learning';
  category: 'Certification Course' | 'Self-Paced Track';
}

export const coursesData: Course[] = [
  {
    id: 'tutedude-web-dev',
    title: 'Web Development Course',
    platform: 'Tutedude',
    topics: ['HTML5 & CSS3', 'JavaScript fundamentals', 'Responsive Web Design', 'Web Building Blocks'],
    status: 'Completed',
    category: 'Certification Course'
  },
  {
    id: 'tutedude-adv-python',
    title: 'Advanced Python Course',
    platform: 'Tutedude',
    topics: ['Advanced OOP Concepts', 'Data Structures in Python', 'Functional Programming', 'Modules & Packages'],
    status: 'In Progress',
    category: 'Certification Course'
  },
  {
    id: 'continuous-dsa',
    title: 'Data Structures & Algorithms',
    platform: 'Placement Preparation & Problem Solving',
    topics: ['Arrays & Strings', 'Linked Lists', 'Searching & Sorting', 'Problem Decomposition'],
    status: 'Continuous Learning',
    category: 'Self-Paced Track'
  },
  {
    id: 'continuous-fullstack',
    title: 'Modern Full-Stack & API Engineering',
    platform: 'Practical Project Development',
    topics: ['React Ecosystem', 'Node.js & Express', 'Django & REST Framework', 'Database Modeling (SQL & NoSQL)'],
    status: 'Continuous Learning',
    category: 'Self-Paced Track'
  },
  {
    id: 'continuous-ai-ds',
    title: 'Artificial Intelligence & Data Science Curriculum',
    platform: 'Academic & Applied Study',
    topics: ['Data Analysis Fundamentals', 'Machine Learning Foundations', 'Mathematical Foundations for AI'],
    status: 'Continuous Learning',
    category: 'Self-Paced Track'
  }
];
