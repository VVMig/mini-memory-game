export enum Difficulty {
  Easy = 3,
  Normal = 6,
  Hard = 9,
}

export enum UserActionTypes {
  INIT_USER = 'INIT_USER',
  SET_USER = 'SET_USER',
  RESET_USER = 'RESET_USER',
}

export interface ResetUserAction {
  type: UserActionTypes.RESET_USER;
  payload: UserState;
}

export interface InitUserAction {
  type: UserActionTypes.INIT_USER;
  payload: UserState;
}

export interface SetUserAction {
  type: UserActionTypes.SET_USER;
  payload: UserState;
}

export type UserAction = SetUserAction | ResetUserAction | InitUserAction;

export interface UserState {
  name: string;
  time: number;
  difficulty: Difficulty;
}
