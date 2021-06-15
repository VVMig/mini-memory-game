import React, { useState, FormEventHandler, ChangeEventHandler } from 'react';

import { useHistory } from 'react-router-dom';

import { useActions, useTypedSelector } from '../hooks';
import { RoutesEnum } from '../RoutesEnum';
import { Difficulty } from '../store/types';
import { DifficultySelect } from './DifficultySelect';
import { Rules } from './rules/Rules';
import { StartGame } from './StartGame';
import { Styled } from './styled';

export const Form = () => {
  const { name, difficulty } = useTypedSelector(({ user }) => user);

  const [username, setUsername] = useState(name);
  const [level, setLevel] = useState(difficulty);

  const history = useHistory();
  const { initUser, changeDifficulty } = useActions();

  const onSubmitForm: FormEventHandler = (event) => {
    event.preventDefault();

    if (!username.trim()) {
      return;
    }

    if (name === username) {
      changeDifficulty(level);
    } else {
      initUser(username, level);
    }

    history.push(RoutesEnum.Game);
  };

  const onChangeLevel = (type: Difficulty) => {
    setLevel(type);
  };

  const onChangeUsernameInput: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setUsername(event.currentTarget.value);
  };

  return (
    <Styled.AuthForm onSubmit={onSubmitForm}>
      <Styled.UsernameField
        placeholder="Enter your name"
        required
        name="username"
        id="username"
        value={username}
        onChange={onChangeUsernameInput}
      />
      <Styled.Label htmlFor="username">Name</Styled.Label>
      <DifficultySelect selectedLevel={level} onChangeLevel={onChangeLevel} />
      <StartGame />
      <Rules />
    </Styled.AuthForm>
  );
};
