import React from 'react';
import { Shield, AlertTriangle, Lock, Eye } from 'lucide-react';

const securityMetrics = [
  {
    title: 'Security Score',
    value: '98.5%',
    change: '+2.1%',
    icon: Shield,
    color: 'green'
  },
  {
    title: 'Threat Alerts',
    value: '3',
    change: '-12.3%',
    icon: AlertTriangle,
    color: 'red'
  },
  {
    title: 'Failed Logins',
    value: '127',
    change: '+5.2%',
    icon: Lock,
    color: 'orange'
  },
  {
    title: 'Security Scans',
    value: '24/24',
    change: '0%',
    icon: Eye,
    color: 'blue'
  }
];

export const SecurityMetrics: React.FC = () => {
  const colorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    red: 'bg-red-500',
    orange: 'bg-orange-500',
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {securityMetrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${colorClasses[metric.color as keyof typeof colorClasses]}`}>
                <Icon size={24} className="text-white" />
              </div>
              <span className={`text-sm font-medium ${
                metric.change.startsWith('+') ? 'text-red-400' : 'text-green-400'
              }`}>
                {metric.change}
              </span>
            </div>
            <h3 className="text-gray-400 text-sm font-medium mb-1">{metric.title}</h3>
            <p className="text-2xl font-bold text-white">{metric.value}</p>
          </div>
        );
      })}
    </div>
  );
};