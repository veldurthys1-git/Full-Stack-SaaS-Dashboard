import React from 'react';
import { TrendingUp, TrendingDown, DivideIcon as LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: LucideIcon;
  color: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  trend,
  icon: Icon,
  color
}) => {
  const colorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500',
  };

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${colorClasses[color as keyof typeof colorClasses]}`}>
          <Icon size={24} className="text-white" />
        </div>
        <div className={`flex items-center space-x-1 ${
          trend === 'up' ? 'text-green-400' : 'text-red-400'
        }`}>
          {trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          <span className="text-sm font-medium">{change}</span>
        </div>
      </div>
      
      <div>
        <h3 className="text-gray-400 text-sm font-medium mb-1">{title}</h3>
        <p className="text-2xl font-bold text-white">{value}</p>
      </div>
    </div>
  );
};