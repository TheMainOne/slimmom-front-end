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
      return data;
    } catch (error) {
      toast.error(`Sign up failed. ${error.message}`, {
        theme: 'colored',
        position: 'top-center',
        autoClose: 3000,
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('api/auth/login', credentials);

      token.set(data.data.token);

      return data;
    } catch ({ message, response: { data, status } }) {
      toast.error(`Sign in failed. ${data?.message}!`, {
        theme: 'colored',
        position: 'top-center',
        autoClose: 3000,
      });

      return rejectWithValue({ message, data, status });
    }
  }
);

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

    try {
      if (!persistedToken) {
        throw new Error('no token');
      }

      token.set(persistedToken);

      const { data } = await axios.get('api/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.payload?.message);
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
