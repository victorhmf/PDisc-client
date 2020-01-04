import types from './types';

export const state = {
  isVisible: false,
};

export const mutations = {
  [types.SHOW_LOADING](state) {
    state.isVisible = true;
  },
  [types.HIDE_LOADING](state) {
    state.isVisible = false;
  },
};
