import { createContext, useState, useEffect } from 'react';

const CountriesContext = createContext(null);
const api = 'https://restcountries.com/v3.1/all';

export const AllCountriesProvider = ({ children }) => {
  const [allCountries, setAllCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchCountries = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(api);
      const countries = await response.json();
      setIsLoading(false);
      setIsError(false);
      setAllCountries(countries);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  if (isLoading) {
    return '...loading';
  }
  if (isError) {
    return '...error';
  }

  return (
    <CountriesContext.Provider value={{ allCountries }}>
      {children}
    </CountriesContext.Provider>
  );
};
export default CountriesContext;
