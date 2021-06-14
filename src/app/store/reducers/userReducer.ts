import { Difficulty, UserAction, UserActionTypes, UserState } from '../types';

const initialState: UserState = {
  name: '',
  time: 0,
  difficulty: Difficulty.Easy,
};

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.INIT_USER:
      return { ...action.payload };
    case UserActionTypes.UPDATE_TIME:
      return { ...state, time: action.payload };
    case UserActionTypes.RESET_USER:
      return { ...action.payload };
    default:
      return state;
  }
};
