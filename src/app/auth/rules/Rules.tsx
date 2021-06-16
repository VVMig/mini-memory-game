import React, { useState } from 'react';

import { Transition } from 'react-transition-group';

import { RulesModal } from './RulesModal';
import { Styled } from './styled';

const modalAnimationDuration = 150;

export const Rules = () => {
  const [isModalShow, setIsModalShow] = useState(false);

  return (
    <Styled.Rules>
      <Styled.RulesToggle onClick={() => setIsModalShow(!isModalShow)}>
        Rules
      </Styled.RulesToggle>
      <Styled.RulesUnderline />
      <Transition
        in={isModalShow}
        timeout={modalAnimationDuration}
        unmountOnExit
      >
        {(state) => (
          <RulesModal
            handleModalClose={() => setIsModalShow(!isModalShow)}
            stateClass={state}
          />
        )}
      </Transition>
    </Styled.Rules>
  );
};
