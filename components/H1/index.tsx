import React from 'react';
import {Container} from './Styles';

interface IH1 {
  children: string;
}

function H1({children}: IH1) {
  return <Container>{children}</Container>;
}

export default H1;
