import styled, { css } from 'styled-components';

import { Modal } from '../../../packages';
import { squareSize } from '../../helpers';
import { LevelNavProps, ScoreProps } from './interfaces';

const deckstopSize = 650;
const hoverOpacity = 0.2;

const Scoreboard = styled(Modal)`
  ${squareSize(deckstopSize)};
  background-color: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;
`;

const LevelNavbar = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
`;

const LevelNav = styled.div<LevelNavProps>`
  padding: 8px 0;
  display: flex;
  justify-content: center;
  flex: 2 1;
  font-size: 24px;
  color: ${({ theme }) => theme.opacityGrey()};
  border-right: 1px solid ${({ theme }) => theme.lightBlue};
  border-bottom: 1px solid ${({ theme }) => theme.lightBlue};
  cursor: pointer;
  transition: 0.2s linear;

  &:hover {
    background: ${({ theme }) => theme.opacityLighterGrey(hoverOpacity)};
  }

  ${({ isLast }) =>
    isLast &&
    css`
      border-right: none;
    `}

  ${({ isActive }) =>
    isActive &&
    css`
      flex: 1 1;
      background: ${({ theme }) => theme.lightBlue};
      color: ${({ theme }) => theme.white};

      &:hover {
        background: ${({ theme }) => theme.lightBlue};
      }
    `}
`;

const ScoreResults = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;
  height: 100%;
`;

const Score = styled.div<ScoreProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
  text-align: center;
  font-size: 24px;
  font-weight: lighter;
  border-bottom: 1px solid ${({ theme }) => theme.opacityGrey()};
  cursor: pointer;
  position: relative;

  ${({ isRecord }) =>
    isRecord &&
    css`
      background-color: ${({ theme }) => theme.gold};
    `}

  &:hover {
    transition: 0.1s linear;
    background-color: ${({ theme }) => theme.lime};
    color: ${({ theme }) => theme.white};
  }
`;

const EmptyResults = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  text-align: center;
  place-items: center;
  font-size: 22px;
  color: ${({ theme }) => theme.opacityGrey()};
`;

export const Styled = {
  Scoreboard,
  LevelNavbar,
  LevelNav,
  ScoreResults,
  Score,
  EmptyResults,
};
