export interface GameState {
  isPaused: boolean;
}

export enum GameActionTypes {
  TOGGLE_PAUSE = 'TOGGLE_PAUSE',
}

export interface TogglePauseAction {
  type: GameActionTypes.TOGGLE_PAUSE;
  payload: boolean;
}

export type GameAction = TogglePauseAction;
