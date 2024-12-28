import { useState } from 'react';
import { Game } from '../types';
import { getRandomQuestion } from '../utils/gameUtils';

export function useGame() {
  const [currentGame, setCurrentGame] = useState<Game | null>(null);

  const startGame = (type: 'truth' | 'dare', currentPlayerId: string, participants: string[]) => {
    const question = getRandomQuestion(type);
    setCurrentGame({
      currentPlayer: currentPlayerId,
      type,
      question,
      participants,
    });
    return question;
  };

  const endGame = () => {
    setCurrentGame(null);
  };

  return {
    currentGame,
    startGame,
    endGame,
  };
}