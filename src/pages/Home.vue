<template>
  <div class="home">
    <search-bar @onSearch="onSearch" />
    <section class="sec-my-collection">
      <div class="title-container">
        <h1 class="title">MINHA COLEÇÃO</h1>
        <button class="add-btn" @click="$router.push({name: 'NewDisc'})">
          <font-awesome-icon class="plus-icon" icon="plus" />Novo Disco
        </button>
      </div>
      <disc-list @onDelete="onDelete" />
      <p
        v-show="!totalItems && searchParam"
        class="error-message"
      >
        Não encontramos resultados para a sua busca.
      </p>
      <pagination-bar
        v-show="totalItems"
        :currentPage="currentPage"
        @onNextPage="onNextPage"
        @onPrevPage="onPrevPage"
      />
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
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
  }),
  computed: mapGetters({
    totalItems: 'discs/totalItems',
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
      } catch (error) {
        this.showNotify({
          type: 'error',
          message:
            'Não poi possível recuperar os dados no momento. Tente novamente mais tarde!',
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
          message:
            'Não poi possível realizar a operação no momento. Tente novamente mais tarde!',
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
.sec-my-collection {
  padding: 40px 7%;

  .title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;

    .title {
      border-left-width: 4px;
      border-left-style: solid;
      border-left-color: #f47c48;
      padding-left: 15px;
      color: #848282;
      font-size: 20px;
    }
    .add-btn {
      display: flex;
      justify-content: space-around;
      border: none;
      background: #fff;
      border: 1px solid #f47c48;
      color: #f47c48;
      padding: 10px;
      border-radius: 10px;
      cursor: pointer;
      font-size: 15px;
      width: 130px;

      &:hover {
        color: #fff;
        background: #f47c48;
      }
    }
  }
  .error-message {
    color: #909090;
    margin-bottom: 50px;
  }
}
</style>
