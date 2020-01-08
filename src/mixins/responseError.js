import { mapActions } from 'vuex';

export default {
  methods: {
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
      setValidationErrors: 'discs/setValidationErrors',
    }),
  },
};
