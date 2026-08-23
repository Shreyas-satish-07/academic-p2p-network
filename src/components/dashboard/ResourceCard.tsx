import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RECENT_RESOURCES } from '../../data/resources';

export const ResourceCard: React.FC = () => {
  const navigate = useNavigate();
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleDownload = (e: React.MouseEvent, title: string) => {
    e.stopPropagation();
    setToastMessage(`Download started: ${title}`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  return (
    <div className="card cursor-pointer" onClick={() => navigate('/resources')}>
      <div className="card-head">
        <span className="card-tab tab-slate">RS</span>
        <span className="card-title">Recent resource uploads</span>
        <span className="card-link" style={{ marginLeft: 'auto' }}>View all →</span>
      </div>
      
      {RECENT_RESOURCES.map((res) => (
        <div key={res.id} className="res-item">
          <div 
            className="res-icon" 
            style={{ background: res.bgClass, color: res.textClass }}
          >
            {res.type}
          </div>
          <div className="res-info">
            <div className="t">{res.title}</div>
            <div className="s">{res.date} • {res.downloadCount} dls</div>
          </div>
          <button 
            className="res-dl" 
            aria-label={`Download ${res.title || ''}`}
            onClick={(e) => handleDownload(e, res.title || '')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3v12m0 0-4-4m4 4 4-4"/>
              <path d="M4 19h16"/>
            </svg>
          </button>
        </div>
      ))}

      {toastMessage && (
        <div className="collab-toast">
          <span>🔔</span>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};
export default ResourceCard;
