import React from 'react';
import { Bell, Search, User } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="h-16 bg-gray-800 border-b border-gray-700 flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-lg hover:bg-gray-700 transition-colors relative">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </button>
        
        <div className="flex items-center space-x-3">
          <div className="text-right">
            <div className="text-sm font-medium">Saicharan Veldurthy</div>
            <div className="text-xs text-gray-400">Administrator</div>
          </div>
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <User size={16} />
          </div>
        </div>
      </div>
    </header>
  );
};