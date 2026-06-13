import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/operations';
import { ContactForm } from './components/contactForm/ContactForm';
import { ContactList } from './components/ContactList/ContactList';
import { Filter } from './components/filter/Filter';
import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(state => state.contacts);

  // Викликаємо завантаження контактів з MockAPI при першому рендері
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
      
      {/* Показуємо статус завантаження або помилку за наявності */}
      {isLoading && !error && <p style={{ fontWeight: 'bold' }}>Loading contacts...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      
      <ContactList />
    </div>
  );
};
