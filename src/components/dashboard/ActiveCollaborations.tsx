import React from 'react';
import { motion } from 'framer-motion';
import { ACTIVE_COLLABORATIONS } from '../../data/students';

export const ActiveCollaborations: React.FC = () => {
  return (
    <div className="card span-2">
      <div className="card-head">
        <span className="card-tab tab-pine">PR</span>
        <span className="card-title">Active collaborations</span>
        <span className="card-link">Open board →</span>
      </div>
      
      {ACTIVE_COLLABORATIONS.map((collab) => (
        <div key={collab.id} className="collab-item">
          <div className="collab-head">
            <span className="t">{collab.title}</span>
            <span className="pct">{collab.progressText}</span>
          </div>
          <div className="bar-track">
            <motion.div 
              className="bar-fill" 
              initial={{ width: '0%' }}
              animate={{ width: `${collab.percentage}%` }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <div className="avatars-stack">
            {collab.members.map((member, idx) => (
              <div 
                key={idx} 
                style={{ background: member.bgClass, color: member.textClass }}
              >
                {member.initials}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default ActiveCollaborations;
