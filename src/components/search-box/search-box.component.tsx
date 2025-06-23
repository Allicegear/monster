import "./search-box.styles.css";
import { ChangeEventHandler } from "react";

type SearchBoxprops = {
  className: string;
  placeholder?: string;
  changeHandler: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({
  className,
  placeholder,
  changeHandler,
}: SearchBoxprops) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={changeHandler}
    />
  );
};

export default SearchBox;
