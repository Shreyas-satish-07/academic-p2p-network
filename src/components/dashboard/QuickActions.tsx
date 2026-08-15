import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const QuickActions: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="quick-actions" ref={containerRef}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, scale: 0.95 }}
            animate={{ height: 'auto', opacity: 1, scale: 1 }}
            exit={{ height: 0, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="quick-menu quick-menu-cards open"
            style={{ overflow: 'hidden', transformOrigin: 'bottom right' }}
          >
            <button className="quick-btn quick-card">
              <span className="quick-emoji">📚</span>
              Upload Notes
            </button>
            <button className="quick-btn quick-card">
              <span className="quick-emoji">👥</span>
              Create Group
            </button>
            <button className="quick-btn quick-card">
              <span className="quick-emoji">🚀</span>
              Start Project
            </button>
            <button className="quick-btn quick-card">
              <span className="quick-emoji">❓</span>
              Ask a Question
            </button>
            <button className="quick-btn quick-card">
              <span className="quick-emoji">🤝</span>
              Find Study Partner
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        className={`quick-fab ${isOpen ? 'open' : ''}`} 
        id="quickFab"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          className="transition-transform duration-200"
          style={{ transform: isOpen ? 'rotate(45deg)' : 'none' }}
        >
          <path d="M12 5v14M5 12h14"/>
        </svg>
      </button>
    </div>
  );
};
export default QuickActions;
