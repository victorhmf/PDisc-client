<template>
  <form>
    <div class="input-container">
      <label :class="{ 'show-label': disc.cover }">Capa do Albúm</label>
      <input
        :class="{ 'input-error': errors.cover }"
        type="text"
        placeholder="Capa do Albúm"
        v-model="disc.cover"
      />
      <p :class="{'show-error' : errors.cover }">{{ errors.cover }}</p>
    </div>

    <div class="input-container">
      <label :class="{ 'show-label': disc.name }">Nome</label>
      <input
        :class="{ 'input-error': errors.name }"
        type="text"
        placeholder="Nome"
        v-model="disc.name"
      />
      <p :class="{'show-error' : errors.name }">{{ errors.name }}</p>
    </div>

    <div class="input-container">
      <label :class="{ 'show-label': disc.releaseYear }">Ano de Lançamento</label>
      <input
        :class="{ 'input-error': errors.releaseYear }"
        type="text"
        placeholder="Ano de Lançamento"
        v-model="disc.releaseYear"
      />
      <p :class="{'show-error' : errors.releaseYear }">{{ errors.releaseYear }}</p>
    </div>

    <div class="input-container">
      <label :class="{ 'show-label': disc.genre }">Gênero</label>
      <input
        :class="{ 'input-error': errors.genre }"
        type="text"
        placeholder="Gênero"
        v-model="disc.genre"
      />
      <p :class="{'show-error' : errors.genre }">{{ errors.genre }}</p>
    </div>

    <div class="input-container">
      <label :class="{ 'show-label': disc.recordCompany }">Gravadora</label>
      <input
        :class="{ 'input-error': errors.recordCompany }"
        type="text"
        placeholder="Gravadora"
        v-model="disc.recordCompany"
      />
      <p :class="{'show-error' : errors.recordCompany }">{{ errors.recordCompany }}</p>
    </div>

    <div class="input-container">
      <label :class="{ 'show-label': disc.production }">Produção</label>
      <input
        :class="{ 'input-error': errors.production }"
        type="text"
        placeholder="Produção"
        v-model="disc.production"
      />
      <p :class="{'show-error' : errors.production }">{{ errors.production }}</p>
    </div>

    <button @click="onSubmit">Salvar</button>
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  props: {
    disc: {
      type: Object,
      default() {
        return {
          cover: '',
          name: '',
          releaseYear: '',
          genre: '',
          recordCompany: '',
          production: '',
        };
      },
    },
  },
  computed: mapGetters({
    errors: 'discs/validationErrors',
  }),
  destroyed() {
    this.clearValidationErrors();
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.$emit('onSubmit', this.$props.disc);
    },
    ...mapActions({
      clearValidationErrors: 'discs/clearValidationErrors',
    }),
  },
};
</script>


<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 40px 80px 40px;

  .input-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    margin-bottom: 8px;

    label {
      font-size: 10px;
      color: #fff;
      padding: 3px 10px;
    }

    .show-label {
      color: #b5b5b5;
    }

    input {
      padding: 0 10px 10px 10px;
      border: none;
      border-bottom: 1px solid #b5b5b5;
      color: #929292;
      letter-spacing: 0.3px;
      font-size: 15px;

      &::placeholder {
        color: #b5b5b5;
      }
    }

    .input-error {
      border-bottom: 1px solid #e32249;
    }

    p {
      padding: 3px 10px;
      font-size: 10px;
      height: 18px;
    }

    .show-error {
      color: #e32249;
    }
  }

  button {
    margin-top: 25px;
    border: none;
    background: #f47c48;
    color: #fff;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    font-size: 15px;
    width: 100%;
    max-width: 400px;

    &:hover {
      color: #f47c48;
      background: #fff;
      border: 1px solid #f47c48;
    }
  }
}
</style>
