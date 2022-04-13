import { Link } from 'react-router-dom';

type Props = {
  navTo: string;
  title: string;
};

const LinkTo = ({ navTo, title }: Props) => {
  return (
    <nav style={{ marginTop: 50 }}>
      <Link to={navTo}>{title}</Link>
    </nav>
  );
};

export default LinkTo;
