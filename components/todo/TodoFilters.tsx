'use client';

import { motion } from 'framer-motion';

interface TodoFiltersProps {
  onFilterChange: (filter: 'all' | 'active' | 'completed') => void;
  onCategoryChange: (category: string) => void;
  onPriorityChange: (priority: string) => void;
  onSearchChange: (query: string) => void;
}

export default function TodoFilters({
  onFilterChange,
  onCategoryChange,
  onPriorityChange,
  onSearchChange,
}: TodoFiltersProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-dark p-6 rounded-2xl border border-white/10 space-y-4"
    >
      {/* Search */}
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">Search</label>
        <input
          type="text"
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search tasks..."
          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition"
        />
      </div>

      {/* Status Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">Status</label>
        <div className="flex gap-2">
          {['all', 'active', 'completed'].map((status) => (
            <motion.button
              key={status}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onFilterChange(status as any)}
              className="flex-1 px-4 py-2 rounded-lg font-semibold transition bg-white/5 border border-white/10 text-gray-400 hover:border-cyan-500/50 hover:text-white"
            >
              {status === 'all' ? 'All' : status === 'active' ? 'Active' : 'Completed'}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">Category</label>
        <select
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-500/50 transition"
        >
          <option value="all">All Categories</option>
          <option value="work">💼 Work</option>
          <option value="personal">👤 Personal</option>
          <option value="shopping">🛒 Shopping</option>
          <option value="health">💚 Health</option>
          <option value="other">📌 Other</option>
        </select>
      </div>

      {/* Priority Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">Priority</label>
        <select
          onChange={(e) => onPriorityChange(e.target.value)}
          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-500/50 transition"
        >
          <option value="all">All Priorities</option>
          <option value="high">🔴 High</option>
          <option value="medium">🟡 Medium</option>
          <option value="low">🟢 Low</option>
        </select>
      </div>
    </motion.div>
  );
}
