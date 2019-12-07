<template>
  <div>
    <transition name="slide-up">
      <div v-show="ifTitleAndMenuShow" class="footer" :class="{'hide-box-shadow': ifSettingShow}">
        <div class="icon-wrapper">
          <i @click="showContains">
            <img class="icon" src="../assets/svg/menu_learn.svg" />
          </i>
          <i @click="showSettingWrapper(1)">
            <img class="icon" src="../assets/svg/icon-light.svg" alt />
          </i>
          <i @click="showSettingWrapper(0)">
            <img class="icon" src="../assets/svg/A.svg" alt />
          </i>
        </div>
      </div>
    </transition>
    <transition name="slide-up">
      <div v-show="ifSettingShow" class="setting-wrapper">
        <div class="setting-font-size" v-show="tag === 0">
          <div class="preview" :style="{'fontSize': fontSizeList[0].fontSize + 'px'}">A</div>
          <div class="select-wrapper">
            <div
              v-for="(item, index) in fontSizeList"
              :key="index"
              class="select"
              @click="setFontSize(item.fontSize)"
            >
              <div class="line" />
              <div class="point-wrapper">
                <div class="point" v-show="defaultFontSize===item.fontSize">
                  <div class="center"></div>
                </div>
              </div>

              <div class="line" />
            </div>
          </div>
          <div
            class="preview"
            :style="{'fontSize': fontSizeList[fontSizeList.length - 1].fontSize + 'px'}"
          >A</div>
        </div>
        <div class="setting-themes" v-show="tag === 1">
          <div class="theme-wrapper" v-for="(item, index) in themesList" :key="index" @click="setThemes(index)">
            <div class="prev" :style="{background: item.background}" :class="{isWhite: item.background==='#fff'}"></div>
            <div class="topic" :class="{'selector': index === defaultTheme}">{{item.topic}}</div>
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
    defaultFontSize: Number,
    themesList: Array,
    defaultTheme: Number
  },
  data() {
    return {
      tag: null,
      ifSettingShow: false
    };
  },
  methods: {
    showSettingWrapper(tag) {
      this.tag = tag;
      this.ifSettingShow = true;
    },
    hiddenSetting() {
      this.ifSettingShow = false;
    },
    setFontSize(fontSize) {
      this.$emit("setFontSize", fontSize);
    },
    setThemes(index) {
      console.log('fdfdf')
      this.$emit('setThemes', index);
    },
    showContains() {
      this.$emit('showContains')
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
  .setting-font-size {
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
        .point-wrapper {
          position: relative;
          flex: 0 0 0;
          height: srem(7);
          border-left: 1px solid #888;
          .point {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: srem(16);
            height: srem(16);
            border: 1px solid #aaa;
            border-radius: 50%;
            background-color: #fff;
            @include center;
            .center {
              width: srem(8);
              height: srem(8);
              border-radius: 50%;
              background-color: #000;
            }
          }
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
.setting-themes {
  height: 100%;
  @include center;
  .theme-wrapper {
    flex: 1;
    .prev {
      box-sizing: border-box;
      margin: srem(4);
      height: srem(20);
      &.isWhite {
        border: 1px solid #eee;
      }
    }
    .topic {
      font-size: srem(12);
      text-align: center;
      color: #cccccc;
      &.selector {
        color: #333;
      }
    }
  }
}
</style>
