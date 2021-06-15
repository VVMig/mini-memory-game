import React from 'react';

import { icons } from '../icons';
import { Styled } from './styled';

export const Congratulations = () => {
  return (
    <Styled.Congratulations>
      <Styled.Title>Win</Styled.Title>
      <Styled.Cup>{icons.Trophy}</Styled.Cup>
    </Styled.Congratulations>
  );
};
