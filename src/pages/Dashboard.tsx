import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Navbar from '../components/layout/Navbar';
import WelcomeBanner from '../components/dashboard/WelcomeBanner';
import Statistics from '../components/dashboard/Statistics';
import AIAssistant from '../components/dashboard/AIAssistant';
import Deadlines from '../components/dashboard/Deadlines';
import Messages from '../components/dashboard/Messages';
import RecommendedGroups from '../components/dashboard/RecommendedGroups';
import PeerCard from '../components/dashboard/PeerCard';
import ResourceCard from '../components/dashboard/ResourceCard';
import AnnouncementCard from '../components/dashboard/AnnouncementCard';
import DiscussionCard from '../components/dashboard/DiscussionCard';
import LearningProgress from '../components/dashboard/LearningProgress';
import ActiveCollaborations from '../components/dashboard/ActiveCollaborations';
import ActivityTimeline from '../components/dashboard/ActivityTimeline';
import QuickActions from '../components/dashboard/QuickActions';

export const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="shell">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <main className="main w-full">
        <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
        
        <WelcomeBanner />

        {/* Notice/Announcement banner */}
        <div className="announce">
          <span className="tag">NOTICE</span>
          <span>Hackathon registrations for Byte{'\u00a0'}Build 2026 close Friday, Aug 21.</span>
          <a href="#">View details</a>
        </div>

        <Statistics />

        <AIAssistant />

        <div className="grid">
          <Deadlines />
          <Messages />
          <RecommendedGroups />
          <PeerCard />
          <ResourceCard />
          <AnnouncementCard />
          <DiscussionCard />
          <LearningProgress />
          <ActiveCollaborations />
          <ActivityTimeline />
        </div>
      </main>

      <QuickActions />
    </div>
  );
};
export default Dashboard;
