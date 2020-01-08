import types from './types';

export const state = {
  options: {
    message: '',
    type: '',
  },
  isVisible: false,
};

export const mutations = {
  [types.SHOW_NOTIFY](state, options) {
    state.options = options;
    state.isVisible = true;
  },
  [types.HIDE_NOTIFY](state) {
    setTimeout(() => {
      state.isVisible = false;
    }, 3000);
  },
};
