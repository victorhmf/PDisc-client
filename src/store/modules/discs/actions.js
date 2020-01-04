import api from '../../../services/api';
import types from './types';

const actions = {};

actions.getDiscs = ({ commit }, queryParams = {}) => {
  const { page = 1, searchParam = '' } = queryParams;
  api
    .get(`/discs?page=${page}&searchParam=${searchParam}`)
    .then(({ data }) => {
      commit(types.SET_ITEMS, data.discs);
      commit(types.SET_TOTAL_ITEMS, data.totalItems);
    });
};

export default actions;
