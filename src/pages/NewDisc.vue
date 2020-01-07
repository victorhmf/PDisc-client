<template>
  <div>
    <disc-form @onSubmit="handleSubmit" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import DiscForm from '../components/DiscForm.vue';

export default {
  components: {
    DiscForm,
  },
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
    handleResponseError(error) {
      if (error.response.status === 422) {
        const { messages } = error.response.data.error;
        this.setValidationErrors(messages);
      } else {
        console.log(
          'Não poi possível realizar a operação no momento. Tente novamente mais tarde!',
        );
      }
    },
    ...mapActions({
      createDisc: 'discs/createDisc',
      setValidationErrors: 'discs/setValidationErrors',
      showLoading: 'loading/show',
      hideLoading: 'loading/hide',
    }),
  },
};
</script>
