import styled from 'styled-components';

import { Button } from '../../../packages';

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
  RefreshButton,
  Actions,
  ScoreboardButton,
};
