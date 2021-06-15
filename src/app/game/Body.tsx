import React, { useState } from 'react';
import { useEffect } from 'react';

import {
  useActions,
  useMatchCards,
  useSound,
  useTypedSelector,
} from '../hooks';
import { icons } from '../icons';
import { getRandomCards } from './../helpers';
import { GameCard } from './gameCard/GameCard';
import { Styled } from './styled';

export const Body = () => {
  const [playMatchSound] = useSound(
    'https://notificationsounds.com/storage/sounds/file-sounds-1140-just-saying.mp3'
  );

  const difficulty = useTypedSelector((store) => store.user.difficulty);
  const isRestart = useTypedSelector((store) => store.game.isRestart);
  const isPaused = useTypedSelector((store) => store.game.isPaused);

  const [cards, setCards] = useState(getRandomCards(difficulty));
  const [isAllowClick, setIsAllowClick] = useState(true);
  const [secondCardIndex, setSecondIndex] = useState<number | null>(null);
  const { restart } = useActions();

  const [
    firstSelectedCard,
    setFirstSelectedCard,
    setSecondSelectedCard,
    isMatch,
    resetCards,
  ] = useMatchCards();

  useEffect(() => {
    setIsAllowClick(!isPaused);
  }, [isPaused]);

  useEffect(() => {
    if (isRestart) {
      setCards(getRandomCards(difficulty));
      restart(false);
      resetCards();
    }
  }, [isRestart]);

  const checkMatch = (index: number) => {
    if (index !== secondCardIndex) {
      return;
    }

    if (isMatch) {
      setCards((prev) =>
        prev.map((card) => (card.isFront ? { ...card, isMatch: true } : card))
      );

      playMatchSound();
    }

    setCards((prev) =>
      prev.map((card) => ({ ...card, isFront: card.isMatch }))
    );

    setIsAllowClick(true);
    setSecondIndex(null);
    resetCards();
  };

  const onClickCard = (clickedIndex: number) => {
    if (cards[clickedIndex].isMatch || !isAllowClick) {
      return;
    }

    if (!cards[clickedIndex].isFront) {
      if (firstSelectedCard) {
        setSecondSelectedCard(cards[clickedIndex]);
        setSecondIndex(clickedIndex);
        setIsAllowClick(false);
      } else {
        setFirstSelectedCard(cards[clickedIndex]);
      }
    } else {
      resetCards();
    }

    setCards(
      cards.map((card, index) =>
        clickedIndex === index ? { ...card, isFront: !card.isFront } : card
      )
    );
  };

  const renderCards = () =>
    cards.map((card, index) => (
      <GameCard
        key={`${card.title}-${index}`}
        icon={card.icon}
        isFront={card.isFront}
        onClickCard={() => onClickCard(index)}
        isMatch={card.isMatch}
        checkMatch={() => checkMatch(index)}
        appearDelay={index}
      />
    ));

  return (
    <Styled.Body>
      <Styled.GameField size={difficulty}>{renderCards()}</Styled.GameField>
      {isPaused && <Styled.PauseSign>{icons.Pause}</Styled.PauseSign>}
    </Styled.Body>
  );
};
