<template>
  <div v-show="isVisible" class="lockscreen-mask">
    <div class="loading"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: mapGetters({
    isVisible: 'loading/isVisible',
  }),
};
</script>

<style lang="scss" scoped>

  .lockscreen-mask {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.6);
}

  .loading {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 48px;
    width: 48px;
    color: rgba(116, 114, 114, 0.2);
    display: inline-block;
    border: 5px solid;
    border-radius: 50%;
    border-right-color: #f47c48;
    animation: rotate 1s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

</style>
