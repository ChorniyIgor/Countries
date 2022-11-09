import styles from "./Select.module.css";

import ReactSelect from "react-select";

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "var(--colors-ui-base)",
    color: "var(--colors-text)",
    borderRadius: "var(--radii)",
    padding: "0.25rem",
    border: "none",
    boxShadow: "var(--shadow)",
    height: "50px",
  }),
  option: (provided, state) => ({
    ...provided,
    cursor: "pointer",
    color: "var(--colors-text)",
    backgroundColor: state.isSelected
      ? "var(--colors-bg)"
      : "var(--colors-ui-base)",
  }),
};

const Select = (props) => {
  return (
    <ReactSelect
      options={props.options}
      styles={customStyles}
      className={styles.Select}
      {...props}
    />
  );
};

export default Select;
