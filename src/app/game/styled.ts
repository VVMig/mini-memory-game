import styled from 'styled-components';

import { squareSize } from '../helpers';

const deckstopSquareSize = 600;

const Game = styled.div`
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  ${squareSize(deckstopSquareSize)};
  display: grid;
  place-items: center;
`;

export const Styled = {
  Game,
};
