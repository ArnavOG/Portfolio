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
      'Rust — ownership model and systems programming',
      'Computer Networks — TCP/IP deep dive',
      'OS Internals — how kernels actually work',
      'Docker & containerization basics',
    ],
  },
  {
    type: 'building',
    title: 'Currently Building',
    color: 'purple',
    items: [
      'NeuralSketch — sketch-to-image AI experiment',
      'StudySync v2 — collaborative study platform',
      'This portfolio — always iterating',
    ],
  },
  {
    type: 'exploring',
    title: 'Currently Exploring',
    color: 'blue',
    items: [
      'Open source contributions',
      'System design patterns',
      'Developer content creation',
      'The indie hacker / builder space',
    ],
  },
];