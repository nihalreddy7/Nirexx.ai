'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Todo } from '@/app/todo/page';

interface TodoItemProps {
  todo: Todo;
  onToggle: () => void;
  onUpdate: (updates: Partial<Todo>) => void;
  onDelete: () => void;
}

export default function TodoItem({ todo, onToggle, onUpdate, onDelete }: TodoItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  const isOverdue = todo.dueDate && new Date(todo.dueDate) < new Date() && !todo.completed;

  const categoryEmoji: { [key: string]: string } = {
    work: '💼',
    personal: '👤',
    shopping: '🛒',
    health: '💚',
    other: '📌',
  };

  const priorityColor: { [key: string]: string } = {
    high: 'bg-red-500/20 border-red-500/50',
    medium: 'bg-yellow-500/20 border-yellow-500/50',
    low: 'bg-green-500/20 border-green-500/50',
  };

  const handleSaveEdit = () => {
    if (editTitle.trim()) {
      onUpdate({ title: editTitle });
      setIsEditing(false);
    }
  };

  return (
    <motion.div
      initial={false}
      animate={{ height: isExpanded ? 'auto' : 80 }}
      className={`glass-dark rounded-xl border transition overflow-hidden ${
        isOverdue ? 'border-red-500/50 bg-red-500/10' : 'border-white/10'
      }`}
    >
      {/* Main Row */}
      <motion.div
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-4 flex items-center gap-4 cursor-pointer h-20"
      >
        {/* Checkbox */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
          className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition ${
            todo.completed
              ? 'bg-cyan-500/50 border-cyan-500 text-white'
              : 'border-white/20 hover:border-cyan-500/50'
          }`}
        >
          {todo.completed && '✓'}
        </motion.button>

        {/* Title */}
        <div className="flex-1 min-w-0">
          {isEditing ? (
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              onBlur={handleSaveEdit}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSaveEdit();
                if (e.key === 'Escape') setIsEditing(false);
              }}
              autoFocus
              onClick={(e) => e.stopPropagation()}
              className="w-full px-2 py-1 bg-white/10 border border-cyan-500/50 rounded text-white focus:outline-none"
            />
          ) : (
            <p
              className={`font-semibold truncate ${
                todo.completed
                  ? 'line-through text-gray-500'
                  : isOverdue
                  ? 'text-red-400'
                  : 'text-white'
              }`}
              onDoubleClick={(e) => {
                e.stopPropagation();
                setIsEditing(true);
              }}
            >
              {todo.title}
            </p>
          )}
        </div>

        {/* Category & Priority Badges */}
        <div className="flex gap-2 items-center">
          <span className="text-lg">{categoryEmoji[todo.category]}</span>
          <motion.span
            whileHover={{ scale: 1.05 }}
            className={`px-3 py-1 rounded-full text-xs font-bold border ${
              priorityColor[todo.priority]
            }`}
          >
            {todo.priority === 'high' ? '🔴' : todo.priority === 'medium' ? '🟡' : '🟢'}
            {todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1)}
          </motion.span>
        </div>

        {/* Expand Icon */}
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          className="text-gray-400"
        >
          ▼
        </motion.div>
      </motion.div>

      {/* Expanded Content */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="px-4 pb-4 border-t border-white/10 space-y-4"
        >
          {/* Description */}
          {todo.description && (
            <div>
              <p className="text-sm text-gray-400 mb-2">Description:</p>
              <p className="text-white text-sm">{todo.description}</p>
            </div>
          )}

          {/* Due Date */}
          {todo.dueDate && (
            <div>
              <p className="text-sm text-gray-400 mb-2">Due Date:</p>
              <p className={`text-sm font-semibold ${
                isOverdue ? 'text-red-400' : 'text-cyan-400'
              }`}>
                {new Date(todo.dueDate).toLocaleDateString()} {
                  isOverdue ? '(Overdue)' : ''
                }
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-2 pt-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                setIsEditing(true);
              }}
              className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-400 font-semibold hover:text-white hover:border-cyan-500/50 transition text-sm"
            >
              ✏️ Edit
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
              className="flex-1 px-3 py-2 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 font-semibold hover:text-red-300 transition text-sm"
            >
              🗑️ Delete
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
