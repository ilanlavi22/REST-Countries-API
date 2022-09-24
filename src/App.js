import { useState, useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Controls from './components/Controls';
import HomePage from './Pages/HomePage';
import Country from './Pages/CountryPage';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const body = document.querySelector('body');
    body.className = theme;
  }, [theme]);

  return (
    <BrowserRouter>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Controls />
      <Routes>
        <Route path='/' element={<HomePage theme={theme} />} />
        <Route path='country/:id' element={<Country />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
