export interface Peer {
  id: string;
  name: string;
  department: string;
  skills: string[];
  matchPercentage?: number;
  // Dashboard compatibility fields:
  initials?: string;
  matchPct?: number;
  bgClass?: string;
  textClass?: string;
}


