import React from 'react';
import Icon from '@ant-design/icons';

import * as genericIcon from './genericIcon';

interface IconProps {
  name?: string;
  size?: number;
  color?: string;
  onClick?: () => void;
  style?: any;
}

const CustomIcon = ({ name, size, color, onClick, ...rest }: IconProps) => {
  return <Icon component={genericIcon[name]} {...rest} onClick={onClick} />;
};

CustomIcon.defaultProps = {
  size: 18,
  color: 'red',
};

export default CustomIcon;
