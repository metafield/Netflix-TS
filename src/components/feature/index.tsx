import React, { FC } from 'react';
import { Container, Title, SubTitle } from './styles/feature';

interface IRestProps {
  [rest: string]: any;
}

interface ICompoundFeature {
  Title: FC<IRestProps>;
  SubTitle: FC<IRestProps>;
}

export const Feature: FC<IRestProps> & ICompoundFeature = ({
  children,
  ...restProps
}) => {
  return <Container {...restProps}>{children}</Container>;
};

Feature.Title = function FeatureTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
