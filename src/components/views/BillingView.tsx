import React from 'react';
import { CreditCard, DollarSign, TrendingUp } from 'lucide-react';
import { BillingOverview } from '../BillingOverview';
import { RecentTransactions } from '../RecentTransactions';

export const BillingView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">Billing & Revenue</h1>
        <p className="text-gray-400">Monitor your revenue streams and billing analytics.</p>
      </div>

      <BillingOverview />
      <RecentTransactions />
    </div>
  );
};