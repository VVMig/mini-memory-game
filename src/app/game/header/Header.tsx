import React from 'react';

import { Actions } from './Actions';
import { Info } from './Info';
import { Styled } from './styled';

export const Header = () => {
  return (
    <Styled.Header>
      <Info />
      <Actions />
    </Styled.Header>
  );
};
