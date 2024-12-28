import { useState } from 'react';
import { Volume2, VolumeX, Vibrate } from 'lucide-react';
import { useSettings } from '../../hooks/useSettings';

export function SoundSettings() {
  const { settings, updateSettings } = useSettings();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
            <Volume2 size={24} className="text-indigo-600 dark:text-indigo-400" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">Sound Effects</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Play sounds during game events</p>
          </div>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={settings.soundEnabled}
            onChange={(e) => updateSettings({ soundEnabled: e.target.checked })}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                        peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer 
                        dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white 
                        after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white 
                        after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
                        after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
        </label>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
            <Vibrate size={24} className="text-indigo-600 dark:text-indigo-400" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">Vibration</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Vibrate on important events</p>
          </div>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={settings.vibrationEnabled}
            onChange={(e) => updateSettings({ vibrationEnabled: e.target.checked })}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                        peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer 
                        dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white 
                        after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white 
                        after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
                        after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
        </label>
      </div>
    </div>
  );
}