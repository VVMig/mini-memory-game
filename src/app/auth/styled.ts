import styled from 'styled-components';

import { Button } from '../../packages';
import { Breakpoints } from '../Breakpoints';
import { squareSize } from '../helpers';

const desktopSquareSize = 400;
const phoneSquareSize = 280;
const smallPhoneSquareSize = 200;

const Auth = styled.div`
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
`;

const FormContainer = styled.div`
  ${squareSize(desktopSquareSize)};
  display: grid;
  place-items: center;

  @media (max-width: ${Breakpoints.Phone}px) {
    ${squareSize(phoneSquareSize)};
  }

  @media (max-width: ${Breakpoints.SmallPhone}px) {
    ${squareSize(smallPhoneSquareSize)}
  }
`;

const AuthForm = styled.form.attrs(() => ({
  autoComplete: 'off',
}))`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 60px;

  @media (max-width: ${Breakpoints.Phone}px) {
    padding: 0 30px;
  }

  @media (max-width: ${Breakpoints.SmallPhone}px) {
    padding: 0 15px;
  }
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

  @media (max-width: ${Breakpoints.Phone}px) {
    font-size: 0.8rem;
  }
`;

const UsernameField = styled.input.attrs(() => ({
  type: 'text',
}))`
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

  @media (max-width: ${Breakpoints.Phone}px) {
    font-size: 1rem;

    &:placeholder-shown ~ {
      ${Label} {
        font-size: 1rem;
      }
    }

    &:focus {
      ~ ${Label} {
        font-size: 0.8rem;
      }
    }
  }
`;

const StartGame = styled.div`
  padding: 15px 0 1px;

  @media (max-width: ${Breakpoints.Phone}px) {
    padding: 9px 0 1px;
  }
`;

const StartGameButton = styled(Button)`
  @media (max-width: ${Breakpoints.Phone}px) {
    padding: 9px 0;
    width: 150px;
    & span {
      font-size: 14px;
    }
  }

  @media (max-width: ${Breakpoints.SmallPhone}px) {
    padding: 8px 0;
    width: 120px;
    & span {
      font-size: 12px;
    }
  }
`;

const DifficultySelect = styled.div`
  display: flex;
  padding: 15px 50px 0;
  justify-content: space-around;
  width: 100%;

  @media (max-width: ${Breakpoints.Phone}px) {
    padding: 9px 35px 0;
  }
`;

const Level = styled.div`
  display: flex;
  align-items: center;
`;

const LevelLabel = styled.label`
  padding: 2px;
  color: ${({ theme }) => theme.lime};
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.lightBlue};
  border-radius: 5px;
  font-size: 18px;
  transition: 0.2s linear;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }

  @media (max-width: ${Breakpoints.Phone}px) {
    font-size: 15px;
  }

  @media (max-width: ${Breakpoints.SmallPhone}px) {
    font-size: 12px;
  }
`;

const LevelRadio = styled.input.attrs(() => ({
  type: 'radio',
}))`
  display: none;

  &:checked + ${LevelLabel} {
    background-color: ${({ theme }) => theme.lightBlue};
    color: ${({ theme }) => theme.white};
    opacity: 1;
  }
`;

export const Styled = {
  Auth,
  AuthForm,
  UsernameField,
  FormContainer,
  Label,
  StartGame,
  DifficultySelect,
  LevelRadio,
  LevelLabel,
  Level,
  StartGameButton,
};
