import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from '../components/App.module.css';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-4', name: 'John Smith', number: '145-965-985' },
    { id: 'id-3', name: 'Oscar White', number: '666-985-320' },
    { id: 'id-2', name: 'Alex Harrison', number: '741-962-526' },
    { id: 'id-1', name: 'Robert Myller', number: '400-913-995' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    document.title = 'HW-2 Phonebook';
  }, []);

  // Add contact
  const handleAddContact = contact => {
    const { name } = contact;

    // Verify contact
    if (contacts.find(contact => contact.name === name)) {
      Notify.failure(`${name} is already in contacts`);
      return;
    }

    setContacts(prevContacts => [...prevContacts, contact]);
  };

  // Delete contact
  const handleDeleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  // Add filter
  const handleFilter = value => {
    setFilter(value);
  };

  return (
    <div className={css.section}>
      <h2 className={css.title}>Phonebook</h2>
      <ContactForm onAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter onFilter={handleFilter} filter={filter} />
      <ContactList
        contacts={contacts}
        filter={filter}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
