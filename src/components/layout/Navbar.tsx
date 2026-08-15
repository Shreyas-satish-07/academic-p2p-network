import React, { useState, useEffect, useRef } from 'react';
import NotificationDropdown from '../dashboard/NotificationDropdown';

interface NavbarProps {
  onMenuClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setIsNotifOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="topbar">
      <button 
        className="menu-fab" 
        id="menuFab" 
        aria-label="Open navigation"
        onClick={(e) => {
          e.stopPropagation();
          onMenuClick();
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>

      {/* SEARCH WRAP */}
      <div className="search-wrap" ref={searchRef}>
        <div 
          className="search" 
          id="searchTrigger"
          onClick={(e) => {
            e.stopPropagation();
            setIsSearchOpen(!isSearchOpen);
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
          Search people, groups, resources…
          <kbd>⌘K</kbd>
        </div>
        
        <div className={`search-panel ${isSearchOpen ? 'open' : ''}`} id="searchPanel">
          <div className="search-cats">
            <span className="search-cat">Students</span>
            <span className="search-cat">Study Groups</span>
            <span className="search-cat">Resources</span>
            <span className="search-cat">Projects</span>
            <span className="search-cat">Discussions</span>
          </div>
          <div className="search-sub">Recent searches</div>
          <div className="search-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
            DBMS unit 4 notes
          </div>
          <div className="search-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
            Rahul Sharma
          </div>
          <div className="search-sub">Suggested for you</div>
          <div className="search-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
            React study partners
          </div>
          <div className="search-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
            Machine Learning resources
          </div>
        </div>
      </div>

      {/* TOPBAR ICONS */}
      <div className="topbar-icons">
        <div className="notif-wrap" ref={notifRef}>
          <div 
            className="icon-btn notif-btn" 
            id="notifTrigger"
            onClick={(e) => {
              e.stopPropagation();
              setIsNotifOpen(!isNotifOpen);
            }}
          >
            <span aria-hidden="true">🔔</span>
            <span className="notif-count-badge">12</span>
          </div>
          
          <NotificationDropdown isOpen={isNotifOpen} />
        </div>
        <div className="avatar">SR</div>
      </div>
    </div>
  );
};
export default Navbar;
