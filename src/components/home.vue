<template>
  <div>Home<img src="../assets/svg/icon-dot.svg" alt=""></div>
</template>

<script>
export default {
  name: '',
  data () {
    return {}
  },
  created () {
    function fn () {
      const str = import(/* webpackChunkName: "lodash" */ '@/utils/server').then(module => {
        console.log(module, str)
      })
    }
    fn();
    console.log(this.$route.params.Id)
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/global.scss";
  
</style>
