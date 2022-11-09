import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import Main from "./components/Main/Main";

import { HomePage } from "./pages/HomePage";
import { Details } from "./pages/Details";
import { NotFound } from "./pages/NotFound";
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
          <Route path="/country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
};

export default App;
