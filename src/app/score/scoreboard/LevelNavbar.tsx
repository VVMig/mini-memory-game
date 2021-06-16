import React from 'react';

import { difficulties } from '../../difficulties';
import { Difficulty } from '../../store/types';
import { Styled } from './styled';

interface Props {
  onClickNav: (level: Difficulty) => void;
  selectedLevel: Difficulty;
}

export const LevelNavbar: React.FC<Props> = ({ onClickNav, selectedLevel }) => {
  return (
    <Styled.LevelNavbar>
      {difficulties.map((level, index) => (
        <Styled.LevelNav
          onClick={() => onClickNav(level.type)}
          isActive={level.type === selectedLevel}
          key={`${level.value}-${index}`}
          isLast={index === difficulties.length - 1}
        >
          {level.value}
        </Styled.LevelNav>
      ))}
    </Styled.LevelNavbar>
  );
};
