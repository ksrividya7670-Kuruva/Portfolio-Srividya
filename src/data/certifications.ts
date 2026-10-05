export interface Certification {
  title: string;
  organization?: string;
  status?: string;
}

export const certificationsData: Certification[] = [
  {
    title: 'Web Development Course',
    organization: 'Tutedude',
    status: 'Completed'
  },
  {
    title: 'Flex Code Certificate',
    status: 'Completed'
  },
  {
    title: 'Full Stack Web Development Internship',
    organization: 'Unified Mentor',
    status: 'Completed'
  },
  {
    title: 'Advanced Python',
    organization: 'Tutedude',
    status: 'Currently Learning'
  }
];
