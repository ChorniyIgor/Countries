import { ADD_COUNTRIES, SET_ERROR, SET_LOADING } from "./countriesActions";

const initialState = {
  list: [],
  isLoading: false,
  isError: null,
};

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTRIES:
      return {
        ...state,
        isLoading: false,
        isError: null,
        list: action.payload,
      };

    case SET_LOADING:
      return { ...state, isLoading: true };

    case SET_ERROR:
      return { ...state, isError: action.payload, isLoading: false };

    default:
      return state;
  }
};
