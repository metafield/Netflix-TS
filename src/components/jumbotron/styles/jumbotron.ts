import styled from 'styled-components';

type Props = {
  direction: string;
};

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: white;
  overflow: hidden;
`;

export const Container = styled.section`
  background-color: black;

  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 3rem;
    }
  }
`;

export const Inner = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction};
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Pane = styled.div`
  width: 50%;
  padding: 2em;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.1;
  margin-bottom: 0.5em;
`;

export const SubTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
