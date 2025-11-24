import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Input = ({ icon, name, type, value, onChange }) => {
  return (
    <div className="form_item">
      <FontAwesomeIcon icon={icon} />
      <input placeholder="" id={name} name={name} type={type} value={value} onChange={onChange} />
      <label htmlFor={name}>{name}</label>
    </div>
  );
};

export default Input;
