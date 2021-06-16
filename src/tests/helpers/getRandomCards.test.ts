import { getRandomCards } from '../../app/helpers';

describe('Generate random cards images', () => {
  it('Should return different arrays for 4x4 field', () => {
    const mediumDifficulty = 4;
    let matches = 0;

    const firstArray = getRandomCards(mediumDifficulty);
    const secondArray = getRandomCards(mediumDifficulty);

    firstArray.forEach((card, index) => {
      if (card.title === secondArray[index].title) {
        matches += 1;
      }
    });

    expect(matches).not.toEqual(firstArray.length);
  });

  it('Should return different arrays for 6x6 field', () => {
    const mediumDifficulty = 6;
    let matches = 0;

    const firstArray = getRandomCards(mediumDifficulty);
    const secondArray = getRandomCards(mediumDifficulty);

    firstArray.forEach((card, index) => {
      if (card.title === secondArray[index].title) {
        matches += 1;
      }
    });

    expect(matches).not.toEqual(firstArray.length);
  });
});
