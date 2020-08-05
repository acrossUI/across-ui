import React, { useState, useEffect } from 'react';
import { Popover } from 'antd';
import { ChromePicker } from 'react-color';
import { PickerInput } from './styles';

interface ColorPickerProps {
  onChange?: Function;
  value?: any;
}

const ColorPicker = ({ onChange, value }: ColorPickerProps) => {
  const [color, setColor] = useState('#FFFF');

  const handleChange = (newColor) => {
    setColor(newColor.hex);
    onChange(newColor.hex);
  };

  useEffect(() => {
    // re-render a new color if value updates
    if (value && value !== 'transparent') setColor(value);
  }, [value]);

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
