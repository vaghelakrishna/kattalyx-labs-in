'use client';

import { memo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Download, Settings, Users } from 'lucide-react';
import { analyticsAPI } from '../../services/api';

interface Activity {
  action: string;
  user: string;
  time: string;
  icon: any;
  color: string;
}

export const RecentActivity = memo(() => {
  const [activities, setActivities] = useState<Activity[]>([
    {
      action: 'User login',
      user: 'john@example.com',
      time: '2 min ago',
      icon: User,
      color: 'text-blue-500',
    },
    {
      action: 'Data export',
      user: 'admin',
      time: '5 min ago',
      icon: Download,
      color: 'text-green-500',
    },
    {
      action: 'Settings updated',
      user: 'admin',
      time: '10 min ago',
      icon: Settings,
      color: 'text-orange-500',
    },
    {
      action: 'New user registered',
      user: 'sarah@example.com',
      time: '15 min ago',
      icon: Users,
      color: 'text-purple-500',
    },
  ]);

  useEffect(() => {
    const fetchRecentActivity = async () => {
      try {
        const response = await analyticsAPI.getRecentActivity();
        if (response.data) {
          // Process real data
          const formattedActivities = response.data.map((item: any) => ({
            action: item.action,
            user: item.user,
            time: item.time,
            icon: User, // Default icon, can map based on action
            color: 'text-blue-500',
          }));
          setActivities(formattedActivities);
        }
      } catch (error) {
        console.error('Error fetching recent activity:', error);
      }
    };

    fetchRecentActivity();
  }, []);
  return (
    <div className="border-border bg-card/40 rounded-xl border p-6">
      <h3 className="mb-4 text-xl font-semibold">Recent Activity</h3>
      <div className="space-y-3">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="hover:bg-accent/50 flex items-center gap-3 rounded-lg p-2 transition-colors"
            >
              <div className={`bg-accent/50 rounded-lg p-2`}>
                <Icon className={`h-4 w-4 ${activity.color}`} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-medium">{activity.action}</div>
                <div className="text-muted-foreground truncate text-xs">
                  {activity.user}
                </div>
              </div>
              <div className="text-muted-foreground text-xs">
                {activity.time}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
});

RecentActivity.displayName = 'RecentActivity';
