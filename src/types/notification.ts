export interface Notification {
  id: string;
  title: string;
  time: string;
  bgClass: string;
  textClass: string;
  unread: boolean;
  type: 'message' | 'invitation' | 'resource' | 'reminder' | 'meeting';
}
