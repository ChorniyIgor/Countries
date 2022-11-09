import { useNavigate } from "react-router-dom";
//import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

import Button from "../UI/Button/Button";
import Info from "../components/Info/Info";

export const Details = () => {
  // const { name } = useParams();
  const navigate = useNavigate();

  const currentCountry = null;

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </div>
  );
};
