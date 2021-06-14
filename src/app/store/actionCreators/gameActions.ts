import { GameActionTypes, RestartAction, TogglePauseAction } from '../types';

export const togglePause = (isPause: boolean): TogglePauseAction => ({
  type: GameActionTypes.TOGGLE_PAUSE,
  payload: !isPause,
});

export const restart = (isRestart: boolean): RestartAction => ({
  type: GameActionTypes.RESTART,
  payload: isRestart,
});
