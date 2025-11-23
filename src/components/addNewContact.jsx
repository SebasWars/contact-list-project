import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMobileScreen,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/addNewContactStyles.css";
import Input from "./utils/inputs.jsx";
import { Link } from "react-router-dom";

const AddNewContact = () => {
  return (
    <div className="addNewContac flex flex-col">
      <div className="contact_image flex justify-center items-center">
        <img
          src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
          alt=""
        />
      </div>

      <form action="" className="form_container flex flex-col items-center">
        <Input icon={faUser} nombre="Name" type="text" />
        <Input icon={faMobileScreen} nombre="Phone" type="number" />
        <Input icon={faEnvelope} nombre="Email" type="mail" />
        <Input icon={faLocationDot} nombre="Address" type="text" />
      </form>

      <div className="buttons flex justify-end">
        <Link to="/">
          <button className="discardBtn">Discard</button>
        </Link>
        <button className="saveBtn">Save</button>
      </div>
    </div>
  );
};

export default AddNewContact;
