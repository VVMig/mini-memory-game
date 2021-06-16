import { sortResults } from '../../app/helpers';
import { Difficulty, IResult } from '../../app/store/types';

describe('Sorting results by difficulty level in descending order', () => {
  let results: IResult[] = [];

  beforeEach(() => {
    results = [
      {
        time: 12131513,
        difficulty: Difficulty.Hard,
      },
      {
        time: 4323,
        difficulty: Difficulty.Easy,
      },
      {
        time: 4323,
        difficulty: Difficulty.Normal,
      },
      {
        time: 25323,
        difficulty: Difficulty.Easy,
      },
      {
        time: 1323,
        difficulty: Difficulty.Easy,
      },
      {
        time: 321313,
        difficulty: Difficulty.Hard,
      },
    ];
  });

  it('Should return only easy difficulty', () => {
    const testedResults = sortResults(results, Difficulty.Easy);
    const expectedLength = results.filter(
      (result) => result.difficulty === Difficulty.Easy
    ).length;

    expect(testedResults.length).toEqual(expectedLength);
    testedResults.forEach((result) => {
      expect(result.difficulty).toEqual(Difficulty.Easy);
    });
  });

  it('Should return only hard difficulty', () => {
    const testedResults = sortResults(results, Difficulty.Hard);
    const expectedLength = results.filter(
      (result) => result.difficulty === Difficulty.Hard
    ).length;

    expect(testedResults.length).toEqual(expectedLength);
    testedResults.forEach((result) => {
      expect(result.difficulty).toEqual(Difficulty.Hard);
    });
  });

  it('Should return desc sort', () => {
    const testedResults = sortResults(results, Difficulty.Hard);

    for (let index = 1; index < testedResults.length; index++) {
      expect(testedResults[index].time).toBeGreaterThan(
        testedResults[index - 1].time
      );
    }
  });

  it('Should return desc sort', () => {
    const testedResults = sortResults(results, Difficulty.Easy);

    for (let index = 1; index < testedResults.length; index++) {
      expect(testedResults[index].time).toBeGreaterThan(
        testedResults[index - 1].time
      );
    }
  });
});
