import Contact from "./Contact/Contact";

const ContactList = ({ contact, onDelete }) => {
  return (
    <>
      {contact.map((item) => {
        return (
          <Contact
            key={item.id}
            name={item.name}
            number={item.number}
            id={item.id}
            onDelete={onDelete}
          />
        );
      })}
    </>
  );
};

export default ContactList;
