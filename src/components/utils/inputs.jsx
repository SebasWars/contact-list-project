import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Input = ({ icon, nombre, type }) => {
  return (
    <div className="form_item">
      <FontAwesomeIcon icon={icon} />
      <input id={nombre} type={type} placeholder="" />
      <label htmlFor="{nombre}">{nombre}</label>
    </div>
  );
};

export default Input;
