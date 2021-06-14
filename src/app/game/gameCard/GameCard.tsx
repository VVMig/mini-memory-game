import React from 'react';

import { Transition } from 'react-transition-group';

import { Styled, matchAnimationDuration } from './styled';

interface Props {
  icon: JSX.Element;
  isFront: boolean;
  onClickCard: () => void;
  isMatch: boolean;
  checkMatch: () => void;
  appearDelay: number;
}

export const GameCard: React.FC<Props> = ({
  icon,
  isFront,
  onClickCard,
  isMatch,
  checkMatch,
  appearDelay,
}) => {
  return (
    <Styled.GameCard
      isFront={isFront}
      onClick={onClickCard}
      appearDelay={appearDelay}
    >
      <Transition in={isMatch} timeout={matchAnimationDuration}>
        {(state) => (
          <Styled.GameCardInner className={state} onTransitionEnd={checkMatch}>
            <Styled.GameCardBack></Styled.GameCardBack>
            <Styled.GameCardFront>{icon}</Styled.GameCardFront>
          </Styled.GameCardInner>
        )}
      </Transition>
    </Styled.GameCard>
  );
};
