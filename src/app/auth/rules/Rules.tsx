import React, { useState } from 'react';

import { Transition } from 'react-transition-group';

import { RulesModal } from './RulesModal';
import { Styled } from './styled';

const modalAnimationDutation = 150;

export const Rules = () => {
  const [isModalShow, setIsModalShow] = useState(false);

  const onToggleModal = () => {
    setIsModalShow(!isModalShow);
  };

  return (
    <Styled.Rules>
      <Styled.RulesToggle onClick={onToggleModal}>Rules</Styled.RulesToggle>
      <Styled.RulesUnderline />
      <Transition
        in={isModalShow}
        timeout={modalAnimationDutation}
        unmountOnExit
      >
        {(state) => (
          <RulesModal handleModalClose={onToggleModal} stateClass={state} />
        )}
      </Transition>
    </Styled.Rules>
  );
};
