<template>
  <div class="home">
    <search-bar/>
    <disc-list />
  </div>
</template>

<script>

import { mapActions } from 'vuex';
import SearchBar from '@/components/SearchBar.vue';
import DiscList from '@/components/DiscList.vue';

export default {
  components: {
    SearchBar,
    DiscList,
  },
  async mounted() {
    await this.loadData();
  },
  methods: {
    async loadData() {
      try {
        this.showLoading();
        await this.getDiscs();
      } catch (error) {
        console.log(error);
      } finally {
        this.hideLoading();
      }
    },
    ...mapActions({
      getDiscs: 'discs/getDiscs',
      showLoading: 'loading/show',
      hideLoading: 'loading/hide',
    }),
  },
};
</script>

<style>

</style>
