import React from 'react';
import { FEATURED_COLLABORATOR } from '../../data/peerMatchData';

export const FeaturedCollaborator: React.FC = () => {
  const c = FEATURED_COLLABORATOR;
  
  // Custom initials generator
  const initials = c.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase();

  return (
    <div className="featured-collab">
      <div 
        className="featured-collab-avatar" 
        style={{ backgroundColor: 'var(--pine-tint)', color: 'var(--pine-dark)' }}
      >
        {initials}
      </div>
      <div className="featured-collab-body">
        <span className="featured-collab-tag">🌟 Recommended collaborator</span>
        <div className="featured-collab-name">{c.name}</div>
        <div className="featured-collab-meta">
          {c.department} · {c.semester}
        </div>
        <div className="featured-collab-note">
          Strongest overall match this week — shares your interest in web development and full-stack projects, and is actively looking for teammates.
        </div>
        <div className="featured-collab-chips">
          {c.skills?.map((skill, idx) => (
            <span key={idx} className="skill-chip">
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="featured-collab-actions">
        <div className="featured-collab-pct">
          {c.matchPercentage}%<span className="l">Match</span>
        </div>
        <button className="mbtn mbtn-solid">Connect</button>
      </div>
    </div>
  );
};

export default FeaturedCollaborator;
