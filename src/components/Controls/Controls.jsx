import Search from "../Search/Search";
import Select from "../../UI/Select/Select";
import styles from "./Controls.module.css";
import { useDispatch } from "react-redux";
import {
  changeFilter,
  setSearchString,
} from "../../store/filters/filterActions";
import { useSelector } from "react-redux";
import { getSelectValue } from "../../store/filters/filterSelectors";

const optionsMap = {
  Africa: { value: "Africa", label: "Africa" },
  America: { value: "Americas", label: "Americas" },
  Asia: { value: "Asia", label: "Asia" },
  Europe: { value: "Europe", label: "Europe" },
  Oceania: { value: "Oceania", label: "Oceania" },
};
const options = Object.values(optionsMap);

const Controls = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getSelectValue);

  const onSelectChangeHenpler = (evt) => {
    if (evt === null) {
      dispatch(changeFilter(""));
      return;
    }
    dispatch(changeFilter(evt));
  };

  const onSearchChangeHandler = (evt) => {
    dispatch(setSearchString(evt));
  };

  return (
    <div className={styles.Wrapper}>
      <Search setSearch={onSearchChangeHandler} />
      <Select
        options={options}
        placeholder="Filter by Region"
        isClearable={true}
        isSearchable={false}
        value={filterValue}
        onChange={onSelectChangeHenpler}
      />
    </div>
  );
};

export default Controls;
