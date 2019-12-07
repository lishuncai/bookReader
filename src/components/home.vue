<template>
  <div>Home{{pageIndex}}</div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      pageIndex: ''
    }
  },
  created () {
    function fn () {
      const str = import(/* webpackChunkName: "lodash" */ '@/utils/server').then(module => {
        console.log(module, str)
      })
    }
    fn();
    this.pageIndex = this.$route.params.Id
  },
}
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/global.scss";
  
</style>
