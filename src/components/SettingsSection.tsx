import React from 'react';
import { ChevronRight, DivideIcon as LucideIcon } from 'lucide-react';

interface SettingsSectionProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const SettingsSection: React.FC<SettingsSectionProps> = ({
  icon: Icon,
  title,
  description
}) => {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors cursor-pointer">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-blue-500 rounded-lg">
            <Icon size={24} className="text-white" />
          </div>
          <div>
            <h3 className="text-white font-medium">{title}</h3>
            <p className="text-gray-400 text-sm">{description}</p>
          </div>
        </div>
        <ChevronRight size={20} className="text-gray-400" />
      </div>
    </div>
  );
};