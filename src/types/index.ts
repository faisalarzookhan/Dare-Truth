export interface User {
  id: string;
  name: string;
  email?: string;
  avatar: string;
}

export interface Message {
  id: string;
  userId: string;
  content: string;
  timestamp: Date;
}

export interface Game {
  currentPlayer: string;
  type: 'truth' | 'dare';
  question: string;
  participants: string[];
}