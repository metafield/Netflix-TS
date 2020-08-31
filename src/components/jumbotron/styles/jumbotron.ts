import styled from 'styled-components';

type Props = {
  direction: string;
};

export const Container = styled.div``;

export const Inner = styled.div<Props>`
  display: flex;
  align-items: center;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
`;
