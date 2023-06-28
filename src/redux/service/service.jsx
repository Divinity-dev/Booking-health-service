import { GET_SERVICES } from '../types';
import getCarsFromDB from '../../APIs/services';

const initialState = [];

export const getCars = () => async (dispatch) => {
  const services = await getCarsFromDB();
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
