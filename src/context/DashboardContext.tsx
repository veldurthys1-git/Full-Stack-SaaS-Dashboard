import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DashboardContextType {
  activeView: string;
  setActiveView: (view: string) => void;
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (collapsed: boolean) => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};

interface DashboardProviderProps {
  children: ReactNode;
}

export const DashboardProvider: React.FC<DashboardProviderProps> = ({ children }) => {
  const [activeView, setActiveView] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <DashboardContext.Provider value={{
      activeView,
      setActiveView,
      sidebarCollapsed,
      setSidebarCollapsed
    }}>
      {children}
    </DashboardContext.Provider>
  );
};