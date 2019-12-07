<template>
  <transition :name="animation">
    <keep-alive>
      <router-view />
    </keep-alive>
  </transition>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      animation: 'show'
    };
  }
};
</script>

<style lang="scss">
body {
  overflow: hidden;
}
</style>
