import React from 'react';
import { DashboardLayout } from './components/DashboardLayout';
import { DashboardProvider } from './context/DashboardContext';

function App() {
  return (
    <DashboardProvider>
      <DashboardLayout />
    </DashboardProvider>
  );
}

export default App;