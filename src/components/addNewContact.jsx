import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMobileScreen,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/addNewContactStyles.css";
import Input from "./utils/inputs.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ContactContext } from "./App.jsx";

const AddNewContact = () => {
  const { state, dispatch } = useContext(ContactContext);
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleInput = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const SAVE_NEW_CONTACT = () => {
    const { name, phone, address, email } = formData;
    if (!name || !phone || !address || !email) return;
    dispatch({ type: "addContact", payload: formData });
    navigate("/");
  };

  return (
    <div className="addNewContac flex flex-col">
      <div className="contact_image flex justify-center items-center">
        <img
          src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
          alt=""
        />
      </div>

      <form action="" className="form_container flex flex-col items-center">
        <Input
          icon={faUser}
          name="name"
          type="text"
          value={formData.name}
          onChange={handleInput}
        />
        <Input
          icon={faMobileScreen}
          name="phone"
          type="number"
          value={formData.phone}
          onChange={handleInput}
        />
        <Input
          icon={faEnvelope}
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInput}
        />
        <Input
          icon={faLocationDot}
          name="address"
          type="text"
          value={formData.address}
          onChange={handleInput}
        />
      </form>

      <div className="buttons flex justify-end">
        <Link to="/">
          <button className="discardBtn">Discard</button>
        </Link>
        <button className="saveBtn" onClick={SAVE_NEW_CONTACT}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNewContact;
