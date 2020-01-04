import api from '../services/api';
import types from './types';

const actions = {};

actions.getDiscs = ({ commit }, page = 1, searchParam = '') => api
  .get(`/discs?page=${page}&searchParam=${searchParam}`)
  .then((response) => {
    commit(types.SET_DISCS, response.data);
  });

export default actions;
