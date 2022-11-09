import BorderCountries from "./BorderCountries/BorderCountries";

import styles from "./Info.module.css";

const Info = (props) => {
  const {
    name,
    nativeName,
    flag,
    capital,
    population,
    region,
    subregion,
    topLevelDomain,
    currencies = [],
    languages = [],
    // borders = [],
    push,
  } = props;

  return (
    <section className={styles.Wrapper}>
      <img src={flag} alt={name} className={styles.InfoImage} />

      <div>
        <h1 className={styles.InfoTitle}>{name}</h1>
        <div className={styles.ListGroup}>
          <ul className={styles.List}>
            <li className={styles.ListItem}>
              <b>Native Name:</b> {nativeName}
            </li>
            <li className={styles.ListItem}>
              <b>Population</b> {population}
            </li>
            <li className={styles.ListItem}>
              <b>Region:</b> {region}
            </li>
            <li className={styles.ListItem}>
              <b>Sub Region:</b> {subregion}
            </li>
            <li className={styles.ListItem}>
              <b>Capital:</b> {capital}
            </li>
          </ul>

          <ul className={styles.List}>
            <li className={styles.ListItem}>
              <b>Top Level Domain</b>{" "}
              {topLevelDomain.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </li>
            <li className={styles.ListItem}>
              <b>Currency</b>{" "}
              {currencies.map((c) => (
                <span key={c.code}>{c.name} </span>
              ))}
            </li>
            <li className={styles.ListItem}>
              <b>Top Level Domain</b>{" "}
              {languages.map((l) => (
                <span key={l.name}>{l.name}</span>
              ))}
            </li>
          </ul>
        </div>
        <BorderCountries push={push} countryName={name} />
      </div>
    </section>
  );
};

export default Info;
