import React from 'react';
import { CreditCard, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const transactions = [
  {
    id: 'TXN-001',
    type: 'subscription',
    amount: '$29.99',
    customer: 'John Doe',
    status: 'completed',
    time: '2 hours ago',
    direction: 'in'
  },
  {
    id: 'TXN-002',
    type: 'refund',
    amount: '$19.99',
    customer: 'Jane Smith',
    status: 'completed',
    time: '4 hours ago',
    direction: 'out'
  },
  {
    id: 'TXN-003',
    type: 'subscription',
    amount: '$49.99',
    customer: 'Bob Johnson',
    status: 'pending',
    time: '6 hours ago',
    direction: 'in'
  },
  {
    id: 'TXN-004',
    type: 'subscription',
    amount: '$29.99',
    customer: 'Alice Brown',
    status: 'completed',
    time: '8 hours ago',
    direction: 'in'
  }
];

export const RecentTransactions: React.FC = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'pending': return 'bg-yellow-500';
      case 'failed': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Recent Transactions</h3>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-blue-500 rounded-lg">
                <CreditCard size={20} className="text-white" />
              </div>
              <div>
                <p className="text-white font-medium">{transaction.customer}</p>
                <p className="text-gray-400 text-sm capitalize">{transaction.type}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="flex items-center space-x-1">
                  {transaction.direction === 'in' ? (
                    <ArrowUpRight size={16} className="text-green-400" />
                  ) : (
                    <ArrowDownRight size={16} className="text-red-400" />
                  )}
                  <span className={`font-medium ${
                    transaction.direction === 'in' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {transaction.amount}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{transaction.time}</p>
              </div>
              <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(transaction.status)} text-white`}>
                {transaction.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};