import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import Main from "./components/Main/Main";

import { HomePage } from "./pages/HomePage";
import SingleCountryPage from "./pages/SingleCountryPage";
import NotFoundPage from "./pages/NotFoundPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadCountries } from "./store/countries/countriesActions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCountries());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/country/:name" element={<SingleCountryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Main>
    </>
  );
};

export default App;
