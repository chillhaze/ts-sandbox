import { useState } from 'react';
import LinkTo from '../../LinkTo/LinkTo';

interface Props {
  initialValue?: number;
  step?: 1;
}

const CounterFn = ({ initialValue = 0, step = 1 }: Props) => {
  const [value, setValue] = useState(initialValue);

  // const [value, setValue] = useState<number|null>(null);

  const increment = () => setValue((value) => value + 1);
  const decrement = () => setValue((value) => value - 1);

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h2>Counter Functional Component</h2>

      <span style={{ fontSize: 40, fontWeight: 'bold', marginBottom: 20 }}>
        {value}
      </span>

      <div>
        <button
          type="button"
          onClick={decrement}
          style={{
            padding: '5px 20px',
            fontWeight: 'bold',
            marginBottom: 20,
          }}
          className="btn"
        >
          - {step}
        </button>

        <button
          type="button"
          onClick={increment}
          style={{
            padding: '5px 20px',
            fontWeight: 'bold',
            marginBottom: 20,
          }}
          className="btn"
        >
          + {step}
        </button>
      </div>

      <LinkTo navTo={'/'} title={'move to Home'} />
    </section>
  );
};

export default CounterFn;
