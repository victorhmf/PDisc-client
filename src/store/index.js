import Vue from 'vue';
import Vuex from 'vuex';
import discs from './modules/discs';
import loading from './modules/loading';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    discs,
    loading,
  },
});
