import React from 'react';
import jumboData from '../fixtures/jumbo.json';
import { Jumbotron } from '../components';

type fixture = {
  id: number;
  title: string;
  subTitle: string;
  image: string;
  alt: string;
  direction: string;
};

export const JumbotronContainer = () => (
  <Jumbotron.Container>
    {jumboData.map((item: fixture) => (
      <Jumbotron key={item.id} direction={item.direction}>
        <Jumbotron.Pane>
          <Jumbotron.Title>{item.title}</Jumbotron.Title>
          <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
        </Jumbotron.Pane>
        <Jumbotron.Pane>
          <Jumbotron.Image src={item.image} alt={item.alt} />
        </Jumbotron.Pane>
      </Jumbotron>
    ))}
  </Jumbotron.Container>
);
