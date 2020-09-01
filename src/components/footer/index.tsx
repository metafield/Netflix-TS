import React, { FC } from 'react';
import {
  Container,
  Row,
  Column,
  Link,
  Title,
  Text,
  Break,
} from './styles/footer';

interface IRestProps {
  [rest: string]: any;
}

// TODO: Figure out best practice for TS and compound components
// It may be better to use a more generic type and add this in if we need it later
// interface IRow {
//   [rest: string]: any;
// }

interface ICompoundFooter {
  Row: FC<IRestProps>;
  Column: FC<IRestProps>;
  Link: FC<IRestProps>;
  Title: FC<IRestProps>;
  Text: FC<IRestProps>;
  Break: FC<IRestProps>;
}

export const Footer: FC<IRestProps> & ICompoundFooter = ({
  children,
  ...restProps
}) => {
  return <Container {...restProps}>{children}</Container>;
};

Footer.Row = ({ children, ...restProps }) => {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = ({ children, ...restProps }) => {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Link = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Footer.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

Footer.Break = ({ children, ...restProps }) => {
  return <Break {...restProps} />;
};
