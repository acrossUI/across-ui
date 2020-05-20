import React from 'react';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import TreeView from './components/TreeView';
import Canvas from '../../components/canvas/Canvas';
import { Container, Wrapper, Content } from './styles';

export default () => (
  <Container>
    <TopBar />
    <Wrapper>
      <SideBar />
      <Content>
        <Canvas />
      </Content>
      <SideBar />
    </Wrapper>
  </Container>
);
