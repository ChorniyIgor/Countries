import Container from "../../UI/Container/Container";
import styles from "./Main.module.css";

const Main = ({ children }) => {
  return (
    <main className={styles.Wrapper}>
      <Container>{children}</Container>
    </main>
  );
};

export default Main;
