export const getAllCountries = (state) => state.countries.list;

export const getFiltratedCountries =
  ({ search, region }) =>
  (state) => {
    let filtrated = [...state.countries.list];

    if (region !== "") {
      filtrated = filtrated.filter((country) => {
        return country.region === region.label;
      });
    }

    const searchStr = search.toLowerCase().trim();

    if (searchStr !== "") {
      filtrated = filtrated.filter((country) =>
        country.name.toLowerCase().includes(searchStr)
      );
    }

    return filtrated;
  };

export const getCountriesLoadStatus = (state) => ({
  isLoading: state.countries.isLoading,
  isError: state.countries.isError,
});

export const getCountryInfo = (state) => state.countries.country;
