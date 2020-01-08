<template>
  <div class="home">
    <search-bar @onSearch="onSearch" />
    <disc-list @onDelete="onDelete" />
    <div class="btn-container">
      <button class="add-btn" @click="$router.push({name: 'NewDisc'})">
        <font-awesome-icon class="plus-icon" icon="plus" />
        Novo Disco
      </button>
      <pagination-bar
        v-show="dataLoaded"
        :currentPage="currentPage"
        @onNextPage="onNextPage"
        @onPrevPage="onPrevPage"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import SearchBar from '@/components/SearchBar.vue';
import DiscList from '@/components/DiscList.vue';
import PaginationBar from '@/components/PaginationBar.vue';

export default {
  components: {
    SearchBar,
    DiscList,
    PaginationBar,
  },
  data: () => ({
    currentPage: 1,
    searchParam: '',
    dataLoaded: false,
  }),
  async mounted() {
    await this.loadData();
  },
  methods: {
    async loadData() {
      try {
        this.showLoading();
        const { searchParam, currentPage: page } = this;
        await this.getDiscs({ page, searchParam });
        this.dataLoaded = true;
      } catch (error) {
        this.showNotify({
          type: 'error',
          message: 'Não poi possível recuperar os dados no momento. Tente novamente mais tarde!',
        });
      } finally {
        this.hideLoading();
      }
    },
    async onReload() {
      this.currentPage = 1;
      await this.loadData();
    },
    async onSearch(searchParam) {
      this.currentPage = 1;
      this.searchParam = searchParam;
      await this.loadData();
    },
    async onNextPage() {
      this.currentPage += 1;
      await this.loadData();
    },
    async onPrevPage() {
      this.currentPage -= 1;
      await this.loadData();
    },
    async onDelete(id) {
      try {
        await this.removeDisc(id);
        await this.onReload();
      } catch (error) {
        this.showNotify({
          type: 'error',
          message: 'Não poi possível realizar a operação no momento. Tente novamente mais tarde!',
        });
      }
    },
    ...mapActions({
      getDiscs: 'discs/getDiscs',
      showLoading: 'loading/show',
      hideLoading: 'loading/hide',
      removeDisc: 'discs/removeDisc',
      showNotify: 'notify/show',
    }),
  },
};
</script>

<style lang="scss" scoped>
.btn-container {
  padding: 40px 7%;
  display: flex;
  justify-content: space-between;
}
.add-btn {
  display: flex;
  justify-content: space-around;
  border: none;
  background: #f47c48;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 15px;
  width: 130px;

  &:hover {
    color: #f47c48;
    background: #fff;
    border: 1px solid #f47c48;
  }
}
</style>
