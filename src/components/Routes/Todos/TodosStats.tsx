interface IProps {
  total: number;
  completed: number;
}

const TodosStats = ({ total, completed }: IProps) => {
  return (
    <div className="todos-stats">
      <h2 className="title">Todos Stats:</h2>

      <div className="todos-stats__container">
        <p className="todos-stats__item">
          <span className="todos-stats__value">{total}</span>
          <span className="todos-stats__label">Total</span>
        </p>

        <p className="todos-stats__item">
          <span className="todos-stats__value">{completed}</span>
          <span className="todos-stats__label">Completed</span>
        </p>
      </div>
    </div>
  );
};

export default TodosStats;
