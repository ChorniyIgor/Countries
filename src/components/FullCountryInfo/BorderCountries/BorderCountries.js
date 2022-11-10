import Loader from "../../../UI/Loader/Loader";
import {
  getBorderCountries,
  getBorderCountryLoadingInfo,
} from "../../../store/country/countrySelectors";
import styles from "./BorderCountries.module.css";
import { useSelector } from "react-redux";

const BorderCountries = ({ push }) => {
  const borderCountries = useSelector(getBorderCountries);
  const { isLoading: isBorderCountriesLoading } = useSelector(
    getBorderCountryLoadingInfo
  );

  return (
    <div className={styles.Meta}>
      {isBorderCountriesLoading && <Loader />}
      {!isBorderCountriesLoading && !borderCountries.length ? (
        <span>There is no border countries</span>
      ) : null}

      {!isBorderCountriesLoading && borderCountries.length ? (
        <>
          <b>Border Countries</b>
          <div className={styles.TagGroup}>
            {borderCountries !== undefined &&
              borderCountries.map((b) => (
                <span
                  className={styles.Tag}
                  key={b}
                  onClick={() => push(`/Countries/country/${b}`)}
                >
                  {b}
                </span>
              ))}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default BorderCountries;
