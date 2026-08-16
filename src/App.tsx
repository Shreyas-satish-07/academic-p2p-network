import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import PeerMatch from './pages/PeerMatch';
import StudyGroups from './pages/StudyGroups';
import { ROUTES } from './constants/routes';

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        <Route path={ROUTES.PROFILE} element={<Profile />} />
        <Route path={ROUTES.PEER_MATCH} element={<PeerMatch />} />
        <Route path={ROUTES.STUDY_GROUPS} element={<StudyGroups />} />
        <Route path="*" element={<Navigate to={ROUTES.DASHBOARD} replace />} />
      </Routes>
    </Router>
  );
};

export default App;

