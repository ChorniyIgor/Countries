import styles from "./Card.module.css";

const Card = ({ img, name, info = [], onClick }) => {
  return (
    <article className={styles.Wrapper} onClick={onClick}>
      <img className={styles.CardImage} src={img} alt={name} />
      <div className={styles.CardBody}>
        <h3 className={styles.CardTitle}>{name}</h3>
        <ul className={styles.CardList}>
          {info.map((el) => (
            <li className={styles.CardListItem} key={el.title}>
              <b>{el.title}:</b> {el.description}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Card;
