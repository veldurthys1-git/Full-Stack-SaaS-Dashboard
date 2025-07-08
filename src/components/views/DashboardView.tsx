import React from 'react';
import { Users, DollarSign, TrendingUp, Activity } from 'lucide-react';
import { MetricCard } from '../MetricCard';
import { Chart } from '../Chart';
import { RecentActivity } from '../RecentActivity';

export const DashboardView: React.FC = () => {
  const metrics = [
    {
      title: 'Total Users',
      value: '5,247',
      change: '+12.3%',
      trend: 'up',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Monthly Revenue',
      value: '$24,780',
      change: '+8.7%',
      trend: 'up',
      icon: DollarSign,
      color: 'green'
    },
    {
      title: 'Conversion Rate',
      value: '3.24%',
      change: '+2.1%',
      trend: 'up',
      icon: TrendingUp,
      color: 'purple'
    },
    {
      title: 'Active Sessions',
      value: '1,429',
      change: '-5.2%',
      trend: 'down',
      icon: Activity,
      color: 'orange'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">Dashboard Overview</h1>
        <p className="text-gray-400">Welcome back! Here's what's happening with your platform.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart />
        <RecentActivity />
      </div>
    </div>
  );
};