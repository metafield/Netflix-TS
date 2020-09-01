import React, { FC, useState } from 'react';
import {
  Inner,
  Item,
  Container,
  Title,
  Header,
  Body,
} from './styles/accordion';

interface IRestProps {
  [rest: string]: any;
}

interface IComposition {
  Container: FC<IRestProps>;
  Item: FC<IRestProps>;
  Inner: FC<IRestProps>;
  Title: FC<IRestProps>;
  Body: FC<IRestProps>;
  Header: FC<IRestProps>;
}

export const Accordion: FC<IRestProps> & IComposition = ({
  children,
  ...restProps
}) => {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
};

Accordion.Container = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Accordion.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Inner = ({ children, ...restProps }) => {
  return <Inner {...restProps}>{children}</Inner>;
};

Accordion.Item = ({ children, ...restProps }) => {
  return <Item {...restProps}>{children}</Item>;
};

Accordion.Header = ({ children, ...restProps }) => {
  return <Header {...restProps}>{children}</Header>;
};

Accordion.Body = ({ children, ...restProps }) => {
  return <Body {...restProps}>{children}</Body>;
};
