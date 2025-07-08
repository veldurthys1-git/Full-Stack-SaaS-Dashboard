import React from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { MainContent } from './MainContent';
import { useDashboard } from '../context/DashboardContext';

export const DashboardLayout: React.FC = () => {
  const { sidebarCollapsed } = useDashboard();

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className={`flex-1 flex flex-col transition-all duration-300 ${
        sidebarCollapsed ? 'ml-16' : 'ml-64'
      }`}>
        <Header />
        <MainContent />
      </div>
    </div>
  );
};