import { useEffect } from 'react';
import { useState } from 'react';

import { IGameCard } from '../game/interfaces';

interface IMatchCards {
  (): [
    firstSelectedCard: IGameCard | null,
    setFirstSelectedCard: React.Dispatch<
      React.SetStateAction<IGameCard | null>
    >,
    setSecondSelectedCard: React.Dispatch<
      React.SetStateAction<IGameCard | null>
    >,
    isMtch: boolean,
    resetCards: () => void
  ];
}

export const useMatchCards: IMatchCards = () => {
  const [firstSelectedCard, setFirstSelectedCard] = useState<IGameCard | null>(
    null
  );
  const [secondSelectedCard, setSecondSelectedCard] =
    useState<IGameCard | null>(null);

  const [isMatch, setIsMatch] = useState(false);

  const resetCards = () => {
    setFirstSelectedCard(null);
    setSecondSelectedCard(null);
  };

  useEffect(() => {
    if (secondSelectedCard && firstSelectedCard) {
      setIsMatch(secondSelectedCard.title === firstSelectedCard.title);
    }
  }, [secondSelectedCard]);

  return [
    firstSelectedCard,
    setFirstSelectedCard,
    setSecondSelectedCard,
    isMatch,
    resetCards,
  ];
};
