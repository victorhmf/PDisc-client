import types from './types';

const state = {
  discs: {
    items: [],
    totalItems: 0,
  },
};

const mutations = {
  [types.SET_DISCS](state, { discs, totalItems }) {
    state.discs.items = discs;
    state.discs.totalItems = totalItems;
  },
};

export { state, mutations };
