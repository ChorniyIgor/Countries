import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import Container from "../../UI/Container/Container";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleThemeMode } from "../../store/theme/themeActions";
import styles from "./Header.module.css";
import { clearFilters } from "../../store/filters/filterActions";

export const Header = () => {
  const { theme } = useSelector((store) => store.theme);
  const dispatch = useDispatch();

  const onModeSwitcherClickHandler = () => {
    dispatch(toggleThemeMode);
  };

  const onTitleClickhandler = () => {
    dispatch(clearFilters);
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header className={styles.HeaderEl}>
      <Container>
        <div className={styles.Wrapper}>
          <Link to="/" className={styles.Title} onClick={onTitleClickhandler}>
            Where is the world?
          </Link>
          <div
            className={styles.ModeSwitcher}
            onClick={onModeSwitcherClickHandler}
          >
            {theme === "light" ? (
              <IoMoonOutline size="14px" />
            ) : (
              <IoMoon size="14px" />
            )}{" "}
            <span style={{ marginLeft: "0.75rem" }}>{theme} Theme</span>
          </div>
        </div>
      </Container>
    </header>
  );
};
