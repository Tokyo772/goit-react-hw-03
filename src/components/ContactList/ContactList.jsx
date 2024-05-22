import Contact from "./Contact/Contact";

const ContactList = ({ contact }) => {
  return (
    <>
      {contact.map((item) => {
        return <Contact key={item.id} name={item.name} number={item.number} />;
      })}
    </>
  );
};

export default ContactList;
