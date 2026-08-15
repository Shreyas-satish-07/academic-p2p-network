import React from 'react';

export const AIAssistant: React.FC = () => {
  return (
    <div className="ai-card">
      <div className="ai-head">
        <div className="ai-mark">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m12 2 2.2 5.8L20 10l-5.8 2.2L12 18l-2.2-5.8L4 10l5.8-2.2z"/>
          </svg>
        </div>
        <div className="ai-title">AI Study Assistant</div>
      </div>
      <p className="ai-sub">Ask about peers, resources, or plans — try one of these.</p>
      
      <div className="ai-suggestions">
        <div className="ai-sugg">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="9"/>
            <path d="M9 12h6M12 9v6"/>
          </svg>
          Find a React study partner.
        </div>
        <div className="ai-sugg">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="9"/>
            <path d="M9 12h6M12 9v6"/>
          </svg>
          Recommend resources for DBMS.
        </div>
        <div className="ai-sugg">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="9"/>
            <path d="M9 12h6M12 9v6"/>
          </svg>
          Generate a 7-day DSA study plan.
        </div>
        <div className="ai-sugg">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="9"/>
            <path d="M9 12h6M12 9v6"/>
          </svg>
          Identify missing skills for Machine Learning.
        </div>
      </div>

      <div className="ai-actions">
        <button className="ai-btn">Find Peers</button>
        <button className="ai-btn">Study Plan</button>
        <button className="ai-btn">Resources</button>
        <button className="ai-btn">Skill Analysis</button>
      </div>
    </div>
  );
};
export default AIAssistant;
