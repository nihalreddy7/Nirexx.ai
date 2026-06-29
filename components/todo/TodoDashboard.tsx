'use client';

import { motion } from 'framer-motion';
import { Todo } from '@/app/todo/page';

interface TodoDashboardProps {
  todos: Todo[];
}

export default function TodoDashboard({ todos }: TodoDashboardProps) {
  // AI Insights
  const getAISuggestions = () => {
    const suggestions = [];

    const high = todos.filter((t) => !t.completed && t.priority === 'high');
    if (high.length > 3) {
      suggestions.push('You have ' + high.length + ' high-priority tasks. Focus on one at a time.');
    }

    const overdue = todos.filter(
      (t) => t.dueDate && new Date(t.dueDate) < new Date() && !t.completed
    );
    if (overdue.length > 0) {
      suggestions.push(overdue.length + ' task(s) are overdue. Check them out!');
    }

    if (todos.length === 0) {
      suggestions.push('Great! You have no tasks. Add one to get started.');
    }

    const completedToday = todos.filter(
      (t) => t.completed && t.completedAt && new Date(t.completedAt).toDateString() === new Date().toDateString()
    );
    if (completedToday.length > 0) {
      suggestions.push('🎉 You completed ' + completedToday.length + ' task(s) today!');
    }

    return suggestions;
  };

  const suggestions = getAISuggestions();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-dark p-6 rounded-2xl border border-white/10"
    >
      <h3 className="text-lg font-bold text-white mb-4">🤖 AI Insights</h3>
      <div className="space-y-3">
        {suggestions.map((suggestion, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-bg p-4 rounded-lg border border-cyan-500/30 bg-cyan-500/10"
          >
            <p className="text-sm text-cyan-300">{suggestion}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
