'use client';

import { motion } from 'framer-motion';
import { Todo } from '@/app/todo/page';

interface TodoStatsProps {
  todos: Todo[];
}

export default function TodoStats({ todos }: TodoStatsProps) {
  const completed = todos.filter((t) => t.completed).length;
  const pending = todos.filter((t) => !t.completed).length;
  const overdue = todos.filter(
    (t) => t.dueDate && new Date(t.dueDate) < new Date() && !t.completed
  ).length;
  const completionRate = todos.length > 0 ? Math.round((completed / todos.length) * 100) : 0;

  const stats = [
    { label: 'Total', value: todos.length, icon: '📊', color: 'from-blue-500 to-blue-600' },
    { label: 'Completed', value: completed, icon: '✅', color: 'from-green-500 to-green-600' },
    { label: 'Pending', value: pending, icon: '⏳', color: 'from-yellow-500 to-yellow-600' },
    { label: 'Overdue', value: overdue, icon: '🚨', color: 'from-red-500 to-red-600' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4"
    >
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -5 }}
          className="glass-dark p-6 rounded-xl border border-white/10 hover:border-cyan-500/50 transition text-center"
        >
          <p className="text-3xl mb-2">{stat.icon}</p>
          <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
          <p className="text-gray-400 text-sm">{stat.label}</p>
        </motion.div>
      ))}

      {/* Completion Rate */}
      {todos.length > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="col-span-2 md:col-span-4"
        >
          <div className="glass-dark p-4 rounded-xl border border-white/10">
            <div className="flex items-center justify-between mb-3">
              <p className="text-white font-semibold">Overall Progress</p>
              <p className="text-cyan-400 font-bold text-lg">{completionRate}%</p>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${completionRate}%` }}
                transition={{ duration: 1 }}
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
