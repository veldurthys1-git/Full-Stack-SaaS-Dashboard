import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  BarChart3, 
  Settings, 
  Shield, 
  CreditCard,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useDashboard } from '../context/DashboardContext';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'users', label: 'Users', icon: Users },
  { id: 'billing', label: 'Billing', icon: CreditCard },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export const Sidebar: React.FC = () => {
  const { activeView, setActiveView, sidebarCollapsed, setSidebarCollapsed } = useDashboard();

  return (
    <div className={`fixed left-0 top-0 h-full bg-gray-800 border-r border-gray-700 transition-all duration-300 ${
      sidebarCollapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-700">
        {!sidebarCollapsed && (
          <h1 className="text-xl font-bold text-blue-400">SaaS Dashboard</h1>
        )}
        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
          {sidebarCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
      
      <nav className="mt-8">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={`w-full flex items-center px-4 py-3 text-left hover:bg-gray-700 transition-colors ${
                activeView === item.id ? 'bg-blue-600 text-white' : 'text-gray-300'
              }`}
            >
              <Icon size={20} className="min-w-[20px]" />
              {!sidebarCollapsed && (
                <span className="ml-3 font-medium">{item.label}</span>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};