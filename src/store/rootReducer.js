import { combineReducers } from "redux";
import { countriesReducer } from "./countries/countriesReducer";
import { countryReducer } from "./country/countryReducer";
import { filterReducer } from "./filters/filtersReducer";
import { themeReducer } from "./theme/themeReducer";

export const rootReducer = combineReducers({
  theme: themeReducer,
  countries: countriesReducer,
  country: countryReducer,
  filters: filterReducer,
});
