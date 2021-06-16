import {
  AddResultAction,
  ChangeDifficultyAction,
  Difficulty,
  InitUserAction,
  SetUserAction,
  UpdateTimeAction,
  UserActionTypes,
  UserState,
} from '../types';

export const updateTime = (time: number): UpdateTimeAction => ({
  type: UserActionTypes.UPDATE_TIME,
  payload: time,
});

export const initUser = (name: string, level: Difficulty): InitUserAction => {
  const startTimeValue = 0;

  return {
    type: UserActionTypes.INIT_USER,
    payload: {
      name,
      difficulty: level,
      time: startTimeValue,
      results: [],
    },
  };
};

export const setUser = (user: UserState): SetUserAction => ({
  type: UserActionTypes.SET_USER,
  payload: user,
});

export const changeDifficulty = (
  level: Difficulty
): ChangeDifficultyAction => ({
  type: UserActionTypes.CHANGE_DIFFICULTY,
  payload: level,
});

export const addResult = (): AddResultAction => ({
  type: UserActionTypes.ADD_RESULT,
});
