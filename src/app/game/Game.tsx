import React from 'react';

import { Body } from './Body';
import { Header } from './header/Header';
import { Styled } from './styled';

export const Game: React.FC = () => {
  return (
    <Styled.Game>
      <Header />
      <Body />
    </Styled.Game>
  );
};
