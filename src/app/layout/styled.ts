import styled from 'styled-components';

import { scale } from '../../packages';

export const pageAnimationDuration = 200;

const Background = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.opacityGrey()};
  height: 100vh;
  overflow: hidden;
`;

const Container = styled.div`
  display: grid;
  width: 100%;
  height: inherit;
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
