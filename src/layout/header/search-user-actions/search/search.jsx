import { useState } from "react";
import Input from "../../../../components/input/input";
import searchIcon from "./../../../../../public/icons/search-icon.svg";
import "./search.css";
import MediaQuery from "react-responsive";

function Search(props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="search">
      <MediaQuery minWidth={1440}>
        <Input
          type="text"
          placeholder="Пошук"
          className={`search__input ${props.isFixed ? "fixed" : ""}`}
        />
        <button className="basic-button">
          <img
            className={`search__icon ${props.isFixed ? "fixed" : ""}`}
            src={searchIcon}
            alt=""
          />
        </button>
      </MediaQuery>

      <MediaQuery maxWidth={1439}>
        {isActive ? (
          <>
            <Input
              type="text"
              placeholder="Пошук"
              className={`search__input ${props.isFixed ? "fixed" : ""}`}
            />
            <button className="basic-button">
              <img
                className={`search__icon ${props.isFixed ? "fixed" : ""}`}
                src={searchIcon}
                alt=""
              />
            </button>
          </>
        ) : (
          <button className="mobile-button" onClick={() => setIsActive(true)}>
            <img
              className={`search__icon ${props.isFixed ? "fixed" : ""}`}
              src={searchIcon}
              alt=""
            />
          </button>
        )}
      </MediaQuery>
    </div>
  );
}

export default Search;
