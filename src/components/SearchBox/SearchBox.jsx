import style from "./SearchBox.module.css";

import { useId } from "react";

const SearchBox = ({ find, onFind }) => {
  const findID = useId();
  return (
    <div className={style.container}>
      <label htmlFor="findID">Find contacts by name</label>
      <input
        id={findID}
        type="text"
        value={find}
        onChange={(e) => {
          onFind(e.target.value);
        }}
      />
    </div>
  );
};
export default SearchBox;
