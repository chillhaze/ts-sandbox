import { ChangeEvent, FormEvent, useState } from 'react';

interface IProps {
  onSubmit: (message: string) => void;
}

const TodosEditor = ({ onSubmit }: IProps) => {
  const [message, setMessage] = useState<string>('');
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(message);
    setMessage('');
  };

  return (
    <div>
      <h2 className="title">Todos Editor</h2>
      <form className="todo-editor__form" onSubmit={handleSubmit}>
        <textarea
          className="todo-editor__textarea"
          value={message}
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="btn">
          Save
        </button>
      </form>
    </div>
  );
};

export default TodosEditor;
