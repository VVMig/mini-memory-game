export interface GameState {
  isPaused: boolean;
  isRestart: boolean;
}

export enum GameActionTypes {
  TOGGLE_PAUSE = 'TOGGLE_PAUSE',
  RESTART = 'RESTART',
  INIT_GAME = 'INIT_GAME',
}

export interface TogglePauseAction {
  type: GameActionTypes.TOGGLE_PAUSE;
  payload: boolean;
}

export interface InitGameAction {
  type: GameActionTypes.INIT_GAME;
  payload: GameState;
}

export interface RestartAction {
  type: GameActionTypes.RESTART;
  payload: boolean;
}

export type GameAction = TogglePauseAction | RestartAction | InitGameAction;
