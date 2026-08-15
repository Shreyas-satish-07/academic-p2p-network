export interface Peer {
  id: string;
  name: string;
  initials: string;
  department: string;
  skills: string[];
  matchPct: number;
  bgClass: string; // for custom avatar colors, e.g. 'var(--pine-tint)'
  textClass: string; // e.g. 'var(--pine-dark)'
}
