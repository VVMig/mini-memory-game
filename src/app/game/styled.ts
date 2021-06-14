import styled from 'styled-components';

import { fade } from '../../packages';
import { ZIndex } from '../../packages/ZIndex';
import { squareSize } from '../helpers';
import { GameFieldProps } from './interfaces';

const deckstopSquareSize = 600;
const edgeSize = 110;
const pauseOpacity = 0.8;

const Game = styled.div`
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  ${squareSize(deckstopSquareSize)};
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  display: flex;
  padding-top: 2px;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
`;

const GameField = styled.div<GameFieldProps>`
  display: grid;
  grid-template: ${({ size }) => `repeat(${size}, 1fr) / repeat(${size}, 1fr)`};
  padding: 10px;
  grid-gap: 2px;
  ${squareSize(deckstopSquareSize - edgeSize)};
`;

const PauseSign = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.opacityGrey(pauseOpacity)};
  font-size: 20vh;
  animation: ${fade} 0.2s linear;
  z-index: ${ZIndex.Pause};
`;

export const Styled = {
  Game,
  Body,
  GameField,
  PauseSign,
};
