<template>
  <div>
    <disc-form @onSubmit="handleSubmit" :disc="disc" />
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
        this.handleResponseError(error);
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
