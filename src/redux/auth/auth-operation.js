import axios from 'axios';
// import authActions from './auth-actions';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

axios.defaults.baseURL = '';

const registerBussiness = credentials => async (dispatch, getState) => {};

const registerConsultant = credentials => async (dispatch, getState) => {};

const login = credentials => async dispatch => {};

const logOut = () => async dispatch => {};

const getCurrentUser = () => async (dispatch, getState) => {};

export default {
  registerBussiness,
  registerConsultant,
  login,
  logOut,
  getCurrentUser,
};
