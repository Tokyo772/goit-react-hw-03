import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";

import { useState } from "react";

import style from "./App.module.css";

function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [find, setFind] = useState("");

  const visibleFilter = contacts.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(find.toLocaleLowerCase())
  );

  const addContact = () => {};
  return (
    <div className={style.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={setContacts} />
      <SearchBox find={find} onFind={setFind} />
      <ContactList contact={visibleFilter} />
    </div>
  );
}

export default App;
