export enum Difficulty {
  Easy = 2,
  Normal = 4,
  Hard = 6,
}

export enum UserActionTypes {
  INIT_USER = 'INIT_USER',
  RESET_USER = 'RESET_USER',
  UPDATE_TIME = 'UPDATE_TIME',
}

export interface UpdateTimeAction {
  type: UserActionTypes.UPDATE_TIME;
  payload: number;
}

export interface ResetUserAction {
  type: UserActionTypes.RESET_USER;
  payload: UserState;
}

export interface InitUserAction {
  type: UserActionTypes.INIT_USER;
  payload: UserState;
}

export type UserAction = UpdateTimeAction | ResetUserAction | InitUserAction;

export interface UserState {
  name: string;
  time: number;
  difficulty: Difficulty;
}
