import React from 'react';
import Icon from '@ant-design/icons';
import { Overlay } from './styles';
import * as genericIcon from './genericIcon';

interface IconProps {
  name?: string;
  size?: number;
  color?: string;
  onClick?: () => void;
  style?: any;
  mode?: 'default' | 'overlayed';
}

const CustomIcon = ({
  name,
  size,
  color,
  onClick,
  mode,
  ...rest
}: IconProps) => {
  return (
    <Overlay {...{ mode }} onClick={onClick}>
      <Icon
        component={genericIcon[name]}
        {...rest}
        style={{ margin: 'auto' }}
      />
    </Overlay>
  );
};

CustomIcon.defaultProps = {
  size: 18,
  color: 'red',
  mode: 'default',
};

export default CustomIcon;
