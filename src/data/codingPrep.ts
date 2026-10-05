export interface CodingTopic {
  title: string;
  focus: string;
  keyAreas: string[];
}

export const codingPrepTopics: CodingTopic[] = [
  {
    title: 'Data Structures & Algorithms',
    focus: 'Strengthening algorithmic problem decomposition and time/space complexity optimization',
    keyAreas: ['Arrays & Strings', 'Linked Lists', 'Searching & Sorting', 'Stack & Queue', 'Recursion & Trees']
  },
  {
    title: 'Core Programming Languages',
    focus: 'Mastering object-oriented principles, syntax depth, and clean coding standards',
    keyAreas: ['Python (OOP, scripting, libraries)', 'Java (Core Java, OOPs concepts)', 'JavaScript (ES6+, async/await, DOM)']
  },
  {
    title: 'SQL & Database Management (DBMS)',
    focus: 'Writing optimized relational queries, indexing concepts, and schema design',
    keyAreas: ['Complex Joins & Subqueries', 'Aggregation & Grouping', 'Normalization (1NF-3NF)', 'Transaction ACID properties']
  },
  {
    title: 'Computer Science Fundamentals',
    focus: 'Core theoretical foundation required for software engineering campus evaluations',
    keyAreas: ['Object-Oriented Design', 'Operating Systems basics', 'Computer Networks fundamentals', 'Software Engineering methodologies']
  },
  {
    title: 'AI & Data Science Track',
    focus: 'Applying analytical reasoning to data pipelines, predictive models, and modern AI paradigms',
    keyAreas: ['Data exploration with Python', 'Machine Learning pipelines', 'Model evaluation metrics', 'NLP application concepts']
  }
];
