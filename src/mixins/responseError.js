import { mapActions } from 'vuex';

export default {
  methods: {
    handleResponseError({ response }) {
      if (response && response.status === 422) {
        const { messages } = response.data.error;
        this.setValidationErrors(messages);
      } else {
        this.showNotify({
          type: 'error',
          message: 'Não poi possível realizar a operação no momento. Tente novamente mais tarde!',
        });
      }
    },
    ...mapActions({
      setValidationErrors: 'discs/setValidationErrors',
      showNotify: 'notify/show',
    }),
  },
};
