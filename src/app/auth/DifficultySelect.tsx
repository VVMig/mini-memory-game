import React from 'react';

import { difficulties } from '../difficulties';
import { Difficulty } from '../store/types';
import { Styled } from './styled';

interface Props {
  selectedLevel: Difficulty;
  onChangeLevel: (type: Difficulty) => void;
}

export const DifficultySelect: React.FC<Props> = ({
  selectedLevel,
  onChangeLevel,
}) => {
  return (
    <Styled.DifficultySelect>
      {difficulties.map((level, index) => (
        <Styled.Level key={`${level.value}-${index}`}>
          <Styled.LevelRadio
            value={level.type}
            id={level.value}
            name={level.value}
            checked={level.type === selectedLevel}
            onChange={() => onChangeLevel(level.type)}
          />
          <Styled.LevelLabel htmlFor={level.value}>
            {level.value}
          </Styled.LevelLabel>
        </Styled.Level>
      ))}
    </Styled.DifficultySelect>
  );
};
