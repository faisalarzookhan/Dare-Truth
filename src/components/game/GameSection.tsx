import { MessageCircle } from 'lucide-react';
import { Game } from './Game';
import { Chat } from '../Chat';
import { User, Message } from '../../types';

interface GameSectionProps {
  users: User[];
  currentUser: User;
  messages: Message[];
  onStartGame: (type: 'truth' | 'dare') => void;
  onSendMessage: (content: string) => void;
}

export function GameSection({ users, currentUser, messages, onStartGame, onSendMessage }: GameSectionProps) {
  return (
    <div className="md:col-span-2 space-y-6">
      <div className="flex items-center gap-2 text-xl font-semibold text-indigo-900">
        <MessageCircle size={24} className="text-indigo-600" />
        <h2>Game & Chat</h2>
      </div>
      
      <Game
        users={users}
        currentUser={currentUser}
        onStartGame={onStartGame}
      />
      
      <Chat
        messages={messages}
        users={users}
        onSendMessage={onSendMessage}
      />
    </div>
  );
}