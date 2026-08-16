import React from 'react';
import { motion } from 'framer-motion';
import AppLayout from '../components/layout/AppLayout';
import ProfileHero from '../components/profile/ProfileHero';
import AboutCard from '../components/profile/AboutCard';
import AcademicInfo from '../components/profile/AcademicInfo';
import SkillsSection from '../components/profile/SkillsSection';
import PeerNetwork from '../components/profile/PeerNetwork';
import Certifications from '../components/profile/Certifications';
import ProjectPortfolio from '../components/profile/ProjectPortfolio';
import ResourceContributions from '../components/profile/ResourceContributions';
import Achievements from '../components/profile/Achievements';
import ActivityTimeline from '../components/profile/ActivityTimeline';
import ProfileCompletion from '../components/profile/ProfileCompletion';
import {
  PROFILE_DATA,
  PROJECTS,
  CERTIFICATIONS,
  RESOURCES,
  ACHIEVEMENTS,
  PEERS,
  PROFILE_COMPLETION,
  SOCIAL_LINKS,
  ACTIVITIES,
  PROFILE_STATS,
  ACADEMIC_BATCH,
} from '../data/profileData';
import '../styles/profile.css';

export const Profile: React.FC = () => {
  return (
    <AppLayout>
      <motion.div
        className="profile-grid w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="col-stack">
          {/* 1. Profile Hero */}
          <ProfileHero
            name={PROFILE_DATA.name}
            department="CSE"
            semester="Sem 1"
            college={PROFILE_DATA.college}
            avatar="SR"
            statistics={PROFILE_STATS}
            socialLinks={SOCIAL_LINKS}
          />

          {/* 2. About Me */}
          <AboutCard
            biography={PROFILE_DATA.biography}
            careerGoals={PROFILE_DATA.careerGoals}
            researchInterests={PROFILE_DATA.researchInterests}
            academicInterests={PROFILE_DATA.academicInterests}
          />

          {/* 3. Academic Information */}
          <AcademicInfo
            department={PROFILE_DATA.department}
            semester={PROFILE_DATA.semester}
            cgpa={PROFILE_DATA.cgpa}
            batch={ACADEMIC_BATCH}
            college={PROFILE_DATA.college}
          />

          {/* 4. Skills */}
          <SkillsSection skills={PROFILE_DATA.skills} />

          {/* 5. Peer Network */}
          <PeerNetwork peers={PEERS} />

          {/* 6. Certifications */}
          <Certifications certifications={CERTIFICATIONS} />

          {/* 7. Project Portfolio */}
          <ProjectPortfolio projects={PROJECTS} />

          {/* 8. Resource Contributions */}
          <ResourceContributions resources={RESOURCES} />

          {/* 9. Achievements */}
          <Achievements achievements={ACHIEVEMENTS} />

          {/* 10. Activity Timeline */}
          <ActivityTimeline activities={ACTIVITIES} />

          {/* 11. Profile Completion */}
          <ProfileCompletion
            percentage={PROFILE_COMPLETION.percentage}
            items={PROFILE_COMPLETION.items}
          />
        </div>
      </motion.div>
    </AppLayout>
  );
};

export default Profile;
