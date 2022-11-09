export const getAllCountries = (state) => state.countries.list;

export const getFiltratedCountries = (selectValue, searchString) => (state) => {
  let filtrated = [...state.countries.list];

  if (selectValue !== "") {
    filtrated = filtrated.filter((country) => {
      return country.region === selectValue.label;
    });
  }

  const search = searchString.toLowerCase().trim();

  if (search !== "") {
    filtrated = filtrated.filter((country) =>
      country.name.toLowerCase().includes(search)
    );
  }

  return filtrated;
};

export const getCountriesLoadStatus = (state) => ({
  isLoading: state.countries.isLoading,
  isError: state.countries.isError,
});
