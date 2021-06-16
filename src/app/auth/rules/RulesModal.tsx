import React from 'react';

import { Styled } from './styled';

interface Props {
  handleModalClose: () => void;
  stateClass?: string;
}

export const RulesModal: React.FC<Props> = ({
  handleModalClose,
  stateClass,
}) => {
  return (
    <Styled.RulesModal
      handleModalClose={handleModalClose}
      stateClass={stateClass}
    >
      <div>
        In front of you are cards face down. You need to collect a pair of
        identical cards. To do this, click on one of the cards, it will turn
        over, and find the second such card. The game is considered over when
        all pairs of cards are collected. Good luck!
      </div>
      <Styled.RulesButton onClick={handleModalClose}>Got it</Styled.RulesButton>
    </Styled.RulesModal>
  );
};
