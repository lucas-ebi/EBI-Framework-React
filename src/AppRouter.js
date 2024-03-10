import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import UserPage from './pages/UserPage/UserPage';
import UserLoginPage from './pages/UserLoginPage/UserLoginPage';
import UserLogoutPage from './pages/UserLogoutPage/UserLogoutPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import LibraryPage from './pages/LibraryPage/LibraryPage';
import HelpPage from './pages/HelpPage/HelpPage';
import DataPage from './pages/SubmissionPages/DataPage/DataPage';
import ProjectPage from './pages/SubmissionPages/ProjectPage/ProjectPage';
import TeamPage from './pages/SubmissionPages/TeamPage/TeamPage';
import OverviewPage from './pages/SubmissionPages/OverviewPage/OverviewPage';
import SubmitPage from './pages/SubmissionPages/SubmitPage/SubmitPage';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/user/login" element={<UserLoginPage />} />
      <Route path="/user/logout" element={<UserLogoutPage />} />
      <Route path="/submission" element={<Navigate to="/submission/data" replace />} />
      <Route path="/submission/data" element={<DataPage />} />
      <Route path="/submission/project" element={<ProjectPage />} />
      <Route path="/submission/team" element={<TeamPage />} />
      <Route path="/submission/overview" element={<OverviewPage />} />
      <Route path="/submission/submit" element={<SubmitPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/library" element={<LibraryPage />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRouter;