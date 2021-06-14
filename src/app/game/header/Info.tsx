import React from 'react';

import { useHistory } from 'react-router';

import { icons } from '../../icons';
import { RoutesEnum } from '../../RoutesEnum';
import { Score } from './Score';
import { Styled } from './styled';

export const Info = () => {
  const history = useHistory();

  const onClickBack = () => {
    history.push(RoutesEnum.Home);
  };

  return (
    <Styled.Info>
      <Styled.BackButton onClick={onClickBack}>
        {icons.ArrowLeft} Back
      </Styled.BackButton>
      <Score />
    </Styled.Info>
  );
};
