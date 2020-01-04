<template>
  <div id="app">
    <loading-indicator/>
    <app-header/>
    <router-view/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import LoadingIndicator from './components/LoadingIndicator.vue';

export default {
  components: {
    AppHeader,
    LoadingIndicator,
  },
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Varela+Round&display=swap');

  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
  }
  body{
    font-family: 'Varela Round', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
</style>
