import { useContext } from 'react';

const CountriesContext = () => {
  const userName = useContext('ilan');
  return userName;
};

export default CountriesContext;
