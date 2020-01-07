<template>
  <ul class="pagination-container">
    <li>
      <button class="pagination-button" @click="onPrevPage" :disabled="isFirstPage">
        Anterior
      </button>
    </li>
    <li>
      <button class="pagination-button" @click="onNextPage" :disabled="isLastPage">
        Próximo
      </button>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    currentPage: Number,
  },
  computed: {
    totalPages() {
      const itemsPerPage = 8;
      return Math.ceil(this.totalItems / itemsPerPage);
    },
    isLastPage() {
      return this.currentPage >= this.totalPages;
    },
    isFirstPage() {
      return this.currentPage === 1;
    },
    ...mapGetters({
      items: 'discs/items',
      totalItems: 'discs/totalItems',
    }),
  },
  methods: {
    onNextPage() {
      this.$emit('onNextPage');
    },
    onPrevPage() {
      this.$emit('onPrevPage');
    },
  },
};
</script>


<style lang="scss" scoped>
.pagination-container {
  display: flex;
  list-style: none;
  justify-content: space-between;
  width: 260px;
}

.pagination-button {
  color: #f47c48;
  background: #fff;
  border: 1px solid #f47c48;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 15px;
  width: 110px;

  &:hover {
    background: #f47c48;
    color: #fff;
  }

  &[disabled="disabled"] {
    opacity: 0.4;
  }
}
</style>
