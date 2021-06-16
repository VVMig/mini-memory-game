import {
  GameActionTypes,
  InitGameAction,
  RestartAction,
  TogglePauseAction,
  ToggleSoundAction,
} from '../types';

export const togglePause = (isPause: boolean): TogglePauseAction => ({
  type: GameActionTypes.TOGGLE_PAUSE,
  payload: !isPause,
});

export const restart = (isRestart: boolean): RestartAction => ({
  type: GameActionTypes.RESTART,
  payload: isRestart,
});

export const toggleSound = (isSound: boolean): ToggleSoundAction => ({
  type: GameActionTypes.TOGGLE_SOUND,
  payload: !isSound,
});

export const initGame = (): InitGameAction => ({
  type: GameActionTypes.INIT_GAME,
  payload: {
    isPaused: false,
    isRestart: false,
  },
});
