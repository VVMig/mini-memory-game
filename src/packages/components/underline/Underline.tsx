import React, { HTMLAttributes } from 'react';

import { Styled } from './styled';

export const Underline: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  return <Styled.Underline {...props} />;
};
