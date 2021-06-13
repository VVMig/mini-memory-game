import styled from 'styled-components';

import { Button } from '../../../packages';
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
  padding: 10px;

  &::before,
  &::after {
    display: none;
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
