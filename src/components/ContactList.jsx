import "../styles/taskList.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

import { useContext } from "react";
import { ContactContext } from "./App";
import { FETCH_DATA } from "./utils/fecth";
import { Link } from "react-router-dom";

const ContactList = () => {
  const { state, dispatch, query } = useContext(ContactContext);

  const REMOVE_CONTACT = async (id) => {
    await FETCH_DATA(
      `https://playground.4geeks.com/contact/agendas/Sebas/contacts/${id}`,
      "DELETE"
    );
    dispatch({ type: "removeContact", payload: id });
  };

  const filteredList = state.filter((contact) => contact.name.toLowerCase().includes(query))

  return (
    <div className="contact_list flex flex-col">
      {filteredList.map((contact, index) => {
        const { name, phone, email, address, id } = contact;
        return (
          <div
            key={`${index}-${name}`}
            id={index}
            className="contact_item flex justify-evenly items-center"
          >
            <div className="image">
              <img
                src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
                alt=""
              />
            </div>
            <div className="contact_info">
              <h1>{name}</h1>
              <h2>{phone}</h2>
              <p>{email}</p>
              <p>{address}</p>
            </div>
            <div className="action_buttons">
              <Link to={`/AddNewContact/${id}`}>
                <button>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </button>
              </Link>
              <button onClick={() => REMOVE_CONTACT(contact.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactList;
