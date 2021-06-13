import React from 'react';

import { Header } from './header/Header';
import { Styled } from './styled';

export const Game: React.FC = () => {
  return (
    <Styled.Game>
      <Header />
    </Styled.Game>
  );
};
