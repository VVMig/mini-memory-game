import React from 'react';
import { useState } from 'react';

import { timeFormat } from '../../helpers';
import { useSortResults } from '../../hooks/useSortResults';
import { Difficulty } from '../../store/types';
import { LevelNavbar } from './LevelNavbar';
import { Styled } from './styled';

interface Props {
  handleModalClose: () => void;
  stateClass?: string;
}

export const Scoreboard: React.FC<Props> = ({
  handleModalClose,
  stateClass,
}) => {
  const [selectedLevel, setSelectedLevel] = useState(Difficulty.Easy);
  const { results, onSelectLevel } = useSortResults(selectedLevel);

  const onClickNav = (level: Difficulty) => {
    setSelectedLevel(level);
    onSelectLevel(level);
  };

  return (
    <Styled.Scoreboard
      handleModalClose={handleModalClose}
      stateClass={stateClass}
    >
      <LevelNavbar onClickNav={onClickNav} selectedLevel={selectedLevel} />
      {results.length ? (
        <Styled.ScoreResults>
          {results.map((score, index) => (
            <Styled.Score isRecord={!index} key={`${score.time}-${index}`}>
              {timeFormat(score.time, true)}
            </Styled.Score>
          ))}
        </Styled.ScoreResults>
      ) : (
        <Styled.EmptyResults>
          Play this difficulty to see your results.
          <br /> Let's go!
        </Styled.EmptyResults>
      )}
    </Styled.Scoreboard>
  );
};
