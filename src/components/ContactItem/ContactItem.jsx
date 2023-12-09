import React from 'react';
import styles from './ContactItem.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ contact, onDeleteContact }) => {
  const { id, name, number } = contact;

  return (
    <div className={styles.item}>
      <span>{name}</span>
      <span> {number}</span>
      <button
        className={styles.button_delete}
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
