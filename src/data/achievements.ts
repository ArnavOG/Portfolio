export interface Achievement {
  title: string;
  description: string;
  year: string;
  type: 'hackathon' | 'academic' | 'open-source' | 'personal';
}

export const achievements: Achievement[] = [
  {
    title: 'AlgoVisualizer — 200+ GitHub Stars',
    description: 'Organically reached 200+ stars with no promotion. People found it useful for studying DSA.',
    year: '2024',
    type: 'personal',
  },
  {
    title: 'CS50x Certificate',
    description: 'Completed Harvard\'s CS50x with a final project grade of A.',
    year: '2022',
    type: 'academic',
  },
];