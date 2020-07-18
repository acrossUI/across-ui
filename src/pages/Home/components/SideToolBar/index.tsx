import React, { useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Icon from '../../../../components/Icon';
import { Container } from './styles';

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
    </Container>
  );
};

export default SideToolBar;
