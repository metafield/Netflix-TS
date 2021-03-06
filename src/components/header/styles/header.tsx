import styled from 'styled-components';
import { Link as ReachRouterLink } from 'react-router-dom';
import defaultBG from '../../../images/default-bg.jpg';

type BackgroundProps = { src?: string; dontShowOnSmallViewPort?: boolean };
export const Background = styled.section<BackgroundProps>`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) => (src ? src : defaultBG)}) top left / cover
    no-repeat;

  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) =>
      dontShowOnSmallViewPort && `background: none;`}
  }
`;

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

type LinkProps = { active?: boolean };
export const Link = styled.p<LinkProps>`
  color: #fff;
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({ active }) => (active ? '700' : 'normal')};
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

export const ButtonLink = styled(ReachRouterLink)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    background: #f40612;
  }
`;

export const Logo = styled.img`
  height: 32px;
  width: 108px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;
