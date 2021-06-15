import { Difficulty, UserAction, UserActionTypes, UserState } from '../types';

const initialState: UserState = {
  name: '',
  time: 0,
  difficulty: Difficulty.Easy,
  results: [],
};

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.INIT_USER:
      return action.payload;
    case UserActionTypes.UPDATE_TIME:
      return { ...state, time: action.payload };
    case UserActionTypes.CHANGE_DIFFICULTY:
      return { ...state, difficulty: action.payload };
    case UserActionTypes.ADD_RESULT:
      return {
        ...state,
        results: [
          {
            difficulty: state.difficulty,
            time: state.time,
          },
          ...state.results,
        ],
      };
    case UserActionTypes.SET_USER:
      return action.payload;
    default:
      return state;
  }
};
