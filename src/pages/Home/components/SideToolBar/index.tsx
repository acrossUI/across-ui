import React, { useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { Button, Input } from 'antd';
import { SaveOutlined, FolderOpenOutlined } from '@ant-design/icons';
import Icon from '../../../../components/Icon';
import { Container, ButtonsWrapper } from './styles';

interface SideToolBarProps {
  canvasRef?: React.MutableRefObject<any>;
}

const SideToolBar = ({ canvasRef }: SideToolBarProps) => {
  const IMAGE = [];

  const SHAPE = [
    {
      key: 'line',
      icon: 'line',
      title: 'Line',
    },
    // {
    //     key: 'polygon',
    //     icon: 'picture-o',
    //     title: 'Polygon',
    // },

    {
      key: 'default',
      type: 'textbox',
      icon: 'text',
      title: 'Text',
      option: {
        text: 'Input text',
        name: 'New text',
      },
    },

    /* {
      key: 'default-triangle',
      type: 'triangle',
      icon: 'picture-o',
      title: 'Triangle',
      option: {
        width: 30,
        height: 30,
        name: 'New shape',
      },
    }, */
    {
      key: 'default-box',
      type: 'rect',
      icon: 'box',
      title: 'Box',
      option: {
        width: 40,
        height: 40,
        name: 'New shape',
      },
    },
    {
      key: 'default-circle',
      type: 'circle',
      icon: 'circle',
      title: 'Circle',
      option: {
        radius: 30,
        name: 'New shape',
      },
    },
  ];

  const handlers = {
    onClickItem: async (item) => {
      const id = uuid();
      const option = Object.assign({}, item.option, { id });
      const newItem = Object.assign({}, item, { option });
      canvasRef.current.handlers.add(newItem);
    },
    onJsonDownload: (json) => {
      const element = document.createElement('a');
      var data = new Blob([json], { type: 'text/plain' });
      element.href = URL.createObjectURL(data);
      element.download = 'canvas.json';
      document.body.appendChild(element);
      element.click();
    },
    onJsonUpload: () => {
      // create a input for file upload and click on it!
      const element = document.createElement('input');
      element.type = 'file';
      element.accept = '.json';
      // listen when file is uploaded and take a action
      element.click();
      // create a new instance of a file reader
      const reader = new FileReader();
      reader.onload = (e) => {
        canvasRef.current.handlers.loadJSON(JSON.parse(e.target.result as any));
      };
      element.onchange = (e: any) => {
        reader.readAsText(e.target.files[0]);
      };
    },
  };

  return (
    <Container>
      {SHAPE.map((el) => (
        <Icon
          name={el.icon}
          style={{ marginTop: 10 }}
          onClick={() => handlers.onClickItem(el)}
        />
      ))}
      <ButtonsWrapper>
        <Button
          type="dashed"
          onClick={() => handlers.onJsonUpload()}
          icon={<FolderOpenOutlined />}
        />
        <Button
          type="dashed"
          onClick={() =>
            handlers.onJsonDownload(canvasRef.current.handlers.saveToJSON())
          }
          icon={<SaveOutlined />}
        />
      </ButtonsWrapper>
    </Container>
  );
};

export default SideToolBar;
