import React from 'react';

import { Container } from './styles';

interface Props {
  title: string;
  value?: any;
}

export default ({ title, value }: Props) => (
  <Container>
    <span>{title}</span>
    <input {...{ value }} type="number" />
  </Container>
);
