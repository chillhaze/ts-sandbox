import { ChangeEvent, FormEvent, useState } from 'react';
import LinkTo from '../../LinkTo/LinkTo';

interface IProps {
  onSubmit: (cred: { email: string; password: string }) => void;
}

const Form = ({ onSubmit }: IProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        console.warn(`Unknown field name - ${name}`);
        break;
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <section className="container">
      <h2 className="title">FORM</h2>

      <form className="form" onSubmit={handleSubmit}>
        <label className="form__label">
          Email
          <input
            type="mail"
            name="email"
            value={email}
            onChange={onChange}
            className="form__input"
          />
        </label>
        <label className="form__label">
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            className="form__input"
          />
        </label>

        <button type="submit" className="btn">
          Submit
        </button>
      </form>

      <LinkTo navTo={'/'} title={'move to Home'} />
    </section>
  );
};

export default Form;
