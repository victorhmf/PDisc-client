<template>
  <ul v-show="totalItems" class="disc-list">
    <li class="disc-item" v-for="item in items" :key="item.id">
      <div class="btn-container">
        <button @click="$router.push({name: 'EditDisc', params: { disc: item }})">
          <font-awesome-icon class="search-icon" icon="edit" />
        </button>
        <button @click="onDelete(item.id)">
          <font-awesome-icon class="search-icon" icon="trash" />
        </button>
      </div>
      <img :src="item.cover" :alt="item.name" />
      <div class="info-container">
        <h3 class="disc-name">{{ item.name }}</h3>
        <div>
          <label>Ano de Lançamento:</label>
          <span>{{ item.releaseYear }}</span>
        </div>
        <div>
          <label>Gênero:</label>
          <span>{{ item.genre }}</span>
        </div>
        <div>
          <label>Gravadora:</label>
          <span>{{ item.recordCompany }}</span>
        </div>
        <div>
          <label>Produção:</label>
          <span>{{ item.production }}</span>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */

export default {
  computed: mapGetters({
    items: 'discs/items',
    totalItems: 'discs/totalItems',
  }),
  methods: {
    async onDelete(id) {
      const confirmDelete = confirm('Voce deseja excluir esse disco?');
      if (confirmDelete) this.$emit('onDelete', id);
    },
  },
};
</script>


<style lang="scss" scoped>
.disc-list {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 2.5em;
  margin-bottom: 50px;
}

.disc-item {
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 1px 30px rgba(0, 0, 0, 0.4);

  .btn-container {
    left: 70%;
    padding: 8px;
    display: flex;
    justify-content: flex-end;

    button {
      color: #f47c48;
      background: #fff;
      font-size: 15px;
      margin-left: 8px;
      border: none;
      padding: 3px;
      cursor: pointer;

      &:hover {
        color: #f5b883;
      }
    }
  }

  img {
    display: block;
    border: 0;
    width: 100%;
    height: 260px;
  }

  .info-container {
    padding: 20px;
    height: 260px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .disc-name {
      text-align: center;
      color: #f47c48;
    }

    label {
      font-weight: bold;
    }

    span {
      color: grey;
    }
  }
}
</style>
