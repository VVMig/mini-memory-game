import React from 'react';
import { useState } from 'react';

import { difficulties } from '../../difficulties';
import { Styled } from './styled';

interface Props {
  handleModalClose: () => void;
  stateClass?: string;
}

export const Scoreboard: React.FC<Props> = ({
  handleModalClose,
  stateClass,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onClickNav = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Styled.Scoreboard
      handleModalClose={handleModalClose}
      stateClass={stateClass}
    >
      <Styled.LevelNavBar>
        {difficulties.map((level, index) => (
          <Styled.LevelNav
            onClick={() => onClickNav(index)}
            isActive={index === activeIndex}
            key={`${level.value}-${index}`}
            isLast={index === difficulties.length - 1}
          >
            {level.value}
          </Styled.LevelNav>
        ))}
      </Styled.LevelNavBar>
    </Styled.Scoreboard>
  );
};
