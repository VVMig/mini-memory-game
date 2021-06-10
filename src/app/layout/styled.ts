import styled from 'styled-components';

import { Breakpoints } from '../Breakpoints';

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
`;

export const Styled = {
  Background,
  Container,
};
