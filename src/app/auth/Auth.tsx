import React from 'react';

import { Form } from './Form';
import { Styled } from './styled';

export const Auth = () => {
  return (
    <Styled.Auth>
      <Styled.FormContainer>
        <Form />
      </Styled.FormContainer>
    </Styled.Auth>
  );
};
