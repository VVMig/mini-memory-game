import React from 'react';
import { useState } from 'react';

import { useHistory } from 'react-router-dom';
import { Transition } from 'react-transition-group';

import { RoutesEnum } from '../RoutesEnum';
import { Scoreboard } from './scoreboard/Scoreboard';
import { Styled } from './styled';

const modalAnimationDutation = 150;

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
      <Transition
        in={isScoreboardShow}
        timeout={modalAnimationDutation}
        unmountOnExit
      >
        {(state) => (
          <Scoreboard
            handleModalClose={onToggleScoreboard}
            stateClass={state}
          />
        )}
      </Transition>
    </Styled.Actions>
  );
};
