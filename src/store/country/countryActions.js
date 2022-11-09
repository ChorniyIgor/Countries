export const ADD_COUNTRY = "@@country/ADD_COUNTRY";
export const ADD_BORDER_COUNTRIES = "@@country/ADD_BORDER_COUNTRIES";
export const RESET_BORDER_COUNTRIES = "@@country/RESET_BORDER_COUNTRIES";
export const SET_LOADING = "@@country/SET_LOADING";
export const SET_ERROR = "@@country/SET_ERROR";
export const SET_LOADING_BORDER_COUNTRIES =
  "@@country/SET_LOADING_BORDER_COUNTRIES";
export const SET_ERROR_BORDER_COUNTRIES =
  "@@country/SET_ERROR_BORDER_COUNTRIES";

const addCountry = (countryInfo) => ({
  type: ADD_COUNTRY,
  payload: countryInfo,
});

const addBorderCountries = (borderCountriesInfo) => ({
  type: ADD_BORDER_COUNTRIES,
  payload: borderCountriesInfo,
});

const setLoading = {
  type: SET_LOADING,
};

const setLoadingBorderCountries = {
  type: SET_LOADING_BORDER_COUNTRIES,
};

export const resetBorderCountries = {
  type: RESET_BORDER_COUNTRIES,
};

const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const loadBorderCountries =
  (borderCountryCodes) =>
  (dispatch, _, { client, api }) => {
    if (borderCountryCodes === undefined) {
      dispatch(addBorderCountries([]));
    } else {
      dispatch(setLoadingBorderCountries);
      console.log("2222");
      client(api.filterByCode(borderCountryCodes))
        .then(({ data }) => {
          console.log(data.map((country) => country.name));
          dispatch(addBorderCountries(data.map((country) => country.name)));
        })
        .catch((error) => console.log(error));
    }
  };

export const loadCountry =
  (country) =>
  (dispatch, getState, { client, api }) => {
    const countryInfo = getState().country.countryInfo;

    if (countryInfo && countryInfo.name === country) {
      return;
    }

    dispatch(setLoading);
    client(api.searchByCountry(country))
      .then(({ data }) => {
        dispatch(addCountry(data[0]));
        console.log(data[0].borders);
        dispatch(loadBorderCountries(data[0].borders));
      })
      .catch((error) => dispatch(setError(error)));
  };
