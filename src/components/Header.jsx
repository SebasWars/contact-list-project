import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUserPlus,
  faArrowDownAZ,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContactContext } from "./App";

const Header = () => {
  const { query, setQuery } = useContext(ContactContext);

  const searchContactHandler = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  return (
    <div className="header flex justify-between items-center">
      <div className="search_bar">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input
          onChange={searchContactHandler}
          value={query}
          className="searchInput"
          type="text"
        />
      </div>

      <div className="option_buttons">
        <button>
          <FontAwesomeIcon icon={faArrowDownAZ} />
        </button>
        <Link to="/AddNewContact">
          <button>
            <FontAwesomeIcon icon={faUserPlus} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
