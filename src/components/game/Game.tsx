import { User } from '../../types';
import { Dice6 } from 'lucide-react';
import { useGame } from '../../hooks/useGame';

interface GameProps {
  users: User[];
  currentUser: User;
  onStartGame: (type: 'truth' | 'dare') => void;
}

export function Game({ users, currentUser, onStartGame }: GameProps) {
  const { currentGame, startGame, endGame } = useGame();

  const handleGameChoice = (type: 'truth' | 'dare') => {
    startGame(
      type,
      currentUser.id,
      users.map((u) => u.id)
    );
    onStartGame(type);
  };

  return (
    <div className="game-card">
      <h2 className="text-2xl font-bold mb-6 text-indigo-900">Truth & Dare</h2>

      {!currentGame ? (
        <div className="space-y-4">
          <button
            onClick={() => handleGameChoice('truth')}
            className="btn-truth"
          >
            <Dice6 size={18} />
            Choose Truth
          </button>
          <button onClick={() => handleGameChoice('dare')} className="btn-dare">
            <Dice6 size={18} />
            Choose Dare
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-inner-lg">
            <p className="font-medium text-gray-600">
              {currentGame.type === 'truth' ? 'Truth' : 'Dare'}:
            </p>
            <p className="text-xl font-bold mt-2 text-indigo-900">
              {currentGame.question}
            </p>
          </div>
          <button
            onClick={endGame}
            className="btn-primary bg-gradient-to-r from-gray-500 to-gray-600 
                     text-white hover:from-gray-600 hover:to-gray-700"
          >
            Next Round
          </button>
        </div>
      )}
    </div>
  );
}
