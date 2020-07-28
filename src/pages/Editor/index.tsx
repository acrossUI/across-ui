import React, { useRef, useState, useEffect } from 'react';
import { forEach } from 'lodash';
import SideBar from './components/SideBar';
import SideToolBar from './components/SideToolBar';
import TopBar from './components/TopBar';
import FooterToolBar from './components/FooterToolbar';
import TreeView from '../../components/TreeView';
import CanvasEngine from '../../components/CanvasEngine';
import Icon from '../../components/Icon';

import { Container, Wrapper, Content, PaperBoard } from './styles';

export default () => {
  const canvasRef = useRef(null);
  const paperBoardRef = useRef(null);
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState();

  const handlers = {
    onAddItem: (obj) => {
      // receive added items from canvasEngine

      // set added item to active selection
      canvasRef.current.handlers.select(obj.id);

      setItems([...items, obj]);
    },
    onSelect: (obj) => {
      // receive selected items from canvasEngine
      setSelectedItem(obj);
      canvasRef.current.handlers.select(obj.id);
    },
    onChange: (obj) => {
      // receive changed fields of sidebar, width, height, angle etc
      // and set in canvas
      console.log(obj);
      obj.forEach((el) => {
        if (el.name[0] === 'angle') {
          canvasRef.current.handlers.set('angle', el.value);
        }
        if (el.name[0] === 'width') {
          canvasRef.current.handlers.set('width', el.value);
        }
      });
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

  return (
    <Container>
      <TopBar />
      <Wrapper>
        <SideToolBar canvasRef={canvasRef} />
        <TreeView
          canvasRef={canvasRef}
          onSelect={handlers.onSelect}
          items={items}
          selectedItem={selectedItem}
        />
        <Content>
          <PaperBoard ref={paperBoardRef}>
            <CanvasEngine
              ref={canvasRef}
              paperBoardRef={paperBoardRef}
              onAdd={handlers.onAddItem}
              // onRemove={(e) => console.log('onRemove ==>', e)}
              onModified={(e) => console.log('modified!!! -->', e)}
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
        <SideBar onChange={handlers.onChange} selectedItem={selectedItem} />
      </Wrapper>
    </Container>
  );
};
