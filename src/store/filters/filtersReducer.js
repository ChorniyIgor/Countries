import {
  CHANGE_COUNTRY_FILTER,
  CLEAR_FILTERS,
  SET_SEARCH_STRING,
} from "./filterActions";

const initialState = {
  region: "",
  search: "",
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_COUNTRY_FILTER:
      return { ...state, region: action.payload };

    case SET_SEARCH_STRING:
      return { ...state, search: action.payload };

    case CLEAR_FILTERS:
      return initialState;

    default:
      return state;
  }
};
