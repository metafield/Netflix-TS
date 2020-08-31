import React, { FC } from 'react';
import { Item, Inner, Container, Title, SubTitle } from './styles/jumbotron';

interface IComposition {
  Container: FC;
  Title: FC;
  SubTitle: FC;
}

interface IProps {
  direction: string;
}

export const Jumbotron: FC<IProps> & IComposition = ({
  children,
  direction = 'row',
  ...restProps
}) => {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
};

Jumbotron.Container = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = ({ children, ...restProps }) => {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
