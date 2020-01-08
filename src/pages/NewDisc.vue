<template>
  <div>
    <disc-form @onSubmit="handleSubmit" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import DiscForm from '../components/DiscForm.vue';
import responseErrorMixin from '../mixins/responseError';

export default {
  components: {
    DiscForm,
  },
  mixins: [responseErrorMixin],
  methods: {
    async handleSubmit(data) {
      try {
        this.showLoading();
        await this.createDisc(data);

        this.$router.push({ name: 'Home' });
      } catch (error) {
        this.handleResponseError(error);
      } finally {
        this.hideLoading();
      }
    },
    ...mapActions({
      createDisc: 'discs/createDisc',
      showLoading: 'loading/show',
      hideLoading: 'loading/hide',
    }),
  },
};
</script>
