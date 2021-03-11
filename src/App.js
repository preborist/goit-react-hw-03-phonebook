import React, { Component } from 'react';
import InputPhonebookForm from './components/InputPhonebookForm';
import ContactsList from './components/ContactsList';
import Container from './components/Container';
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  addNewContact = (name, number) => {
    const newContact = {
      id: shortid(),
      name,
      number,
    };
    this.setState({
      contacts: [...this.state.contacts, newContact],
      name: '',
      number: '',
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newInputName = e.currentTarget.name.value;
    const newInputNumber = e.currentTarget.number.value;
    if (newInputName && newInputNumber) {
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === newInputName.toLowerCase(),
      )
        ? alert(`${newInputName} is already in contacts`)
        : this.addNewContact(newInputName, newInputNumber);
    } else {
      alert('Please enter a contact name or phone number!');
    }
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  handleDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  componentDidMount() {
    console.log('componentDidMount');
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    if (this.state.contacts !== prevState.contacts) {
      console.log('обновлилось');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  render() {
    const { contacts, name, number, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
      <Container>
        <h1>Phonebook</h1>
        <InputPhonebookForm
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          inputName={name}
          inputNumber={number}
        />
        <h2>Contacts</h2>
        {contacts.length !== 0 && (
          <ContactsList
            contacts={filteredContacts}
            onHandleDelete={this.handleDelete}
            inputFilterName={filter}
            changeFilter={this.changeFilter}
          />
        )}
      </Container>
    );
  }
}

export default App;
