import { Difficulty } from './store/types';

export const difficulties = [
  {
    value: `${Difficulty.Easy}x${Difficulty.Easy}`,
    type: Difficulty.Easy,
  },
  {
    value: `${Difficulty.Normal}x${Difficulty.Normal}`,
    type: Difficulty.Normal,
  },
  {
    value: `${Difficulty.Hard}x${Difficulty.Hard}`,
    type: Difficulty.Hard,
  },
];
