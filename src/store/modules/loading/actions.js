import types from './types';

const actions = {};

actions.show = ({ commit }) => {
  commit(types.SHOW_LOADING);
};

actions.hide = ({ commit }) => {
  commit(types.HIDE_LOADING);
};

export default actions;
