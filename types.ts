export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  link?: string;
}

export interface SocialLink {
  label: string;
  url: string;
}