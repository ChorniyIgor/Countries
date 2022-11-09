import { CHANGE_FILTER_VALUE, SET_SEARCH_STRING } from "./filterActions";

const initialState = {
  region: "",
  search: "",
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER_VALUE:
      return { ...state, region: action.payload };

    case SET_SEARCH_STRING:
      return { ...state, search: action.payload };

    default:
      return state;
  }
};
