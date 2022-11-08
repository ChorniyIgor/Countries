import { TOGGLE_THEME_MODE } from "./themeActions";

const initialState = {
  theme: "light",
};

export const themeReducer = (store = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME_MODE:
      return { ...store, theme: store.theme === "light" ? "dark" : "light" };

    default:
      return store;
  }
};
