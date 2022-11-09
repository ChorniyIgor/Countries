import styles from "./Error.module.css";

const Error = (props) => {
  return (
    <div className={styles.ErrorContainer}>
      <h3>{props.children}</h3>
    </div>
  );
};

export default Error;
