import React, { useState } from 'react';
import { Popover, Button } from 'antd';
import { ChromePicker } from 'react-color';
import { PickerInput } from './styles';

const ColorPicker: React.FC = () => {
  const [color, setColor] = useState({ hex: '#FFFF' });

  const Picker = (
    <div>
      <ChromePicker color={color} onChange={(newColor) => setColor(newColor)} />
    </div>
  );

  return (
    <Popover
      placement="top"
      content={Picker}
      style={{ border: '30px solid red' }}
      trigger="click"
    >
      <PickerInput color={color.hex}>
        <div>
          <span>{color.hex}</span>
        </div>
      </PickerInput>
    </Popover>
  );
};

export default ColorPicker;
