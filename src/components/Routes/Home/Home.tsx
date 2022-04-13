import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>

      <nav>
        <ul>
          <li>
            <Link to="/counter-class">move to Counter Class</Link>
          </li>
          <li>
            <Link to="/counter-fn">move to Counter Function</Link>
          </li>
          <li>
            <Link to="/color-picker">move to Color-picker</Link>
          </li>
          <li>
            <Link to="/form">move to Form</Link>
          </li>
          <li>
            <Link to="/todos">move to Todos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
