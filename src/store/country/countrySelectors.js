export const getCountryInformation = (state) => state.country.countryInfo;

export const getCountryLoadingInfo = (state) => ({
  isLoading: state.country.isLoading,
  isError: state.country.isError,
});

export const getBorderCountries = (state) => state.country.borderCountries.list;

export const getBorderCountryLoadingInfo = (state) => ({
  isLoading: state.country.borderCountries.isLoading,
  isError: state.country.borderCountries.isError,
});
