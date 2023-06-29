/* eslint-disable import/extensions */
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './auth/auth';
import { servicesReducer } from './services/services';
import reservationReducer from './reservations/reservation';
import deleteServiceReducer from './deleteService/deleteService';

const token = localStorage.getItem('token');
const initialState = {
  auth: {
    token: token || null,
    isAuthenticated: !!token,
  },
};

const rootReducer = combineReducers({
  auth: authReducer,
  services: servicesReducer,
  delete: deleteServiceReducer,
  reservations: reservationReducer,
});

export default configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});
