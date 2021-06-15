import styled from 'styled-components';

import { Button } from '../../packages';
import { squareSize } from '../helpers';

const deckstopSquareSize = 600;

const Score = styled.div`
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  ${squareSize(deckstopSquareSize)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
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
`;

const Cup = styled.span`
  font-size: 64px;
  color: ${({ theme }) => theme.gold};
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
`;

const ResultTime = styled.h3`
  color: ${({ theme }) => theme.opacityGrey()};
  font-size: 24px;
  font-weight: lighter;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const RefreshButton = styled(Button)``;

const ScoreboardButton = styled(Button)`
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
