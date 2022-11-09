import { useNavigate } from "react-router-dom";

import CountriesList from "../components/CountriesList/CountriesList";
import Card from "../components/Card/Card";
import Controls from "../components/Controls/Controls";
import { useSelector } from "react-redux";
import {
  getAllCountries,
  getCountriesLoadStatus,
  getFiltratedCountries,
} from "../store/countries/countriesSelectors";
import Loader from "../UI/Loader/Loader";
import {
  getSearchString,
  getSelectValue,
} from "../store/filters/filterSelectors";

export const HomePage = () => {
  const navigate = useNavigate();

  const { isLoading, isError } = useSelector(getCountriesLoadStatus);
  const selectValue = useSelector(getSelectValue);
  const searchString = useSelector(getSearchString);

  const countries = useSelector(
    getFiltratedCountries(selectValue, searchString)
  );
  return (
    <>
      <Controls />
      {isLoading && <Loader />}
      {isError && <p>{isError.message}</p>}
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
