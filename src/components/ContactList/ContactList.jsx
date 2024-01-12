import { ElementList } from 'components/ElementList/ElementList';

export const ContactList = ({ contacts, handleDeleteContacts }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <ElementList
            key={contact.id}
            contact={contact}
            handleDeleteContacts={handleDeleteContacts}
          />
        );
      })}
    </ul>
  );
};
