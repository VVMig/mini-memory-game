import React from 'react';

import { Redirect } from 'react-router-dom';

import { timeFormat } from '../helpers';
import { useTypedSelector } from '../hooks';
import { RoutesEnum } from '../RoutesEnum';
import { Styled } from './styled';

export const Results = () => {
  const { results } = useTypedSelector(({ user }) => user);

  return results.length ? (
    <Styled.Results>
      <Styled.ResultsTitle>Your time</Styled.ResultsTitle>
      <Styled.ResultTime>{timeFormat(results[0].time)}</Styled.ResultTime>
    </Styled.Results>
  ) : (
    <Redirect to={RoutesEnum.Home} />
  );
};
