import { X, User, Volume2, Vibrate } from 'lucide-react';
import { useState } from 'react';
import { ProfileSettings } from './ProfileSettings';
import { SoundSettings } from './SoundSettings';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const [activeTab, setActiveTab] = useState<'profile' | 'preferences'>('profile');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-2xl shadow-xl">
        <div className="flex justify-between items-center p-6 border-b dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex border-b dark:border-gray-700">
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors
                      ${activeTab === 'profile' 
                        ? 'border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400' 
                        : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                      }`}
          >
            <User size={18} />
            Profile
          </button>
          <button
            onClick={() => setActiveTab('preferences')}
            className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors
                      ${activeTab === 'preferences'
                        ? 'border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400'
                        : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                      }`}
          >
            <Volume2 size={18} />
            Preferences
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'profile' ? <ProfileSettings /> : <SoundSettings />}
        </div>
      </div>
    </div>
  );
}