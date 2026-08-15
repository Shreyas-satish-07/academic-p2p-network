import React from 'react';
import { TRENDING_DISCUSSIONS } from '../../data/discussions';

export const DiscussionCard: React.FC = () => {
  return (
    <div className="card">
      <div className="card-head">
        <span className="card-tab tab-marigold">DC</span>
        <span className="card-title">Trending discussions</span>
      </div>
      
      {TRENDING_DISCUSSIONS.map((disc) => (
        <div key={disc.id} className="disc-item">
          <div className="t">{disc.title}</div>
          <div className="disc-meta">
            <span className="vote-pill">▲ {disc.votes}</span>
            <span>{disc.commentsCount} comments</span>
            <span className="disc-cat">{disc.category}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default DiscussionCard;
