import types from './types';

const actions = {};

actions.show = ({ commit }, options) => {
  commit(types.SHOW_NOTIFY, options);
};

actions.hide = ({ commit }) => {
  commit(types.HIDE_NOTIFY);
};

export default actions;
