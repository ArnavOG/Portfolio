export interface TimelineNode {
  id: string;
  period: string;
  title: string;
  description: string;
  type: 'past' | 'present' | 'future';
  relatedProject?: string;
  relatedProjectSlug?: string;
  relatedLink?: string;
}

export const timelineNodes: TimelineNode[] = [
  {
    id: '01',
    period: '2022',
    title: 'Computer Science Begins',
    description: 'Started my formal journey into Computer Science. In 9th standard, I chose Computer Science as the Extra subject and I got introduced to the Computers History, fundamentals and OS and the Intro of Programming went from something interesting to something I wanted to understand properly.',
    type: 'past',
  },
  {
    id: '02',
    period: '2023',
    title: 'Learning to Code',
    description: '10th standard continued with Computer Science where I was heavily exposed to C language, OS and basics of Cyber Security and performed a good score.',
    type: 'past',
  },
  {
    id: '03',
    period: '2024',
    title: 'CS Education & The Creator',
    description: 'Got Enrolled in Diploma in Computer Science after getting All India Rank 1709 in JEECUP and started my college as a first year, Although the new curriculum had almost no CS Branch related subject in first year, I still kept looking at what I learnt and Started ArnavoltZ and began creating Gaming content as a passion.',
    type: 'past',
  },
  {
    id: '04',
    period: '2025',
    title: 'The Builder',
    description: 'Started taking software development more seriously — working with Java, building projects, learning web development, and getting comfortable with tools like Git and GitHub. As for content creation, storytelling and experimentation slowly became part of the identity, where ArnavoltZ started growing and caught Momentum and became a Brand.',
    type: 'past',
    relatedProject: 'ArnavoltZ YouTube',
    relatedLink: 'https://www.youtube.com/@ArnavoltZ',
  },
  {
    id: '05',
    period: '2026',
    title: 'The Acceleration',
    description: 'A year of building on multiple fronts — Worked on C# ASP .NET Core, software projects, college, content creation, and growing ArnavoltZ. Started thinking beyond assignments and toward things I actually want to build. I eventually started working on GitHub Profile.',
    type: 'past',
    relatedProject: 'GitHub Profile',
    relatedLink: 'https://github.com/ArnavOG',
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
    period: '2027 →',
    title: 'The Next Chapter',
    description: 'Graduate. Ship something people actually use. Maybe start something. Definitely keep building.',
    type: 'future',
  },
];