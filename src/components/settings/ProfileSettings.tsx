import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../hooks/useAuth';

export function ProfileSettings() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: user?.user_metadata.username || '',
    fullName: user?.user_metadata.full_name || '',
    avatarUrl: user?.user_metadata.avatar_url || '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.updateUser({
        data: {
          username: formData.username,
          full_name: formData.fullName,
          avatar_url: formData.avatarUrl,
        }
      });

      if (error) throw error;
      alert('Profile updated successfully!');
    } catch (error) {
      alert('Error updating profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Username
        </label>
        <input
          type="text"
          id="username"
          value={formData.username}
          onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
          className="auth-input"
        />
      </div>

      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          value={formData.fullName}
          onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
          className="auth-input"
        />
      </div>

      <div>
        <label htmlFor="avatarUrl" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Avatar URL
        </label>
        <input
          type="url"
          id="avatarUrl"
          value={formData.avatarUrl}
          onChange={(e) => setFormData(prev => ({ ...prev, avatarUrl: e.target.value }))}
          className="auth-input"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="auth-button"
      >
        {loading ? 'Saving...' : 'Save Changes'}
      </button>
    </form>
  );
}