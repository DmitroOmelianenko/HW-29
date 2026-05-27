import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

// 1. Об'єднуємо редюсери в один кореневий об'єкт
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

// 2. Налаштовуємо збереження для кореневого об'єкта
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'], // Зберігаємо тільки масив контактів
};

// 3. Створюємо персистований редюсер
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);