import { GameActionTypes, TogglePauseAction } from '../types';

export const togglePause = (isPause: boolean): TogglePauseAction => ({
  type: GameActionTypes.TOGGLE_PAUSE,
  payload: !isPause,
});
