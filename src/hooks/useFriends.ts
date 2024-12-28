import { useState } from 'react';

export function useFriends(initialFriends: string[] = []) {
  const [friends, setFriends] = useState<string[]>(initialFriends);

  const addFriend = (userId: string) => {
    if (!friends.includes(userId)) {
      setFriends([...friends, userId]);
    }
  };

  const removeFriend = (userId: string) => {
    setFriends(friends.filter(id => id !== userId));
  };

  return {
    friends,
    addFriend,
    removeFriend,
  };
}