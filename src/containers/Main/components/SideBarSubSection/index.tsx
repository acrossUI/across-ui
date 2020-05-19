import React from 'react';
import { Container } from './styles';

interface SideBarSubSection {
  children?: React.ReactNode;
  title: string;
}

export default ({ children, title }: SideBarSubSection) => (
  <Container>
    <span>{title}</span>
    {children}
  </Container>
);
