import { Difficulty, IResult } from '../store/types';

const compare = (a: number, b: number) => {
  if (a > b) return 1;
  if (a == b) return 0;

  return -1;
};

export const sortResults = (results: IResult[], level: Difficulty) =>
  results
    .filter((score) => score.difficulty === level)
    .sort((scoreA, scoreB) => compare(scoreA.time, scoreB.time));
