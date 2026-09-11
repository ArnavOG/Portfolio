export interface Achievement {
  title: string;
  description: string;
  year: string;
  type: 'hackathon' | 'academic' | 'open-source' | 'personal';
}

export const achievements: Achievement[] = [
  {
    title: '90.83% — Class 10 Board Examination',
    description: 'Achieved 90.83% in the Class 10 Board Examination, demonstrating a strong academic foundation before pursuing a Diploma in Computer Science & Engineering.',
    year: '2024',
    type: 'academic',
  },
  {
    title: 'JEECUP — AIR 1709',
    description: 'Secured All India Rank 1709 in JEECUP and earned admission to Diploma in Computer Science & Engineering.',
    year: '2024',
    type: 'academic',
  },
  {
    title: 'First Year Diploma in CSE Completed',
    description: 'Successfully completed the first year of the three-year Diploma in Computer Science & Engineering, earning the required 46 credits under the National Credit Framework (NCRF) and NEP 2020.',
    year: '2025',
    type: 'academic',
  },
  {
    title: '6K Subscribers',
    description: 'Reached 6,000 subscribers in May 2026 after crossing multiple milestones in rapid succession.',
    year: '2026',
    type: 'personal',
  },
];