import { GameAction, GameActionTypes, GameState } from '../types';

const initialState: GameState = {
  isPaused: false,
};

export const gameReducer = (
  state = initialState,
  action: GameAction
): GameState => {
  switch (action.type) {
    case GameActionTypes.TOGGLE_PAUSE:
      return { ...state, isPaused: action.payload };
    default:
      return state;
  }
};
