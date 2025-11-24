import "../styles/taskList.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

import { useContext } from "react";
import { ContactContext } from "./App";

const ContactList = () => {
  const { state, dispatch } = useContext(ContactContext);

  return (
    <div className="contact_list flex flex-col">
      {state.map((contact, index) => {
        const { name, phone, email, address } = contact;
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
              <button>
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
              <button
                onClick={() => {
                  dispatch({ type: "removeContact", payload: index });
                }}
              >
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
