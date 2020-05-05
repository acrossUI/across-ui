import React from 'react';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import TreeView from './components/TreeView';

import SideBarSection from './components/SideBarSection';
import SideBarSubSection from './components/SideBarSubSection';
import Layout from './components/Layout';

import SideBarInput from './components/SideBarInput';

import { Container, Wrapper, Content } from './styles';

export default () => (
  <Container>
    <TopBar />
    <Wrapper>
      <SideBar>
        <TreeView />
      </SideBar>
      <Content />
      <SideBar>
        <SideBarSection title="Layout">
          <Layout />
        </SideBarSection>
        <SideBarSection title="Tipografy" />
        <SideBarSection title="Fill" />
      </SideBar>
    </Wrapper>
  </Container>
);
