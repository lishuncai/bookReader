<template>
  <div id="container">
    <title-bar :if-title-and-menu-show="ifTitleAndMenuShow" />
    <div class="main" :style="themes">
      <div id="reader">
        <p class="title" :style="{fontSize: themes.fontSize*1.5 + 'px'}">a vue demo</p>
        <p class="content" :style="{fontSize:themes.fontSize + 'px'}">hello world</p>
      </div>
      <div class="mask" @click="toggleTitle" />
    </div>
    <menu-bar
      ref="menuBar"
      :if-title-and-menu-show="ifTitleAndMenuShow"
      :font-size-list="fontSizeList"
      :default-font-size="defaultFontSize"
      :themes-list="themesList"
      :defaultTheme="defaultTheme"
      @setFontSize="setFontSize"
      @setThemes="setThemes"
      @showContains="showContains"
    />
    <contains-page
     :ifShowContains="ifShowContains"
      @closeContains="closeContains"
     ></contains-page>
  </div>
</template>

<script>
// import titleBar from '@/components/titleBar.vue';
// import menuBar from '@/components/menuBar.vue';
import containsPage from "@/components/contains.vue";
import { setTimeout } from 'timers';
export default {
  name: "Book",
  components: {
    titleBar: () =>
      import(/* webpackChunkName: "Bar" */ "@/components/titleBar.vue"),
    menuBar: () =>
      import(/* webpackChunkName: "Bar" */ "@/components/menuBar.vue"),
    // titleBar,
    // menuBar
    containsPage
  },
  data() {
    return {
      ifTitleAndMenuShow: false,
      ifShowContains: false,
      fontSizeList: [
        { fontSize: 12 },
        { fontSize: 14 },
        { fontSize: 16 },
        { fontSize: 18 },
        { fontSize: 20 },
        { fontSize: 22 },
        { fontSize: 24 }
      ],
      defaultFontSize: 16,
      defaultTheme: 0,
      themesList: [
        {
          topic: "default",
          color: "#000",
          background: "#fff"
        },
        {
          topic: "eye",
          color: "#000",
          background: "#abc"
        },
        {
          topic: "dark",
          color: "#fff",
          background: "#333"
        }
      ],
      themes: {
        fontSize: "16px",
        background: "#fff",
        color: "#333"
      }
    };
  },

  created() {
    this.themes.fontSize = this.defaultFontSize;
  },
  beforeRouteLeave(to, from, next) {
    if (to.name == 'home') {
      this.ifShowContains = false;
      setTimeout(next, 200)
    }
  },
  methods: {
    toggleTitle() {
      this.ifTitleAndMenuShow = !this.ifTitleAndMenuShow;
      if (!this.ifTitleAndMenuShow) {
        this.$refs.menuBar.hiddenSetting();
      }
    },

    setFontSize(fontSize) {
      this.defaultFontSize = fontSize;
      this.themes.fontSize = fontSize;
    },
    setBackground(color) {
      this.themes.background = color;
    },
    setThemes(index) {
      this.defaultTheme = index;
      this.themes.background = this.themesList[index].background;
      this.themes.color = this.themesList[index].color;
    },
    ajustFontSize(size, n = 1) {
      let fontSize = window.innerWidth / 10;
      return (n * size * fontSize) / 37.5;
    },
    showContains() {
      this.ifTitleAndMenuShow = false;
      this.$refs.menuBar.hiddenSetting();
      this.ifShowContains = true;
    },
    closeContains() {
      this.ifShowContains = false;
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
  position: relative;
  height: 100%;
  @include center;
  .mask {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
  #reader {
    p {
      text-align: center;
      flex: 1;
    }
  }
}
</style>
