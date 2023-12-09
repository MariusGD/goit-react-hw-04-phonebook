import React from 'react';
import style from './ContactList.module.css';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = ({ contacts, filter, onDeleteContact }) => {
  return (
    <ul className={style.contact_list}>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase().trim())
        )
        .map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onDeleteContact={onDeleteContact}
          />
        ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
