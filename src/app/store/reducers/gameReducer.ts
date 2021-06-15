import { GameAction, GameActionTypes, GameState } from '../types';

const initialState: GameState = {
  isPaused: false,
  isRestart: false,
  isSound: true,
};

export const gameReducer = (
  state = initialState,
  action: GameAction
): GameState => {
  switch (action.type) {
    case GameActionTypes.TOGGLE_PAUSE:
      return { ...state, isPaused: action.payload };
    case GameActionTypes.RESTART:
      return { ...state, isRestart: action.payload };
    case GameActionTypes.INIT_GAME:
      return { ...state, ...action.payload };
    case GameActionTypes.TOGGLE_SOUND:
      return { ...state, isSound: action.payload };
    default:
      return state;
  }
};
