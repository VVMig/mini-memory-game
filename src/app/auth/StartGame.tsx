import React from 'react';

import { Styled } from './styled';

export const StartGame = () => {
  return (
    <Styled.StartGame>
      <Styled.StartGameButton type="submit">
        <Styled.ButtonText>Start game</Styled.ButtonText>
      </Styled.StartGameButton>
    </Styled.StartGame>
  );
};
