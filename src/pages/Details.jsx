import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

import Button from "../UI/Button/Button";
import Info from "../components/Info/Info";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  getCountryInformation,
  getCountryLoadingInfo,
} from "../store/country/countrySelectors";
import { loadCountry } from "../store/country/countryActions";
import Loader from "../UI/Loader/Loader";
import Error from "../UI/Error/Error";

export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCountry(name));
  }, [dispatch, name]);

  const currentCountry = useSelector(getCountryInformation);
  const { isLoading, isError } = useSelector(getCountryLoadingInfo);

  const onBackBtnClickHandler = () => {
    navigate(-1);
  };

  return (
    <div>
      <Button onClick={onBackBtnClickHandler}>
        <IoArrowBack /> Back
      </Button>
      {isError && <Error>{isError.message}</Error>}
      {isLoading && <Loader />}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </div>
  );
};
