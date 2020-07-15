import React, { useEffect } from 'react';
import { v4 } from 'uuid';
import { FaSquare, FaCircle } from 'react-icons/fa';
import { AiOutlineLine } from 'react-icons/ai';
import { Container } from './styles';
import { v4 as uuid } from 'uuid';

interface SideToolBarProps {
  canvasRef?: React.MutableRefObject<any>;
}

const SideToolBar: React.FC<SideToolBarProps> = ({ canvasRef }) => {
  const defaultIconProps = {
    color: '#8D8EA1',
    size: 24,
    style: {
      marginTop: 10,
    },
  };

  const MARKER = [
    {
      key: 'default',
      type: 'itext',
      icon: 'map-marker',
      title: 'Marker',
      option: {
        text: '\uf041', // map-marker
        fontFamily: 'FontAwesome',
        fontSize: 60,
        editable: false,
        name: 'New marker',
      },
    },
  ];

  const TEXT = [
    {
      key: 'default',
      type: 'textbox',
      icon: 'font',
      title: 'Text',
      option: {
        text: 'Input text',
        name: 'New text',
      },
    },
  ];

  const IMAGE = [
    {
      key: 'default',
      type: 'image',
      icon: 'picture-o',
      title: 'Image',
      option: {
        width: 40,
        height: 40,
        name: 'New image',
      },
    },
  ];

  const SHAPE = [
    // {
    //     key: 'line',
    //     icon: 'picture-o',
    //     title: 'Line',
    // },
    // {
    //     key: 'polygon',
    //     icon: 'picture-o',
    //     title: 'Polygon',
    // },
    {
      key: 'default-triangle',
      type: 'triangle',
      icon: 'picture-o',
      title: 'Triangle',
      option: {
        width: 30,
        height: 30,
        name: 'New shape',
      },
    },
    {
      key: 'default-rect',
      type: 'rect',
      icon: 'picture-o',
      title: 'Rectangle',
      option: {
        width: 40,
        height: 40,
        name: 'New shape',
      },
    },
    {
      key: 'default-circle',
      type: 'circle',
      icon: 'picture-o',
      title: 'Circle',
      option: {
        radius: 30,
        name: 'New shape',
      },
    },
  ];

  const handlers = {
    onClickItem: (item) => {
      const id = uuid();
      const option = Object.assign({}, item.option, { id });
      const newItem = Object.assign({}, item, { option });
      canvasRef.current.handlers.add(newItem);
    },
  };

  return (
    <Container>
      {SHAPE.map((item) => {
        return (
          <>
            <FaSquare
              {...defaultIconProps}
              onClick={(): void => handlers.onClickItem(item)}
            />
          </>
        );
      })}
    </Container>
  );
};

export default SideToolBar;
