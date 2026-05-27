import React from 'react';
import { ContactForm } from './components/contactForm/ContactForm';
import { ContactList } from './components/ContactList/ContactList';
import { Filter } from './components/filter/Filter';
import css from './App.module.css';

export const App = () => {
  return (
    <div 
    className={css.container}
      style={{
        padding: '20px',
        color: '#010101',
      }}
    >
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />

      <h2 className={css.subtitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};