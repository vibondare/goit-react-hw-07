import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const visibleContacts = contacts.filter((contact) =>
    contact.newContact.name
      .toLowerCase()
      .includes(filter.toLowerCase().trim())
  );

  return (
    <ul className={css.container}>
      {visibleContacts &&
        visibleContacts.map((contact) => {
          return (
            <li key={contact.id} className={css.listItem}>
              <Contact contact={contact} />
            </li>
          );
        })}
    </ul>
  );
}
