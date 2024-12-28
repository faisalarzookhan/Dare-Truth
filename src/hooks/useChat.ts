import { useState } from 'react';
import { Message } from '../types';

export function useChat(initialMessages: Message[] = []) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const addMessage = (userId: string, content: string) => {
    const newMessage: Message = {
      id: String(messages.length + 1),
      userId,
      content,
      timestamp: new Date(),
    };
    setMessages([...messages, newMessage]);
  };

  return {
    messages,
    addMessage,
  };
}