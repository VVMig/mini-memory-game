import React from 'react';

import { useTypedSelector } from '../hooks';

export const Game: React.FC = () => {
  const user = useTypedSelector((state) => state.user);

  return <>{user.name}</>;
};
