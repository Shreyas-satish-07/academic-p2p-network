import React from 'react';
import AppLayout from '../components/layout/AppLayout';
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

export const Dashboard: React.FC = () => {
  return (
    <AppLayout>
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
    </AppLayout>
  );
};

export default Dashboard;

