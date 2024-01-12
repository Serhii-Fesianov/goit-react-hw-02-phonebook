import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleDeleteContacts = id => {
    this.setState({
      contacts: this.state.contacts.filter(item => item.id !== id),
    });
  };

  handleChangeInput = (event, isName) => {
    isName
      ? this.setState({ name: event.target.value })
      : this.setState({ number: event.target.value });
  };

  handleAddContact = event => {
    event.preventDefault();

    if (this.state.name !== '' && this.state.number !== '') {
      const newObject = {
        name: this.state.name,
        id: nanoid(),
        number: this.state.number,
      };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newObject],
      }));
      this.setState({ name: '' });
      this.setState({ number: '' });
    }
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          handleChangeInput={this.handleChangeInput}
          handleAddContact={this.handleAddContact}
        />
        <h2>Contacts</h2>
        <Filter></Filter>
        <ContactList
          contacts={contacts}
          handleDeleteContacts={this.handleDeleteContacts}
        />
      </div>
    );
  }
}
