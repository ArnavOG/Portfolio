export interface CreatorCard {
  title: string;
  subtitle: string;
  description: string;
  link?: string;
  linkLabel?: string;
  emoji: string;
  color: string;
}

export const creatorCards: CreatorCard[] = [
  {
    title: 'ArnavoltZ',
    subtitle: 'Gaming & Storytelling',
    description: 'My gaming channel where I create Minecraft content built around experimentation, humor, storytelling, and the occasional unexpected idea.',
    link: 'https://www.youtube.com/@ArnavoltZ',
    linkLabel: 'Watch on YouTube',
    emoji: '▶',
    color: 'yellow',
  },
  {
    title: 'ArnavisionZ',
    subtitle: 'Art & Visual Creativity',
    description: 'A space where I share my sketches and explore visual creativity outside of coding and content creation.',
    link: 'https://www.instagram.com/arnavisionz',
    linkLabel: 'View My Sketches',
    emoji: '✎',
    color: 'purple',
  },
  {
    title: 'ArnavybeZ',
    subtitle: 'AI-Assisted Music',
    description: 'My music project where I experiment with AI-assisted music creation, exploring different sounds, ideas, and styles, understanding Beats and Rhythm.',
    link: 'https://www.youtube.com/@ArnavybeZ',
    linkLabel: 'Listen on YouTube',
    emoji: '♪',
    color: 'blue',
  },
];