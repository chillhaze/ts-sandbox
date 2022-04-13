import classNames from 'classnames';
import ITodo from '../../../interfaces/Todo.interface';

interface IProps {
  todos: ITodo[];
  onDeleteTodo: (todoId: string) => void;
  onToggleCompleted: (todoId: string) => void;
}

const TodosList = ({ todos, onDeleteTodo, onToggleCompleted }: IProps) => {
  return (
    <div>
      <h2 className="title">Todo List</h2>

      <ul className="todo-list">
        {todos.map(({ id, text, completed }) => (
          <li
            key={id}
            className={classNames('todo-list__item', {
              'todo-list__item--completed': completed,
            })}
          >
            <input
              type="checkbox"
              checked={completed}
              onChange={() => onToggleCompleted(id)}
              className="todo-list__checkbox"
            />

            <p className="todo-list__text">{text}</p>

            <button
              type="button"
              className="btn"
              onClick={() => onDeleteTodo(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodosList;
