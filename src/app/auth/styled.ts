import styled from 'styled-components';

import { storm, rotate } from '../../packages';
import { squareSize } from '../helpers'

const deckstopSquareSize = 400;

const Auth = styled.div`
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
`;

const FormContainer = styled.div`
  ${squareSize(deckstopSquareSize)};
  display: grid;
  place-items: center;
`;

const AuthForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 60px;
`;

const Label = styled.label`
  position: absolute;
  top: 0;
  transform: translate(0, -100%);
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  align-self: flex-start;
  color: ${({ theme }) => theme.opacityLighterGrey()};
`;

const UsernameField = styled.input`
  width: 100%;
  border: 0;
  padding-bottom: 2px;
  border-bottom: 2px solid ${({ theme }) => theme.opacityGrey()};
  outline: 0;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.opacityLighterGrey()};
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ {
    ${Label} {
      transform: translate(0, 0);
      font-size: 1.3rem;
      cursor: text;
      top: 0px;
    }
  }

  &:focus {
    font-weight: 700;
    border-width: 3px;
    border-image: ${({ theme }) => theme.blueLimeGradient};
    border-image-slice: 1;

    ~ ${Label} {
      position: absolute;
      transform: translate(0, -100%);
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: ${({ theme }) => theme.lime};
      font-weight: 700;
    }
  }
`;

const StartGame = styled.div`
  padding: 10px 0 1px;
`;

const ButtonText = styled.span`
  color: ${({ theme }) => theme.white};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.7px;
`;

const StartGameButton = styled.button`
  position: relative;
  margin: 0;
  padding: 12px 12px;
  width: 180px;
  outline: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  background: ${({ theme }) => theme.blueLimeGradient};
  border-radius: 10px;
  font-weight: 400;
  font-size: 20px;
  font-family: inherit;
  z-index: 0;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:before,
  &:after {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: ${({ theme }) => theme.lightBlue};
    content: '';
    opacity: 0;
    transition: transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1),
      opacity 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
    z-index: -1;
    transform: translate(100%, -25%) translate3d(0, 0, 0);
  }

  &:hover {
    &:before,
    &:after {
      opacity: 0.15;
      transition: transform 0.2s cubic-bezier(0.02, 0.01, 0.47, 1),
        opacity 0.2s cubic-bezier(0.02, 0.01, 0.47, 1);
    }
    &:before {
      transform: translate3d(50%, 0, 0) scale(0.9);
    }
    &:after {
      transform: translate(50%, 0) scale(1.1);
    }
  }

  &:hover {
    animation: ${rotate} 0.7s ease-in-out both;
    ${ButtonText} {
      animation: ${storm} 0.7s ease-in-out both;
      animation-delay: 0.06s;
    }
  }
`;

export const Styled = {
  Auth,
  AuthForm,
  UsernameField,
  FormContainer,
  StartGameButton,
  Label,
  ButtonText,
  StartGame,
};
