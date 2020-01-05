<template>
  <form>
    <div class="input-container">
      <label v-show="disc.cover"> Capa do Albúm </label>
      <input type="text" placeholder="Capa do Albúm" v-model="disc.cover">
    </div>

    <div class="input-container">
      <label v-show="disc.name"> Nome </label>
      <input type="text" placeholder="Nome" v-model="disc.name">
    </div>

    <div class="input-container">
      <label v-show="disc.releaseYear"> Ano de Lançamento </label>
      <input type="text" placeholder="Ano de Lançamento" v-model="disc.releaseYear">
    </div>

    <div class="input-container">
      <label v-show="disc.genre"> Gênero </label>
      <input type="text" placeholder="Gênero" v-model="disc.genre">
    </div>

    <div class="input-container">
      <label v-show="disc.recordCompany"> Gravadora </label>
      <input type="text" placeholder="Gravadora" v-model="disc.recordCompany">
    </div>

    <div class="input-container">
      <label v-show="disc.production"> Produção </label>
      <input type="text" placeholder="Produção" v-model="disc.production">
    </div>

    <button @click="onSubmit">
      Salvar
    </button>
  </form>
</template>

<script>
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
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.$emit('onSubmit', this.$props.disc);
    },
  },
};
</script>


<style lang="scss" scoped>
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;


    .input-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 400px;

      label{
        font-size: 14px;
        color: #ffa680;
        padding: 0 10px;
      }

      input{
        padding: 10px;
        margin-bottom: 25px;
        border: none;
        border-bottom: 1px solid #b5b5b5;
        color: #929292;
        letter-spacing: .3px;
        font-size: 15px;

        &::placeholder{
          color: #b5b5b5;
        }
      }
    }

    button{
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
