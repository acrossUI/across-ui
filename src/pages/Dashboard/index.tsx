import React from 'react';
import SideBar from '../../components/SideBar';
import TopBar from '../../components/TopBar';
import Row from '../../components/common/Row';

import SideBarSection from './components/SideBarSection';
import SideBarInput from './components/SideBarInput';

import { Container, Wrapper, Content } from './styles';

export default () => (
  <Container>
    <TopBar />
    <Wrapper>
      <SideBar></SideBar>
      <Content />
      <SideBar>
        <SideBarSection title="Layout">
          <Row>
            <SideBarInput value={12} title="X" />
            <SideBarInput value={42} title="Y" />
          </Row>
          <Row>
            <SideBarInput value={132} title="Width" />
            <SideBarInput value={44} title="Height" />
          </Row>
        </SideBarSection>
        <SideBarSection title="Tipografy"></SideBarSection>
        <SideBarSection title="Fill"></SideBarSection>
      </SideBar>
    </Wrapper>
  </Container>
);
