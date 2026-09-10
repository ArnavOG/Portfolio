export interface SkillGroup {
  category: string;
  variant: 'primary' | 'secondary' | 'accent' | 'default';
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    variant: 'primary',
    skills: ['C#', 'Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'HTML', 'CSS'],
  },
  {
    category: 'Web',
    variant: 'accent',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'REST APIs', 'Canvas API'],
  },
  {
    category: 'Frameworks & Platforms',
    variant: 'secondary',
    skills: ['.NET', 'WPF', 'FastAPI', 'Vite', 'Vercel'],
  },
  {
    category: 'Tools',
    variant: 'default',
    skills: ['Git', 'GitHub', 'VS Code', 'Visual Studio', 'Figma', 'Postman', 'Linux'],
  },
  {
    category: 'Databases',
    variant: 'default',
    skills: ['SQLite', 'PostgreSQL', 'Supabase', 'IndexedDB'],
  },
  {
    category: 'Currently Learning',
    variant: 'primary',
    skills: ['Rust', 'Docker', 'System Design', 'Computer Networks', 'OS Internals'],
  },
];