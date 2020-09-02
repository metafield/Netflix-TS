import React, { FC } from 'react';
import { Container, Input, Button, Text } from './styles/opt-form';

interface IRestProps {
  [rest: string]: any;
}

interface IComposition {
  Input: FC<IRestProps>;
  Button: FC<IRestProps>;
  Text: FC<IRestProps>;
}

export const OptForm: FC<IRestProps> & IComposition = ({
  children,
  ...restProps
}) => {
  return <Container {...restProps}>{children}</Container>;
};

OptForm.Input = function OptFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
