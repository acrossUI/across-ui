import React from 'react';
import { FaSquare, FaCircle } from 'react-icons/fa';
import { AiOutlineLine } from 'react-icons/ai';
import { Container } from './styles';

const SideToolBar: React.FC = () => {
  const defaultIconProps = {
    color: '#8D8EA1',
    size: 24,
    style: {
      marginTop: 10,
    },
  };

  return (
    <Container>
      <FaSquare
        {...defaultIconProps}
        onClick={(): void => alert('create a retangle')}
      />

      <FaCircle
        {...defaultIconProps}
        onClick={(): void => alert('create a triangle')}
      />
      <AiOutlineLine
        {...defaultIconProps}
        onClick={(): void => alert('create a triangle')}
      />
    </Container>
  );
};

export default SideToolBar;
