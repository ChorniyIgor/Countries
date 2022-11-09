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
  return (
    <>
      <Controls />
      {isLoading && <Loader />}
      {isError && <Error>{isError.message}</Error>}
      {countries.length === 0 && <Error>There is no countries ... </Error>}

      {countries.length !== 0 && (
        <CountriesList>
          {countries.map((c) => {
            const countryInfo = {
              img: c.flags.png,
              name: c.name,
              info: [
                {
                  title: "Population",
                  description: c.population.toLocaleString(),
                },
                {
                  title: "Region",
                  description: c.region,
                },
                {
                  title: "Capital",
                  description: c.capital,
                },
              ],
            };

            return (
              <Card
                key={c.name}
                onClick={() => navigate(`/country/${c.name}`)}
                {...countryInfo}
              />
            );
          })}
        </CountriesList>
      )}
    </>
  );
};
