export const CHANGE_FILTER_VALUE = "@@filters/CHANGE_FILTER_VALUE";
export const SET_SEARCH_STRING = "@@filters/SET_SEARCH_STRING";

export const changeFilter = (value) => ({
  type: CHANGE_FILTER_VALUE,
  payload: value,
});

export const setSearchString = (value) => ({
  type: SET_SEARCH_STRING,
  payload: value,
});
