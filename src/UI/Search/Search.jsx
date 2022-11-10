import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import styles from "./Search.module.css";

const Input = styled.input.attrs({
  type: "search",
  placeholder: "Search for a country...",
})``;

const Search = ({ search, setSearch }) => {
  return (
    <label className={styles.InputContainer}>
      <IoSearch />
      <Input
        className={styles.Input}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </label>
  );
};

export default Search;
