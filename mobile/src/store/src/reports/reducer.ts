import {createSlice} from '@reduxjs/toolkit';
import {
  loadLocations,
  loadViolationCategories,
  setAddress,
  setDescription,
  setFiles,
  setLocation,
  setNameSurname,
  setPhoneNumber,
  setViolations,
} from './actions';
import {getInitialState} from './initialState';

const initialState = getInitialState();

export const reportSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(setNameSurname, (state, {payload}) => {
        state.violation.fullName = payload;
      })
      .addCase(setLocation, (state, {payload}) => {
        state.violation.location = payload;
      })
      .addCase(setAddress, (state, {payload}) => {
        state.violation.address = payload;
      })
      .addCase(setPhoneNumber, (state, {payload}) => {
        state.violation.phoneNumber = payload;
      })
      .addCase(setFiles, (state, {payload}) => {
        state.violation.files = payload;
      })
      .addCase(setDescription, (state, {payload}) => {
        state.violation.desctiption = payload;
      })
      .addCase(loadViolationCategories.fulfilled, (state, action) => {
        state.violationCategories = action.payload;
      })
      .addCase(loadLocations.fulfilled, (state, action) => {
        state.locations = action.payload;
      })
      .addCase(setViolations.fulfilled, (state, action) => {
        state.violation = action.payload;
      });
  },
});

export const reportReducer = reportSlice.reducer;