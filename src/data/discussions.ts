import type { Discussion } from '../types/discussion';

export const TRENDING_DISCUSSIONS: Discussion[] = [
  {
    id: '1',
    title: 'Is MERN better than Django for final-year projects?',
    votes: 58,
    commentsCount: 32,
    category: 'Projects',
  },
  {
    id: '2',
    title: 'Best resources for learning DBMS?',
    votes: 47,
    commentsCount: 19,
    category: 'Academics',
  },
  {
    id: '3',
    title: 'Looking for teammates for a hackathon.',
    votes: 33,
    commentsCount: 12,
    category: 'Clubs',
  },
  {
    id: '4',
    title: 'How do I prepare for placements?',
    votes: 64,
    commentsCount: 28,
    category: 'Placements',
  },
];
