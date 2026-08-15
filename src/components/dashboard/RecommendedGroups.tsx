import React from 'react';
import { RECOMMENDED_GROUPS } from '../../data/students';

export const RecommendedGroups: React.FC = () => {
  return (
    <div className="card">
      <div className="card-head">
        <span className="card-tab tab-pine">SG</span>
        <span className="card-title">Recommended groups</span>
      </div>
      
      {RECOMMENDED_GROUPS.map((group) => (
        <div key={group.id} className="group-item">
          <div className="group-swatch" style={{ background: group.bgClass }}></div>
          <div className="group-info">
            <div className="t">{group.name}</div>
            <div className="s">{group.info}</div>
          </div>
          <span className="match-pct">{group.matchPct}%</span>
        </div>
      ))}
    </div>
  );
};
export default RecommendedGroups;
