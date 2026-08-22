import type { Resource } from './resource';

export interface ProjectMember {
  id: string;
  name: string;
  initials: string;
  department: string;
  semester: string;
}

export interface ProjectTask {
  id: string;
  text: string;
  completed: boolean;
}

export interface ProjectActivityItem {
  id: string;
  time: string;
  text: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  status: 'Live' | 'In progress';
  featured?: boolean;
  repositoryUrl: string;
  department?: string;
  uploader?: string;
  membersCount?: number;
  neededSkills?: string[];
  recruitmentStatus?: 'Open' | 'Closed' | 'Request Sent' | 'Joined';
  completedTasks?: number;
  totalTasks?: number;
  deadline?: string;
  avatarBg?: string;
  avatarColor?: string;
  members?: ProjectMember[];
  workspaceId?: string;
  tasks?: ProjectTask[];
  resources?: Resource[];
  timeline?: ProjectActivityItem[];
}
