import React, { useRef, useState } from 'react';
import SideBar from './components/SideBar';
import SideToolBar from './components/SideToolBar';
import TopBar from './components/TopBar';
import FooterToolBar from './components/FooterToolbar';
import TreeView from './components/TreeView';
import Canvas from '../../components/canvas/Canvas';

import { Container, Wrapper, Content } from './styles';

export default () => {
  const canvasRef = useRef();
  const [zoomRatio, setZoomRatio] = useState(1);

  return (
    <Container>
      <TopBar />
      <Wrapper>
        <SideToolBar canvasRef={canvasRef} />
        <SideBar />
        <Content>
          <Canvas ref={canvasRef} onZoom={(zoom) => console.log(zoom)} />
          <FooterToolBar
            preview={() => {}}
            onChangePreview={() => {}}
            zoomRatio={zoomRatio}
            canvasRef={canvasRef}
          />
        </Content>
        <SideBar />
      </Wrapper>
    </Container>
  );
};
