import React from 'react';

import { Actions } from './Actions';
import { Congratulations } from './Congratulations';
import { Results } from './Results';
import { Styled } from './styled';

export const Score = () => {
  return (
    <Styled.Score>
      <Congratulations />
      <Results />
      <Actions />
    </Styled.Score>
  );
};
