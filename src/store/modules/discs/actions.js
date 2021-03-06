import api from '../../../services/api';
import types from './types';

const actions = {};

actions.getDiscs = ({ commit }, queryParams = {}) => {
  const { page = 1, searchParam = '' } = queryParams;
  return api
    .get(`/discs?page=${page}&searchParam=${searchParam}`)
    .then(({ data }) => {
      commit(types.SET_ITEMS, data.discs);
      commit(types.SET_TOTAL_ITEMS, data.totalItems);
    });
};

actions.createDisc = (context, data) => api.post('/discs', data);

actions.updateDisc = (context, { id, ...data }) => api.put(`/discs/${id}`, data);

actions.removeDisc = (context, id) => api.delete(`/discs/${id}`);

actions.setValidationErrors = ({ commit }, errors) => commit(types.SET_VALIDATION_ERRORS, errors);

actions.clearValidationErrors = ({ commit }) => commit(types.RESET_VALIDATION_ERRORS);

export default actions;
