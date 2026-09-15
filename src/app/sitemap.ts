import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    'https://ArnavOG.github.io/Portfolio';

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/project-detail?slug=${project.slug}`,
    lastModified: '2026-09-15',
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: '2026-09-15',
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: '2026-09-15',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/project-detail`,
      lastModified: '2026-09-15',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...projectRoutes,
  ];
}