import types from './types';

const state = {
  items: [],
  totalItems: 0,
  currentPage: 1,
};

const mutations = {
  [types.SET_ITEMS](state, items) {
    state.items = items;
  },
  [types.SET_TOTAL_ITEMS](state, totalItems) {
    state.totalItems = totalItems;
  },
};

export { state, mutations };
