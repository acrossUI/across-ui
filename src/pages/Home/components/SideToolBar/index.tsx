import React from 'react';
import { v4 } from 'uuid';
import { FaSquare, FaCircle } from 'react-icons/fa';
import { AiOutlineLine } from 'react-icons/ai';
import { Container } from './styles';

interface SideToolBarProps {
  canvasRef?: any;
}

const SideToolBar: React.FC<SideToolBarProps> = ({ canvasRef }) => {
  const defaultIconProps = {
    color: '#8D8EA1',
    size: 24,
    style: {
      marginTop: 10,
    },
  };

  const descriptors = [
    {
      description: '',
      name: 'retangle',
      type: 'shape',
      option: {
        height: 40,
        width: 40,
        name: 'New Shape',
        type: 'rect',
        fill: '#fff',
      },
    },
  ];

  /**
   *
   */

  const onAddItem = (item) => {
    const id = v4();
    const option = { ...item.option, id };

    canvasRef.current.handler.add(option);
  };

  return (
    <Container>
      {descriptors.map((item) => {
        return (
          <FaSquare
            {...defaultIconProps}
            onClick={(): void => onAddItem(item)}
          />
        );
      })}

      {/*
      <FaCircle
        {...defaultIconProps}
        onClick={(): void => alert('create a triangle')}
      />
      <AiOutlineLine
        {...defaultIconProps}
        onClick={(): void => alert('create a triangle')}
      />
*/}
    </Container>
  );
};

export default SideToolBar;
