import { useNavigate } from 'react-router-dom';
const Controls = () => {
  const navigate = useNavigate();
  return <button onClick={() => navigate(-1)}>Go back 1 Page</button>;
};

export default Controls;
