import { Header } from './components/layout/Header';
import { UserList } from './components/UserList';
import { GameSection } from './components/game/GameSection';
import { mockUsers, initialMessages } from './data/mockData';
import { Users } from 'lucide-react';
import { useChat } from './hooks/useChat';
import { useFriends } from './hooks/useFriends';
import { useAuth } from './hooks/useAuth';
import { AuthUI } from './components/auth/AuthUI';

export function App() {
  const { user, loading, logout } = useAuth();
  const { messages, addMessage } = useChat(initialMessages);
  const { friends, addFriend, removeFriend } = useFriends(['user defined']);

  const handleSendMessage = (content: string) => {
    if (user) {
      addMessage(user.id, content);
    }
  };

  const handleStartGame = (type: 'truth' | 'dare') => {
    if (user) {
      addMessage(user.id, `chose ${type.toUpperCase()}!`);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (!user) {
    return <AuthUI />;
  }

  const currentUser = {
    id: user.id,
    name:
      user.user_metadata.full_name || user.email?.split('@')[0] || 'Anonymous',
    email: user.email,
    avatar:
      user.user_metadata.avatar_url ||
      `https://api.dicebear.com/7.x/avatars/svg?seed=${user.id}`,
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <Header user={currentUser} onLogout={logout} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xl font-semibold text-indigo-900">
              <Users size={24} className="text-indigo-600" />
              <h2>Players</h2>
            </div>
            <UserList
              users={mockUsers}
              onAddFriend={addFriend}
              onRemoveFriend={removeFriend}
              currentUserId={currentUser.id}
            />
          </div>

          <GameSection
            users={mockUsers}
            currentUser={currentUser}
            messages={messages}
            onStartGame={handleStartGame}
            onSendMessage={handleSendMessage}
          />
        </div>
      </div>
    </div>
  );
}
