import { BsMoon, BsMoonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import WrapperHeader from '../styles/WrapperHeader';
import ThemeContext from './ThemeContext';
import { useContext } from 'react';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <WrapperHeader className={theme}>
      <div className='content-container'>
        <Link className='logo-text' to={'/'}>
          Where in the world?
        </Link>
        <div className='mode-switch' onClick={toggleTheme}>
          {theme === 'light' ? <BsMoon /> : <BsMoonFill />}
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </div>
      </div>
    </WrapperHeader>
  );
};

export default Header;
