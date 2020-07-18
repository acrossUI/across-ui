import React, { useRef, useState, useEffect } from 'react';
import SideBar from './components/SideBar';
import SideToolBar from './components/SideToolBar';
import TopBar from './components/TopBar';
import FooterToolBar from './components/FooterToolbar';
import TreeView from '../../components/TreeView';
import Canvas from '../../components/Canvas';
import Icon from '../../components/Icon';

import { Container, Wrapper, Content, PaperBoard } from './styles';

export default () => {
  const canvasRef = useRef(null);
  const paperBoardRef = useRef(null);
  const [zoomRatio, setZoomRatio] = useState(1);
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState();
  const [treeData, setTreeData] = useState([
    {
      title: 'MainPage',
      key: 99,
      icon: <Icon name="frame" />,
      children: [
        {
          title: 'Text',
          key: '0',
          icon: <Icon name="text" />,
        },
        {
          title: 'Box',
          key: '1',
          icon: <Icon name="box" />,
        },
        {
          title: 'Circle',
          key: '2',
          icon: <Icon name="circle" />,
        },
        {
          title: 'Line',
          key: '4',
          icon: <Icon name="line" />,
        },
      ],
    },
  ]);

  const handlers = {
    onAddItem: (obj) => {
      console.log(obj);
    },
    onSelect: (obj) => {
      setSelectedItem(obj);
    },
    /*
    onRemove: (obj) => {
      delete this.state.items[obj.id];
      this.setState(
        {
          items: this.state.items,
        },
        () => {
          this.handlers.onSelect(null);
        },
      );
    },
    */
  };

  console.log(canvasRef);

  return (
    <Container>
      <TopBar />
      <Wrapper>
        <SideToolBar canvasRef={canvasRef} />
        <TreeView treeData={treeData} expandedKeys={[99]} />
        <Content>
          <PaperBoard ref={paperBoardRef}>
            <Canvas
              ref={canvasRef}
              paperBoardRef={paperBoardRef}
              onAdd={handlers.onAddItem}
              onRemove={(e) => console.log('onRemove ==>', e)}
              onSelect={handlers.onSelect}
            />
          </PaperBoard>

          {/**
           *    <FooterToolBar
            preview={() => {}}
            onChangePreview={() => {}}
            zoomRatio={zoomRatio}
          />
           */}
        </Content>
        <SideBar />
      </Wrapper>
    </Container>
  );
};
