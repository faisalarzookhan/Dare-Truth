import { User } from '../types';
import { UserPlus } from 'lucide-react';

interface UserListProps {
  users: User[];
  onAddFriend: (userId: string) => void;
  onRemoveFriend: (userId: string) => void;
  currentUserId: string;
}

export function UserList({ users, onAddFriend, currentUserId }: UserListProps) {
  return (
    <div className="game-card">
      <h2 className="text-xl font-bold mb-4 text-indigo-900">Players</h2>
      <div className="space-y-2">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between p-3 hover:bg-gray-50 
                        rounded-lg transition-colors duration-300"
          >
            <div className="flex items-center gap-3">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full ring-2 ring-white shadow-md"
              />
              <span className="font-medium text-gray-800">{user.name}</span>
            </div>
            {user.id !== currentUserId && (
              <button
                onClick={() => onAddFriend(user.id)}
                className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-full
                         transition-colors duration-300"
              >
                <UserPlus size={20} />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
