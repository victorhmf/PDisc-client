<template>
  <div>
    <disc-form @onSubmit="handleSubmit" :disc=disc />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import DiscForm from '../components/DiscForm.vue';

export default {
  components: {
    DiscForm,
  },
  props: {
    disc: Object,
  },
  methods: {
    async handleSubmit(data) {
      try {
        this.showLoading();
        await this.updateDisc(data);

        this.$router.push({ name: 'Home' });
      } catch (error) {
        console.log(error.response);
      } finally {
        this.hideLoading();
      }
    },
    ...mapActions({
      updateDisc: 'discs/updateDisc',
      showLoading: 'loading/show',
      hideLoading: 'loading/hide',
    }),
  },
};
</script>

<style>

</style>
