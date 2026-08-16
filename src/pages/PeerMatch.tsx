import React from 'react';
import { motion } from 'framer-motion';
import AppLayout from '../components/layout/AppLayout';
import PeerMatchHero from '../components/peer-match/PeerMatchHero';
import FeaturedCollaborator from '../components/peer-match/FeaturedCollaborator';
import FilterPanel from '../components/peer-match/FilterPanel';
import MatchCompatibility from '../components/peer-match/MatchCompatibility';
import MatchedStudents from '../components/peer-match/MatchedStudents';
import StudyGroupSuggestions from '../components/peer-match/StudyGroupSuggestions';
import SkillExchange from '../components/peer-match/SkillExchange';
import CollaborationOpportunities from '../components/peer-match/CollaborationOpportunities';
import TopCollaborators from '../components/peer-match/TopCollaborators';
import NetworkActivity from '../components/peer-match/NetworkActivity';
import '../styles/peer-match.css';

export const PeerMatch: React.FC = () => {
  return (
    <AppLayout>
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <PeerMatchHero />
        
        <FeaturedCollaborator />

        <div className="pm-browse">
          <div className="pm-filters">
            <FilterPanel />
            <MatchCompatibility />
          </div>
          <MatchedStudents />
        </div>

        <StudyGroupSuggestions />
        <SkillExchange />
        <CollaborationOpportunities />
        <TopCollaborators />
        <NetworkActivity />
      </motion.div>
    </AppLayout>
  );
};

export default PeerMatch;
