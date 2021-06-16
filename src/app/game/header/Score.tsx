import React, { useEffect, useRef } from 'react';

import { timeFormat } from '../../helpers';
import { useActions, useTypedSelector } from '../../hooks';
import { icons } from '../../icons';
import { Styled } from './styled';

const msForUpdate = 100;

export const Score = () => {
  const [time, isPaused] = useTypedSelector((store) => [
    store.user.time,
    store.game.isPaused,
  ]);
  const { updateTime } = useActions();
  const increment = useRef<NodeJS.Timeout | null>(null);

  const handleStart = () => {
    increment.current = setInterval(() => {
      updateTime(time + msForUpdate);
    }, msForUpdate);
  };

  const handleStop = () => {
    if (increment.current) {
      clearInterval(increment.current);
    }
  };

  useEffect(() => {
    if (!isPaused) {
      handleStart();
    }

    return () => {
      handleStop();
    };
  });

  return (
    <Styled.Score>
      {icons.Clock} <Styled.Time>{timeFormat(time)}</Styled.Time>
    </Styled.Score>
  );
};
