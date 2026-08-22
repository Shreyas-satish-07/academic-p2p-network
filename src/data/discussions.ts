import type { Discussion } from '../types/discussion';
import { INITIAL_DISCUSSIONS } from './discussionsData';

export const TRENDING_DISCUSSIONS: Discussion[] = INITIAL_DISCUSSIONS.filter(
  d => d.trending === true
);
