import styled from "styled-components";
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
    borders = [],
    push,
  } = props;

  return (
    <section className={styles.Wrapper}>
      <image src={flag} alt={name} className={styled.InfoImage} />

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
        <div className={styles.Meta}>
          <b>Border Countries</b>
          {!borders.length ? (
            <span>There is no border countries</span>
          ) : (
            <div className={styles.TagGroup}>
              {[].map((b) => (
                <span
                  className={styled.Tag}
                  key={b}
                  onClick={() => push(`/country/${b}`)}
                >
                  {b}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Info;
