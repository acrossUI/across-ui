import React, { useRef, useState, useEffect } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import SideBar from './components/SideBar';
import SideToolBar from './components/SideToolBar';
import Header from './components/Header';
import FooterToolBar from './components/FooterToolbar';
import TreeView from '../../components/TreeView';
import CanvasEngine from '../../components/CanvasEngine';
import Icon from '../../components/Icon';
import BlurScreen from '../../components/BlurScreen';
import app from '../../config/firebase';

import { Container, Wrapper, Content, PaperBoard } from './styles';

const Editor = (props) => {
  const canvasRef = useRef(null);
  const paperBoardRef = useRef(null);
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState();
  const history = useHistory() as any;
  const db = app.firestore();

  const handlers = {
    onAddItem: (obj) => {
      // receive added items from canvasEngine

      // set added item to active selection
      canvasRef.current.handlers.select(obj.id);

      setItems([...items, obj]);
    },
    onSelect: (obj) => {
      if (obj) {
        // receive selected items from canvasEngine
        setSelectedItem(obj);
        canvasRef.current.handlers.select(obj.id);
      }
    },
    onChange: (changedFields, allFields): any => {
      // receive changed fields of sidebar, width, height, angle etc
      // and set in canvas
      changedFields.forEach((changed) => {
        if (changed.name[0] === 'width' || changed.name[0] === 'height') {
          return canvasRef.current.handlers.scaleToResize(
            allFields.find((field: any) => field.name[0] === 'width').value,
            allFields.find((field: any) => field.name[0] === 'height').value,
          );
        }

        return canvasRef.current.handlers.set(changed.name[0], changed.value);
      });
    },
    onModified: (obj) => {
      db.collection('projects')
        .doc(history.location.state.projectDocID)
        .update({ reportData: canvasRef.current.handlers.saveToJSON() });

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
    },
  };

  useEffect(() => {
    console.log(history.location.state.projectDocID);
    db.collection('projects')
      .doc(history.location.state.projectDocID)
      .get()
      .then((doc) => {
        console.log(doc.data().reportData);
        canvasRef.current.handlers.loadJSON(doc.data().reportData);
      });
  }, []);

  return (
    <Container>
      <BlurScreen />
      <Header />
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
              onModified={(obj) => handlers.onModified(obj)}
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

export default withRouter(Editor);
