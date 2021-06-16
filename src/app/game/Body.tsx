import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import {
  useActions,
  useMatchCards,
  useSound,
  useTypedSelector,
} from '../hooks';
import { icons } from '../icons';
import { RoutesEnum } from '../RoutesEnum';
import { getRandomCards } from './../helpers';
import { GameCard } from './gameCard/GameCard';
import { Styled } from './styled';

const lastCards = 2;

export const Body = () => {
  const [playMatchSound, mute] = useSound(
    `${process.env.PUBLIC_URL}/assets/sounds/match_sound.mp3`
  );

  const difficulty = useTypedSelector(({ user }) => user.difficulty);
  const { isSound, isPaused, isRestart } = useTypedSelector(({ game }) => game);

  const [cards, setCards] = useState(getRandomCards(difficulty));
  const [isAllowClick, setIsAllowClick] = useState(true);
  const [secondCardIndex, setSecondIndex] = useState<number | null>(null);

  const { restart, addResult } = useActions();
  const history = useHistory();

  const [
    firstSelectedCard,
    setFirstSelectedCard,
    setSecondSelectedCard,
    isMatch,
    resetCards,
  ] = useMatchCards();

  useEffect(() => {
    mute(isSound);
  }, [isSound]);

  useEffect(() => {
    setIsAllowClick(!isPaused);
  }, [isPaused]);

  useEffect(() => {
    if (isRestart) {
      setCards(getRandomCards(difficulty));
      resetCards();
      setIsAllowClick(true);
      restart(false);
    }
  }, [isRestart]);

  const checkWin = () => {
    if (
      cards.reduce((matchCount, card) => matchCount + +card.isMatch, 0) ===
      cards.length - lastCards
    ) {
      addResult();

      history.push(RoutesEnum.Score);
    }
  };

  const checkMatch = (index: number) => {
    if (index !== secondCardIndex) {
      return;
    }

    if (isMatch) {
      checkWin();

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
