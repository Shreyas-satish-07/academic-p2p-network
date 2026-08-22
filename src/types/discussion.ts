export interface DiscussionMember {
  id: string;
  name: string;
  initials: string;
  department: string;
  semester: string;
  avatarBg?: string;
  avatarColor?: string;
}

export interface DiscussionAnswer {
  id: string;
  author: DiscussionMember;
  content: string;
  createdAt: string;
  likes: number;
  accepted?: boolean;
}

export interface Discussion {
  id: string;
  title: string;
  description: string;
  type: 'Question' | 'Research' | 'Project' | 'Study Group';
  subject: string;
  author: DiscussionMember;
  tags: string[];
  createdAt: string;
  replies: number;
  views: number;
  trending?: boolean;
  acceptedAnswerId?: string;
  projectId?: string;
  workspaceId?: string;
  resourceId?: string;
  studyGroupId?: string;
  answers: DiscussionAnswer[];
  
  // Backward compatibility fields for dashboard DiscussionCard compilation
  votes?: number;
  commentsCount?: number;
  category?: string;
}
