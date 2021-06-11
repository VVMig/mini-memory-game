import React from 'react';

import { useTypedSelector } from '../hooks';
import { Styled } from './styled';

export const Game: React.FC = () => {
  const user = useTypedSelector((state) => state.user);

  return <Styled.Game>{user.difficulty}</Styled.Game>;
};
