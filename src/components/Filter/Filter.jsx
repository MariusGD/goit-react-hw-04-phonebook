import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Styles from './Filter.module.css';

const Filter = ({ onFilter, filter }) => {
  const [inputValue, setInputValue] = useState(filter);

  const handleChange = e => {
    const value = e.target.value;
    setInputValue(value);
    onFilter(value);
  };

  return (
    <label className={Styles.filterLabel}>
      Find contacts by name
      <input
        className={Styles.filterInput}
        type="text"
        onChange={handleChange}
        value={inputValue}
      />
    </label>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

export default Filter;
