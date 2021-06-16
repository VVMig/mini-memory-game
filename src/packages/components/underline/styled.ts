import styled from 'styled-components';

import { ZIndex } from '../../ZIndex';

const Underline = styled.div`
  position: absolute;
  width: 0;
  height: 1px;
  bottom: 0px;
  transition: 0.1s linear;
  cursor: pointer;
  z-index: ${ZIndex.Underline};
`;

export const Styled = {
  Underline,
};
