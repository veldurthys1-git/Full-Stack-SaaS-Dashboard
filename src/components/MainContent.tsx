import React from 'react';
import { useDashboard } from '../context/DashboardContext';
import { DashboardView } from './views/DashboardView';
import { AnalyticsView } from './views/AnalyticsView';
import { UsersView } from './views/UsersView';
import { BillingView } from './views/BillingView';
import { SecurityView } from './views/SecurityView';
import { SettingsView } from './views/SettingsView';

export const MainContent: React.FC = () => {
  const { activeView } = useDashboard();

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <DashboardView />;
      case 'analytics':
        return <AnalyticsView />;
      case 'users':
        return <UsersView />;
      case 'billing':
        return <BillingView />;
      case 'security':
        return <SecurityView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <main className="flex-1 overflow-auto p-6">
      {renderView()}
    </main>
  );
};