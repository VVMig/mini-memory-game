import React, { useEffect } from 'react';

import { Redirect } from 'react-router-dom';

import { useActions, useTypedSelector } from '../hooks';
import { RoutesEnum } from '../RoutesEnum';
import { Body } from './Body';
import { Header } from './header/Header';
import { Styled } from './styled';

export const Game = () => {
  const name = useTypedSelector(({ user }) => user.name);
  const { initGame, updateTime } = useActions();

  useEffect(() => {
    initGame();
    updateTime(0);
  }, []);

  return name ? (
    <Styled.Game>
      <Header />
      <Body />
    </Styled.Game>
  ) : (
    <Redirect to={RoutesEnum.Home} />
  );
};
