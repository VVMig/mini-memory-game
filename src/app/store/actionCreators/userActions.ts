import {
  Difficulty,
  InitUserAction,
  ResetUserAction,
  UpdateTimeAction,
  UserActionTypes,
} from '../types';

const startTimeValue = 0;

export const updateTime = (time: number): UpdateTimeAction => ({
  type: UserActionTypes.UPDATE_TIME,
  payload: time,
});

export const initUser = (name: string, level: Difficulty): InitUserAction => ({
  type: UserActionTypes.INIT_USER,
  payload: {
    name,
    difficulty: level,
    time: startTimeValue,
  },
});

export const resetUser = (): ResetUserAction => ({
  type: UserActionTypes.RESET_USER,
  payload: {
    name: '',
    time: startTimeValue,
    difficulty: Difficulty.Easy,
  },
});
