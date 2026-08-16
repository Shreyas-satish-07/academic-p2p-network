export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  status: 'Live' | 'In progress';
  featured?: boolean;
  repositoryUrl: string;
}
