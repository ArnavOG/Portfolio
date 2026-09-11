export interface LearningCard {
  type: 'learning' | 'building' | 'exploring';
  title: string;
  items: string[];
  color: 'yellow' | 'purple' | 'blue';
}

export const learningCards: LearningCard[] = [
  {
    type: 'learning',
    title: 'Currently Learning',
    color: 'yellow',
    items: [
      'Computer Networks — TCP/IP',
      'OS Internals — how kernels actually work',
      'ASP .NET Core - MVC',
    ],
  },
  {
    type: 'building',
    title: 'Currently Building',
    color: 'purple',
    items: [
      'Student Management System - Files in Process',
      'This portfolio — always iterating',
    ],
  },
  {
    type: 'exploring',
    title: 'Currently Exploring',
    color: 'blue',
    items: [
      'AI-assisted development',
      'Software architecture & project structure',
      'Creative coding & experimentation',
      'Content creation & storytelling',
    ],
  },
];