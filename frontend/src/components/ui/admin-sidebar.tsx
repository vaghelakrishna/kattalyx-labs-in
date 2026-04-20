import React from 'react';

export const AdminSidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
      <nav className="space-y-4">
        <a href="#" className="block hover:text-gray-300">Dashboard</a>
        <a href="#" className="block hover:text-gray-300">Settings</a>
        <a href="#" className="block hover:text-gray-300">Users</a>
      </nav>
    </aside>
  );
};
