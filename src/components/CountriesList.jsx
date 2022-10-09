import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from './ThemeContext';
import WrapperCountries from '../styles/WrapperCountries';

const CountriesList = ({ countries }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <WrapperCountries className={theme}>
      {countries &&
        countries
          .sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
          .map((country) => {
            const {
              name: { common },
              population,
              region,
              capital,
              cca2
            } = country;
            return (
              <div className='country-box' key={cca2}>
                <Link to={`country/${cca2}`.toLowerCase()}>
                  <img
                    src={`https://flagcdn.com/${cca2.toLowerCase()}.svg`}
                    alt=''
                  />
                  <div className='box-content'>
                    <h3>{common}</h3>
                    <p>
                      <span>Population:</span> {population.toLocaleString()}
                    </p>
                    <p>
                      <span>Region:</span> {region}
                    </p>
                    <p>
                      <span>Capital:</span> {capital}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
    </WrapperCountries>
  );
};

export default CountriesList;
