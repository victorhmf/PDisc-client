<template>
  <div class="header-container">
    <button @click="$router.push({name: 'Home'})">
      <img class="logo-header" alt="logo" src="../assets/images/logo.png" >
    </button>
  </div>
</template>

<style lang="scss" scoped>
  .header-container {
    padding: 0px 6%;

    button {
      cursor: pointer;
      border: none;
      background: #fff;
    }
  }

  .logo-header {
    height: 100px;
  }

</style>
