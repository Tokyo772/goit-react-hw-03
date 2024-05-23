import { FaUser, FaPhoneAlt } from "react-icons/fa";

import style from "./Contact.module.css";

const Contact = ({ number, name, id, onDelete }) => {
  const handleClick = () => {
    onDelete(id);
  };
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <p className={style.name}>
          <FaUser className={style.icon} /> {name}
        </p>
        <p className={style.number}>
          <FaPhoneAlt className={style.icon} /> {number}
        </p>
      </div>
      <button className={style.deleteButton} onClick={handleClick}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
