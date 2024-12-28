import React, { useState } from 'react';
import { Message, User } from '../types';
import { Send } from 'lucide-react';

interface ChatProps {
  messages: Message[];
  users: User[];
  onSendMessage: (content: string) => void;
}

export function Chat({ messages, users, onSendMessage }: ChatProps) {
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="game-card flex flex-col h-[500px]">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => {
          const user = users.find((u) => u.id === message.userId);
          const isSelf = user?.id === '1';

          return (
            <div
              key={message.id}
              className={`flex items-start gap-3 ${
                isSelf ? 'flex-row-reverse' : ''
              }`}
            >
              <img
                src={user?.avatar}
                alt={user?.name}
                className="w-8 h-8 rounded-full ring-2 ring-white"
              />
              <div
                className={isSelf ? 'chat-bubble-self' : 'chat-bubble-other'}
              >
                <p className="font-medium text-sm opacity-75">{user?.name}</p>
                <p>{message.content}</p>
              </div>
            </div>
          );
        })}
      </div>
      <form onSubmit={handleSubmit} className="border-t border-gray-100 p-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 rounded-full px-4 py-2 bg-gray-50 border border-gray-200 
                     focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="p-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 
                     transition-colors duration-300"
          >
            <Send size={20} />
          </button>
        </div>
      </form>
    </div>
  );
}
