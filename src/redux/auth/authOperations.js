import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://slimmomproject.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('api/auth/signup', credentials);

      console.log({ data });
      return data;
    } catch (error) {
      toast.error('Sign up failed. Check your data!', {
        theme: 'colored',
        position: 'top-center',
        autoClose: 3000,
      });
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('api/auth/login', credentials);

    token.set(data.data.token);
    return data;
  } catch (error) {
    toast.error(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/api/auth/logout');
    token.unset();
  } catch (error) {
    toast.error(error.message);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      console.log('Токена нет, уходим из fetchCurrentUser');
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      toast.error(error.message);
    }
  }
);

const authOperations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};

export default authOperations;
