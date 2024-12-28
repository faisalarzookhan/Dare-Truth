import { User, Message } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'You',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop',
  },
  {
    id: '2',
    name: 'Alex',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
  },
  {
    id: '3',
    name: 'Sam',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop',
  },
];

export const initialMessages: Message[] = [{
  id: '1',
  userId: '2',
  content: 'Hey everyone! Ready for some Truth or Dare?',
  timestamp: new Date(),
}];