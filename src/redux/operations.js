import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://6a2d71772edd4cb330d12931.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(BASE_URL);
      if (!response.ok) throw new Error('Server error');
      return await response.json();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, number }),
      });
      if (!response.ok) throw new Error('Server error');
      return await response.json();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL}/${contactId}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Server error');
      return await response.json();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
