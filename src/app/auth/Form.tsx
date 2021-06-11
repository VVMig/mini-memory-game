import React from 'react';

import { Rules } from './rules/Rules';
import { StartGame } from './StartGame';
import { Styled } from './styled';

export const Form = () => {
  return (
    <Styled.AuthForm>
      <Styled.UsernameField
        placeholder="Enter your name"
        required
        type="text"
        name="username"
        id="username"
      />
      <Styled.Label htmlFor="username">Name</Styled.Label>
      <StartGame />
      <Rules />
    </Styled.AuthForm>
  );
};
