import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations'; // Імпорт тепер з operations!
import { ContactListItem } from './ContactListItem';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  
  // Беремо контакти з нового об'єкта стану (.items)
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  // Фільтруємо контакти перед рендером
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ul className={css.list}>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={() => dispatch(deleteContact(id))}
        />
      ))}
    </ul>
  );
};
