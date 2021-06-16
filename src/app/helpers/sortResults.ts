import { Difficulty, IResult } from '../store/types';

export const sortResults = (results: IResult[], level: Difficulty) =>
  results
    .filter((score) => score.difficulty === level)
    .sort((scoreA, scoreB) => scoreA.time - scoreB.time);
