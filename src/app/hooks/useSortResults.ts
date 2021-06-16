import { useState } from 'react';

import { sortResults } from '../helpers';
import { Difficulty } from '../store/types';
import { useTypedSelector } from './useTypedSelector';

export const useSortResults = (level: Difficulty) => {
  const { results } = useTypedSelector(({ user }) => user);
  const [sortedResults, setSortedResults] = useState(
    sortResults(results, level)
  );

  const onSelectLevel = (newLevel: Difficulty) => {
    setSortedResults(sortResults(results, newLevel));
  };

  return { results: sortedResults, onSelectLevel };
};
