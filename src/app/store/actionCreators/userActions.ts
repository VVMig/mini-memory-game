import { Difficulty, UserAction, UserActionTypes, UserState } from '../types';

const startTimeValue = 0;

export const setUser = (newUser: UserState): UserAction => ({
  type: UserActionTypes.SET_USER,
  payload: {
    ...newUser,
  },
});

export const initUser = (name: string, level: Difficulty): UserAction => ({
  type: UserActionTypes.INIT_USER,
  payload: {
    name,
    difficulty: level,
    time: startTimeValue,
  },
});

export const resetUser = (): UserAction => ({
  type: UserActionTypes.RESET_USER,
  payload: {
    name: '',
    time: startTimeValue,
    difficulty: Difficulty.Easy,
  },
});
