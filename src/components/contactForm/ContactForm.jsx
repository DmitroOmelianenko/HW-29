import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input type="text" name="name" value={name} onChange={handleChange} required className={css.input} />
      </label>
      <label className={css.label}>
        Number
        <input type="tel" name="number" value={number} onChange={handleChange} required className={css.input} />
      </label>
      <button type="submit" className={css.button}>Add contact</button>
    </form>
  );
};
