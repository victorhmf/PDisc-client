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
    try {
      await this.getDiscs();
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    ...mapActions({
      getDiscs: 'discs/getDiscs',
    }),
  },
};
</script>

<style>

</style>
