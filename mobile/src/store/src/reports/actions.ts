import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {AppThunkApiConfig} from '../../../hooks/storeHooks';
import {
  ArticleCategoriesDto,
  LocationsDto,
  ViolationCategoriesDto,
  ViolationsDto,
} from '../../../infrastructure/apiTypes';
import {arsApi} from '../../../infrastructure/arsApi';
import {directUpdateAction} from '../util/helpers';
import {FormFile, Violation} from './types';

export const setNameSurname = createAction(
  'reports/setNameSurname',
  directUpdateAction<string>(),
);

export const setLocation = createAction(
  'reports/setLocation',
  directUpdateAction<string>(),
);
export const setAddress = createAction(
  'reports/setAddress',
  directUpdateAction<string>(),
);

export const setPhoneNumber = createAction(
  'reports/setPhoneNumber',
  directUpdateAction<string>(),
);

export const setFiles = createAction(
  'reports/setFiles',
  directUpdateAction<FormFile[]>(),
);

export const setDescription = createAction(
  'reports/setDescription',
  directUpdateAction<string>(),
);

export const setViolationCategory = createAction(
  'reports/setViolationCategory',
  directUpdateAction<string>(),
);

export const unsetViolation = createAction(
  'reports/unsetViolationCategory',
  directUpdateAction<void>(),
);

export const loadArticleCategories = createAsyncThunk<
  ArticleCategoriesDto,
  void,
  AppThunkApiConfig
>('reports/loadArticleCategories', async (_, {extra}) => {
  console.log('action');

  const client = extra.apiClient;
  const api = arsApi(client);
  return await api.getArticleCategories();
});

export const loadLocations = createAsyncThunk<
  LocationsDto,
  void,
  AppThunkApiConfig
>('reports/loadLocations', async (_, {extra}) => {
  const client = extra.apiClient;
  const api = arsApi(client);
  return await api.getLocations();
});

export const loadViolationCategories = createAsyncThunk<
  ViolationCategoriesDto[],
  void,
  AppThunkApiConfig
>('reports/ViolationCategories', async (_, {extra}) => {
  const client = extra.apiClient;
  const api = arsApi(client);
  return await api.getViolationCategories();
});

export const sendViolation = createAsyncThunk<
  ViolationsDto | undefined,
  Violation,
  AppThunkApiConfig
>('reports/Violations', async (data, {extra}) => {
  const client = extra.apiClient;
  const api = arsApi(client);

  try {
    return await api.postViolation(data);
  } catch (error) {
    console.log('error: ', error);
  }
});