import React from 'react';
import {Container} from './Styles';

interface IH5 {
  children: string;
}

function H5({children}: IH5) {
  return <Container>{children}</Container>;
}

export default H5;
