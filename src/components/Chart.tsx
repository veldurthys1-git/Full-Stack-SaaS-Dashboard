import React from 'react';

export const Chart: React.FC = () => {
  const data = [
    { month: 'Jan', value: 4500 },
    { month: 'Feb', value: 5200 },
    { month: 'Mar', value: 4800 },
    { month: 'Apr', value: 6100 },
    { month: 'May', value: 5900 },
    { month: 'Jun', value: 6800 },
  ];

  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Revenue Trend</h3>
      <div className="h-64 flex items-end justify-between space-x-2">
        {data.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div
              className="w-full bg-blue-500 rounded-t-sm transition-all duration-300 hover:bg-blue-400"
              style={{ height: `${(item.value / maxValue) * 100}%` }}
            />
            <span className="text-xs text-gray-400 mt-2">{item.month}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between text-sm text-gray-400">
        <span>$0</span>
        <span>${maxValue.toLocaleString()}</span>
      </div>
    </div>
  );
};