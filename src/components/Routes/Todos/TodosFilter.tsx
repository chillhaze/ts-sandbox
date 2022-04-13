interface IProps {
  value: string;
  onChange: (filter: string) => void;
}

const TodosFilter = ({ value, onChange }: IProps) => {
  return (
    <div className="todos-filter">
      <h2 className="title">Todo Filter</h2>

      <input
        type="text"
        value={value}
        //в onChange event - автоматическая типизация,
        //тип прописывать не надо
        onChange={(e) => onChange(e.target.value)}
        className="todos-filter__input"
      />
    </div>
  );
};

export default TodosFilter;
