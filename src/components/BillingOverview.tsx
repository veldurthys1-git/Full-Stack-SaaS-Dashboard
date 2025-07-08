import React from 'react';
import { DollarSign, TrendingUp, CreditCard, Calendar } from 'lucide-react';

const billingMetrics = [
  {
    title: 'Monthly Revenue',
    value: '$24,780',
    change: '+8.7%',
    icon: DollarSign,
    color: 'green'
  },
  {
    title: 'Growth Rate',
    value: '12.4%',
    change: '+2.1%',
    icon: TrendingUp,
    color: 'blue'
  },
  {
    title: 'Active Subscriptions',
    value: '1,247',
    change: '+15.3%',
    icon: CreditCard,
    color: 'purple'
  },
  {
    title: 'Churn Rate',
    value: '2.1%',
    change: '-0.8%',
    icon: Calendar,
    color: 'orange'
  }
];

export const BillingOverview: React.FC = () => {
  const colorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500',
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {billingMetrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${colorClasses[metric.color as keyof typeof colorClasses]}`}>
                <Icon size={24} className="text-white" />
              </div>
              <span className={`text-sm font-medium ${
                metric.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
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