import React, { FC } from 'react';
import { Item, Inner, Container } from './styles/jumbotron';

interface IComposition {
  Container: FC;
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
