export interface SkillGroup {
  category: string;
  variant: 'primary' | 'secondary' | 'accent' | 'default';
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    variant: 'primary',
    skills: ['C#', 'JavaScript', 'Java', 'HTML', 'CSS'],
  },
  {
    category: 'Tools',
    variant: 'accent',
    skills: ['Git', 'Github', 'VS Code', 'Jetbrains Rider', 'ChatGPT'],
  },
  {
    category: 'Frameworks & Databases',
    variant: 'secondary',
    skills: ['.NET', 'MySQL'],
  },
  {
    category: 'Currently Learning',
    variant: 'primary',
    skills: ['Computer Networks', 'OS Internals'],
  },
];