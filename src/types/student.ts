export interface StudentStats {
  connections: number;
  studyGroups: number;
  resourcesShared: number;
  activeProjects: number;
}

export interface DashboardStudent {
  name: string;
  term: string;
  college: string;
  profileCompletion: number;
  stats: StudentStats;
  aiFound: {
    peerMatches: number;
    projectInvitations: number;
    newResources: number;
  };
}

export interface Student {
  id: string;
  name: string;
  department: string;
  semester: string;
  skills: string[];
  interests: string[];
  researchAreas: string[];
  matchPercentage: number;
  collaborationStatus: 'open' | 'busy';
}

export interface Deadline {
  id: string;
  day: string;
  month: string;
  title: string;
  subtitle: string;
  urgentText?: string;
}

export interface MessageItem {
  id: string;
  senderName: string;
  avatarInitials: string;
  bgClass: string;
  textClass: string;
  online: boolean;
  previewText: string;
  time: string;
}

export interface RecommendedGroup {
  id: string;
  name: string;
  info: string;
  matchPct: number;
  bgClass: string;
}

export interface LearningProgressItem {
  id: string;
  title: string;
  statusText: string;
  statusBg: string;
  statusColor: string;
  percentage: number;
}

export interface CollaborationItem {
  id: string;
  title: string;
  progressText: string;
  percentage: number;
  members: {
    initials: string;
    bgClass: string;
    textClass: string;
  }[];
  workspaceId?: string;
}

export interface ActivityFeedItem {
  id: string;
  title: string;
  time: string;
}
