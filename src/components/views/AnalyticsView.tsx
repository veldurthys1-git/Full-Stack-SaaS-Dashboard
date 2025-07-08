import React from 'react';
import { Chart } from '../Chart';
import { AnalyticsMetrics } from '../AnalyticsMetrics';
import { TrafficSources } from '../TrafficSources';

export const AnalyticsView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">Analytics</h1>
        <p className="text-gray-400">Detailed insights into your platform performance.</p>
      </div>

      <AnalyticsMetrics />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart />
        <TrafficSources />
      </div>
    </div>
  );
};