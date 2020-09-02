import React, { FC } from 'react';
import chevronPng from '../../images/icons/chevron-right.png';
import { Container, Input, Button, Text, Break } from './styles/opt-form';

interface IRestProps {
  [rest: string]: any;
}

interface IComposition {
  Input: FC<IRestProps>;
  Button: FC<IRestProps>;
  Text: FC<IRestProps>;
  Break: FC<IRestProps>;
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
      {children} <img src={chevronPng} alt="Try Now" />
    </Button>
  );
};

OptForm.Break = function OptBreak({ ...restProps }) {
  return <Break {...restProps} />;
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
