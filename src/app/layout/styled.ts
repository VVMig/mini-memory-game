import styled from 'styled-components';

import { scale } from '../../packages';
import { Breakpoints } from '../Breakpoints';

export const pageAnimationDuration = 200;

const Background = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.opacityGrey()};
`;

const Container = styled.div`
  display: grid;
  max-width: ${Breakpoints.Desktop}px;
  width: 100%;
  height: 100vh;
  place-items: center;

  & .page {
    &-enter {
      animation: ${scale} ${pageAnimationDuration}ms linear both;
    }

    &-exit {
      display: none;
    }
  }
`;

export const Styled = {
  Background,
  Container,
};
