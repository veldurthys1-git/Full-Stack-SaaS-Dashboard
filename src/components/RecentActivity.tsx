import React from 'react';
import { User, CreditCard, Settings, Bell } from 'lucide-react';

const activities = [
  {
    icon: User,
    title: 'New user registered',
    description: 'john.doe@example.com joined the platform',
    time: '2 minutes ago',
    color: 'blue'
  },
  {
    icon: CreditCard,
    title: 'Payment processed',
    description: 'Monthly subscription renewed',
    time: '15 minutes ago',
    color: 'green'
  },
  {
    icon: Settings,
    title: 'Settings updated',
    description: 'API configuration changed',
    time: '1 hour ago',
    color: 'purple'
  },
  {
    icon: Bell,
    title: 'System alert',
    description: 'High CPU usage detected',
    time: '2 hours ago',
    color: 'orange'
  }
];

export const RecentActivity: React.FC = () => {
  const colorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500',
  };

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          return (
            <div key={index} className="flex items-start space-x-3">
              <div className={`p-2 rounded-lg ${colorClasses[activity.color as keyof typeof colorClasses]}`}>
                <Icon size={16} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">{activity.title}</p>
                <p className="text-gray-400 text-sm">{activity.description}</p>
                <p className="text-gray-500 text-xs mt-1">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};