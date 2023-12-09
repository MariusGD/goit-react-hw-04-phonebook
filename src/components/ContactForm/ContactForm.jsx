import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const [contact, setContact] = useState({
    name: '',
    number: '',
  });

  const handleSubmit = e => {
    e.preventDefault();

    const { name, number } = contact;
    const id = nanoid(5);

    onAddContact({ id, name, number });

    setContact({
      name: '',
      number: '',
    });
  };

  const handleChange = e => {
    const { name, value } = e.target;

    // Name verification
    if (name === 'name' && !/^[a-zA-Zа-яА-Я' -]+$/.test(value)) {
      alert(
        'Please enter only letters, apostrophe, dash, and spaces in the Name field.'
      );
      return;
    }

    // Phone number verification
    if (name === 'number' && !/^[0-9 +()-]+$/.test(value)) {
      alert(
        'Phone number must be digits and can contain spaces, dashes, parentheses, and can start with +'
      );
      return;
    }

    setContact(prevContact => ({ ...prevContact, [name]: value }));
  };

  const { name, number } = contact;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          className={styles.input}
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
