<template>
  <div>
    <transition name="slide-fade">
      <div
        v-show="isVisible"
        :class="[options.type === 'success' ? 'success' : 'error', 'notify-container']"
      >
        <p>{{ options.message }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: mapGetters({
    isVisible: 'notify/isVisible',
    options: 'notify/options',
  }),
  updated() {
    this.hide();
  },
  methods: mapActions({
    hide: 'notify/hide',
  }),
};
</script>

<style lang="scss" scoped>
.notify-container {
  position: fixed;
  right: 0;
  padding: 20px;
  margin: 20px;
  border-radius: 5px;
  min-height: 60px;
  max-width: 350px;
  color: #fff;
}

.success {
  background: #92dc92;
}
.error {
  background: #e32249;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
 {
  transform: translateX(10px);
  opacity: 0;
}
</style>
