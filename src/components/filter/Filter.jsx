import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from '../../redux/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={e => dispatch(setStatusFilter(e.target.value))}
        className={css.input}
      />
    </label>
  );
};