import React, { useState } from 'react';
import { Popover, Button } from 'antd';
import { ChromePicker } from 'react-color';
import { PickerInput } from './styles';

interface ColorPickerProps {
  onChange?: Function;
}

const ColorPicker = ({ onChange }: ColorPickerProps) => {
  const [color, setColor] = useState('#FFFF');

  const handleChange = (newColor) => {
    setColor(newColor.hex);
    onChange(newColor.hex);
  };

  const Picker = (
    <div>
      <ChromePicker color={color} onChange={handleChange} />
    </div>
  );

  return (
    <Popover
      placement="top"
      content={Picker}
      style={{ border: '30px solid red' }}
      trigger="click"
    >
      <PickerInput color={color}>
        <div>
          <span>{color}</span>
        </div>
      </PickerInput>
    </Popover>
  );
};

export default ColorPicker;
