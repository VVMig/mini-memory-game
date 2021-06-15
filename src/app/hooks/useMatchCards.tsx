import { useEffect } from 'react';
import { useState } from 'react';

import { IGameCard } from '../game/interfaces';

type MatchCards = [
  IGameCard | null,
  React.Dispatch<React.SetStateAction<IGameCard | null>>,
  React.Dispatch<React.SetStateAction<IGameCard | null>>,
  boolean,
  () => void
];

export const useMatchCards = (): MatchCards => {
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
