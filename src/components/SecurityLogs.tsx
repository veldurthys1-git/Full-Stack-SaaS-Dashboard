import React from 'react';
import { AlertTriangle, Shield, Lock, Eye } from 'lucide-react';

const logs = [
  {
    id: 1,
    type: 'warning',
    title: 'Multiple failed login attempts',
    description: 'IP: 192.168.1.100 - 5 failed attempts',
    time: '2 minutes ago',
    icon: AlertTriangle,
    color: 'orange'
  },
  {
    id: 2,
    type: 'success',
    title: 'Security scan completed',
    description: 'No vulnerabilities detected',
    time: '15 minutes ago',
    icon: Shield,
    color: 'green'
  },
  {
    id: 3,
    type: 'info',
    title: 'Password policy updated',
    description: 'Minimum length increased to 12 characters',
    time: '1 hour ago',
    icon: Lock,
    color: 'blue'
  },
  {
    id: 4,
    type: 'info',
    title: 'Access log review',
    description: 'Admin access from new device approved',
    time: '2 hours ago',
    icon: Eye,
    color: 'purple'
  }
];

export const SecurityLogs: React.FC = () => {
  const colorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500',
  };

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Security Logs</h3>
      <div className="space-y-4">
        {logs.map((log) => {
          const Icon = log.icon;
          return (
            <div key={log.id} className="flex items-start space-x-3 p-4 bg-gray-700 rounded-lg">
              <div className={`p-2 rounded-lg ${colorClasses[log.color as keyof typeof colorClasses]}`}>
                <Icon size={16} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">{log.title}</p>
                <p className="text-gray-400 text-sm">{log.description}</p>
                <p className="text-gray-500 text-xs mt-1">{log.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};