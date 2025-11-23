import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUserPlus,
  faArrowDownAZ,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header flex justify-between items-center">
      <div className="search_bar">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input className="searchInput" type="text" />
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
