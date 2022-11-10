import { useNavigate } from "react-router-dom";

import CountriesList from "../components/CountriesList/CountriesList";
import Card from "../components/Card/Card";
import Controls from "../components/Controls/Controls";
import { useSelector } from "react-redux";
import {
  getCountriesLoadStatus,
  getFiltratedCountries,
} from "../store/countries/countriesSelectors";
import Loader from "../UI/Loader/Loader";
import Error from "../UI/Error/Error";
import { getSearchString, getRegion } from "../store/filters/filterSelectors";

export const HomePage = () => {
  const navigate = useNavigate();

  const { isLoading, isError } = useSelector(getCountriesLoadStatus);
  const region = useSelector(getRegion);
  const search = useSelector(getSearchString);

  const countries = useSelector(
    getFiltratedCountries({
      search,
      region,
    })
  );

  const generateInfo = (country) => [
    {
      title: "Population",
      description: country.population.toLocaleString(),
    },
    {
      title: "Region",
      description: country.region,
    },
    {
      title: "Capital",
      description: country.capital,
    },
  ];

  return (
    <>
      <Controls />
      {isLoading ? <Loader /> : null}
      {isError ? <Error>{isError.message}</Error> : null}
      {!isLoading && countries.length === 0 ? (
        <Error>There is no countries ... </Error>
      ) : null}

      {countries.length !== 0 && (
        <CountriesList>
          {countries.map((country) => {
            const countryInfo = {
              img: country.flags.png,
              name: country.name,
              info: generateInfo(country),
            };

            return (
              <Card
                key={country.name}
                onClick={() => navigate(`/Countries/country/${country.name}`)}
                {...countryInfo}
              />
            );
          })}
        </CountriesList>
      )}
    </>
  );
};
