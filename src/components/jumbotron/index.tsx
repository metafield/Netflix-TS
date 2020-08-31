import React, { FC } from 'react';
import {
  Item,
  Inner,
  Container,
  Title,
  SubTitle,
  Image,
  Pane,
} from './styles/jumbotron';

interface IRestProps {
  [rest: string]: any;
}

interface IComposition {
  Container: FC<IRestProps>;
  Title: FC<IRestProps>;
  SubTitle: FC<IRestProps>;
  Image: FC<IRestProps>;
  Pane: FC<IRestProps>;
}

interface IProps {
  direction: string;
  [rest: string]: any;
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

Jumbotron.Image = ({ children, ...restProps }) => {
  return <Image {...restProps} />;
};

Jumbotron.Pane = ({ children, ...restProps }) => {
  return <Pane {...restProps}>{children}</Pane>;
};
