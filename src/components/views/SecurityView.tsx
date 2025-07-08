import React from 'react';
import { Shield, AlertTriangle, Lock } from 'lucide-react';
import { SecurityMetrics } from '../SecurityMetrics';
import { SecurityLogs } from '../SecurityLogs';

export const SecurityView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">Security Center</h1>
        <p className="text-gray-400">Monitor security events and system health.</p>
      </div>

      <SecurityMetrics />
      <SecurityLogs />
    </div>
  );
};