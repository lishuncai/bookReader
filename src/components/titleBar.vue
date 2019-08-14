<template>
  <transition name="slide-down">
    <div
      v-show="ifTitleAndMenuShow"
      class="title-wrapper"
    >
      <div class="left">
        <i class="el-icon-arrow-left icon" />
      </div>
      <div class="right">
        <div class="icon-wrapper">
          <i>
            <img
              class="icon"
              src="../assets/svg/shop_car.svg"
            >
          </i>
          <i>
            <img
              class="icon icon-header"
              src="../assets/svg/icon-head.svg"
              alt
            >
          </i>
          <i>
            <img
              class="icon"
              src="../assets/svg/menu_learn.svg"
              alt
            >
          </i>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    ifTitleAndMenuShow: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/global.scss";
.title-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 101;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: srem(48);
  background-color: #ffffff;
  box-shadow: 0 0 srem(8) 0 #aaa;
  @include center;
  div {
    height: srem(20);
  }
  .left {
    flex: 0 0 srem(60);
  }
  .right {
    flex: 1;
    .icon-wrapper {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      i {
        flex: 0 0 srem(20);
        .icon-header {
          width: srem(18);
        }
      }
    }
  }
}
</style>
