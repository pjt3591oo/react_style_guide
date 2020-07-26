import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import NumberInput from '../hooks/NumberInput';

export default {
  title: 'Input',
  component: NumberInput,
  decorators: [withKnobs]
};

export const OnlyNumberInput1 = () => {
  const value1 = text('value1', '010123')
  const value2 = text('value2', '123asd')
  const value3 = text('value3', '123.123')
  const value4 = text('value4', '00.123')
  const value5 = text('value5', 'a0.123')
  const value6 = text('value6', '')

  return (
    <div>
      <div>
        <NumberInput value={value1} />
      </div>

      <div>
        <NumberInput value={value2} />
      </div>

      <div>
        <NumberInput value={value3} />
      </div>

      <div>
        <NumberInput value={value4} />
      </div>

      <div>
        <NumberInput value={value5} />
      </div>

      <div>
        <NumberInput value={value6} />
      </div>
    </div>
  )
}