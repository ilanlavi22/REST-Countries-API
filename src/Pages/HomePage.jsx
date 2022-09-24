import { useState, useEffect } from 'react';
import CountriesList from '../components/CountriesList';

const api = 'https://restcountries.com/v3.1/all';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(api);
      const countries = await response.json();
      setIsLoading(false);
      setCountries(countries);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  if (isError) {
    return '...error';
  }
  if (isLoading) {
    return '...loading';
  }

  return (
    <main>
      <CountriesList countries={countries} />
    </main>
  );
};

export default HomePage;
