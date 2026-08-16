import React, { useState } from 'react';
import { MATCHED_STUDENTS } from '../../data/peerMatchData';

export const MatchedStudents: React.FC = () => {
  const [connectedIds, setConnectedIds] = useState<string[]>([]);
  const [invitedIds, setInvitedIds] = useState<string[]>([]);

  const toggleConnect = (id: string) => {
    setConnectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleInvite = (id: string) => {
    setInvitedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getAvatarStyles = (id: string) => {
    switch (id) {
      case 'AR':
        return { backgroundColor: 'var(--pine-tint)', color: 'var(--pine-dark)' };
      case 'RS':
        return { backgroundColor: 'var(--marigold-tint)', color: 'var(--marigold)' };
      case 'PN':
        return { backgroundColor: 'var(--slate-tint)', color: 'var(--slate)' };
      case 'DP':
        return { backgroundColor: 'var(--rust-tint)', color: 'var(--rust)' };
      default:
        return { backgroundColor: 'var(--pine-tint)', color: 'var(--pine-dark)' };
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="pm-matches">
      <div className="card">
        <div className="card-head">
          <span className="card-tab tab-pine">MS</span>
          <span className="card-title">Matched students</span>
          <span className="card-count">128 results</span>
        </div>

        {MATCHED_STUDENTS.map((student) => {
          const isConnected = connectedIds.includes(student.id);
          const isInvited = invitedIds.includes(student.id);
          
          return (
            <div key={student.id} className="match-card">
              <div 
                className="match-avatar" 
                style={getAvatarStyles(student.id)}
              >
                {getInitials(student.name)}
              </div>
              
              <div className="match-body">
                <div className="match-head">
                  <div>
                    <div className="match-name">{student.name}</div>
                    <div className="match-meta">
                      {student.department} · {student.semester}
                    </div>
                  </div>
                  {student.collaborationStatus === 'open' ? (
                    <span className="match-status status-open">Open to collaborate</span>
                  ) : (
                    <span className="match-status status-busy">Limited availability</span>
                  )}
                </div>
                
                <div className="match-interest-row">
                  <div className="match-interest-label">Skills</div>
                  <div className="chip-row">
                    {student.skills?.map((skill, idx) => (
                      <span key={idx} className="skill-chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="match-interest-row">
                  <div className="match-interest-label">Academic &amp; research interests</div>
                  <div className="chip-row">
                    {student.interests?.map((interest, idx) => (
                      <span key={idx} className="skill-chip">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="match-actions">
                <span className="match-pct match-pct-lg">
                  {student.matchPercentage}% match
                </span>
                <div className="match-btns">
                  <button className="mbtn mbtn-outline">View Profile</button>
                  <button 
                    onClick={() => toggleInvite(student.id)} 
                    className="mbtn mbtn-ghost"
                  >
                    {isInvited ? 'Invited' : 'Invite'}
                  </button>
                  <button 
                    onClick={() => toggleConnect(student.id)} 
                    className="mbtn mbtn-solid"
                  >
                    {isConnected ? 'Connected' : 'Connect'}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MatchedStudents;
