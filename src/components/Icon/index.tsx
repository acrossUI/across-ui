import React from 'react';

import { CSSProperties } from 'styled-components';
import { Wrapper } from './styles';

interface IconProps {
  name: string;
  color?: string;
  type?: 'solid' | 'regular' | 'light' | 'duotone' | 'brands';
  size?: number;
  style?: CSSProperties;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({
  name,
  color,
  type,
  size,
  style,
  onClick,
}) => {
  const typeDescriptor = {
    solid: 'fas', // free
    regular: 'far', // pro
    light: 'fal', // pro
    duotone: 'fad', // pro
    brands: 'fab', // free
  };

  return (
    <Wrapper size={size} color={color} onClick={onClick}>
      <i style={style} className={`${typeDescriptor[type]} fa-${name}`} />
    </Wrapper>
  );
};

Icon.defaultProps = {
  color: 'white',
  size: 16,
  type: 'regular',
};

export default Icon;
