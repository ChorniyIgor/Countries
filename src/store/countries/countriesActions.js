export const ADD_COUNTRIES = "@@countries/ADD_COUNTRIES";
export const SET_LOADING = "@@countries/SET_LOADING";
export const SET_ERROR = "@@countries/SET_ERROR";

const addUsers = (userList) => ({
  type: ADD_COUNTRIES,
  payload: userList,
});

const setLoading = { type: SET_LOADING };

const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const loadCountries =
  () =>
  (dispatch, _, { client, api }) => {
    dispatch(setLoading);
    client(api.ALL_COUNTRIES)
      .then(({ data }) => {
        dispatch(addUsers(data));
      })
      .catch((error) => dispatch(setError(error)));
  };
