import { BsMoon } from 'react-icons/bs';
import WrapperHeader from '../styles/WrapperHeader';
const Header = ({ toggleTheme }) => {
  return (
    <WrapperHeader>
      <div className='content-container'>
        <h1>Where in the world?</h1>
        <div className='mode-switch'>
          <button onClick={toggleTheme}>switch</button>
          <BsMoon />
          Dark Mode
        </div>
      </div>
    </WrapperHeader>
  );
};

export default Header;
