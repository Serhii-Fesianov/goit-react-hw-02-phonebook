export const ContactList = ({ contacts, handleDeleteContacts }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
            <button
              type="button"
              onClick={() => handleDeleteContacts(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
