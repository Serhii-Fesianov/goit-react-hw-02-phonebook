export const ElementList = ({ contact, handleDeleteContacts }) => {
  return (
    <li>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <button type="button" onClick={() => handleDeleteContacts(contact.id)}>
        Delete
      </button>
    </li>
  );
};
