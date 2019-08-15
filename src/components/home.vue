<template>
  <div>Home</div>
</template>

<script>
export default {
  name: '',
  data () {
    return {}
  },
  created () {
    function fn () {
      let str= import (/* webpackChunkName: "lodash" */ '@/utils/server').then(module => {
        console.log(module)
      })
    }
    fn()
  }
}
</script>

<style lang="scss" scoped>
</style>
