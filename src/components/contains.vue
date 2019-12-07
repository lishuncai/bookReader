<template>
  <div class="contains">
    <transition name="show">
      <div class="mask" v-show="ifShowContains" @click="closeContains"></div>
    </transition>
    <transition name="fade">
      <div class="content" v-show="ifShowContains">
        <h2>目录</h2>
        <contains-item
          v-for="(item, index) in contents"
          :key="index"
          :title="item"
          :pageIndex="index"
          @closeContains="closeContains"
        ></contains-item>
      </div>
    </transition>
  </div>
</template>

<script>
import containsItem from "@/components/containsItem.vue";
export default {
  name: "contains",
  props: {
    ifShowContains: Boolean
  },
  data() {
    return {
      contents: [
        "第一章",
        "第二章",
        "第三章",
        "第四章",
        "第五章",
        "第六章",
        "第七章",
        "结尾"
      ]
    };
  },
  components: {
    containsItem
  },
  methods: {
    closeContains() {
      this.$emit('closeContains')
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/global.scss";
.contains {
  z-index: 999;
  width: 0;
  height: 100%;
  .content {
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    width:  80%;
    max-width: srem(320);
    height: 100%;
    background-color: #fff;
    overflow: hidden;
    h2 {
      font-size: srem(24);
      margin-left: srem(10);
    }
  }
  .mask {
    position: absolute;
    z-index: 998;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .4);
  }
}
</style>