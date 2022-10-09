import { useParams } from 'react-router';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import CountriesContext from '../components/AllCountriesContext';
import WrapperCountry from '../styles/WrapperCountry';

const Country = () => {
  const data = useContext(CountriesContext);
  console.log(data);
  const allCountriesData = data.allCountries;

  const { id } = useParams();
  const api = `https://restcountries.com/v3.1/alpha/${id}`;

  const [country, setCountry] = useState();

  const fetchCountry = async () => {
    try {
      const response = await fetch(api);
      const country = await response.json();
      setCountry(country[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCountry();
  }, [id]);

  return (
    <>
      {country && (
        <WrapperCountry>
          <img
            src={`https://flagcdn.com/${country.cca2.toLowerCase()}.svg`}
            alt={country.name.common}
          />

          <div className='country-info'>
            <h2>{country.name.common}</h2>
            <div className='info-container'>
              <div>
                <p>
                  <span>Native Name:</span>{' '}
                  {country.name.nativeName?.nld?.common}
                </p>
                <p>
                  <span>Population:</span> {country.population.toLocaleString()}
                </p>
                <p>
                  <span>Region:</span> {country.region}
                </p>
                <p>
                  <span>Sub Region:</span> {country.subregion}
                </p>
                <p>
                  <span>Capital:</span> {country.capital}
                </p>
              </div>

              <div>
                <p>
                  <span>Top Level Domain:</span> {country.tld}
                </p>
                <p>
                  <span>Currencies:</span>{' '}
                  {country.currencies &&
                    Object.entries(country.currencies).map(
                      ([key, value], index) => {
                        return <i key={index}> {key}</i>;
                      }
                    )}
                </p>
                <p>
                  <span>Languages:</span>{' '}
                  {country.languages &&
                    Object.values(country.languages).reverse().join(', ')}
                </p>
              </div>
            </div>

            <div className='country-borders'>
              <h5>Border Countries:</h5>
              <ul>
                {country.borders?.slice(0, 5).map((border, index) => {
                  const countryId = allCountriesData
                    .find((c) => c.cca3 === border)
                    .cca2.toLowerCase();
                  const countryName = allCountriesData.find(
                    (c) => c.cca3 === border
                  ).name.common;
                  return (
                    <li key={index}>
                      <Link to={`/country/${countryId}`}>{countryName}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </WrapperCountry>
      )}
    </>
  );
};

export default Country;
