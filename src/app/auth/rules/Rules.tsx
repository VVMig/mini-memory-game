import React, { useState } from 'react';

import { Transition } from 'react-transition-group';

import { RulesModal } from './RulesModal';
import { Styled } from './styled';

const modalDelay = 200;

export const Rules = () => {
  const [isModalShow, setIsModalShow] = useState(false);

  const handleModalOpen = () => {
    setIsModalShow(true);
  };

  const handleModalClose = () => {
    setIsModalShow(false);
  };

  return (
    <Styled.Rules>
      <Styled.RulesToggle onClick={handleModalOpen}>Rules</Styled.RulesToggle>
      <Styled.RulesUnderline />
      <Transition in={isModalShow} timeout={modalDelay} unmountOnExit>
        {(state) => (
          <RulesModal handleModalClose={handleModalClose} stateClass={state} />
        )}
      </Transition>
    </Styled.Rules>
  );
};
