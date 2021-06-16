import styled from 'styled-components';

import { Button } from '../../../packages';
import { Breakpoints } from '../../Breakpoints';
import { squareSize } from '../../helpers';

const hoverEffectSizeBack = 50;

const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

const Info = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
`;

const Score = styled.div`
  display: flex;
  font-size: 18px;
  color: ${({ theme }) => theme.opacityGrey()};
  font-weight: lighter;
  align-items: center;

  @media (max-width: ${Breakpoints.Phone}px) {
    font-size: 15px;
  }

  @media (max-width: ${Breakpoints.SmallPhone}px) {
    font-size: 12px;
  }
`;

const Time = styled.span`
  font-weight: bold;
  padding-left: 5px;
`;

const BackButton = styled(Button)`
  padding: 5px;
  width: auto;
  -webkit-font-smoothing: antialiased;

  & span {
    display: inline-flex;
    align-items: center;
    font-size: 18px;
  }

  & svg {
    padding-right: 2px;
  }

  &::before,
  &::after {
    ${squareSize(hoverEffectSizeBack)}
  }

  @media (max-width: ${Breakpoints.Phone}px) {
    & span {
      font-size: 12px;
    }
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;

const ActionButton = styled(BackButton)`
  & span {
    font-size: 28px;
  }

  background: ${({ theme }) => theme.lightBlue};
  padding: 5px;

  &::before,
  &::after {
    display: none;
  }

  @media (max-width: ${Breakpoints.Phone}px) {
    & span {
      font-size: 22px;
    }
  }

  @media (max-width: ${Breakpoints.SmallPhone}px) {
    border-radius: 8px;

    & span {
      font-size: 18px;
    }
  }
`;

export const Styled = {
  Header,
  Info,
  Score,
  BackButton,
  Time,
  Actions,
  ActionButton,
};
