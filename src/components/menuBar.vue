<template>
  <div>
    <transition name="slide-up">
      <div
        v-show="ifTitleAndMenuShow"
        class="footer"
        :class="{'hide-box-shadow': ifSettingShow}"
      >
        <div class="icon-wrapper">
          <i>
            <img
              class="icon"
              src="../assets/svg/menu_learn.svg"
            >
          </i>
          <i>
            <img
              class="icon"
              src="../assets/svg/sliders.svg"
            >
          </i>
          <i @click="toHome">
            <img
              class="icon"
              src="../assets/svg/icon-light.svg"
              alt
            >
          </i>
          <i @click="showSettingWrapper">
            <img
              class="icon"
              src="../assets/svg/A.svg"
              alt
            >
          </i>
        </div>
      </div>
    </transition>
    <transition name="slide-up">
      <div
        v-show="ifSettingShow"
        class="setting-wrapper"
      >
        <div class="setting-font-size">
          <div
            class="preview"
            :style="{'fontSize': fontSizeList[0].fontSize + 'px'}"
          >
            A
          </div>
          <div class="select-wrapper">
            <div
              v-for="(item, index) in fontSizeList"
              :key="index"
              class="select"
            >
              <div class="line" />
              <div class="point" />
              <div class="line" />
            </div>
          </div>
          <div
            class="preview"
            :style="{'fontSize': fontSizeList[fontSizeList.length - 1].fontSize + 'px'}"
          >
            A
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    ifTitleAndMenuShow: {
      type: Boolean,
      default: false
    },
    fontSizeList: Array,
    defaultFontSize: Number
  },
  data () {
    return {
      ifSettingShow: false
    };
  },
  methods: {
    showSettingWrapper () {
      this.ifSettingShow = true;
    },
    hiddenSetting () {
      this.ifSettingShow = false;
    },
    toHome() {
      this.$router.push('/home')
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/global.scss";
$box-shadow: 0 0 srem(8) 0 #aaa;
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 101;
  display: flex;
  @include center;
  width: 100%;
  height: srem(48);
  background-color: #ffffff;
  box-shadow: $box-shadow;
  &.hide-box-shadow {
    box-shadow: none;
  }
  .icon-wrapper {
    display: flex;
    width: 100%;
    i {
      flex: 1;
      display: flex;
      @include center;
    }
  }
}
.setting-wrapper {
  position: absolute;
  bottom: srem(48);
  left: 0;
  width: 100%;
  height: srem(60);
  background-color: #ffffff;
  box-shadow: $box-shadow;
  .setting-font-size  {
    display: flex;
    height: 100%;
    .preview {
      flex: 0 0 srem(50);
       @include center;
    }
    .select-wrapper {
      flex: 1;
      display: flex;
      .select {
        flex: 2;
        @include center;
        .line {
          flex: 1;
          height: 0;
          border-bottom: srem(1) solid #888;
        }
        .point {
          width: 0 0 0;
          height: srem(7);
          border-left: srem(1) solid #888;
        }
        &:first-child {
          .line:first-child {
            display: none;
          }
          flex: 1;
        }
        &:last-child {
          .line:last-child {
             display: none;
          }
          flex: 1;
        }
      }
    }
  }
}
</style>
