import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.container}>
      {contacts &&
        contacts.map((contact) => {
          return (
            <li key={contact.id} className={css.listItem}>
              <Contact contact={contact} />
            </li>
          );
        })}
    </ul>
  );
}
