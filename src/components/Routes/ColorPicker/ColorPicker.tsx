import { useState } from 'react';
import LinkTo from '../../LinkTo/LinkTo';

//  const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

type Option = { label: string; color: string };

interface IProps {
  options: Option[];
  initialOptionPosition?: number;
}

const ColorPicker = ({ options, initialOptionPosition = 3 }: IProps) => {
  const [activeOptionIdx, setActiveOptionIdx] = useState(initialOptionPosition);
  const [activeColor, setActiveColor] = useState('');

  const setActiveIdx = (index: number) => setActiveOptionIdx(index);

  const makeOptionClassName = (index: number) => {
    const optionClasses = ['color-picker__btn'];

    if (index === activeOptionIdx) {
      optionClasses.push('color-picker__btn-active');
    }
    return optionClasses.join(' ');
  };

  const { label } = options[activeOptionIdx];

  return (
    <section className="container">
      <h2 className="title" style={{ color: activeColor }}>
        Color Picker
      </h2>
      <p>Выбран цвет: {label}</p>

      <div className="color-picker">
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            className={makeOptionClassName(index)}
            style={{ backgroundColor: color }}
            onClick={() => {
              setActiveColor(color);
              setActiveIdx(index);
            }}
          ></button>
        ))}
      </div>

      <LinkTo navTo={'/'} title={'move to Home'} />
    </section>
  );
};

export default ColorPicker;
