import { useEffect, useMemo, useState } from 'react';
import LinkTo from '../../LinkTo/LinkTo';
import TodosFilter from './TodosFilter';
import TodosList from './TodosList';
import TodosEditor from './TodosEditor';
import shortid from 'shortid';
import ITodo from '../../../interfaces/Todo.interface';
import TodosStats from './TodosStats';
// import { initialTodos } from '../../../data/todos';

const getInitialTodosState = (): ITodo[] => {
  const savedTodos = localStorage.getItem('todos');

  return savedTodos ? JSON.parse(savedTodos) : [];
};

const Todos = () => {
  const [todos, setTodos] = useState<ITodo[]>(getInitialTodosState);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const todo: ITodo = {
      id: shortid.generate(),
      text,
      completed: false,
    };
    setTodos((todos) => [todo, ...todos]);
  };

  const deleteTodo = (todoId: string) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== todoId));
  };

  const toggleCompleted = (todoId: string) => {
    console.log('toggleCompleted');

    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const changeFilter = (filter: string) => setFilter(filter);

  const visibleTodos = useMemo(() => {
    console.log('getVisibleTodos');

    const normalizedFilter = filter.toLocaleLowerCase();
    return todos.filter((todo) =>
      todo.text.toLocaleLowerCase().includes(normalizedFilter)
    );
  }, [filter, todos]);

  const completedTodosCount = useMemo(() => {
    console.log('calculateCompletedTodos');

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  }, [todos]);

  return (
    <section className="container">
      <TodosEditor onSubmit={addTodo} />

      <div className="todos-info">
        <TodosFilter value={filter} onChange={changeFilter} />
        <TodosStats total={todos.length} completed={completedTodosCount} />
      </div>

      <TodosList
        todos={visibleTodos}
        onDeleteTodo={deleteTodo}
        onToggleCompleted={toggleCompleted}
      />

      <LinkTo navTo={'/'} title={'move to Home'} />
    </section>
  );
};

export default Todos;
