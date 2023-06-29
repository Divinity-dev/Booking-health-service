import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getServicesFromDB from '../../APIs/services';
import { URL } from '../../constants';

const Url = `${URL}/api/v1/heatlth_services`;

export const deleteService = createAsyncThunk(
  'delete/deleteService',
  async (serviceId, thunkAPI) => {
    try {
      const response = await axios.delete(`${Url}/${serviceId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const getAllServices = createAsyncThunk('Services', async () => getServicesFromDB());

const deleteServiceSlice = createSlice({
  name: 'delete',
  initialState: {
    services: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllServices.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(getAllServices.fulfilled, (state, action) => ({
        ...state,
        services: action.payload,
        loading: false,
        error: null,
      }))
      .addCase(getAllServices.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }))
      .addCase(deleteService.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(deleteService.fulfilled, (state, action) => {
        const filteredServices = state
          .services.filter((service) => service.id !== action.payload.id);
        return {
          ...state,
          services: filteredServices,
          loading: false,
          error: null,
        };
      })
      .addCase(deleteService.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default deleteServiceSlice.reducer;
