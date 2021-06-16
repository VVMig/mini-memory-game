import styled from 'styled-components';

import { Button } from '../../packages';
import { Breakpoints } from '../Breakpoints';
import { squareSize } from '../helpers';

const desktopSquareSize = 600;
const tabletSquareSize = 500;
const phoneSquareSize = 300;
const smallPhoneSquareSize = 230;

const Score = styled.div`
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  ${squareSize(desktopSquareSize)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  @media (max-width: ${Breakpoints.Tablet}px) {
    ${squareSize(tabletSquareSize)};
    gap: 10px;
  }

  @media (max-width: ${Breakpoints.Phone}px) {
    ${squareSize(phoneSquareSize)};
  }

  @media (max-width: ${Breakpoints.SmallPhone}px) {
    ${squareSize(smallPhoneSquareSize)};
  }
`;

const Congratulations = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Title = styled.h1`
  font-size: 84px;
  color: ${({ theme }) => theme.lime};
  font-weight: bold;
  line-height: 1;
  text-transform: uppercase;

  @media (max-width: ${Breakpoints.Tablet}px) {
    font-size: 68px;
  }

  @media (max-width: ${Breakpoints.Phone}px) {
    font-size: 32px;
  }

  @media (max-width: ${Breakpoints.SmallPhone}px) {
    font-size: 24px;
  }
`;

const Cup = styled.span`
  font-size: 64px;
  color: ${({ theme }) => theme.gold};

  @media (max-width: ${Breakpoints.Phone}px) {
    font-size: 36px;
  }

  @media (max-width: ${Breakpoints.SmallPhone}px) {
    font-size: 24px;
  }
`;

const Results = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResultsTitle = styled.h2`
  color: ${({ theme }) => theme.opacityLighterGrey()};
  font-size: 28px;
  font-weight: lighter;

  @media (max-width: ${Breakpoints.Phone}px) {
    font-size: 20px;
  }

  @media (max-width: ${Breakpoints.SmallPhone}px) {
    font-size: 18px;
  }
`;

const ResultTime = styled.h3`
  color: ${({ theme }) => theme.opacityGrey()};
  font-size: 24px;
  font-weight: lighter;

  @media (max-width: ${Breakpoints.Phone}px) {
    font-size: 18px;
  }

  @media (max-width: ${Breakpoints.SmallPhone}px) {
    font-size: 16px;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const RefreshButton = styled(Button)`
  @media (max-width: ${Breakpoints.Phone}px) {
    padding: 9px 0;
    width: 120px;
    & span {
      font-size: 12px;
    }
  }

  @media (max-width: ${Breakpoints.SmallPhone}px) {
    padding: 9px 0;
    width: 100px;
    & span {
      font-size: 10px;
    }
  }
`;

const ScoreboardButton = styled(RefreshButton)`
  background: ${({ theme }) => theme.goldGradient};

  & span {
    font-weight: bold;
    color: ${({ theme }) => theme.opacityGrey()};
  }
`;

export const Styled = {
  Score,
  Congratulations,
  Title,
  Cup,
  Results,
  ResultsTitle,
  ResultTime,
  Actions,
  ScoreboardButton,
  RefreshButton,
};
