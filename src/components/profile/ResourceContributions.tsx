import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import type { Resource } from '../../types/resource';


interface ResourceContributionsProps {
  resources: Resource[];
}

export const ResourceContributions: React.FC<ResourceContributionsProps> = ({ resources }) => {
  return (
    <Card>
      <CardHeader>
        <span className="card-tab tab-slate">RC</span>
        <CardTitle>Resource contributions</CardTitle>
      </CardHeader>
      <CardContent>
        {resources.map((res) => (
          <div key={res.id} className="res-item">
            <div 
              className="res-icon" 
              style={{
                background: res.fileType === 'PDF' ? 'var(--rust-tint)' : 'var(--marigold-tint)',
                color: res.fileType === 'PDF' ? 'var(--rust)' : 'var(--marigold)',
              }}
            >
              {res.fileType}
            </div>
            <div className="res-info">
              <div className="t">{res.fileName}</div>
              <div className="res-meta-row">
                <span className="res-meta">📄 {res.fileType}</span>
                <span className="res-meta">📅 {res.uploadDate}</span>
                <span className="res-meta">⬇ {res.downloadCount} downloads</span>
              </div>
            </div>
            <div className="res-dl">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v12m0 0-4-4m4 4 4-4" />
                <path d="M4 19.5h16" />
              </svg>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ResourceContributions;
