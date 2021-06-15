import styled, { css } from 'styled-components';

import { fade } from '../../../packages';
import { ZIndex } from '../../../packages/ZIndex';
import { GameCardProps } from '../interfaces';

export const matchAnimationDuration = 300;
const delayStep = 20;

const GameCardBack = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  background-color: ${({ theme }) => theme.opacityLighterGrey()};

  &:hover {
    transition: background-color 0.1s linear;
    background-color: ${({ theme }) => theme.lime};
  }
`;

const GameCardFront = styled(GameCardBack)`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateY(180deg);
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.lightBlue};
  font-size: 48px;

  &:hover {
    background-color: ${({ theme }) => theme.lightBlue};
  }
`;

const GameCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.5s;
  transform-style: preserve-3d;
  cursor: pointer;

  &.entering {
    animation: ${fade} ${matchAnimationDuration}ms linear both reverse;

    & ${GameCardFront} {
      backface-visibility: visible;
    }
  }

  &.entered {
    display: none;
    & ${GameCardFront} {
      backface-visibility: visible;
    }
  }
`;

const GameCard = styled.div<GameCardProps>`
  perspective: 1000px;
  z-index: ${ZIndex.Card};
  animation: ${fade} 0.2s linear;
  animation-delay: ${({ appearDelay }) => appearDelay * delayStep}ms;

  ${({ isFront }) =>
    isFront &&
    css`
      ${GameCardInner} {
        transform: rotateY(180deg);
      }
    `}
`;

export const Styled = {
  GameCardBack,
  GameCard,
  GameCardInner,
  GameCardFront,
};
