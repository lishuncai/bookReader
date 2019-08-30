<template>
  <div class="view">
    <div class="title">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    title: String,
    Id: ''
  },
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
  },
  beforeRouteEnter  (to, from, next) {
    // 初始化时还没有this, 所以用回调访问组件 vm 实例
    // https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E7%BB%84%E4%BB%B6%E5%86%85%E7%9A%84%E5%AE%88%E5%8D%AB
    next(vm => {
      vm.pageIndex = to.params.Id
    })
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/global.scss";
  .view {
    width: 100%;
    height: 100%;
    @include center;
  }
  .title {
    text-align: center;
  }
</style>
