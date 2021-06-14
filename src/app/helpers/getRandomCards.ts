import { random, uniqWith, isEqual, cloneDeep, shuffle } from 'lodash';

import { cardsImage, ICardImage } from '../cardsImage';
import { IGameCard } from '../game/interfaces';
import { Difficulty } from '../store/types';

export const getRandomCards = (difficulty: Difficulty): IGameCard[] => {
  let randomCards: ICardImage[] = [];
  const cardAmount = difficulty ** 2 / 2;

  while (randomCards.length !== cardAmount) {
    randomCards.push(cardsImage[random(0, cardsImage.length - 1)]);

    randomCards = uniqWith(randomCards, isEqual);
  }

  return shuffle([...randomCards, ...cloneDeep(randomCards)]).map((card) => ({
    ...card,
    isFront: false,
    isMatch: false,
  }));
};
