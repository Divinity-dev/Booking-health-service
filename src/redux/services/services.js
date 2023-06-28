import { GET_SERVICES } from '../types';
import getServicesFromDB from '../../APIs/services';

const initialState = [];

export const getServices = () => async (dispatch) => {
  const services = await getServicesFromDB();
  dispatch({
    type: GET_SERVICES,
    payload: services,
  });
};

export const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVICES:
      return action.payload;

    default:
      return state;
  }
};
