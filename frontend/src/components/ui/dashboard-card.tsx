'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
// import { TrendingUp } from 'lucide-react';

interface DashboardCardProps {
  stat: {
    title: string;
    value: string;
    change: string;
    changeType: 'positive' | 'negative';
    icon: any;
    color: string;
    bgColor: string;
  };
  index: number;
}

export const DashboardCard = memo(({ stat, index }: DashboardCardProps) => {
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -5 }}
      className="h-full w-full" // Ensures the motion wrapper fills the grid cell
    >
      <div className="group relative flex h-full min-h-[180px] flex-col justify-between overflow-hidden rounded-[2rem] border border-border bg-card/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative z-10 flex h-full flex-col justify-between">
          {/* Top Row: Icon and Trend */}
          <div className="flex items-start justify-between">
            <div className={`rounded-2xl p-3 shadow-inner ${stat.bgColor} backdrop-blur-sm`}>
              <Icon className={`h-6 w-6 ${stat.color}`} />
            </div>

            {/* <div
              className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold ${stat.changeType === 'positive'
                  ? 'bg-green-500/10 text-green-500'
                  : 'bg-red-500/10 text-red-500'
                }`}
            >
              <TrendingUp className={`h-3 w-3 ${stat.changeType === 'negative' ? 'rotate-180' : ''}`} />
              <span>{stat.change}</span>
            </div> */}
          </div>

          {/* Bottom Content: Value and Title */}
          <div className="mt-6">
            <h3 className="text-foreground text-3xl font-black tracking-tight sm:text-4xl">
              {stat.value}
            </h3>
            <p className="text-muted-foreground mt-1 text-xs font-bold uppercase tracking-widest opacity-70">
              {stat.title}
            </p>
          </div>

          {/* Optional Progress bar at the very bottom */}
          {/* <div className="bg-muted/30 mt-4 h-1 w-full overflow-hidden rounded-full">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${60 + (index * 10) % 30}%` }}
              transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
              className={`h-full rounded-full opacity-60 ${stat.color.replace('text-', 'bg-')}`}
            />
          </div> */}
        </div>
      </div>
    </motion.div>
  );
});

DashboardCard.displayName = 'DashboardCard';

/**
 * PARENT CONTAINER USAGE:
 * <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
 * {stats.map((stat, i) => <DashboardCard key={i} stat={stat} index={i} />)}
 * </div>
 */