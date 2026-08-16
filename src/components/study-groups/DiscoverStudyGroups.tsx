import React, { useState } from 'react';
import { DISCOVER_STUDY_GROUPS } from '../../data/studyGroupsData';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Button } from '../ui/button';

export const DiscoverStudyGroups: React.FC = () => {
  const [joinedGroupIds, setJoinedGroupIds] = useState<string[]>([]);

  const toggleJoin = (groupId: string) => {
    setJoinedGroupIds((prev) =>
      prev.includes(groupId)
        ? prev.filter((id) => id !== groupId)
        : [...prev, groupId]
    );
  };

  const getDifficultyClass = (difficulty?: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'diff-beginner';
      case 'Intermediate':
        return 'diff-intermediate';
      case 'Advanced':
        return 'diff-advanced';
      default:
        return 'diff-beginner';
    }
  };

  const getIconStyles = (acronym?: string) => {
    switch (acronym) {
      case 'OS':
      case 'DB':
        return { background: 'var(--pine-tint)', color: 'var(--pine-dark)' };
      case 'PP':
      case 'RP':
        return { background: 'var(--marigold-tint)', color: 'var(--marigold)' };
      case 'DD':
      case 'CN':
        return { background: 'var(--slate-tint)', color: 'var(--slate)' };
      case 'FB':
      case 'AP':
        return { background: 'var(--rust-tint)', color: 'var(--rust)' };
      default:
        return { background: 'var(--pine-tint)', color: 'var(--pine-dark)' };
    }
  };

  return (
    <Card className="pm-matches">
      <CardHeader>
        <span className="card-tab tab-pine">DG</span>
        <CardTitle>Discover study groups</CardTitle>
        <span className="card-count">62 groups</span>
      </CardHeader>
      
      <CardContent>
        <div className="discover-grid">
          {DISCOVER_STUDY_GROUPS.map((group) => {
            const isJoined = joinedGroupIds.includes(group.id);
            const iconStyle = getIconStyles(group.acronym);
            const membersText = `${group.memberCount} members`;

            return (
              <div key={group.id} className="dg-card">
                <div className="dg-top">
                  <div className="dg-icon" style={iconStyle}>
                    {group.acronym}
                  </div>
                  <div>
                    <div className="dg-name">{group.title}</div>
                    <div className="dg-subject">{group.subject}</div>
                  </div>
                </div>
                <div className="dg-tags">
                  <span className={`diff-pill ${getDifficultyClass(group.difficulty)}`}>
                    {group.difficulty}
                  </span>
                  <span className="dg-activity">
                    <span className="online-dot" />
                    {group.activityStatusText}
                  </span>
                </div>
                <div className="dg-bottom">
                  <span className="dg-members">{membersText}</span>
                  <Button 
                    className="dg-join"
                    onClick={() => toggleJoin(group.id)}
                    style={{
                      backgroundColor: isJoined ? 'var(--line)' : 'var(--pine-tint)',
                      color: isJoined ? 'var(--ink-soft)' : 'var(--pine-dark)',
                    }}
                  >
                    {isJoined ? 'Joined' : 'Join'}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default DiscoverStudyGroups;
