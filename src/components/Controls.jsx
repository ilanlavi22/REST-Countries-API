import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import WrapperControls from '../styles/WrapperControls';
import ThemeContext from './ThemeContext';
import CountriesContext from './AllCountriesContext';
import { IoIosArrowRoundBack } from 'react-icons/io';

const Controls = ({ countries, setCountries }) => {
  const data = useContext(CountriesContext);
  const allCountriesData = data.allCountries;
  const { isHome } = useContext(ThemeContext);
  const [regions, setRegions] = useState([]);

  const getAllRegions = (e) => {
    const allRegions = allCountriesData.map((country) => country.region);
    const filterRegions = [...new Set(allRegions)];
    setRegions(filterRegions);
  };

  const handleRegion = (e) => {
    if (e.target.value === 'all') {
      setCountries(allCountriesData);
    } else {
      const selectedRegion = allCountriesData.filter(
        (selected) => selected.region === e.target.value
      );
      setCountries(selectedRegion);
    }
  };
  const handleSearch = (e) => {
    console.log(allCountriesData);
    const searchCountry = allCountriesData.filter((searched) =>
      searched.name.common.toLowerCase().includes(e.target.value)
    );
    setCountries(searchCountry);
  };

  useEffect(() => {
    getAllRegions();
  }, []);

  const navigate = useNavigate();

  if (!regions) {
    return '...error';
  }
  return (
    <WrapperControls>
      {!isHome && (
        <button className='back-nav' onClick={() => navigate(-1)}>
          <IoIosArrowRoundBack></IoIosArrowRoundBack>Back
        </button>
      )}

      {isHome && (
        <div>
          <select onChange={handleRegion}>
            <option value='all'>All Regions</option>
            {regions &&
              regions.map((region, index) => {
                return (
                  <option key={index} value={region}>
                    {region}
                  </option>
                );
              })}
          </select>
        </div>
      )}

      {isHome && (
        <div>
          <input
            type='text'
            placeholder='Search for a country ...'
            onChange={handleSearch}
          />
        </div>
      )}
    </WrapperControls>
  );
};

export default Controls;
