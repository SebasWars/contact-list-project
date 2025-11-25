import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMobileScreen,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ContactContext } from "./App.jsx";
import { FETCH_DATA } from "./utils/fecth.js";

import "../styles/addNewContactStyles.css";
import Input from "./utils/inputs.jsx";

const POST_DATA =
  "https://playground.4geeks.com/contact/agendas/Sebas/contacts";

const AddNewContact = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  const { state, dispatch } = useContext(ContactContext);
  const contactToEdit = state.find((contact) => contact.id == id);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    if(contactToEdit){
      setFormData({
        name: contactToEdit.name,
        phone: contactToEdit.phone,
        email: contactToEdit.email,
        address: contactToEdit.address
      })
    }
  },[contactToEdit])

  const handleInput = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const ADD_CONTACT = async (contact) => {
    const created = await FETCH_DATA(POST_DATA, "POST", contact);
    dispatch({ type: "addContact", payload: created });
  };

  const EDIT_CONTACT = async () => {
  const updated = await FETCH_DATA(
    `https://playground.4geeks.com/contact/agendas/Sebas/contacts/${id}`,
    "PUT",
    formData
  );
  dispatch({ type: "editContact", payload: updated });
};

  const SAVE_NEW_CONTACT = async () => {
    const { name, phone, address, email } = formData;
    if (!name || !phone || !address || !email) return;
    if(contactToEdit){
      await EDIT_CONTACT();
      navigate("/");
      return;
    }
    await ADD_CONTACT(formData);
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
          {contactToEdit ? 'Edit': 'Save'}
        </button>
      </div>
    </div>
  );
};

export default AddNewContact;
