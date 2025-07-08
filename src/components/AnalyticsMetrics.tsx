import React from 'react';
import { Eye, Users, Clock, MousePointer } from 'lucide-react';

const metrics = [
  {
    title: 'Page Views',
    value: '127,543',
    change: '+15.2%',
    icon: Eye,
    color: 'blue'
  },
  {
    title: 'Unique Visitors',
    value: '32,891',
    change: '+8.4%',
    icon: Users,
    color: 'green'
  },
  {
    title: 'Avg. Session Duration',
    value: '4m 32s',
    change: '+12.1%',
    icon: Clock,
    color: 'purple'
  },
  {
    title: 'Click-through Rate',
    value: '2.87%',
    change: '+3.2%',
    icon: MousePointer,
    color: 'orange'
  }
];

export const AnalyticsMetrics: React.FC = () => {
  const colorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500',
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${colorClasses[metric.color as keyof typeof colorClasses]}`}>
                <Icon size={24} className="text-white" />
              </div>
              <span className="text-green-400 text-sm font-medium">{metric.change}</span>
            </div>
            <h3 className="text-gray-400 text-sm font-medium mb-1">{metric.title}</h3>
            <p className="text-2xl font-bold text-white">{metric.value}</p>
          </div>
        );
      })}
    </div>
  );
};