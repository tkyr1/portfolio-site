import { Project, SocialLink } from './types';

export const HERO_CONTENT = {
  name: "T.Kayra Dönmez",
  title: "engineering & quantitative finance"
};

export const ABOUT_CONTENT = `an engineering student who is obsessed with math; his goal is to learn statistics by making mistakes on real data sets.`;

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Regime Adaptive Volatility & Correlation Engine',
    category: 'Fintech',
    year: '2024-'
  },
  {
    id: '2',
    title: 'High Throughput Signal Inference System',
    category: 'Quantitative Research',
    year: '2025-'
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'email', url: 'mailto:tkyrdnmz@hotmail.com' },
  { label: 'linkedin', url: 'www.linkedin.com/in/tevfik-kayra-d-678aa5312' },
  { label: 'github', url: 'https://github.com/tkyr1' },
];