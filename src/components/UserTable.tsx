import React from 'react';
import { MoreVertical, Mail, Phone } from 'lucide-react';

interface UserTableProps {
  searchTerm: string;
  filterStatus: string;
}

const users = [
  {
    id: 1,
    name: 'Saicharan Veldurthy',
    email: 'veldurthysaicharan5@gmail.com',
    phone: '+1 (555) 123-4567',
    status: 'active',
    role: 'Admin',
    lastActive: '2 hours ago',
    avatar: 'JD'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+1 (555) 987-6543',
    status: 'active',
    role: 'User',
    lastActive: '5 minutes ago',
    avatar: 'JS'
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    phone: '+1 (555) 456-7890',
    status: 'inactive',
    role: 'User',
    lastActive: '3 days ago',
    avatar: 'BJ'
  },
  {
    id: 4,
    name: 'Alice Brown',
    email: 'alice.brown@example.com',
    phone: '+1 (555) 321-0987',
    status: 'pending',
    role: 'User',
    lastActive: 'Never',
    avatar: 'AB'
  }
];

export const UserTable: React.FC<UserTableProps> = ({ searchTerm, filterStatus }) => {
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || user.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'inactive': return 'bg-red-500';
      case 'pending': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-700">
            <tr>
              <th className="text-left px-6 py-3 text-gray-300 font-medium">User</th>
              <th className="text-left px-6 py-3 text-gray-300 font-medium">Contact</th>
              <th className="text-left px-6 py-3 text-gray-300 font-medium">Role</th>
              <th className="text-left px-6 py-3 text-gray-300 font-medium">Status</th>
              <th className="text-left px-6 py-3 text-gray-300 font-medium">Last Active</th>
              <th className="text-left px-6 py-3 text-gray-300 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filteredUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-750 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
                      {user.avatar}
                    </div>
                    <div>
                      <div className="text-white font-medium">{user.name}</div>
                      <div className="text-gray-400 text-sm">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Mail size={14} />
                      <span className="text-sm">{user.email}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Phone size={14} />
                      <span className="text-sm">{user.phone}</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-gray-300">{user.role}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(user.status)} text-white`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-400">
                  {user.lastActive}
                </td>
                <td className="px-6 py-4">
                  <button className="p-1 hover:bg-gray-700 rounded transition-colors">
                    <MoreVertical size={16} className="text-gray-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};