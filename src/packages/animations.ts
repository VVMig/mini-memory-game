import { keyframes } from 'styled-components';

export const rotate = keyframes`
  0% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
  25% {
    transform: rotate(3deg) translate3d(0, 0, 0);
  }
  50% {
    transform: rotate(-3deg) translate3d(0, 0, 0);
  }
  75% {
    transform: rotate(1deg) translate3d(0, 0, 0);
  }
  100% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
`;

export const storm = keyframes`
  0% {
    transform: translate3d(0, 0, 0) translateZ(0);
  }
  25% {
    transform: translate3d(4px, 0, 0) translateZ(0);
  }
  50% {
    transform: translate3d(-3px, 0, 0) translateZ(0);
  }
  75% {
    transform: translate3d(2px, 0, 0) translateZ(0);
  }
  100% {
    transform: translate3d(0, 0, 0) translateZ(0);
  }
`;

export const scale = keyframes`
    0%{
      opacity: 0;
      transform: scale(0.9);
    }
    100%{
      opacity: 1;
      transform: scale(1);
    }
`;

export const fade = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`;
