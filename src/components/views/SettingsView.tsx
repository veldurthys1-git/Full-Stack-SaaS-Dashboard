import React from 'react';
import { Settings, Users, Globe, Bell } from 'lucide-react';
import { SettingsSection } from '../SettingsSection';

export const SettingsView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">Settings</h1>
        <p className="text-gray-400">Configure your platform settings and preferences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SettingsSection
          icon={Settings}
          title="General Settings"
          description="Basic platform configuration"
        />
        <SettingsSection
          icon={Users}
          title="Team Management"
          description="Manage team members and roles"
        />
        <SettingsSection
          icon={Globe}
          title="API Settings"
          description="Configure API keys and webhooks"
        />
        <SettingsSection
          icon={Bell}
          title="Notifications"
          description="Set up alerts and notifications"
        />
      </div>
    </div>
  );
};