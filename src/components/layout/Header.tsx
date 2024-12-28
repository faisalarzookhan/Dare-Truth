import { LogOut, Settings } from 'lucide-react';
import { useState } from 'react';
import { User } from '../../types';
import { ThemeToggle } from './ThemeToggle';
import { SettingsModal } from '../settings/SettingsModal';

interface HeaderProps {
  user: User;
  onLogout: () => void;
}

export function Header({ user, onLogout }: HeaderProps) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-indigo-900 dark:text-indigo-100">
          T&D
        </h1>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsSettingsOpen(true)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 
                     transition-colors duration-200"
            aria-label="Open settings"
          >
            <Settings size={20} className="text-gray-600 dark:text-gray-400" />
          </button>
          <div className="flex items-center gap-2">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-8 h-8 rounded-full ring-2 ring-white dark:ring-gray-800"
            />
            <span className="font-medium text-gray-700 dark:text-gray-300">{user.name}</span>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 px-3 py-2 rounded-md 
                     bg-gray-100 hover:bg-gray-200 
                     dark:bg-gray-800 dark:hover:bg-gray-700 
                     text-gray-700 dark:text-gray-300"
          >
            <LogOut size={16} />
            Sign Out
          </button>
        </div>
      </div>

      <SettingsModal 
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </>
  );
}