export interface SkillGroup {
  category: string;
  variant: 'primary' | 'secondary' | 'accent' | 'default';
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Programming Languages',
    variant: 'primary',
    skills: ['C#', 'JavaScript', 'Java', 'HTML', 'CSS'],
  },
  {
    category: 'Tools',
    variant: 'accent',
    skills: ['Git', 'GitHub', 'VS Code', 'JetBrains Rider', 'ChatGPT'],
  },
  {
    category: 'Frameworks & Databases',
    variant: 'secondary',
    skills: ['.NET', 'MySQL', 'Relational Databases'],
  },
  {
    category: 'Creative',
    variant: 'primary',
    skills: ['Video Editing', 'Thumbnail Design', 'Prompt Engineering', 'Storytelling', 'AI-Assisted Image, Video & Music Generation' ],
  },
  {
    category: 'Spoken Languages',
    variant: 'accent',
    skills: ['Hindi', 'English', 'Basic Japanese'],
  },
  {
    category: 'Soft Skills',
    variant: 'secondary',
    skills: ['Leadership', 'Teamwork & Collaboration','Communication', 'Problem Solving', 'Logical Thinking', 'Project Coordination'],
  },
  { 
    category: 'Currently Learning',
    variant: 'default',
    skills: ['Computer Networks', 'OS Internals', 'MVC', 'Japanese'],
  },
];