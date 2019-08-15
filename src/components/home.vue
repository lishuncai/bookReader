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
      const str = import(/* webpackChunkName: "lodash" */ '@/utils/server').then(module => {
        console.log(module, str)
      })
    }
    fn()
  }
}
</script>

<style lang="scss" scoped>
</style>
