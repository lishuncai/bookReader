<template>
  <div id="container">
    <title-bar :if-title-and-menu-show="ifTitleAndMenuShow" />
    <div class="main">
      <div id="reader" />
      <div
        class="mask"
        @click="toggleTitle"
      />
    </div>
    <menu-bar
      ref="menuBar"
      :if-title-and-menu-show="ifTitleAndMenuShow"
      :font-size-list="fontSizeList"
      :default-font-size="defaultFontSize"
    />
  </div>
</template>

<script>
import titleBar from '@/components/titleBar.vue';
import menuBar from '@/components/menuBar.vue';
export default {
  name: 'Book',
  components: {
    titleBar,
    menuBar
  },
  data () {
    return {
      ifTitleAndMenuShow: false,
      fontSizeList: [
        { fontSize: 12 },
        { fontSize: 14 },
        { fontSize: 16 },
        { fontSize: 18 },
        { fontSize: 20 },
        { fontSize: 22 },
        { fontSize: 24 }
      ],
      defaultFontSize: 16
    };
  },
  methods: {
    toggleTitle () {
      this.ifTitleAndMenuShow = !this.ifTitleAndMenuShow;
      if (!this.ifTitleAndMenuShow) {
        this.$refs.menuBar.hiddenSetting();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/global.scss";
#container {
  width: 100%;
  height: 100%;
}

.main {
  height: 100%;
  .mask {
    height: 100%;
  }
}
</style>
