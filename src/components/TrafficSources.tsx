import React from 'react';

const sources = [
  { name: 'Organic Search', value: 45, color: 'bg-blue-500' },
  { name: 'Direct Traffic', value: 25, color: 'bg-green-500' },
  { name: 'Social Media', value: 20, color: 'bg-purple-500' },
  { name: 'Email', value: 10, color: 'bg-orange-500' },
];

export const TrafficSources: React.FC = () => {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Traffic Sources</h3>
      <div className="space-y-4">
        {sources.map((source, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${source.color}`} />
              <span className="text-gray-300">{source.name}</span>
            </div>
            <span className="text-white font-medium">{source.value}%</span>
          </div>
        ))}
      </div>
      <div className="mt-6 flex space-x-1 rounded-full overflow-hidden">
        {sources.map((source, index) => (
          <div
            key={index}
            className={source.color}
            style={{ width: `${source.value}%`, height: '8px' }}
          />
        ))}
      </div>
    </div>
  );
};