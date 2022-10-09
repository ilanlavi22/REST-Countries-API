import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext';
import { AllCountriesProvider } from './components/AllCountriesContext';
import Header from './components/Header';
import Controls from './components/Controls';
import HomePage from './Pages/HomePage';
import Country from './Pages/CountryPage';

const App = () => {
  const [countries, setCountries] = useState([]);

  return (
    <BrowserRouter>
      <ThemeProvider>
        <AllCountriesProvider>
          <Header />
          <Controls countries={countries} setCountries={setCountries} />
          <Routes>
            <Route
              path='/'
              element={
                <HomePage countries={countries} setCountries={setCountries} />
              }
            />
            <Route path='country/:id' element={<Country />} />
          </Routes>
        </AllCountriesProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
