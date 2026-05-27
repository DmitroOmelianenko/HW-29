import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <li className={css.item}>
      <span>{name}: {number}</span>
      <button type="button" onClick={onDelete} className={css.button}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};