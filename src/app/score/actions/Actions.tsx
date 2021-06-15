import React from 'react';
import { useState } from 'react';

import { useHistory } from 'react-router-dom';

import { RoutesEnum } from '../../RoutesEnum';
import { Styled } from './styled';

export const Actions = () => {
  const [isScoreboardShow, setIsScoreboardShow] = useState(false);

  const history = useHistory();

  const onClickMenu = () => {
    history.push(RoutesEnum.Home);
  };

  const onToggleScoreboard = () => {
    setIsScoreboardShow(!isScoreboardShow);
  };

  return (
    <Styled.Actions>
      <Styled.RefreshButton onClick={onClickMenu}>
        Main menu
      </Styled.RefreshButton>
      <Styled.ScoreboardButton onClick={onToggleScoreboard}>
        Scoreboard
      </Styled.ScoreboardButton>
    </Styled.Actions>
  );
};
