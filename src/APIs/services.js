import { URL } from '../constants';

const getServicesFromDB = async () => {
  const response = await fetch(`${URL}/api/v1/services`);
  const data = await response.json();
  return data;
};

export default getServicesFromDB;
