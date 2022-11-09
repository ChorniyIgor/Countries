import styles from "./CountriesList.module.css";

const CountriesList = ({ children }) => {
  return <section className={styles.CountriesList}>{children}</section>;
};

export default CountriesList;
