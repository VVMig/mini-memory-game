import styled, { css } from 'styled-components';

import { fade, scale } from '../../animations';
import { ZIndex } from '../../ZIndex';
import { IAnimation } from './interfaces';

const backgroundOpacity = 0.8;
const defaultDelay = 200;

interface CloseButtonProps {
  colorToggle: boolean;
}

const CloseButton = styled.span<CloseButtonProps>`
  position: fixed;
  color: ${({ theme }) => theme.opacityLighterGrey()};
  right: 25px;
  top: 25px;
  font-size: 45px;
  cursor: pointer;
  transition: 0.1s linear;
  ${(props) =>
    props.colorToggle &&
    css`
      color: ${(props) => props.theme.white};
    `}
`;

const ModalWrapper = styled.div<IAnimation>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.opacityGrey(backgroundOpacity)};
  z-index: ${ZIndex.Modal};
  overflow: hidden;
  display: grid;
  place-items: center;
  cursor: pointer;

  &.entering {
    animation: ${fade} ${({ delay }) => delay || defaultDelay}ms linear both;
  }

  &.exiting {
    animation: ${fade} ${({ delay }) => delay || defaultDelay}ms linear reverse
      both;
  }
`;

const Modal = styled.div<IAnimation>`
  border-radius: 10px;
  overflow: hidden;
  cursor: auto;

  &.entering {
    animation: ${scale} ${({ delay }) => delay || defaultDelay}ms linear both;
  }

  &.exiting {
    animation: ${scale} ${({ delay }) => delay || defaultDelay}ms linear reverse
      both;
  }
`;

export const Styled = {
  ModalWrapper,
  Modal,
  CloseButton,
};
