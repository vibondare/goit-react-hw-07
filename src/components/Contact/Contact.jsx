import css from "./Contact.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const {
    newContact: { name, number },
    id,
  } = contact;

  return (
    <div className={css.container}>
      <div className={css.textContainer}>
        <p className={css.text}>
          <FaUser className={css.icon} size="22" />
          {name}
        </p>
        <p className={css.text}>
          <BsFillTelephoneFill className={css.icon} size="22" />
          {number}
        </p>
      </div>
      <button
        className={css.button}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
}
