'use client';

import { motion } from 'framer-motion';
import { Todo } from '@/app/todo/page';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onUpdate: (id: string, updates: Partial<Todo>) => void;
  onDelete: (id: string) => void;
}

export default function TodoList({ todos, onToggle, onUpdate, onDelete }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-dark p-12 rounded-2xl border border-white/10 text-center"
      >
        <p className="text-4xl mb-4">🎉</p>
        <p className="text-gray-400 text-lg mb-2">No tasks found</p>
        <p className="text-gray-500 text-sm">Create a new task or adjust your filters</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-4"
    >
      {todos.map((todo, index) => (
        <motion.div
          key={todo.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          exit={{ opacity: 0, x: -100 }}
        >
          <TodoItem
            todo={todo}
            onToggle={() => onToggle(todo.id)}
            onUpdate={(updates) => onUpdate(todo.id, updates)}
            onDelete={() => onDelete(todo.id)}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
