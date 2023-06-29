/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL } from '../../constants';

const BASE_URL = `${URL}/api/v1/heatlth_services`;

const initialState = {
  status: null,
};

export const createService = createAsyncThunk(
  'create/createService',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(BASE_URL, payload, {
        service: payload,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const createServiceSlice = createSlice({
  name: 'newService',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createService.pending, (state) => {
        const IsPending = state;
        IsPending.status = 'pending';
      })
      .addCase(createService.fulfilled, (state) => {
        const IsFulfilled = state;
        IsFulfilled.status = 'fulfilled';
      })
      .addCase(createService.rejected, (state) => {
        const IsRejected = state;
        IsRejected.status = 'rejected';
      });
  },
});

export default createServiceSlice.reducer;
