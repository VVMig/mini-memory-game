export interface GameState {
  isPaused: boolean;
  isRestart: boolean;
}

export enum GameActionTypes {
  TOGGLE_PAUSE = 'TOGGLE_PAUSE',
  RESTART = 'RESTART',
}

export interface TogglePauseAction {
  type: GameActionTypes.TOGGLE_PAUSE;
  payload: boolean;
}

export interface RestartAction {
  type: GameActionTypes.RESTART;
  payload: boolean;
}

export type GameAction = TogglePauseAction | RestartAction;
