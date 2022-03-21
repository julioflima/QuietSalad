import React from 'react';
import {Container} from './Styles';

interface IH4 {
  children: string;
}

function H4({children}: IH4) {
  return <Container>{children}</Container>;
}

export default H4;
