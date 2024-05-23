import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";

import { useState, useEffect } from "react";

import style from "./App.module.css";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("user-contacts");

    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }

    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });

  const [find, setFind] = useState("");

  const visibleFilter = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(find.toLowerCase())
  );

  const addContact = (newTask) => {
    setContacts((prevTask) => {
      return [...prevTask, newTask];
    });
  };

  const deleteContact = (idTask) => {
    console.log(idTask);
    setContacts((prevTask) => {
      return prevTask.filter((item) => item.id !== idTask);
    });
  };

  useEffect(() => {
    window.localStorage.setItem("user-contacts", JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className={style.container}>
      <h1 className={style.title}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox find={find} onFind={setFind} />
      <ContactList contact={visibleFilter} onDelete={deleteContact} />
    </div>
  );
}

export default App;
