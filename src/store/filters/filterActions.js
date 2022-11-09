export const CHANGE_COUNTRY_FILTER = "@@filters/CHANGE_COUNTRY_FILTER";
export const SET_SEARCH_STRING = "@@filters/SET_SEARCH_STRING";
export const CLEAR_FILTERS = "@@filters/CLEAR_FILTERS";

export const changeFilter = (value) => ({
  type: CHANGE_COUNTRY_FILTER,
  payload: value,
});

export const setSearchString = (value) => ({
  type: SET_SEARCH_STRING,
  payload: value,
});

export const clearFilters = {
  type: CLEAR_FILTERS,
};
