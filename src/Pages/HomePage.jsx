import { useEffect, useContext } from 'react';
import CountriesContext from '../components/AllCountriesContext';
import CountriesList from '../components/CountriesList';

const HomePage = ({ countries, setCountries }) => {
  const data = useContext(CountriesContext);
  const allCountriesData = data.allCountries;

  useEffect(() => {
    setCountries([...allCountriesData]);
  }, []);

  return (
    <main>
      <CountriesList countries={countries} setCountries={setCountries} />
    </main>
  );
};

export default HomePage;
