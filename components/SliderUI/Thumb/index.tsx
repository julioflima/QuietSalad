import React from 'react';
import {Container, TextThumb} from './styles';

interface IThumb {
  index: number;
}

function Thumb({index}: IThumb) {
  return (
    <Container>
      <TextThumb>{index}</TextThumb>
    </Container>
  );
}

export default Thumb;
