import React from 'react';

import { useActions, useTypedSelector } from '../../hooks';
import { icons } from '../../icons';
import { Styled } from './styled';

export const Actions = () => {
  const { isPaused } = useTypedSelector((store) => store.game);
  const { togglePause, updateTime, restart } = useActions();

  const onTogglePause = () => {
    togglePause(isPaused);
  };

  const onClickRestart = () => {
    updateTime(0);
    restart(true);
  };

  return (
    <Styled.Actions>
      <Styled.ActionButton
        onClick={onTogglePause}
        title={isPaused ? 'Play' : 'Pause'}
      >
        {isPaused ? icons.Play : icons.Pause}
      </Styled.ActionButton>
      <Styled.ActionButton title="Restart" onClick={onClickRestart}>
        {icons.Restart}
      </Styled.ActionButton>
    </Styled.Actions>
  );
};
