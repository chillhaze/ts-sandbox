import { Component } from 'react';
import LinkTo from '../../LinkTo/LinkTo';

interface Props {
  initialValue: number;
  step: number;
}

interface State {
  value: number;
}

// Если нет пропсов и нужно передать только стейт - используем пустой объект
// export default class Counter extends Component<{}, State> {
export default class CounterClass extends Component<Props, State> {
  static defaultProps = { initialValue: 0, step: 1 };

  state = {
    value: this.props.initialValue,
  };

  increment = () => this.setState(({ value }) => ({ value: value + 1 }));
  decrement = () => this.setState(({ value }) => ({ value: value - 1 }));

  render() {
    const { value } = this.state;
    const { step } = this.props;
    return (
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2>Counter Class Component</h2>
        <span style={{ fontSize: 40, fontWeight: 'bold', marginBottom: 20 }}>
          {value}
        </span>

        <div>
          <button
            type="button"
            onClick={this.decrement}
            style={{
              padding: '5px 20px',
              fontWeight: 'bold',
              marginBottom: 20,
            }}
            className="btn"
          >
            Decrement on {step}
          </button>

          <button
            type="button"
            onClick={this.increment}
            style={{
              padding: '5px 20px',
              fontWeight: 'bold',
              marginBottom: 20,
            }}
            className="btn"
          >
            Increment on {step}
          </button>
        </div>

        <LinkTo navTo={'/'} title={'move to Home'} />
      </section>
    );
  }
}
