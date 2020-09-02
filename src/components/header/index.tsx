import React, { FC } from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import { Background, Container, Logo, ButtonLink } from './styles/header';

interface IRestProps {
  [rest: string]: any;
}

interface IHeader extends IRestProps {
  bg: boolean;
}

interface ILogoProps extends IRestProps {
  to: string;
}

interface ICompoundHeader {
  Frame: FC<IRestProps>;
  Logo: FC<ILogoProps>;
  ButtonLink: FC<IRestProps>;
}

export const Header: FC<IRestProps> & ICompoundHeader = ({
  bg = true,
  children,
  ...restProps
}) => {
  return bg ? (
    <Background {...restProps}>{children}</Background>
  ) : (
    <>{children}</>
  );
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...restProps} />
    </ReachRouterLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return (
    <ButtonLink to="/" {...restProps}>
      {children}
    </ButtonLink>
  );
};
