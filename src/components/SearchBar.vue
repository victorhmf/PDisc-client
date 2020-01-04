<template>
  <div class="searchbar-container">
    <input
      class="searchbar-input"
      type="text"
      placeholder="Busca por nome, ano de lançamento, gênero, gravadora, produção ..."
    />
    <button class="submit-search-btn" type="submit">
      <font-awesome-icon class="search-icon" icon="search" />
    </button>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>

  .searchbar-container {
    background: #f5f6f6;
    padding: 15px;
    display: flex;
    justify-content: center;
  }

  .searchbar-input {
    background: #fff;
    height: 44px;
    width: 700px;
    border-top-left-radius: 30px 30px;
    border-bottom-left-radius: 30px 30px;
    border: none;
    padding: 10px 20px;
    color: #929292;
    font-size: 16px;
    letter-spacing: 1px;

    &::placeholder{
      color: #ccbdbd;
    }
  }

  .submit-search-btn {
    height: 44px;
    width: 60px;
    border: none;
    background: #fff;
    border-top-right-radius: 30px 30px;
    border-bottom-right-radius: 30px 30px;
    cursor: pointer;
  }

  .search-icon {
    font-size: 18px;
    color: #6D6D6D;
  }

</style>
