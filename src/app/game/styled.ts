import styled from 'styled-components';

import { fade } from '../../packages';
import { ZIndex } from '../../packages/ZIndex';
import { Breakpoints } from '../Breakpoints';
import { squareSize } from '../helpers';
import { DifficultySize } from './interfaces';

const desktopSquareSize = 600;
const tabletSquareSize = 450;
const phoneSquareSize = 300;
const smallPhoneSquareSize = 250;

const desktopEdgeSize = 110;
const tabletEdgeSoze = 100;
const phoneEdgeSize = 85;

const desktopFontSizeCoefficient = 200;
const phoneFontSizeCoefficient = 90;

const pauseOpacity = 0.8;

const Game = styled.div`
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  ${squareSize(desktopSquareSize)};
  display: flex;
  flex-direction: column;

  @media (max-width: ${Breakpoints.Tablet}px) {
    ${squareSize(tabletSquareSize)};
  }

  @media (max-width: ${Breakpoints.Phone}px) {
    ${squareSize(phoneSquareSize)};
  }

  @media (max-width: ${Breakpoints.SmallPhone}px) {
    ${squareSize(smallPhoneSquareSize)};
  }
`;

const Body = styled.div`
  display: flex;
  padding-top: 2px;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
`;

const GameField = styled.div<DifficultySize>`
  display: grid;
  grid-template: ${({ size }) => `repeat(${size}, 1fr) / repeat(${size}, 1fr)`};
  padding-top: 5px;
  grid-gap: 2px;
  font-size: ${({ size }) => desktopFontSizeCoefficient / size}px;

  ${squareSize(desktopSquareSize - desktopEdgeSize)};

  @media (max-width: ${Breakpoints.Tablet}px) {
    ${squareSize(tabletSquareSize - tabletEdgeSoze)};
  }

  @media (max-width: ${Breakpoints.Phone}px) {
    ${squareSize(phoneSquareSize - phoneEdgeSize)};
    font-size: ${({ size }) => phoneFontSizeCoefficient / size}px;
  }

  @media (max-width: ${Breakpoints.SmallPhone}px) {
    ${squareSize(smallPhoneSquareSize - phoneEdgeSize)};
    font-size: ${({ size }) => phoneFontSizeCoefficient / size}px;
  }
`;

const PauseSign = styled.div`
  display: grid;
  place-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.opacityGrey(pauseOpacity)};
  font-size: 20vh;
  animation: ${fade} 0.2s linear;
  z-index: ${ZIndex.Pause};
  height: 100%;
  width: 100%;

  @media (max-width: ${Breakpoints.Phone}px) {
    font-size: 15vh;
  }
`;

export const Styled = {
  Game,
  Body,
  GameField,
  PauseSign,
};
