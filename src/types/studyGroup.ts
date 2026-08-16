export interface StudyGroup {
  id: string;
  title: string;
  subject: string;
  memberCount: number;
  active: boolean;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  activityStatusText?: string;
  acronym?: string;
}
