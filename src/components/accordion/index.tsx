import addIcon from '../../images/icons/add.png';
import closeIcon from '../../images/icons/close-slim.png';

import React, { FC, useState, useContext, createContext } from 'react';
import {
  Inner,
  Item,
  Container,
  Title,
  Header,
  Body,
  Frame,
} from './styles/accordion';

const ToggleContext = createContext<any>(null);

interface IRestProps {
  [rest: string]: any;
}

interface IComposition {
  Frame: FC<IRestProps>;
  Item: FC<IRestProps>;
  Title: FC<IRestProps>;
  Body: FC<IRestProps>;
  Header: FC<IRestProps>;
}

export const Accordion: FC<IRestProps> & IComposition = ({
  children,
  ...restProps
}) => {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
      {children}
      {toggleShow ? (
        <img src={addIcon} alt="Close" />
      ) : (
        <img src={closeIcon} alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};
