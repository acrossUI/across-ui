import React, { useRef, useState, useEffect } from 'react';
import SideBar from './components/SideBar';
import SideToolBar from './components/SideToolBar';
import TopBar from './components/TopBar';
import FooterToolBar from './components/FooterToolbar';
import TreeView from './components/TreeView';
import Canvas from '../../components/Canvas';

import { Container, Wrapper, Content, PaperBoard } from './styles';

export default () => {
  const canvasRef = useRef(null);
  const paperBoardRef = useRef(null);
  const [zoomRatio, setZoomRatio] = useState(1);
  const [items, setItems] = useState({});
  const [selectedItem, setSelectedItem] = useState();

  const handlers = {
    onAdd: (obj) => {
      if (obj.type === 'activeSelection') {
        const newItems = {};
        obj.forEachObject((obj) => {
          Object.assign(newItems, items, {
            [obj.id]: obj,
          });
        });
        /*
        setState(
          {
            items: newItems,
          },
          () => {
            handlers.onSelect(null);
          },
        );
        */
        setItems(newItems);
      } else {
        const newItems = Object.assign({}, items, {
          [obj.id]: obj,
        });
        setItems(newItems);
      }
    },
    onSelect: (obj) => {
      if (obj && !obj._objects) {
        setSelectedItem(obj);
        if (obj.id) {
          canvasRef.current.handlers.select(obj);
        }
      } else {
        setSelectedItem(canvasRef.current.mainRect);
      }
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

  useEffect(() => {
    // test add a retangle using forwardRef
    // test add a retangle using forwardRef

    canvasRef.current.handlers.add({
      key: 'default',
      type: 'textbox',
      icon: 'font',
      title: 'Text',
      option: {
        text: 'Input text',
        name: 'New text',
      },
    });
  }, []);

  return (
    <Container>
      <TopBar />
      <Wrapper>
        <SideToolBar canvasRef={canvasRef} />
        <TreeView />
        <Content>
          <PaperBoard ref={paperBoardRef}>
            <Canvas
              ref={canvasRef}
              paperBoardRef={paperBoardRef}
              onAdd={(e) => console.log('onAdd ==>', e)}
              onRemove={(e) => console.log('onRemove ==>', e)}
              onSelect={(e) => console.log('onSelect ==>', e)}
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
