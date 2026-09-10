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
    title: 'YouTube',
    subtitle: 'Developer Content',
    description: 'I make videos about projects I\'m building, things I\'m learning, and the honest experience of being a CS student who actually codes.',
    link: 'https://youtube.com',
    linkLabel: 'Watch on YouTube',
    emoji: '▶',
    color: 'yellow',
  },
  {
    title: 'Gaming Content',
    subtitle: 'Minecraft & More',
    description: 'Where it all started. I still play, still create, and still believe Minecraft is one of the best sandboxes for creative thinking ever made.',
    emoji: '🎮',
    color: 'purple',
  },
  {
    title: 'Writing & Notes',
    subtitle: 'Learning in Public',
    description: 'Occasionally write about things I\'ve figured out — technical deep dives, project retrospectives, and honest takes on learning to build.',
    emoji: '✏',
    color: 'blue',
  },
];