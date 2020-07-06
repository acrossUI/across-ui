import React, { useRef, useState, useEffect } from 'react';
import SideBar from './components/SideBar';
import SideToolBar from './components/SideToolBar';
import TopBar from './components/TopBar';
import FooterToolBar from './components/FooterToolbar';
import TreeView from './components/TreeView';
import Canvas from '../../components/canvas';

import { Container, Wrapper, Content } from './styles';

export default () => {
  const canvasRef = useRef(null);
  const [zoomRatio, setZoomRatio] = useState(1);

  useEffect(() => {
    // test add a retangle using forwardRef
    canvasRef.current.handlers.add('123', {
      type: 'DRAWING',
      key: 'triangle',
    });
  }, []);

  return (
    <Container>
      <TopBar />
      <Wrapper>
        <SideToolBar canvasRef={canvasRef} />
        <SideBar />
        <Content>
          <Canvas ref={canvasRef} />
          {/**
           *    <FooterToolBar
            preview={() => {}}
            onChangePreview={() => {}}
            zoomRatio={zoomRatio}
            canvasRef={canvasRef}
          />
           */}
        </Content>
        <SideBar />
      </Wrapper>
    </Container>
  );
};
