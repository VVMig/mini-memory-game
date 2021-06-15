import styled, { css } from 'styled-components';

import { Modal } from '../../../packages';
import { squareSize } from '../../helpers';
import { LevelNavProps } from './interfaces';

const deckstopSize = 650;
const hoverOpacity = 0.2;

const Scoreboard = styled(Modal)`
  ${squareSize(deckstopSize)};
  background-color: ${({ theme }) => theme.white};
`;

const LevelNavBar = styled.div`
  display: flex;
  width: 100%;
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

export const Styled = {
  Scoreboard,
  LevelNavBar,
  LevelNav,
};
