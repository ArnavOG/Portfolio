export interface TimelineNode {
  id: string;
  period: string;
  title: string;
  description: string;
  type: 'past' | 'present' | 'future';
  relatedProject?: string;
  relatedProjectSlug?: string;
}

export const timelineNodes: TimelineNode[] = [
  {
    id: '01',
    period: '2019',
    title: 'The Spark',
    description: 'Stumbled into programming through Minecraft modding. Wrote my first Java code to add custom blocks. Didn\'t know it then, but this was the beginning.',
    type: 'past',
  },
  {
    id: '02',
    period: '2020–2021',
    title: 'Learning to Code',
    description: 'Worked through Python tutorials, built small automation scripts, discovered CS50. Started understanding how software actually works under the hood.',
    type: 'past',
  },
  {
    id: '03',
    period: '2022',
    title: 'CS Education Begins',
    description: 'Enrolled in Computer Science. Data structures, algorithms, discrete math. Theory clicked when I connected it to projects I actually wanted to build.',
    type: 'past',
  },
  {
    id: '04',
    period: '2023',
    title: 'First Real Projects',
    description: 'Built AlgoVisualizer while studying DSA. Started making YouTube content. Realized I learn best by building and sharing — so I kept doing both.',
    type: 'past',
    relatedProject: 'AlgoVisualizer',
    relatedProjectSlug: 'algo-visualizer',
  },
  {
    id: '05',
    period: '2024',
    title: 'Shipping Things',
    description: 'Built Nexus Chat, PixelForge, and StudySync. Learned to ship, get feedback, and iterate. Started taking side projects seriously as portfolio pieces.',
    type: 'past',
    relatedProject: 'Nexus Chat',
    relatedProjectSlug: 'nexus-chat',
  },
  {
    id: '06',
    period: 'Now · 2025',
    title: 'Building in Public',
    description: 'Exploring AI/ML, systems programming, and open source. Looking for internships. Creating content. Connecting with other developers. Figuring out what to build next.',
    type: 'present',
  },
  {
    id: '07',
    period: '2026 →',
    title: 'The Next Chapter',
    description: 'Graduate. Ship something people actually use. Maybe start something. Definitely keep building.',
    type: 'future',
  },
];