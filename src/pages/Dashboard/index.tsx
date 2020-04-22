import React from 'react';
import SideBar from '../../components/SideBar';
import TopBar from '../../components/TopBar';

import SideBarSection from './components/SideBarSection';

import { Container, Wrapper, Content } from './styles';

export default () => (
  <Container>
    <TopBar />
    <Wrapper>
      <SideBar></SideBar>
      <Content />
      <SideBar>
        <SideBarSection title="Layout">
          <div>
            <input type="number" />
            <input />
          </div>
          <div>
            <input />
            <input />
          </div>
        </SideBarSection>
      </SideBar>
    </Wrapper>
  </Container>
);
