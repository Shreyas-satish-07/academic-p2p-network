import React, { useState } from 'react';
import { FEATURED_STUDY_GROUP } from '../../data/studyGroupsData';
import { Button } from '../ui/button';

export const FeaturedStudyGroup: React.FC = () => {
  const [isJoined, setIsJoined] = useState(false);

  return (
    <div className="featured-group">
      <div className="fg-cover">
        <span className="fg-live">
          <span className="fg-live-dot" />
          {FEATURED_STUDY_GROUP.activityStatus}
        </span>
      </div>
      <div className="fg-body">
        <div className="fg-icon">GD</div>
        <div className="fg-main">
          <div className="fg-name">{FEATURED_STUDY_GROUP.title}</div>
          <span className="fg-subject">{FEATURED_STUDY_GROUP.subject}</span>
          <p className="fg-desc">{FEATURED_STUDY_GROUP.description}</p>
          <div className="fg-meta-row">
            <div className="fg-meta">
              <div className="l">Members</div>
              <div className="v">{FEATURED_STUDY_GROUP.memberCount} students</div>
            </div>
            <div className="fg-meta">
              <div className="l">Schedule</div>
              <div className="v">{FEATURED_STUDY_GROUP.meetingSchedule}</div>
            </div>
            <div className="fg-meta">
              <div className="l">Level</div>
              <div className="v">Beginner friendly</div>
            </div>
          </div>
        </div>
        <div className="fg-actions">
          <span className="match-pct match-pct-lg">{FEATURED_STUDY_GROUP.matchPercentage}% match</span>
          <Button 
            className="fg-join" 
            onClick={() => setIsJoined(!isJoined)}
            style={{
              backgroundColor: isJoined ? 'var(--line)' : 'var(--pine)',
              color: isJoined ? 'var(--ink-soft)' : '#F6F4EC',
            }}
          >
            {isJoined ? 'Joined' : 'Join group'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedStudyGroup;
