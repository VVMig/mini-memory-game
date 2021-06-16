export enum Difficulty {
  Easy = 2,
  Normal = 4,
  Hard = 6,
}

export interface IResult {
  difficulty: Difficulty;
  time: number;
}

export enum UserActionTypes {
  INIT_USER = 'INIT_USER',
  UPDATE_TIME = 'UPDATE_TIME',
  ADD_RESULT = 'ADD_RESULT',
  CHANGE_DIFFICULTY = 'CHANGE_DIFFICULTY',
  SET_USER = 'SET_USER',
}

export interface UpdateTimeAction {
  type: UserActionTypes.UPDATE_TIME;
  payload: number;
}

export interface SetUserAction {
  type: UserActionTypes.SET_USER;
  payload: UserState;
}

export interface AddResultAction {
  type: UserActionTypes.ADD_RESULT;
}

export interface ChangeDifficultyAction {
  type: UserActionTypes.CHANGE_DIFFICULTY;
  payload: Difficulty;
}

export interface InitUserAction {
  type: UserActionTypes.INIT_USER;
  payload: UserState;
}

export type UserAction =
  | UpdateTimeAction
  | ChangeDifficultyAction
  | InitUserAction
  | AddResultAction
  | SetUserAction;

export interface UserState {
  name: string;
  time: number;
  difficulty: Difficulty;
  results: IResult[];
}
