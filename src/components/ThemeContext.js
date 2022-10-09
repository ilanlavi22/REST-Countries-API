import { createContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const location = useLocation();
  const [theme, setTheme] = useState('light');
  const [isHome, setIsHome] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const body = document.querySelector('body');
    body.className = theme;
  }, [theme]);

  useEffect(() => {
    if (location.pathname === '/') {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [location.pathname]);

  return <ThemeContext.Provider value={{ theme, toggleTheme, isHome }}>{children}</ThemeContext.Provider>;
};
export default ThemeContext;
