import {
  ADD_BORDER_COUNTRIES,
  ADD_COUNTRY,
  RESET_BORDER_COUNTRIES,
  SET_ERROR,
  SET_LOADING,
  SET_LOADING_BORDER_COUNTRIES,
} from "./countryActions";

const initialState = {
  countryInfo: null,
  borderCountries: {
    list: [],
    isLoading: false,
    isError: null,
  },
  isLoading: false,
  isError: null,
};

export const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTRY:
      return {
        ...state,
        countryInfo: action.payload,
        isLoading: false,
        isError: null,
      };

    case ADD_BORDER_COUNTRIES: {
      return {
        ...state,
        borderCountries: {
          ...state.borderCountries,
          list: action.payload,
          isLoading: false,
          isError: null,
        },
      };
    }

    case SET_LOADING:
      return { ...state, countryInfo: null, isLoading: true };

    case SET_LOADING_BORDER_COUNTRIES:
      return {
        ...state,
        borderCountries: { ...state.borderCountries, isLoading: true },
      };

    case RESET_BORDER_COUNTRIES:
      return {
        ...state,
        borderCountries: { ...initialState.borderCountries },
      };

    case SET_ERROR:
      return { ...state, isLoading: false, isError: action.payload };

    default:
      return state;
  }
};
