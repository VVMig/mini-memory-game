import styled from 'styled-components';

import { squareSize } from '../helpers';

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
`;

const StartGame = styled.div`
  padding: 15px 0 1px;
`;

const DifficultySelect = styled.div`
  display: flex;
  padding: 15px 50px 0;
  justify-content: space-around;
  width: 100%;
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
};
