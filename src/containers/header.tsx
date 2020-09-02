import React, { FC } from 'react';
import { Header } from '../components';
import { Routes } from '../enums/Routes';
import NetflixSVG from '../images/logos/netflix.svg';

export const HeaderContainer: FC = ({ children }) => {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={Routes.HOME} src={NetflixSVG} alt="Netflix" />
        <Header.ButtonLink to={Routes.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
};
