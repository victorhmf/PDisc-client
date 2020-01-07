import types from './types';

const state = {
  items: [],
  totalItems: 0,
  validationErrors: {},
};

const mutations = {
  [types.SET_ITEMS](state, items) {
    const sanitazedItems = items.map((item) => {
      delete item.created_at;
      delete item.updated_at;

      return item;
    });

    state.items = sanitazedItems;
  },
  [types.SET_TOTAL_ITEMS](state, totalItems) {
    state.totalItems = totalItems;
  },
  [types.SET_VALIDATION_ERRORS](state, errors) {
    state.validationErrors = errors;
  },
  [types.RESET_VALIDATION_ERRORS](state) {
    state.validationErrors = {};
  },
};

export { state, mutations };
